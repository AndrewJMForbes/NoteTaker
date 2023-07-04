const express = require('express');
const path = require('path');
const api = require('./routes/index');
const PORT =  process.env.PORT || 3001;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api',api);


// get method for index route
app.get('/',(req,res) =>
res.sendFile(path.join(__dirname, './public/index.html')));
console.log('WHELP')

// get method for /notes
app.get('/api/notes',(req,res) =>
res.sendFile(path.join(__dirname, './public/notes.html')));
console.log('api notes')

// // the wildcard has to be last 
app.get('/*',(req,res) =>
res.sendFile(path.join(__dirname, './public/index.html')));
console.log('get errthing')

// // app.post('/api/notes', (req, res) =>{ 
// // console.log(`${req.method} notes have been added`);
// })

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));