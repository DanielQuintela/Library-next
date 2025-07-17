
import axios from "axios"
import { User } from "../types/User"


const API = "http://localhost:8080/users"

export const registerUser = async (formatData: Partial<User>): Promise<User> => {
    try {
        const response = await axios.post<User>(API, formatData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}