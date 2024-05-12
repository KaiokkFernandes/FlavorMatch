import { Request, Response, } from "express";
import {CreateUserService} from '../services/createUserService';   

// Essa controller tem o objetivo de receber as requisições do usuario e mandar para o service que irá tratar a requisição da criação do usuairo.
class CreateUserController{
    async handle(req: Request, res: Response){
        const {name, email, password} = req.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({name, email, password});

        return res.json(user);

    }
}

export {CreateUserController}