const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./ecommerceDB.db');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS user (
            id VARCHAR(255) PRIMARY KEY,
            userName TEXT NOT NULL,
            password TEXT NOT NULL,
            permissionList TEXT, -- JSON string
            createdAt TEXT NOT NULL,
            updatedAt TEXT NOT NULL
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS client_adress (
            id VARCHAR(255) PRIMARY KEY,
            rua TEXT NOT NULL,
            numero TEXT NOT NULL,
            bairro TEXT NOT NULL,
            cidade TEXT NOT NULL,
            uf TEXT NOT NULL,
            createdAt TEXT NOT NULL,
            updatedAt TEXT NOT NULL
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS product (
            id VARCHAR(255) PRIMARY KEY,
            name TEXT NOT NULL,
            price REAL NOT NULL,
            height REAL,
            width REAL,
            length REAL,
            color TEXT, -- JSON string
            description TEXT,
            status INTEGER DEFAULT 1,
            createdAt TEXT NOT NULL,
            updatedAt TEXT NOT NULL,
            userId VARCHAR(255),
            FOREIGN KEY (userId) REFERENCES user(id)
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS cart_item (
            id VARCHAR(255) PRIMARY KEY,
            productQtd INTEGER NOT NULL,
            totalAmount REAL NOT NULL,
            activeStatus INTEGER DEFAULT 1,
            productId VARCHAR(255),
            createdAt TEXT NOT NULL,
            updatedAt TEXT NOT NULL,
            FOREIGN KEY (productId) REFERENCES product(id)
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS cart (
            id VARCHAR(255) PRIMARY KEY,
            totalOrder REAL NOT NULL,
            activeStatus INTEGER DEFAULT 1,
            cartItemId VARCHAR(255),
            createdAt TEXT NOT NULL,
            updatedAt TEXT NOT NULL,
            FOREIGN KEY (cartItemId) REFERENCES cart_item(id)
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS client (
            id VARCHAR(255) PRIMARY KEY,
            firstName TEXT NOT NULL,
            lastName TEXT NOT NULL,
            cpf TEXT,
            phoneNumber TEXT,
            email TEXT,
            activeStatus INTEGER DEFAULT 1,
            adressId VARCHAR(255),
            cartId VARCHAR(255),
            userId VARCHAR(255),
            createdAt TEXT NOT NULL,
            updatedAt TEXT NOT NULL,
            FOREIGN KEY (adressId) REFERENCES client_adress(id),
            FOREIGN KEY (cartId) REFERENCES cart(id),
            FOREIGN KEY (userId) REFERENCES user(id)
        )
    `);
});

module.exports = db;