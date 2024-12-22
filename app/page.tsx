"use client"
import Card from "@/components/Card";
import { getWisdom } from "./actions/wisdom";


export default async function Home() {
    
  const data: any = await getWisdom()
 
  
  return (
   
   <div className="p-1 max-w-[800px] m-auto sm:w-full sm:p-2">
    <div className="flex flex-col gap-4 mt-4 ">
    {

    data?.sort((a: any, b: any) => b.votes - a.votes).map((item: any) => 
      <Card key={item.id} id={item.id} data={item.data} createdBy={item.createdBy} votes={item.votes} comments={item.comments}/>
    ) 
    
    }
   
    </div>
   </div>
 
  );
}
