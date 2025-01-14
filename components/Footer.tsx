import { FaGithub } from "react-icons/fa";

export default function Footer(){
    return (
        <div className="flex justify-center items-center w-full border-t py-8 mt-6 border-border-color">
           <div className="text-[24px] text-slate-700">
            <a href="https://github.com/Abhiifour/wisdom"><FaGithub /></a>
           
           </div>

        </div>
    )
}