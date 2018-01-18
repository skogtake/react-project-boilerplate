const express = require('express');
const app = express();

app.use('/', express.static('public'));

let notes = [
    {
        id: 1,
        title: 'note 1',
        text: 'some note',
    },
    {
        id: 2,
        title: 'note 2',
        text: 'some note again',
    },
    {
        id: 3,
        title: 'note 3',
        text: 'some note again and again',
    },
];

app.get('/notes', (req, res) => {
    console.log('get notes');
    res.json(notes);
});

app.get('/notes/:id', (req, res) => {
    console.log('get note', req.params.id);
    res.json(notes[req.params.id - 1]);
});


app.listen(process.env.PORT || 3000);
