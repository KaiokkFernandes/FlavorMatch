import {Request, Response} from "express";  
import { FoodPreferenceService } from "../services/foodPreference";


export class FoodPreferenceController {
   static async createFoodPreference(req: Request, res: Response){
    const {name, userId} = req.body;    
    const foodPreference = await FoodPreferenceService.createFoodPreference(name, userId);
    return res.json(foodPreference);
   }

   static async getFoodPreference(req: Request, res: Response){
    const {id} = req.params;    
    const foodPreference = await FoodPreferenceService.getFoodPreference(id);
    return res.json(foodPreference);    

   }

   static async updateFoodPreference(req:Request, res: Response){
    const {id} = req.params;
    const foodPreference = await FoodPreferenceService.updateFoodPreference(id, req.body.name) 
    return res.json(foodPreference);
   }

   static async deleteFoodPreference (req: Request, res: Response){
    const {id} = req.params;
    const foodPreference = await FoodPreferenceService.deleteFoodPreference(id);
    return res.json(foodPreference);
   }

}

export default FoodPreferenceController;