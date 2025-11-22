import express from "express";
import dotenv from "dotenv";
import clientRouter from "./routes/ClientRoutes";
import cartItemRouter from "./routes/CartItemRoutes";
import cartRouter from "./routes/CartRoutes";
import authRoutes from "./routes/AuthenticationRoutes";
import productRouter from "./routes/productRoutes";
import userRouter from "./routes/userRoutes";
import cors from 'cors'
import supplierRouter from "./routes/SupplierRoutes";
import orderRouter from "./routes/OrderRoutes";

const server = express();
dotenv.config();

const port = process.env.PORT;

const corsOptions = {origin: 'http://localhost:5173'}

server.use(cors(corsOptions));
server.use(express.urlencoded({extended: true}));
server.use(express.json());

server.use(productRouter, userRouter, clientRouter, orderRouter, supplierRouter, cartItemRouter, cartRouter, authRoutes);
server.listen(port);