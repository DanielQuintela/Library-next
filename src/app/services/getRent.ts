import axios from "axios";
import { Rent } from "../types/Rent";
import { toast } from "react-toastify";

const API = "http://localhost:8080/rent/owner";
const API2 = "http://localhost:8080/rent";

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

export const getRentById = async (id: number): Promise<Rent> => {
  const res = await axios.get(`${API2}/${id}`);
  return res.data;
};