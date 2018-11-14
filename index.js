const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const User = require('./db/models').User;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());

app.get('/api/users', (req, res) => {
  User.findAll().then((users) => res.send(users));
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(process.env.PORT || 5000);
