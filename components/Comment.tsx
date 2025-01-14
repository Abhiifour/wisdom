import Image from "next/image";
import Icon from '@/public/user.png'
import { motion } from "framer-motion";
import { TiUser } from "react-icons/ti";


export default function Comments (props : {data : string, createdBy : string}){
    return (
        <motion.div className="flex gap-1 items-center sm:w-full text-slate-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        >
            <div className="text-[16px]">
            <TiUser/>
            </div>
           <div >
           
           <div className="py-3 sm:py-1 text-[13px] sm:text-[12px]">
              {props.data}
            </div>
        {/* <div className="flex gap-2 text-[12px] text-slate-500 mt-2 ">
            <div >{props.createdBy}</div>
            
        </div> */}
           </div>
        </motion.div>
    )
}