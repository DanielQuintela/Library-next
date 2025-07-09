"use client"
import { getUserIdFromToken } from "@/app/hooks/getTokenInfo";
import { getRentByOwner } from "@/app/services/getRent";
import { Rent } from "@/app/types/Rent";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


export default function ListRent() {

    const [ rents, setRents ] = useState<Rent[]>([])

    useEffect(() => {
        const fetchRents = async () => {
            try {
                const rents = await getRentByOwner(getUserIdFromToken())
                setRents(rents)
            } catch (error: any) {
                toast.error(error.response?.data.error)
            }
            
        };        

        fetchRents();        
    },[])
    
    return(
        <>
        
        </>
    );
}