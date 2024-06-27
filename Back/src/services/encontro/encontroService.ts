import {PrismaClient} from '@prisma/client' 

const prisma = new PrismaClient()   

export class newEncontro{
    async createWithPreferences(userId: string){
        const user = await prisma.user.findUnique({
            where:{ id: userId },
            include: { foodPreferences: true},
        });
        if(!user){
            throw new Error("Usuario não encontrado");
        }
        const foodPreference = user.foodPreferences[0];

        const local = await prisma.local.findFirst({
            where: { typeOfFood: foodPreference.name},
        });
        if(!local){
            throw new Error("Local não encontrado para a preferencias do usuario")
        }

        const encontro = await prisma.encontro.create({
            data:{
                date: new Date(),
                locationId: local.id,
                hostId: user.id,
            },
        });

        return encontro;
    }
}