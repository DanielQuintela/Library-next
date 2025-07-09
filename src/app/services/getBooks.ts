
import axios from "axios";
import { Book } from "../types/Book";
import { toast } from "react-toastify";


const API = "http://localhost:8080/books";

export const getLivros = async (): Promise<Book[]> => {

    try {
        const res = await axios.get(API);
        return res.data;
    } catch (error: any) {
        // console.error("Erro ao buscar livros:", error);
        toast.error(error.response?.data.error)
        return [];
    }
  
};
