import Image from "next/image";
import Icon from '@/public/user.png'

export default function Comments (props : {data : string, createdBy : string}){
    return (
        <div className="flex gap-3 items-center sm:w-full">
          <div>
          <Image src={Icon} width={40} height={40} alt="heart" />
          </div>
           <div >
           <div className="py-3">
              {props.data}
            </div>
        {/* <div className="flex gap-2 text-[12px] text-slate-500 mt-2 ">
            <div >{props.createdBy}</div>
            
        </div> */}
           </div>
        </div>
    )
}