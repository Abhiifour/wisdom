
import { create } from 'zustand'


type wisdom = {
    id: number
    data: string
    createdBy : string
    votes : number
}

type Action = {
    updateWisdom: (id: wisdom['id'],data:string , createdBy : string , votes :number) => void
   
}


export  const useWisdomState = create<wisdom & Action>((set) => ({
id: 0,
data: '',
createdBy: '',
votes: 0,
updateWisdom: (id,data,createdBy,votes) => set(() => ({ id: id + 1, data: data, createdBy: createdBy, votes: votes }))

}))