import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/createUserController";  
import { AuthUsersController } from "./controllers/authUsersController"; 
import { DetailUserController } from "./controllers/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

//Rota de criação de usuario    
router.post('/users', new CreateUserController().handle)
//Rota de autenticação de usuario  
router.post('/session', new AuthUsersController().handle)  

//Rota de detalhes do usuario   
router.get('/me',  isAuthenticated, new DetailUserController().handle )

export {router};
