import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/createUserController";  
import { AuthUsersController } from "./controllers/authUsersController"; 
import { DetailUserController } from "./controllers/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { FoodPreferenceController } from "./controllers/foodPreferenceController";
import { CreateLocalController } from "./controllers/CreateLocalController";
import { EncontroController } from "./controllers/EncontroController";

const router = Router();

//Rota de criação de usuario    
router.post('/users', new CreateUserController().handle)

//Rota pra buscar todos os usuarios no banco 

//Rota de autenticação de usuario  
router.post('/session', new AuthUsersController().handle)  

//Rota de detalhes do usuario   
router.get('/me', new DetailUserController().handle)

router.post('/foodPreference',  FoodPreferenceController.createFoodPreference)   
router.get('/foodPreference/:id', FoodPreferenceController.getFoodPreference)
router.put('/foodPreference/:id',  FoodPreferenceController.updateFoodPreference)
router.delete('/foodPreference/:id', FoodPreferenceController.deleteFoodPreference)    


//Rota para criar um novo local 
router.post('/novoLocal', new CreateLocalController().handle)

//rota para criar um novo encontro para usuario de acordo com suas preferencias por tipo de comida 
router.post('/Encontro', new EncontroController().createWithPreference);

export {router};
