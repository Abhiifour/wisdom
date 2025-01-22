"use client"

import Comments from "@/components/Comment";
import { useRouter } from "next/navigation";
import { useWisdomState } from "../store/atoms/wisdomAtom";
import {  useEffect, useState } from "react";
import { addComment, getComments } from "../../actions/wisdom";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdOutlineArrowBackIos } from "react-icons/md";



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
        <motion.div className="py-6 w-[600px] m-auto sm:w-full sm:p-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        >
               <div className="text-[14px] py-2 w-[80px] text-slate-600 font-semibold hover:bg-slate-300 flex gap-2  text-center items-center justify-center cursor-pointer rounded-lg mb-4 sm:text-[12px]" onClick={() => router.push("/")}>
                       <MdOutlineArrowBackIos/>
                       
                                       <div>BACK</div>
                        </div>
             {/* Wisdom */}
            <div className="w-full p-6 border  rounded-2xl bg-white shadow-md flex flex-col gap-4 sm:gap-2">
            <div className="top flex justify-between">
            <div className="hover:text-slate-600 text-slate-600 text-[16px]  " >
                {wisdomState.data}
            <div> 
           
            </div>
            </div>
            </div>
            <div className="text-[12px] font-light text-gray-400 sm:text-[12px] leading-3">
                By {wisdomState.createdBy} | {data?.length} comments
            </div>
            <textarea name="thought" id="thought" value={comment} placeholder="I have gone through same ..." className="text-[14px] leading-4 p-3 font-light border border-slate-300 rounded-lg sm:text-[12px] sm:mt-2" onChange={(e) => setComment(e.target.value)}></textarea>
           
            </div>
           
          
            
            <div className="flex flex-col mt-6 sm:mt-2  ">
                { 
                    comment ? <button className="text-center px-1 py-2 text-[13px] rounded-xl border border-border-color bg-teal-500 text-white mt-4 w-[140px] sm:w-[120px] m:text-[12px] sm:p-1  sm:text-[12px]" onClick={addAComment}>
                    ADD COMMENT
                   </button> :   <button className="text-center px-1 py-2 text-[13px] rounded-xl border border-border-color bg-teal-600 text-white mt-4 w-[140px] sm:w-[120px]  sm:py-2 sm:px-2  sm:text-[12px]" >
                    ADD COMMENT
                    </button>
                }
         
            </div>

             {
                data ?  <div className="flex flex-col gap-2 pt-8 px-2 sm:p-1 sm:pt-6">
                {
                    
                    data?.map((item : any) =>  <Comments key={item.id} data={item.data} createdBy={item.createdBy}/>)
                }
             
             </div> : <div className="flex justify-center text-[16px] text-slate-500 pt-14 sm:text-[14px]">
             <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-800 fill-teal-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
             </svg>
             </div>
             }
            
        </motion.div>
    )
}

export const dynamic = 'force-dynamic'