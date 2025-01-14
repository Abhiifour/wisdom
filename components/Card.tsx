"use client"

import { useRouter } from "next/navigation"
import Heart from "@/public/heartO.png"
import Arrow from "@/public/arrow.png"
import { useWisdomState } from "@/app/store/atoms/wisdomAtom"
import Image from "next/image"
import { addVote } from "@/app/actions/wisdom"
import { useState } from "react"
import { BiSolidLike } from "react-icons/bi";
import { FaAnglesUp } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { TiUser } from "react-icons/ti";
import { FaRegComment } from "react-icons/fa";

export default function Card(props: {
  id: number
  data: string
  createdBy: string
  votes: number
  comments: number[]
}) {
  const [voteUpdate, setVoteUpdate] = useState<boolean>(false)
  const [votes, setVotes] = useState<number>(props.votes)
  const updateWisdom = useWisdomState((state) => state.updateWisdom)
  const router = useRouter()

  async function addVotes() {
    setVotes(votes + 1)
    setVoteUpdate(true)
    await addVote(props.id)
  }

  const handleWisdomClick = () => {
    router.push('/wisdom')
    updateWisdom(props.id, props.data, props.createdBy, props.votes)
  }

  return (
    <div className="w-full px-6 py-5 border border-gray-100 rounded-xl bg-white  hover:shadow-md transition-shadow shadow-lg" >
      <div className="flex justify-between items-start gap-2 min-w-[95%]">
        {/* Main Content */}
        <div className="flex-1">
          <p 
            onClick={handleWisdomClick}
            className="text-slate-700 text-[15px] leading-relaxed tracking-tight cursor-pointer hover:text-gray-500 mb-4 pr-1"
          >
            {props.data}
          </p>
          
          {/* Meta Information */}
          <div className="flex items-center gap-3 text-[12px] tracking-tight text-gray-400 font-light sm:gap-2">
            <div className="flex items-center gap-1">
              <TiUser/>
              <span>{props.createdBy}</span>
            </div>
            <div 
              onClick={handleWisdomClick}
              className="flex items-center gap-1 cursor-pointer hover:text-gray-700"
            >
              <FaRegComment/>
              <span> Comments {props.comments}</span>

            </div>
            <div className=" text-gray-400">• {votes > 0 && votes || 0} Votes</div>
            <div className=" text-gray-400 hover:text-gray-500 cursor-pointer">
            • Report
            </div>
          </div>
        </div>

        {/* Vote Button */}
        <div className="flex  items-center min-w-[20px] text-[18px] mt-2">
          {voteUpdate ? (
           <FaAnglesUp  />
          ) : (
            <div className="cursor-pointer text-center flex text-red-600">
              
          
              <FaHeart onClick={addVotes}/>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}