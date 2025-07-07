
import axios from "axios";
import { LoginResponse, User } from "../types/User";


const API = "http://localhost:8080/users/login";

export const authUser = async (formData: Partial<User>): Promise<LoginResponse> => {
    try {
        const response = await axios.post<LoginResponse>(API, formData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error:any) {
        throw error;
    }
  
};