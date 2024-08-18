const sqlite3 = require('sqlite3');
const databaseFilepath = './EDHTinder.db';

function createDbConnection() {
    const db = new sqlite3.Database(databaseFilepath, (error) => {
        if (error) {
            return console.error(error.message);
        }
    });
    console.log("Database connection established...");
    return db;
}


function insertRow() {
    // TODO
    console.log('Inserting into DB');
}

module.exports = { createDbConnection, insertRow };