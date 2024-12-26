import Image from "next/image";
import Icon from '@/public/user.png'
import { motion } from "framer-motion";

export default function Comments (props : {data : string, createdBy : string}){
    return (
        <motion.div className="flex gap-3 items-center sm:w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        >
          <div>
          <Image src={Icon} width={40} height={40} className="w-[40px] h-[40px] sm:w-[30px] sm:h-[30px]" alt="heart" />
          </div>
           <div >
           <div className="py-3 sm:py-1 sm:text-[14px]">
              {props.data}
            </div>
        {/* <div className="flex gap-2 text-[12px] text-slate-500 mt-2 ">
            <div >{props.createdBy}</div>
            
        </div> */}
           </div>
        </motion.div>
    )
}