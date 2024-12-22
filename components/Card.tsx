"use client"

import { useRouter } from "next/navigation"
import Heart from "@/public/heartO.png"
import Arrow from "@/public/arrow.png"

import { useWisdomState } from "@/app/store/atoms/wisdomAtom"
import Image from "next/image"
import { addVote } from "@/app/actions/wisdom"
import {  useState } from "react"




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
        <div className="w-full p-6 border rounded-lg bg-white shadow-md flex flex-col gap-4 ">
            <div className="top flex justify-between">
            <div className="hover:text-slate-600 cursor-pointer" onClick={() => {router.push('/wisdom')
                   updateWisdom(props.id,props.data,props.createdBy,props.votes)
               
                
            }}>
            {props.data}</div> 
            <div >
            {
                voteUpdate ?  
                 <div>
                    <Image src={Arrow} width={20} height={20} alt="heart" />
                    <div className="text-[14px] text-center text-slate-400">{votes === 0 ?'': votes}</div>
                 </div>
                
                 :
                 <div className="cursor-pointer">
                     <Image src={Heart} width={25} height={25} alt="heart" onClick={addVotes}/>
                     <div className="text-[14px] text-center text-slate-400">{votes === 0 ?'': votes}</div>
                </div> 
            }
           
            </div>
            </div>
            

            {/* bottom */}
            <div className="flex gap-4 text-[12px] text-slate-500 items-center ">
                <div ><span className="text-[16px]">🥷</span>@{props.createdBy}</div>
                {/* <div className="cursor-pointer"><span className="text-[16px]">🫶🏼</span>Upvote {props.votes}</div> */}
                <div className="cursor-pointer" onClick={() => {router.push('/wisdom')
                     updateWisdom(props.id,props.data,props.createdBy,props.votes)
                }}><span className="text-[16px]">👀</span>comments{props.comments}</div>
            </div>


        </div>
    )
}


