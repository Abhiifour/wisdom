"use client"

import { useRouter } from "next/navigation"
import { setWisdom } from "../actions/wisdom";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NewCard(){
    const [thought , setThought] = useState("")
    const [username , setUsername] = useState("")
    const router = useRouter();
    const handleForm = async (e:any) =>{
        e.preventDefault();
        await setWisdom(thought,username)
        router.push('/')
    }
    
    return(
        <motion.div className=" p-2 mt-8 w-[800px] m-auto sm:w-full sm:p-3 sm:mt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        >
           <div className="text-[20px] py-2 w-[100px] hover:bg-slate-300 flex gap-2  text-center items-center justify-center cursor-pointer rounded-lg mb-4 sm:text-[14px]" onClick={() => router.push("/")}>
                          <Image src={require('@/public/left.png')} className="w-[30px] h-[30px] sm:w-[20px] sm:h-[20px]" alt="back" />
                           <div>Back</div>
            </div>
            <div className="text-[24px] font-semibold py-4 sm:text-[18px] sm:py-2">
                Seek Wisdom ?
            </div>
            <form action={handleForm} className="flex flex-col gap-6 sm:gap-4">
                <div className="flex flex-col gap-2">
                <label htmlFor="thought" className="text-[16px] text-slate-500 sm:text-[14px]">
                    Ask 
                </label>
                <textarea name="thought" id="thought" placeholder="Why life is full of ups and downs ?" className="text-[16px] p-3 border border-border-color rounded-lg sm:text-[14px]" onChange={(e)=>setThought(e.target.value)}></textarea>
                </div>

                <div className="flex flex-col gap-2">
                <label htmlFor="username" className="text-[16px] text-slate-500 sm:text-[14px]">
                    Username 
                </label>
                <input type="text" id="username" placeholder="@dummyknows" className="text-[16px] p-3 border rounded-lg border-border-color sm:text-[14px]" onChange={(e)=>setUsername(e.target.value)} />
                </div>
                <button className="text-center p-3 text-[18px] rounded-lg border border-border-color bg-primary text-white mt-4 sm:text-[16px] sm:w-[100px] sm:px-0 sm:py-2" onClick={handleForm}>
                    Seek <span className="text-[12px]">📌</span>
                </button>
            </form>
        </motion.div>
    )
}