
import axios from "axios";
import { LoginUser, User } from "../types/User";


const API = "http://localhost:8080/users/login";

export const authUser = async (formData: Partial<User>): Promise<User> => {
    try {
        const response = await axios.post<User>(API, formData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error:any) {
        throw error;
    }
  
};