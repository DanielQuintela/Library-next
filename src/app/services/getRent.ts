import axios from "axios";
import { Rent } from "../types/Rent";

const API = "http://localhost:8080/rent/owner";

export const getRentByOwner = async (id: number| null): Promise<Rent[]> => {

    try {
        const res = await axios.get(`${API}/${id}`);
        return res.data;
    } catch (error) {
        console.error("Erro ao buscar alugueis:", error);
        return [];
    }
  
};
