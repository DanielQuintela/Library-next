import axios from "axios";
import { Rent } from "../types/Rent";
import { toast } from "react-toastify";

const API = "http://localhost:8080/rent/owner";

export const getRentByOwner = async (id: number| null): Promise<Rent[]> => {

    try {
        const res = await axios.get(`${API}/${id}`);
        return res.data;
    } catch (error:any) {
        toast.error(error.response?.data.error)
        // console.error("Erro ao buscar alugueis:", error);
        return [];
    }
  
};
