import Link from "next/link";
import FilterBtn from "./FilterBtn";
import { FullSubjectDTO } from "@/shared/types";


type Props={
    search:string;
    setSearch:(value:string)=>void;
    subjectID:number|null;
    setSubjectID:(value:number|null)=>void;
    subjects:FullSubjectDTO[];
};



export default function Sidebar({search,setSearch,subjectID,setSubjectID,subjects}:Props){
    return(
        <aside className="w-full md:w-64 shrink-0">
                        <div className="flex flex-col gap-4 md:sticky md:top-20">
                            {/* Sreach */}
                            <input 
                                type="text"
                                placeholder="Pretraga spilova..."
                                className="w-full rounded border border-gray-200 px-3 px-2"
                                value={search}
                                onChange={(e)=>setSearch(e.target.value)}/>
                                {/* Dugme koje vodi na create deck stranicu */}
                                <div className="flex flex-wrap gap-2 md:flex-col">
                                    <FilterBtn active={subjectID === null} handleClick={()=>setSubjectID(null)}>
                                        Svi predmeti
                                    </FilterBtn>
                                    {subjects.map((s)=>(
                                        <FilterBtn key={s.id}
                                        active={subjectID===s.id}
                                        handleClick={()=>setSubjectID(s.id)}>
                                            {s.name}
                                        </FilterBtn>
                                    ))}
                                </div>
                        </div>
                    </aside>
    )
}