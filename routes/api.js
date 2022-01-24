const express = require('express');
const router = express.Router();
const path = require('path');
const notes = require('../routes/notes.js')

router.use(notes);


module.exports = router;