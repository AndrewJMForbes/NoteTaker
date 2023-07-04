const notes = require('express').Router();

const { readFromFile, writeToFile, readAndAppend } = require('../helper/fsUtils');


notes.get('/', (req, res) => {
  console.info(`${req.method} confirmed`)
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});

notes.post('/', (req, res) => {

const { title, text } = req.body;

if(title && text){

  const newNote = {
    title,
    text,
  }

  readAndAppend(newNote, './db/db.json')
      res.json(newNote)
    } else {
      res.status(500).json('Error in posting note');
    }
    });

    module.exports = notes;