const express = require('express');
const app = express();
const {libri} = require('./libri');

app.use(express.json());
app.get('/G3T', (req, res) =>{
    res.status(200).json(libri);
})

app.get('/G3T/:id', (req, res) =>{
    const {id} = req.params
    const book = libri.find((book) => book.id === id)
    res.json(book);
})

app.listen(3000);