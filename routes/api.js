const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');



router.get('/notes', (req, res) => {
    let savedNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    res.json(savedNotes);
});


router.post("/notes", (req, res) => {
  let currentNote = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  let newNote = req.body;
  newNote.id = uuid;
  currentNote.push(newNote);
  
  fs.writeFile("./db/db.json", JSON.stringify(currentNote), (err) => {
    if (err) throw err;
    console.log("Note has been saved.");
    res.json(newNote);
  });
});



// router.post('/notes', (req, res) => {
//     const { title, text} = req.body;
//     const newNote = { title, text }
//     fs.readFile('./db/db.json', (err, data) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       const existingNotes = JSON.parse(data);
//       existingNotes.push(newNote);
  
//     });
//   });



module.exports = router;