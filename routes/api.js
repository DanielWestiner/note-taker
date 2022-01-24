const express = require('express');
const router = express.Router();
const path = require('path');
const notes = require('../routes/notes.js')
const fs = require('fs');

router.use(notes);

const savedNotes = require('../db/db.json')

router.get('/notes', (req, res) => {
    res.json(savedNotes);
});

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./db/db.json"));
});

router.post("/notes", (req, res) => {
  let currentNote = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  let newNote = req.body;
  currentNote.push(newNote);
  

  fs.writeFile("./db/db.json", JSON.stringify(currentNote), (err) => {
    if (err) throw err;
    console.log("Note has been saved.");
    res.json(currentNote);
  });
});



router.post('/notes', (req, res) => {
    const { title, text} = req.body;
    const newNote = { title, text }
    fs.readFile('./db/db.json', (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      const existingNotes = JSON.parse(data);
      existingNotes.push(newNote);
  
    });
  });

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})



module.exports = router;