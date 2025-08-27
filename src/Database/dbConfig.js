const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./ecommerce_db.db');

// Documentação SQLite + NodeJS -> https://nodejs.org/api/sqlite.html

db.serialize(() => {
    db.run(`
        -- SQL query
        )
    `);
});

module.exports = db;