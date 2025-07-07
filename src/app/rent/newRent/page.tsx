"use client";

import { useBooks } from "@/app/context/books-context";
import { PostNewRent } from "@/app/services/postNewRent";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function NewRent() {
  const { livros } = useBooks();
  const router = useRouter();

  const [form, setForm] = useState({
    book: { id: 0 },
    user: { id: 0 },
    returnDate: new Date(),
  });

  useEffect(() => {
    if (livros.length > 0) {
      setForm((prevForm) => ({
        ...prevForm,
        book: { id: livros[0].id },
      }));
    }
  }, [livros]);

  const handleNewRent = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      book: form.book,
      user: form.user,
      returnDate: new Date(form.returnDate!).toISOString(),
    };

    try {
      await PostNewRent(payload);
      router.push("/rent/listRent");
    } catch (error) {
      console.error("Erro ao criar aluguel:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-4"
    >
      <form
        onSubmit={handleNewRent}
        className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md space-y-5 border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Novo Aluguel</h2>

        <div>
          <label htmlFor="book" className="block mb-1 font-semibold text-gray-700">
            Livro
          </label>
          <select
            id="livro"
            name="book"
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={form.book.id}
            onChange={(e) =>
              setForm({ ...form, book: { id: parseInt(e.target.value) } })
            }
          >
            {livros.map((livro) => (
              <option key={livro.id} value={livro.id}>
                {livro.title}
              </option>
            ))}
          </select>
        </div>

        {/* TODO: BUSCAR NOME DO USUÁRIO E NÃO ID. RETORNAR O ID DO NOME DO USUÁRIO. */}
        <div>
          <label htmlFor="user" className="block mb-1 font-semibold text-gray-700">
            ID do Usuário
          </label>
          <input
            type="number"
            name="user"
            placeholder="ID do usuário"
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={(e) =>
              setForm({ ...form, user: { id: parseInt(e.target.value) } })
            }
          />
        </div>

        <div>
          <label htmlFor="returnDate" className="block mb-1 font-semibold text-gray-700">
            Data de Devolução
          </label>
          <input
            type="date"
            name="returnDate"
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
            onChange={(e) =>
              setForm({ ...form, returnDate: new Date(e.target.value) })
            }
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Enviar
        </motion.button>
      </form>
    </motion.div>
  );
}
