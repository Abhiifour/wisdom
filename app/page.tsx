
import Card from "@/components/Card";
import { getWisdom } from "./actions/wisdom";


export default async function Home() {
    
  const data: any = await getWisdom()
  
  return (
   
   <div className="p-1 max-w-[600px] m-auto sm:w-full sm:p-2">
    <div className=" w-[530px] m-auto text-center text-slate-600 py-8 flex flex-col gap-4 sm:w-[90%] ">
    <p className="text-[36px] font-bold font-Nunito tracking-tight sm:text-[28px]">Discover and Share the Wisdom of the World</p>
    <p className="font-Inter text-center text-[18px] sm:text-[15px]"><span className="underline underline-offset-4 font-semibold decoration-teal-400"> Upvote & Comment</span> your favorites. <span className="underline underline-offset-4 decoration-teal-400 font-semibold cursor-pointer">Write</span> your best. No account needed!

    </p>
    </div>
    <div className="flex flex-col gap-4 mt-4 sm:items-center sm:gap-4 ">
    {

    data?.sort((a: any, b: any) => b.votes - a.votes).map((item: any) => 
      <Card key={item.id} id={item.id} data={item.data} createdBy={item.createdBy} votes={item.votes} comments={item.comments}/>
    ) 
    
    }
   
    </div>
    <div className="py-12 mt-16 text-slate-600 sm:w-[90%] sm:m-auto">
      <div className="text-[24px] font-bold font-Nunito tracking-tight">
      What is Wisdom?
      </div>
      <div className="text-[15px] font-normal leading-loose text-slate-700 mt-2 sm:text-[14px]">
      <p className="">Wisdoms is a community-driven platform where timeless advice meets modern insights.
      Anyone can contribute valuable life lessons, insights, or tips—no sign-up required.
      The community upvotes the most impactful pieces of wisdom, ensuring the best ideas shine.
      </p>
      <p className="mt-6">If you have any feedback, please reach out to me on <a href="https://x.com/yeargerite" className="underline underline-offset-4 decoration-teal-500 font-semibold text-teal-400">Twitter</a>.</p>
      </div>
    </div>
   </div>
 
  );
}


export const dynamic = 'force-dynamic'