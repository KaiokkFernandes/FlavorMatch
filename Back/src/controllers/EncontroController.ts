import {Request, Response} from "express";  
import { newEncontro } from "../services/encontro/encontroService";

class EncontroController {
    async createWithPreference(req: Request, res: Response) {
        const { userId } = req.params;
        const newEncontroService = new newEncontro();

        try {
            const encontro = await newEncontroService.createWithPreferences(userId);
            return res.json(encontro);
        } catch (error: any) { // Aqui, você pode usar 'any' ou uma interface mais específica se disponível
            // Verificação de tipo segura
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            } else {
                return res.status(400).json({ message: 'Ocorreu um erro desconhecido.' });
            }
        }
    }
}

export { EncontroController };
