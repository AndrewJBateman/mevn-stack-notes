const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { PORT, mongoUri } = require("./config/config");
const noteRoute = require("./routes/note.routes");
const path = require("path");
const { env } = require("process");

app.use(cors());
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
app.use(express.json()); //Used to parse JSON bodies

mongoose.Promise = global.Promise;
mongoose
	.connect(mongoUri, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(
		() => {
			console.log("MongoDB database is connected");
		},
		(err) => {
			console.log("Failed to connect to the database" + err);
		}
	);

app.use("/notes", noteRoute);

// Handle production
if (process.env.NODE_ENV === "production") {
	// static folder
	app.use(express.static("client/dist"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
	});
}

app.listen(PORT, function () {
	console.log("Server is running on Port:", PORT);
});
