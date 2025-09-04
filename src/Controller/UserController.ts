import { Request, Response } from "express";
import UserService from "../Service/UserService";
import { User } from "../Model/User";

const userService = new UserService;

class UserController{
    getUsers(){};
    getUserById(){};
    addUser(){};
    deleteUser(){};
}

export default UserController;