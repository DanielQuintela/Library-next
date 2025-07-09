
import axios from "axios";
import { Rent } from "../types/Rent";


const API = "http://localhost:8080/rent";

export const PostNewRent = async (formData: {
  book: { id: number };
  user: { id: number };
  returnDate: string;
  owner_user: {id: number | null};
}): Promise<Rent> => {
  return axios
    .post<Rent>(API, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data);
};
