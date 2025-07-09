"use client";

import { useBooks } from "@/app/context/books-context";
import { PostNewRent } from "@/app/services/postNewRent";
import { getAllUsers } from "@/app/services/getAllUsers";
import { User } from "@/app/types/User";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getUserEmailFromToken } from "@/app/hooks/getTokenInfo";


export default function NewRent() {
  const { livros } = useBooks();
  const router = useRouter();

  const [form, setForm] = useState({
    book: { id: 0 },
    user: { id: 0 },
    returnDate: new Date(),
  });

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (livros.length > 0) {
      setForm((prevForm) => ({
        ...prevForm,
        book: { id: livros[0].id },
      }));
    }
  }, [livros]);

  useEffect(() => {
    const fetchUsers = async () => {
    const response = await getAllUsers();
    const loggedUserId = getUserEmailFromToken();

    const filteredUsers = loggedUserId
      ? response.filter((user) => user.email !== loggedUserId)
      : response;

    setUsers(filteredUsers);

    if (filteredUsers.length > 0) {
      setForm((prevForm) => ({
        ...prevForm,
        user: { id: filteredUsers[0].id },
        }));
      }
    };

    fetchUsers();
  }, []);

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
      className="flex items-center justify-center min-h-screen rounded-2xl bg-zinc-100 dark:bg-zinc-900 px-4"
    >
      <form
        onSubmit={handleNewRent}
        className="bg-white dark:bg-zinc-100 dark:text-black shadow-xl rounded-2xl p-6 w-full max-w-md space-y-5 border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Novo Aluguel</h2>

        {/* Livro */}
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

        {/* Usuário */}
        <div>
          <label htmlFor="user" className="block mb-1 font-semibold text-gray-700">
            Nome do Usuário
          </label>
          <select
            id="user"
            name="user"
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={form.user.id}
            onChange={(e) =>
              setForm({ ...form, user: { id: parseInt(e.target.value) } })
            }
          >
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        {/* Data de Devolução */}
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
