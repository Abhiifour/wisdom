"use client"

import Comments from "@/components/Comment";
import { useRouter } from "next/navigation";
import { useWisdomState } from "../store/atoms/wisdomAtom";
import {  useEffect, useState } from "react";
import { addComment, getComments } from "../actions/wisdom";
import Image from "next/image";


export default function Wisdom(){
    const [data, setData] = useState<any>()
    const [comment, setComment] = useState("")
    const wisdomState = useWisdomState((state) => state)    

    async function addAComment (){
       await addComment(comment, wisdomState.id)
       setComment("")
       getWisdomComments()
    }
   
    async function getWisdomComments (){
        const value = await getComments(wisdomState.id)
        setData(value)
        
     }

     useEffect(()=>{
        getWisdomComments();
        
    },[])
    
    const router = useRouter()
    return (
        <div className="py-6 w-[800px] m-auto sm:w-full sm:p-3">
            <div className="text-[20px] py-2 w-[100px] hover:bg-slate-300 flex gap-2  text-center items-center justify-center cursor-pointer rounded-lg mb-4 sm:text-[18px]" onClick={() => router.push("/")}>
                <Image src={require('@/public/left.png')} className="w-[30px] h-[30px] sm:w-[20px] sm:h-[20px]" alt="back" />
                <div>Back</div>
            </div>
             {/* Wisdom */}
             <div className="w-full p-6 border rounded-lg bg-white shadow-md flex flex-col gap-4 ">
            <div className="top flex justify-between">
            <div className="hover:text-slate-600 text-[18px]" >
                {wisdomState.data}
            <div> 
           
            </div>
            </div>
            </div>
            <div className="text-[14px] text-gray-500">
                @{wisdomState.createdBy}
            </div>
            <textarea name="thought" id="thought" value={comment} placeholder="I have gone through same ..." className="text-[16px] p-3 border border-border-color rounded-lg" onChange={(e) => setComment(e.target.value)}></textarea>
           
            </div>
           
          
            
            <div className="flex flex-col mt-6">
                {
                    comment ? <button className="text-center p-3 text-[16px] rounded-lg border border-border-color bg-primary text-white mt-4 w-[150px] sm:w-[120px] m:text-[14px] sm:p-1" onClick={addAComment}>
                    ADD COMMENT
                   </button> :   <button className="text-center p-3 text-[16px] rounded-lg border border-border-color bg-secondary text-white mt-4 w-[150px] sm:w-[120px] sm:text-[14px] sm:p-1" >
                    ADD COMMENT
                    </button>
                }
         
             </div>

             {
                data ?  <div className="flex flex-col gap-2 p-8 sm:p-1 sm:pt-4">
                {
                    
                    data?.map((item : any) =>  <Comments key={item.id} data={item.data} createdBy={item.createdBy}/>)
                }
             
             </div> : <div className="text-center text-[16px] text-slate-500 pt-14">Loading ...</div>
             }
            
        </div>
    )
}