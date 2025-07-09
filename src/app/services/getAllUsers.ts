import axios from "axios";
import { User } from "../types/User";


const API = "http://localhost:8080/users";

export const getAllUsers = async (): Promise<User[]> => {

    try {
        const res = await axios.get(API);
        return res.data
        
    } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        return [];
    }
}