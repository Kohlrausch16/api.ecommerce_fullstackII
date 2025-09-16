import express from "express";
import dotenv from "dotenv";
import clientRouter from "./src/routes/ClientRoutes";
import cartItemRouter from "./src/routes/CartItemRoutes";
import cartRouter from "./src/routes/CartRoutes";
import authRoutes from "./src/routes/AuthenticationRoutes";
import productRouter from "./src/routes/ProductRoutes";
import userRouter from "./src/routes/UserRoutes";

const server = express();
dotenv.config();

const port = process.env.PORT;

server.use(express.urlencoded({extended: true}));
server.use(express.json());

server.use(productRouter, userRouter, clientRouter, cartItemRouter, cartRouter, authRoutes);
server.listen(port);