import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export class CreateLoalService{
    async execute({name, address, type, typeOfFood}: {name: string; address: string; type: string; typeOfFood: string}){
        
        try{
        const newlocal = await prisma.local.create({
            data:{
                name,
                address,
                type,
                typeOfFood
            }
        })
        return newlocal;   
    }catch(err){
            throw new Error("Erro ao criar local")
     }
    }   
}
