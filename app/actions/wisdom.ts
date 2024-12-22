"use server"
import client from "@/db"



export async function setWisdom(data : string , user : string){
    try {
        await client.wisdom.create({
            data:{
                data,
                createdBy:user,      
                
            }
        })
        return { success: true, message: "Data saved successfully!" };
    } catch (error) {
        console.log(error)
    }
   
}

export async function getWisdom(){
    try {
        const data = await client.wisdom.findMany()
        return data;
    } catch (error) {
        console.log(error)
    }
   
}

export async function getAWisdom(id:number){
    try {
        const data = await client.wisdom.findFirst({
            where:{
                id
            }
        })
        return data;
    } catch (error) {
        console.log(error)
    }
   
}


export async function addComment(data : string, id : number){
    try {
         await client.comment.create({
            data:{
                data,
                createdBy:"Anonymous",
                wisdomId: id
            }
        })
        return data;
    } catch (error) {
        console.log(error)
    }
   
}


export async function getComments(id : number){
      try {
        const data = await client.comment.findMany({
            where:{
                wisdomId:id
            }
        })

        console.log(data)
        return data

      } catch (error) {
        console.log(error)
      }
}


export async function addVote(id:number){
    try {
        await client.wisdom.update({
            where:{
                id
            },
            data:{
                votes:{
                    increment:1
                }
            }

        })
    } catch (error) {
        console.log( error)
    }
}