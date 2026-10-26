"use client";
import Image from "next/image";
import {useEffect, useState} from "react";
import {mockDecks,mockSubjects} from "@/mock/data";
import {FullDeckDTO,FullSubjectDTO} from "@/shared/types";
import Link from "next/link";
import Card from "./Card";
import Sidebar from "./Sidebar";
import FilterBtn from "./FilterBtn";

type Props={subjects:FullSubjectDTO[]};

export default function DeckBrowser({subjects}:Props){
    const [decks,setDecks] = useState<FullDeckDTO[]>(mockDecks);
    const[search,setSearch] = useState("");
    const[subjectID,setSubjectID]=useState<number|null>(null);
    const[loading,setLoading]=useState(false);
    useEffect(()=>{
        setLoading(true);
        console.log(search);
        let data=mockDecks;
        if(subjectID!==null) 
            data=data.filter(d=>d.subject.id===subjectID);
        if(search.trim())
            data=data.filter(d=>d.name.toLowerCase().includes(search.toLowerCase()));
        setDecks(data);
        setLoading(false);
    },[subjectID,search]);

    return (
        <div className="mx-auto max-w-7xl px-4 py-8">
            <div className="flex flex-col gap-8 md:flex-row">
                {/* <p>Komponenta DeckBrowser je ovde</p> */}
                {/* Sidebar */}
                <Sidebar search ={search} setSearch={setSearch}
                subjectID={subjectID} setSubjectID={setSubjectID} subjects={subjects}/>
                {/* Cards */}
                <section className="flex-1">
                    {decks.length===0?(
                        <p className="text-center text-gray-500">Nema spilova za dati filter</p>
                    ):(
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {decks.map((deck,idx) => (
                            <Card deck={deck} subjects={subjects} key={deck.id}/>))}
                    </div>
                    )}
                </section>
            </div>
        </div>
    );
}