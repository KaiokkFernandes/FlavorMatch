import prismaClient from "../../prisma";


interface MessageRequest{
    fromUserId: string; 
    toUserId: string;
    message: string;
}


class ChatService{
    async sendMessage({
        fromUserId,
        toUserId,
        message
    }): Promise<MessageRequest>{
       const newMessage = await prismaClient.message.create({
              data:{
                  fromUserId,
                  toUserId,
                  message
              }
       });
       return newMessage;
    }
}


export {ChatService}