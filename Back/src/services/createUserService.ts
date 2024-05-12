import prismaClient from "../prisma";
import { hash } from "bcryptjs";	    
//Criação de um usuário usando a biblioteca bcryptjs para criptografar a senha 
interface UserRequest{
    name:string;
    email:string;  
    password: string;
}

class CreateUserService{
    async execute({name, email, password}: UserRequest){

        // Verifica se o usuário já existe 
        if(!email){
            throw new Error("Email incorrect")
        }
        // criptografa a senha com hash nivel 8
        const passwordHash = await hash(password, 8);

        const userAlreadyExists = await prismaClient.user.findFirst({ 
            where:{
                email: email
            }
        })
        if(userAlreadyExists){
            throw new Error("User already exists")
        }
        const user = await prismaClient.user.create({
            data:{
                name : name,
                email: email, 
                password: passwordHash,
            },
            // Aqui eu estou selecionando os campos que eu quero que sejam retornados geralmente eu não retorno a senha pois ela já está cirptografada  
            select:{
                name: true, 
                id: true,   
                email: true,                
            }
        })

        return user;    
    }
}


export {CreateUserService}