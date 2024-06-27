import {Request, Response} from "express";  
import { newEncontro } from "../services/encontro/encontroService";

class EncontroController{
    async createWithPreference(req: Request, res:Response){
        const {userId} = req.params;

        const newEncontroService = new newEncontro();

        try{
            const encontro = await newEncontroService.createWithPreferences(userId);
            return res.json(encontro);
        }catch(error){
            return res.status(400).json({
                message: error.message,
        });

    }
}
}

export {EncontroController};