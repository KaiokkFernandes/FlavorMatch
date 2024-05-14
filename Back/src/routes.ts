import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/createUserController";  
import { AuthUsersController } from "./controllers/authUsersController"; 

const router = Router();

router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUsersController().handle)  


export {router};
