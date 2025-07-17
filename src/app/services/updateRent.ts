// services/updateRent.ts
import axios from "axios";
import { Rent } from "../types/Rent";

const API = "http://localhost:8080/rent";

export const updateRent = async (id: number, formatData: Partial<Rent>): Promise<Rent> => {
  try {
    const response = await axios.put<Rent>(`${API}/${id}`, formatData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
