import express from "express";
import dotenv from "dotenv";
import productRouter from "./src/routes/ProductRoutes";
import clientRouter from "./src/routes/ClientRoutes";
import cartItemRouter from "./src/routes/CartItemRoutes";
import cartRouter from "./src/routes/CartRoutes";

const server = express();
dotenv.config();

const port = process.env.PORT;

server.use(express.urlencoded({extended: true}));
server.use(express.json());

server.use(productRouter, clientRouter, cartItemRouter, cartRouter);
server.listen(port);