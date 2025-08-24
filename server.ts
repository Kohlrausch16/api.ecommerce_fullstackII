import express from "express";

const server = express();

server.use(express.urlencoded({extended: true}));
server.use(express.json);


server.listen(3000);