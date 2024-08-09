const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, client!');
});

app.listen('8080', () => {
    console.log('Server listening on port 8080')
});
