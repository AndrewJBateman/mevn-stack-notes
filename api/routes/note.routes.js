const { Router } = require("express");
const router = Router();

// const NotesItem = require("../models/note.model");
const Note = require("../models/note.model");

router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    if (!notes) throw new Error("No note found");
    const sorted = notes.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    res.status(200).json(sorted);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/add", async (req, res) => {
  const newNote = new Note(req.body);
  try {
    const note = await newNote.save();
    if (!note) throw new Error("Error saving note item");
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/edit/:id", async (req, res) => {
  let id = req.params.id;
  Note.findById(id, (err, note) => {
    if (err) {
      res.json(err);
    }
    res.json(note);
  });
});

router.post("/update/:id", async (req, res) => {
  Note.findById(req.params.id, async (err, note) => {
    if (!note) res.status(404).send("note was not found");
    else {
      note.title = req.body.title;
      note.body = req.body.body;
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
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const removed = await Note.findByIdAndDelete(id);
    if (!removed) throw Error("Error deleting notes item");
    res.status(200).json(removed);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
