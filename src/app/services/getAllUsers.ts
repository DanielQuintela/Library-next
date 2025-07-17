import axios from "axios";
import { User } from "../types/User";
import { toast } from "react-toastify";


const API = "http://localhost:8080/users";

export const getAllUsers = async (): Promise<User[]> => {

    try {
        const res = await axios.get(API);
        return res.data
        
    } catch (error:any) {
        // console.error("Erro ao buscar usuários:", error);
        toast.error(error.response?.data.error)
        return [];
    }
}