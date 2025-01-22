"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from 'framer-motion'
import { GrAdd } from "react-icons/gr";

export default function Navbar() {
    const router = useRouter()
    return (
        <div className="flex items-center justify-between  px-4  py-2 bg-white rounded-2xl  shadow-lg w-[600px] m-auto  sm:m-auto sm:mt-2 sm:p-2 sm:w-[95%] ">
            <motion.div 
                whileHover={{ scale: 1.02 }}
                className="px-4 py-2 rounded-lg bg-teal-500 text-white text-[13px] cursor-pointer hover:bg-teal-400 transition-colors sm:text-sm sm:py-1 sm:rounded-md flex items-center gap-2 sm:text-[10px] sm:gap-1 sm:px-3"
                onClick={() => router.push('/new')}
            >
                <p>NEW</p> 
                <GrAdd/>
            </motion.div>
            <div className="text-[28px] flex justify-center items-center text-slate-600 font-Nunito font-bold ">
                wisdom
            </div>
            <div className="w-[30px] text-[12px] leading-3 text-slate-700 sm:text-[11px]">
                BY <a href="https://abhiifour.xyz" className="underline underline-offset-2 text-teal-500 hover:text-teal-400 transition-colors">ABHI</a>
            </div>
        </div>
    )
}