
import axios from "axios";
import { LoginUser, User } from "../types/User";


const API = "http://localhost:8080/users/login";

axios

export const authUser = async (formData: LoginUser): Promise<User[]> => {

    try {
        // const res = await axios.get(API, );
        // console.log(res);
        const response = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(formData),
         });
        return response.json();
    } catch (error) {
        console.error("Erro ao buscar usuarios:", error);
        return [];
    }
  
};