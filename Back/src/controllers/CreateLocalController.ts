import {Request, Response} from "express";  
import {CreateLoalService} from '../services/local/createLocalService'

class CreateLocalController{
    async handle(req: Request, res: Response){
        const {name, address, type, typeOfFood} = req.body;

        const createLocalService = new CreateLoalService();
        const local = await createLocalService.execute({name, address, type, typeOfFood});
        return res.json(local); 
        
    }
}

export {CreateLocalController} 