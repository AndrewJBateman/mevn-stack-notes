const Note = require("../models/note.model");

// display notes using GET
exports.get_notes = async (req, res) => {
	try {
		const notes = await Note.find();
		if (!notes) throw new Error("No notes found");
		const time_order = notes.sort((a, b) => {
			return new Date(b.date).getTime() - new Date(a.date).getTime();
		});
		res.status(200).json(time_order);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

// add new note to database using POST
exports.post_note = async (req, res) => {
	const newNote = new Note(req.body);
	try {
		const note = await newNote.save();
		if (!note) throw new Error("Error saving note item");
		res.status(200).json(note);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// display updated note using GET
exports.get_note = async (req, res) => {
	let id = req.params.id;
	Note.findById(id, (err, note) => {
		if (err) {
			res.json(err);
		}
		res.json(note);
	});
};

// save updated note to database using POST
exports.post_updated_note = async (req, res) => {
	Note.findById(req.params.id, async (err, note) => {
		if (!note) res.status(404).send("note was not found");
		else {
			note.title = req.body.title;
			note.body = req.body.body;
			note.date = Date.now();
			note
				.save()
				.then(() => {
					res.json("Update complete");
				})
				.catch(() => {
					res.status(400).send("unable to update the database");
				});
		}
	});
};

// delete note using DELETE
exports.delete_note = async (req, res) => {
	const { id } = req.params;
	Note.findByIdAndDelete(id)
		.then((result) => {
			res.status(200).json([]);
		})
		.catch((error) => console.log(error));
};
