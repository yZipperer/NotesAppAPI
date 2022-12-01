const Note = require("./models/notes");

app.get("/notes", (req, res) => {
    fs.readFile("./testData/notes.json", "utf-8", (err, data) => {
        (err) ? console.log(err) : res.send(data);
    });
});

app.post("/notes", (req, res) => {
    const note = new Note(req.body);

    note.save()
    .then(() => {
        res.status(200).send(note);
    })
    .catch((err) => {
        res.status(500).send(err);
    });
});