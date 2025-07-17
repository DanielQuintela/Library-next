"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Rent } from "@/app/types/Rent";
import { updateRent } from "@/app/services/updateRent"; // você precisa criar isso
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { getRentById } from "@/app/services/getRent";
import { ArrowLeft } from "lucide-react";

export default function UpdateRent() {
  const { id } = useParams();
  const router = useRouter();
  const [rent, setRent] = useState<Rent | null>(null);
  const [returnDate, setReturnDate] = useState("");

  useEffect(() => {
    const fetchRent = async () => {
      try {
        const data = await getRentById(Number(id));
        setRent(data);
        setReturnDate(new Date(data.returnDate).toISOString().split("T")[0]);
      } catch (error) {
        toast.error("Erro ao buscar aluguel");
      }
    };

    if (id) fetchRent();
  }, [id]);

  const handleUpdateRent = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await updateRent(Number(id), {
        ...rent,
        returnDate: new Date(returnDate),
      });
      toast.success("Aluguel atualizado com sucesso!");
      router.push("/rent/listRent");
    } catch (error) {
      toast.error("Erro ao atualizar aluguel");
    }
  };

  if (!rent) return <p className="text-center mt-10">Carregando...</p>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex justify-center items-center bg-zinc-100 dark:bg-zinc-900 p-6"
    >
  
      <form
        onSubmit={handleUpdateRent}
        className="bg-white dark:bg-zinc-100 p-6 rounded-xl shadow-lg w-full max-w-md relative"
      >
        <button
        type="button"
        onClick={() => router.back()}
        className="absolute left-4 top-4 text-sm text-blue-600 hover:underline flex items-center gap-1"
      >
        <ArrowLeft size={16} />
        Voltar
      </button>

        <h2 className="text-xl font-bold mb-4 text-center">Atualizar Aluguel</h2>


        <div className="mb-4">
          <label className="block mb-1 font-semibold">Usuário</label>
          <input
            disabled
            value={rent.user?.name || ""}
            className="w-full border p-2 rounded bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Livro</label>
          <input
            disabled
            value={rent.book?.title || ""}
            className="w-full border p-2 rounded bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Data de Devolução</label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Atualizar
        </motion.button>
      </form>
    </motion.div>
  );
}
