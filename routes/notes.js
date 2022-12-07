const express = require("express");
const router = express.Router();

const Notes = require("../models/notes");

router.get("/notes", (req, res) => {
    const notes = Notes.find({})
    .then(() => {
        res.status(200).send(notes);
    })
    .catch((err) => {
        res.status(500).send(err);
    });
});

router.post("/notes", (req, res) => {
    const note = new Notes(req.body);

    note.save()
    .then(() => {
        res.status(200).send(note);
    })
    .catch((err) => {
        res.status(500).send(err);
    });
});

router.patch("/notes/:id", async (req, res) => {
    try{
        const note = await Notes.findById(req.params.id);
        
        if(!note){
            return res.status(404).send("Note not found");
        }
        
        note.content = req.body.content;

        await note.save();
        res.status(200).send(note);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.delete("/notes/:id", async (req, res) => {
    try{
        const note = await Notes.findByIdAndDelete(req.params.id);
        
        if(!note){
            return res.status(404).send("Note not found");
        }

        res.status(200).send("Note has been deleted");
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;