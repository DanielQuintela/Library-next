"use client";

import { getUserIdFromToken } from "@/app/hooks/getTokenInfo";
import { getRentByOwner } from "@/app/services/getRent";
import { Rent } from "@/app/types/Rent";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import Link from "next/link";
import { Pencil } from "lucide-react";

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

  const rowVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.2,
      },
    }),
  };

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 p-6 rounded-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-zinc-800  dark:text-zinc-100">
        Meus Aluguéis
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-x-auto rounded-lg shadow-md"
      >
        <table className="min-w-full bg-white dark:bg-zinc-100 border  border-gray-200 dark:border-zinc-400">
          <thead>
            <tr className="bg-zinc-200 text-zinc-800 dark:bg-zinc-400">
              <th className="py-3 px-4 border-b">Usuário</th>
              <th className="py-3 px-4 border-b">Livro</th>
              <th className="py-3 px-4 border-b">Data de Devolução</th>
              <th className="py-3 px-4 border-b">Ações</th>
            </tr>
          </thead>
          <tbody>
            {rents.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-6 text-zinc-500">
                  Nenhum aluguel encontrado.
                </td>
              </tr>
            ) : (
              rents.map((rent, index) => (
                <motion.tr
                  key={rent.id}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={rowVariants}
                  className="hover:bg-zinc-50 text-center dark:text-black"
                >
                  <td className="py-3 px-6 border-b">
                    {rent.user?.name || "Desconhecido"}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {rent.book?.title || "Livro não disponível"}
                  </td>
                  <td className="py-2 px-14 border-b">
                    {new Date(rent.returnDate).toLocaleDateString("pt-BR")}
                  </td>
                 <td className="py-2 px-4 border-b text-center">
                  <Link href={`/rent/updateRent/${rent.id}`}>
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors mx-auto">
                      <Pencil size={16} />
                      <span className="hidden sm:inline">Editar</span>
                    </button>
                  </Link>
                </td>

                </motion.tr>
              ))
            )}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}
