"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Navbar(){
    const router = useRouter()
    return (
        <div className="flex items-center justify-between mt-4 px-4 py-2  border rounded-lg bg-white shadow-lg w-[800px] m-auto sm:w-[98%] sm:m-auto sm:mt-2 sm:p-2">
           
            <div className="text-[32px] flex justify-center items-center">
            <Image src={require('@/public/Wisdom.png')} className="w-[200px] h-[60px]" alt="heart" />
            </div>
            <div className="px-4 py-2 rounded-lg bg-primary font-semibold text-white cursor-pointer hover:bg-secondary" onClick={() => router.push('/new')}>
                create <span>✢</span>
            </div>
            
        </div>
        
    )
}