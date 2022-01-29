const express = require('express');
const path = require('path');
const fs = require('fs')
const db = require('./db/db.json')

const app = express();
const PORT = process.env.PORT || 3001;

const api = require('./routes/api');
const notes = require('./routes/notes')


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/', notes);
app.use('/api', api);

// // GET Route for anything else that user types in
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/notes.html'))
// );

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

