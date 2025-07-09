"use client";

import { getUserIdFromToken } from "@/app/hooks/getTokenInfo";
import { getRentByOwner } from "@/app/services/getRent";
import { Rent } from "@/app/types/Rent";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ListRent() {
  const [rents, setRents] = useState<Rent[]>([]);

  useEffect(() => {
    const fetchRents = async () => {
      try {
        const userId = getUserIdFromToken();
        if (!userId) {
          toast.error("Usuário não autenticado");
          return;
        }

        const rents = await getRentByOwner(userId);
        setRents(rents);
      } catch (error: any) {
        toast.error(error.response?.data?.message || "Erro ao buscar alugueis");
      }
    };

    fetchRents();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 p-6 rounded-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-zinc-800 dark:text-zinc-100">
        Meus Aluguéis
      </h1>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full bg-white dark:bg-zinc-100 border border-gray-200">
          <thead>
            <tr className="bg-zinc-200 text-zinc-800">
              <th className="py-3 px-4 border-b">Usuário</th>
              <th className="py-3 px-4 border-b">Livro</th>
              <th className="py-3 px-4 border-b">Data de Devolução</th>
            </tr>
          </thead>
          <tbody>
            {rents.length === 0 ? (
              <tr>
                <td colSpan={3} className="text-center py-6 text-zinc-500">
                  Nenhum aluguel encontrado.
                </td>
              </tr>
            ) : (
              rents.map((rent) => (
                <tr key={rent.id} className="hover:bg-zinc-50 text-center">
                  <td className="py-3 px-6 border-b text-center">
                    {rent.user?.name || "Desconhecido"}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {rent.book?.title || "Livro não disponível"}
                  </td>
                  <td className="py-2 px-14 border-b text-center">
                    {new Date(rent.returnDate).toLocaleDateString("pt-BR")}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
