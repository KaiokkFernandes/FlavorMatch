import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/createUserController";  
import { AuthUsersController } from "./controllers/authUsersController"; 
import { DetailUserController } from "./controllers/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { FoodPreferenceController } from "./controllers/foodPreferenceController";

const router = Router();

//Rota de criação de usuario    
router.post('/users', new CreateUserController().handle)

//Rota pra buscar todos os usuarios no banco 

//Rota de autenticação de usuario  
router.post('/session', new AuthUsersController().handle)  

//Rota de detalhes do usuario   
router.get('/me',  isAuthenticated, new DetailUserController().handle)

router.post('/foodPreference',  FoodPreferenceController.createFoodPreference)   
router.get('/foodPreference/:id', FoodPreferenceController.getFoodPreference)
router.put('/foodPreference/:id',  FoodPreferenceController.updateFoodPreference)
router.delete('/foodPreference/:id', FoodPreferenceController.deleteFoodPreference)    

export {router};
