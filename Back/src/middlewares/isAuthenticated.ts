import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

// Middleware de autenticação de usuario paginas como detalhes de usuario só podem ser acessadas por usuarios autenticados  por isso o middleware isAuthenticated  
interface IPayload{
    sub: string;    
}

export function isAuthenticated(
    req: Request, 
    res: Response, 
    next: NextFunction  
){
    //Aqui eu recebo o token que e gerado no JWT quando usuario loga no sistema 
    const authToken = req.headers.authorization;
    if(!authToken){
        return res.status(401).end();        
    }
    
    const [, token] = authToken.split(" ");

   try{
      //Validação do token 
      const {sub} = verify(
        token,
        process.env.JWT_SECRET!  

      ) as IPayload;  
      
      
      //Recuperar o id do token e colocar dentro de umaa variavel user_id   dentro do request      

      res.locals.user_id = sub;  
      
           
      return next();    

   }catch(err){
       return res.status(401).end();
   }
}