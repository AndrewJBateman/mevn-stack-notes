const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const { PORT, mongoUri } = require("./config/config");
const noteRoute = require('./routes/note.routes');

mongoose.Promise = global.Promise;
mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(
    () => {
      console.log("Database is connected");
    },
    err => {
      console.log("Failed to connect to the database" + err);
    }
  );

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/notes', noteRoute);

app.listen(PORT, function() {
  console.log("Server is running on Port:", PORT);
});
