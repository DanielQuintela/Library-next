import axios from "axios";
import { Book } from "../types/Book";
import { toast } from "react-toastify";


const API = "http://localhost:8080/books";

export const postBook = async (formatData: Partial<Book>): Promise<Book> => {

    try {
        const res = await axios.post(API, formatData, {
              headers: {
                "Content-Type": "application/json",
            },
        });
        return res.data;
    } catch (error: any) {
        // console.error("Erro ao buscar livros:", error);
        // toast.error(error.response?.data.error)
        throw error;
    }
  
};
