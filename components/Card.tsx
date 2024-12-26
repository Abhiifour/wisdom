"use client"

import { useRouter } from "next/navigation"
import Heart from "@/public/heartO.png"
import Arrow from "@/public/arrow.png"

import { useWisdomState } from "@/app/store/atoms/wisdomAtom"
import Image from "next/image"
import { addVote } from "@/app/actions/wisdom"
import {  useState } from "react"

import {motion} from 'framer-motion'


export default function Card(props :{id:number ,data:string ,createdBy : string , votes : number , comments : number[]}){
const [voteUpdate , setVoteUpdate] = useState<boolean>(false)
const[votes , setVotes] = useState<number>(props.votes)
const updateWisdom = useWisdomState((state) => state.updateWisdom)
const wisdomState = useWisdomState((state) => state.id)

async function addVotes(){
   
    setVotes(votes + 1)
    setVoteUpdate(true)
    await addVote(props.id);
}

// useEffect(()=>{
//     async function getUpdatedWisdom(){
//         const data = await getAWisdom(props.id)
//         setVotes(data?.votes)
//     }
//     getUpdatedWisdom();


// },[voteUpdate])

const router = useRouter()
    return (
        <motion.div className="w-full p-6 border rounded-lg bg-white shadow-md flex flex-col gap-2  sm:w-[98%]"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{  duration: 0.2 }}
        >
            <div className="top flex justify-between">
            <div className="hover:text-slate-600 cursor-pointer max-w-[85%] sm:text-[16px]" onClick={() => {router.push('/wisdom')
                   updateWisdom(props.id,props.data,props.createdBy,props.votes)
               
                
            }}>
            {props.data}</div> 
            <div >
            {
                voteUpdate ?  
                 <div>
                    <Image src={Arrow} className="w-[20px] h-[20px] "  alt="heart" />
                    <div className="text-[14px] text-center text-slate-400">{votes === 0 ?'': votes}</div>
                 </div>
                
                 :
                 <div className="cursor-pointer">
                     <Image src={Heart} className="h-[22px] w-[22px] sm:w-[20px] sm:h-[20px]" alt="heart" onClick={addVotes}/>
                     <div className="text-[12px] text-center text-slate-400 sm:text-[10px]">{votes === 0 ?'': votes}</div>
                </div> 
            }
           
            </div>
            </div>
            

            {/* bottom */}
            <div className="flex gap-4 text-[12px] text-slate-500 items-center ">
                <div ><span className="text-[16px] sm:text-[12px]">🥷 </span>@{props.createdBy}</div>
                {/* <div className="cursor-pointer"><span className="text-[16px]">🫶🏼</span>Upvote {props.votes}</div> */}
                <div className="cursor-pointer sm:text-[12px]" onClick={() => {router.push('/wisdom')
                     updateWisdom(props.id,props.data,props.createdBy,props.votes)
                }}><span className="text-[16px] sm:text-[12px]">👀 </span>comments{props.comments}</div>
            </div>


        </motion.div>
    )
}


