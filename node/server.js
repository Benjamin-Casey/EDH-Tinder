const express = require('express');
const cors = require('cors');
const db = require('./database/database.js');
const bodyParser = require('body-parser');

const app = express();
db.createDbConnection();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, client!');
});

app.post('/saveCommander', bodyParser.json(), (req, res) => {
    // TODO: write to database
    const commanderData = req.body;
    res.send('POST request received');
    // console.log(commanderData);
    db.insertRow(commanderData);
});

app.listen('8080', () => {
    console.log('Server listening on port 8080')
});
