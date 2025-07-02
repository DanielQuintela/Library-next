// services/livros.ts
import axios from "axios";
import { Book } from "../types/Book";


const API = "http://localhost:8080/books";

export const getLivros = async (): Promise<Book[]> => {

    try {
        const res = await axios.get(API);
        console.log(res);
        
        return res.data;
    } catch (error) {
        console.error("Erro ao buscar livros:", error);
        return [];
    }
  
};
