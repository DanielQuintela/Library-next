"use client"
import { getUserIdFromToken } from "@/app/hooks/getTokenInfo";
import { getRentByOwner } from "@/app/services/getRent";
import { Rent } from "@/app/types/Rent";
import { useEffect, useState } from "react";


export default function ListRent() {

    const [ rents, setRents ] = useState<Rent[]>([])

    useEffect(() => {
        const fetchRents = async () => {
            const rents = await getRentByOwner(getUserIdFromToken())
            setRents(rents)
        };        

        fetchRents();        
    },[])
    return(
        <>
        </>
    );
}