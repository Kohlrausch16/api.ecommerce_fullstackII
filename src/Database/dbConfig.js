const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./ecommerceDB.db');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS user (
            id VARCHAR(255) PRIMARY KEY,
            userName TEXT NOT NULL,
            email TEXT NOT NULL,
            password TEXT NOT NULL,
            permissionList TEXT,
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
            color TEXT,
            description TEXT,
            year TEXT,
            status INTEGER DEFAULT 1,
            createdAt TEXT NOT NULL,
            updatedAt TEXT NOT NULL
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS cart_item (
            id VARCHAR(255) PRIMARY KEY,
            productQtd INTEGER NOT NULL,
            totalAmount REAL NOT NULL,
            activeStatus INTEGER DEFAULT 1,
            productId VARCHAR(255),
            cartId VARCHAR(255),
            createdAt TEXT NOT NULL,
            updatedAt TEXT NOT NULL,
            FOREIGN KEY (productId) REFERENCES product(id),
            FOREIGN KEY (cartId) REFERENCES cart(id)
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS cart (
            id VARCHAR(255) PRIMARY KEY,
            totalOrder REAL NOT NULL,
            activeStatus INTEGER DEFAULT 1,
            createdAt TEXT NOT NULL,
            updatedAt TEXT NOT NULL
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS supplier (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            phone VARCHAR(255) NOT NULL,
            cnpj VARCHAR(255) NOT NULL UNIQUE,
            adressId VARCHAR(255) NOT NULL,
            createdAt TEXT NOT NULL,
            updatedAt TEXT NOT NULL,
            FOREIGN KEY (adressId) REFERENCES client_adress(id)
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS client (
            id VARCHAR(255) PRIMARY KEY,
            firstName TEXT NOT NULL,
            lastName TEXT NOT NULL,
            cpf TEXT,
            phoneNumber TEXT,
            email TEXT
            password TEXT,
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

            // Senha: admin
    db.run('INSERT INTO user (id, userName, email, password, permissionList, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?)', ['01ac1ba7-312c-4c43-af5a-4f57876898fa', 'admin', 'admin@gmail.com', '$2a$10$3HtqHeOPfxJW8FflZ4Xr..CXHca8cF.uEB9iUoQq4Psk1DTQIaVJ.', 'get-cart-item-by-id,add-cart-item,put-cart-item,delete-cart-item,get-cart-by-id,get-clients,get-client-by-id,put-client,delete-client,get-products,get-product-by-id,add-product,put-product,patch-product,delete-product', new Date, new Date]);
});

function exec(query, params = []) {
    return new Promise((resolve, reject) => {
        db.all(query, params, (err, rows) => {
            if (err) {
                return reject(err);
            }
            resolve(rows);
        });
    });
}

module.exports = {
    exec
};