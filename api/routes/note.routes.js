const { Router } = require("express");
const router = Router();

const note_controller = require("../controllers/note.controllers");

router.get("/", note_controller.get_notes);
router.post("/add", note_controller.post_note);
router.get("/edit/:id", note_controller.get_note);
router.post("/update/:id", note_controller.post_updated_note);
router.delete("/delete/:id", note_controller.delete_note);

module.exports = router;
