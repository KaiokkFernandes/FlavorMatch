import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/createUserController";  
import { AuthUsersController } from "./controllers/authUsersController"; 
import { DetailUserController } from "./controllers/DetailUserController";

const router = Router();

//Rota de criação de usuario    
router.post('/users', new CreateUserController().handle)
//Rota de autenticação de usuario  
router.post('/session', new AuthUsersController().handle)  

router.get('/me', new DetailUserController().handle )

export {router};
