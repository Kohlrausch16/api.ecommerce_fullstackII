import express from "express";
import dotenv from "dotenv";
import adminRouter from "./src/routes/adminRoutes";

const server = express();
//dotenv.config();

//const port = process.env.PORT;

server.use(express.urlencoded({extended: true}));
server.use(express.json());

server.use(adminRouter);
server.listen(3000);