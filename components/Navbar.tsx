"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {motion} from 'framer-motion'

export default function Navbar(){
    const router = useRouter()
    return (
        <motion.div className="flex items-center justify-between mt-4 px-4 py-2  border rounded-lg bg-white shadow-lg w-[800px] m-auto sm:w-[98%] sm:m-auto sm:mt-2 sm:p-2"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.1 }}
        >
           
            <div className="text-[32px] flex justify-center items-center">
            <Image src={require('@/public/Wisdom.png')} className="w-[200px] h-[60px] sm:w-[150px] sm:h-[50px]" alt="heart" />
            </div>
            <div className="px-4 py-2 rounded-lg bg-primary  text-white cursor-pointer hover:bg-secondary sm:text-sm sm:py-1 sm:rounded-md " onClick={() => router.push('/new')}>
                Create <span className="sm:text-xs">✢</span>
            </div>
            
        </motion.div>
        
    )
}