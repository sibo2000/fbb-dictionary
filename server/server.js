const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

const Team = require('./models/teamModel');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/fbb-dictionary');

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.
app.get('/api', function (req, res) {
    Team.find({}, (err, teams) => {
        res.set('Content-Type', 'application/json');
        res.send(teams);
    })
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});