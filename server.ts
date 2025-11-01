import express from "express";
import dotenv from "dotenv";
import clientRouter from "./src/routes/ClientRoutes";
import cartItemRouter from "./src/routes/CartItemRoutes";
import cartRouter from "./src/routes/CartRoutes";
import authRoutes from "./src/routes/AuthenticationRoutes";
import productRouter from "./src/routes/productRoutes";
import userRouter from "./src/routes/userRoutes";
import cors from 'cors'
import supplierRouter from "./src/routes/SupplierRoutes";

const server = express();
dotenv.config();

const port = process.env.PORT;

const corsOptions = {origin: 'http://localhost:5173'}

server.use(cors(corsOptions));
server.use(express.urlencoded({extended: true}));
server.use(express.json());

server.use(productRouter, userRouter, clientRouter, supplierRouter, cartItemRouter, cartRouter, authRoutes);
server.listen(port);