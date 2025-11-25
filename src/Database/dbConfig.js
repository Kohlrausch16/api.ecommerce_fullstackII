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
            stockQtd REAL,
            supplierId VARCHAR(255),
            status INTEGER DEFAULT 1,
            createdAt TEXT NOT NULL,
            updatedAt TEXT NOT NULL
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
        CREATE TABLE IF NOT EXISTS product_order(
            id VARCHAR(255) PRIMARY KEY,
            totalOrder REAL NOT NULL,
            totalItems REAL NOT NULL,
            clientId VARCHAR(255),
            createdAt TEXT NOT NULL,
            updatedAt TEXT NOT NULL,
            FOREIGN KEY (clientId) REFERENCES client(id)
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
            orderId VARCHAR(255),
            createdAt TEXT NOT NULL,
            updatedAt TEXT NOT NULL,
            FOREIGN KEY (productId) REFERENCES product(id),
            FOREIGN KEY (cartId) REFERENCES cart(id),
            FOREIGN KEY (orderId) REFERENCES product_order(id)
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
            email TEXT,
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
/*
  db.run(`INSERT INTO user (id, userName, email, password, permissionList, createdAt, updatedAt)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
        ['01ac1ba7-312c-4c43-af5a-4f57876898fa', 'admin', 'admin@gmail.com', 'admin', 
        'get-cart-item-by-id,add-cart-item,put-cart-item,delete-cart-item,get-cart-by-id,get-clients,get-client-by-id,put-client,delete-client,get-products,get-product-by-id,add-product,put-product,patch-product,delete-product,get-monthly-order-report,get-most-sold-product,get-product-stock,get-supplier,get-by-id-supplier,add-supplier,update-supplier,delete-supplier',
        new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)]
    );

    const users = [
        ['f2c9e233-82ab-47d5-9f9a-9b89a6b3a501', 'maria', 'maria.souza@example.com', '1234', '', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['0d6a9f2b-2a22-4b92-bf60-c6c45d4c702a', 'joao', 'joao.silva@example.com', '1234', '', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['ea3c3a45-2b98-4a1a-8214-6e423b5bff02', 'ana', 'ana.lima@example.com', '1234', '', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['1a6a552c-1a53-46de-b4e3-81b36e55d7e9', 'carlos', 'carlos.pereira@example.com', '1234', '', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['2f9c9dc3-38d1-4e1e-a0d1-2d44e7a8a1d5', 'julia', 'julia.mendes@example.com', '1234', '', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['b9d6c22c-8a23-4e8f-b822-f9a6b5f4e6ad', 'pedro', 'pedro.oliveira@example.com', '1234', '', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['f06b9d56-996a-4e85-a9b8-23e5f1f2f642', 'lucas', 'lucas.alves@example.com', '1234', '', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['c3b8b7a9-bb6b-4d7b-b992-5b7f55cb38ad', 'amanda', 'amanda.rocha@example.com', '1234', '', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['3cda17b6-9e91-4a12-bc8a-857a8a1e37e4', 'fernando', 'fernando.santos@example.com', '1234', '', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['0b98e8f7-42b2-49fa-9e56-47a9dc4c5fa1', 'patricia', 'patricia.melo@example.com', '1234', '', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
    ];
    users.forEach(u => db.run(`INSERT INTO user (id, userName, email, password, permissionList, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?)`, [...u]));

    // ADDRESSES
    const addresses = [
        ['a1117a8f-86a9-4024-9158-0aa54f6ac001', 'Rua das Flores', '120', 'Centro', 'Curitiba', 'PR', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['a1117a8f-86a9-4024-9158-0aa54f6ac002', 'Av. Brasil', '45', 'Jardim América', 'São Paulo', 'SP', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['a1117a8f-86a9-4024-9158-0aa54f6ac003', 'Rua das Palmeiras', '233', 'Zona Norte', 'Porto Alegre', 'RS', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['a1117a8f-86a9-4024-9158-0aa54f6ac004', 'Rua Santo André', '55', 'Boa Vista', 'Recife', 'PE', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['a1117a8f-86a9-4024-9158-0aa54f6ac005', 'Av. Independência', '98', 'Centro', 'Belo Horizonte', 'MG', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['a1117a8f-86a9-4024-9158-0aa54f6ac006', 'Rua XV de Novembro', '77', 'Centro', 'Joinville', 'SC', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['a1117a8f-86a9-4024-9158-0aa54f6ac007', 'Rua das Laranjeiras', '29', 'Praia Grande', 'Fortaleza', 'CE', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['a1117a8f-86a9-4024-9158-0aa54f6ac008', 'Av. das Nações', '550', 'Asa Sul', 'Brasília', 'DF', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['a1117a8f-86a9-4024-9158-0aa54f6ac009', 'Rua Verde', '9', 'Centro', 'Florianópolis', 'SC', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['a1117a8f-86a9-4024-9158-0aa54f6ac010', 'Rua Azul', '182', 'Jardim Botânico', 'Rio de Janeiro', 'RJ', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
    ];
    addresses.forEach(a => db.run(`INSERT INTO client_adress (id, rua, numero, bairro, cidade, uf, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [...a]));

    // SUPPLIERS
    const suppliers = [
        ['e0c8b66a-2d48-4d45-aaf1-8de3b03cb001', 'Antiguidades Brasil', 'contato@antiguidadesbrasil.com', '(11) 99887-1234', '45.678.912/0001-01', 'a1117a8f-86a9-4024-9158-0aa54f6ac002', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['e0c8b66a-2d48-4d45-aaf1-8de3b03cb002', 'Vintage Sul', 'vendas@vintagesul.com', '(51) 98765-4321', '12.345.678/0001-22', 'a1117a8f-86a9-4024-9158-0aa54f6ac003', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['e0c8b66a-2d48-4d45-aaf1-8de3b03cb003', 'Móveis Clássicos Ltda', 'contato@moveisclassicos.com', '(31) 99123-4567', '55.321.999/0001-55', 'a1117a8f-86a9-4024-9158-0aa54f6ac005', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['e0c8b66a-2d48-4d45-aaf1-8de3b03cb004', 'Arte e Época', 'arte@arteepoca.com', '(21) 99812-7788', '33.222.111/0001-44', 'a1117a8f-86a9-4024-9158-0aa54f6ac010', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['e0c8b66a-2d48-4d45-aaf1-8de3b03cb005', 'Retrô Imports', 'import@retroimports.com', '(47) 99111-5544', '66.777.888/0001-99', 'a1117a8f-86a9-4024-9158-0aa54f6ac006', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['e0c8b66a-2d48-4d45-aaf1-8de3b03cb006', 'Casa do Passado', 'contato@casadopassado.com', '(85) 98777-0099', '77.555.111/0001-33', 'a1117a8f-86a9-4024-9158-0aa54f6ac007', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['e0c8b66a-2d48-4d45-aaf1-8de3b03cb007', 'Antique World', 'sales@antiqueworld.com', '(61) 98822-5544', '99.222.333/0001-88', 'a1117a8f-86a9-4024-9158-0aa54f6ac008', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['e0c8b66a-2d48-4d45-aaf1-8de3b03cb008', 'Relíquias do Tempo', 'reliquias@tempo.com', '(48) 99788-9911', '88.111.444/0001-00', 'a1117a8f-86a9-4024-9158-0aa54f6ac009', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['e0c8b66a-2d48-4d45-aaf1-8de3b03cb009', 'Classic Design', 'classic@design.com', '(19) 98899-2233', '44.333.666/0001-22', 'a1117a8f-86a9-4024-9158-0aa54f6ac001', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['e0c8b66a-2d48-4d45-aaf1-8de3b03cb010', 'Museu Vintage', 'museu@vintage.com', '(11) 99123-8877', '11.888.777/0001-55', 'a1117a8f-86a9-4024-9158-0aa54f6ac004', new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
    ];
    suppliers.forEach(s => db.run(`INSERT INTO supplier (id, name, email, phone, cnpj, adressId, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [...s]));

    // PRODUCTS
    const products = [
        ['p001', 'Mesa de jantar clássica', 2499.90, 75, 180, 90, 'Marrom', 'Mesa de madeira nobre estilo colonial', '1970', 5, 'e0c8b66a-2d48-4d45-aaf1-8de3b03cb003', 1, new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['p002', 'Relógio de parede antigo', 450.00, 60, 40, 10, 'Dourado', 'Relógio europeu do início do século XX', '1920', 12, 'e0c8b66a-2d48-4d45-aaf1-8de3b03cb001', 1, new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['p003', 'Cadeira Luís XV', 890.50, 100, 45, 45, 'Bege', 'Cadeira entalhada em madeira com estofado de veludo', '1890', 8, 'e0c8b66a-2d48-4d45-aaf1-8de3b03cb004', 1, new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['p004', 'Vitrola Philips', 1500.00, 35, 40, 40, 'Preta', 'Vitrola restaurada com detalhes originais', '1965', 3, 'e0c8b66a-2d48-4d45-aaf1-8de3b03cb002', 1, new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['p005', 'Armário art déco', 5300.00, 180, 90, 40, 'Nogal', 'Armário com design geométrico da década de 1930', '1933', 2, 'e0c8b66a-2d48-4d45-aaf1-8de3b03cb005', 1, new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['p006', 'Espelho veneziano', 2700.00, 120, 80, 5, 'Prata', 'Espelho com moldura detalhada e vidro original', '1915', 4, 'e0c8b66a-2d48-4d45-aaf1-8de3b03cb006', 1, new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['p007', 'Telefone de disco Bakelite', 680.00, 25, 20, 20, 'Preto', 'Telefone de mesa da década de 50 em ótimo estado', '1954', 6, 'e0c8b66a-2d48-4d45-aaf1-8de3b03cb009', 1, new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['p008', 'Cristaleira Vitoriana', 8900.00, 200, 120, 45, 'Cerejeira', 'Cristaleira com portas de vidro bisotado', '1880', 1, 'e0c8b66a-2d48-4d45-aaf1-8de3b03cb008', 1, new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['p009', 'Luminária Tiffany original', 4500.00, 60, 40, 40, 'Multicolorido', 'Luminária com cúpula de vitral feita à mão', '1910', 3, 'e0c8b66a-2d48-4d45-aaf1-8de3b03cb010', 1, new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
        ['p010', 'Baú de viagem Louis Vuitton', 12000.00, 55, 90, 50, 'Marrom', 'Baú de couro original com ferragens de bronze', '1905', 1, 'e0c8b66a-2d48-4d45-aaf1-8de3b03cb007', 1, new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)],
    ];
    products.forEach(p => db.run(`INSERT INTO product (id, name, price, height, width, length, color, description, year, stockQtd, supplierId, status, createdAt, updatedAt)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [...p]));

    // CARTS
    const carts = Array.from({ length: 10 }, (_, i) => [`c${i+1}`, (Math.random()*1000+100).toFixed(2), 1, new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)]);
    carts.forEach(c => db.run(`INSERT INTO cart (id, totalOrder, activeStatus, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?)`, [...c]));

    // ORDERS
    const orders = Array.from({ length: 10 }, (_, i) => [`o${i+1}`, (Math.random()*2000+500).toFixed(2), Math.floor(Math.random()*5)+1, new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)]);
    orders.forEach(o => db.run(`INSERT INTO product_order (id, totalOrder, totalItems, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?)`, [...o]));

    // CART ITEMS
    const cartItems = [
        ['ci001', 2, 4999.80, 1, 'p001', 'c1', 'o1'],
        ['ci002', 1, 450.00, 1, 'p002', 'c1', 'o2'],
        ['ci003', 4, 3562.00, 1, 'p003', 'c3', 'o3'],
        ['ci004', 1, 1500.00, 1, 'p004', 'c4', 'o4'],
        ['ci005', 1, 5300.00, 1, 'p005', 'c5', 'o5'],
        ['ci006', 2, 5400.00, 1, 'p006', 'c6', 'o6'],
        ['ci007', 3, 2040.00, 1, 'p007', 'c7', 'o7'],
        ['ci008', 1, 8900.00, 1, 'p008', 'c8', 'o8'],
        ['ci009', 2, 9000.00, 1, 'p009', 'c9', 'o9'],
        ['ci010', 1, 12000.00, 1, 'p010', 'c10', 'o10'],
    ];
    cartItems.forEach(ci => db.run(`INSERT INTO cart_item (id, productQtd, totalAmount, activeStatus, productId, cartId, orderId, createdAt, updatedAt)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, [...ci, new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)]));

    // CLIENTS
    const clients = [
        ['cl001', 'Maria', 'Souza', '123.456.789-00', '(11)99999-1234', 'maria@gmail.com', '1234', 1, 'a1117a8f-86a9-4024-9158-0aa54f6ac001', 'c1', 'f2c9e233-82ab-47d5-9f9a-9b89a6b3a501'],
        ['cl002', 'João', 'Silva', '987.654.321-00', '(21)98888-1111', 'joao@gmail.com', '1234', 1, 'a1117a8f-86a9-4024-9158-0aa54f6ac002', 'c2', '0d6a9f2b-2a22-4b92-bf60-c6c45d4c702a'],
        ['cl003', 'Ana', 'Lima', '111.222.333-44', '(41)97777-3333', 'ana@gmail.com', '1234', 1, 'a1117a8f-86a9-4024-9158-0aa54f6ac003', 'c3', 'ea3c3a45-2b98-4a1a-8214-6e423b5bff02'],
        ['cl004', 'Carlos', 'Pereira', '555.666.777-88', '(31)96666-2222', 'carlos@gmail.com', '1234', 1, 'a1117a8f-86a9-4024-9158-0aa54f6ac004', 'c4', '1a6a552c-1a53-46de-b4e3-81b36e55d7e9'],
        ['cl005', 'Júlia', 'Mendes', '333.444.555-66', '(51)95555-4444', 'julia@gmail.com', '1234', 1, 'a1117a8f-86a9-4024-9158-0aa54f6ac005', 'c5', '2f9c9dc3-38d1-4e1e-a0d1-2d44e7a8a1d5'],
        ['cl006', 'Pedro', 'Oliveira', '444.555.666-77', '(61)94444-5555', 'pedro@gmail.com', '1234', 1, 'a1117a8f-86a9-4024-9158-0aa54f6ac006', 'c6', 'b9d6c22c-8a23-4e8f-b822-f9a6b5f4e6ad'],
        ['cl007', 'Lucas', 'Alves', '222.333.444-55', '(71)93333-6666', 'lucas@gmail.com', '1234', 1, 'a1117a8f-86a9-4024-9158-0aa54f6ac007', 'c7', 'f06b9d56-996a-4e85-a9b8-23e5f1f2f642'],
        ['cl008', 'Amanda', 'Rocha', '888.999.000-11', '(85)92222-7777', 'amanda@gmail.com', '1234', 1, 'a1117a8f-86a9-4024-9158-0aa54f6ac008', 'c8', 'c3b8b7a9-bb6b-4d7b-b992-5b7f55cb38ad'],
        ['cl009', 'Fernando', 'Santos', '999.888.777-66', '(91)91111-8888', 'fernando@gmail.com', '1234', 1, 'a1117a8f-86a9-4024-9158-0aa54f6ac009', 'c9', '3cda17b6-9e91-4a12-bc8a-857a8a1e37e4'],
        ['cl010', 'Patrícia', 'Melo', '666.555.444-33', '(85)90000-9999', 'patricia@gmail.com', '1234', 1, 'a1117a8f-86a9-4024-9158-0aa54f6ac010', 'c10', '0b98e8f7-42b2-49fa-9e56-47a9dc4c5fa1'],
    ];
    clients.forEach(cl => db.run(`INSERT INTO client (id, firstName, lastName, cpf, phoneNumber, email, password, activeStatus, adressId, cartId, userId, createdAt, updatedAt)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [...cl, new Date().toISOString().replace('T', ' ').substring(0, 19), new Date().toISOString().replace('T', ' ').substring(0, 19)]));*/
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
}