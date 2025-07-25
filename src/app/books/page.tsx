"use client";
import { useBooks } from "../context/books-context";
import LivroCard from "../components/LivroCard";
import { motion } from "framer-motion";

export default function LivrosPage() {
  const { livros, isLoading } = useBooks();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-zinc-100 dark:bg-zinc-900 rounded-2xl">
        <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 max-w-2xl w-full flex flex-col items-center">
          <p className="text-2xl font-bold text-gray-600 dark:text-gray-300 text-center">
            Carregando livros...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center pt-2 bg-zinc-100 dark:bg-zinc-900 rounded-2xl">
      <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 max-w-6xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center pt-4  text-zinc-800 dark:text-zinc-100">
          Livros Disponíveis
        </h1>
        {livros.length === 0 ? (
          <p className="text-gray-700 text-lg text-center dark:text-zinc-300">
            Não há livros cadastrados.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {livros.map((livro, index) => (
              <motion.div
                key={livro.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <LivroCard livro={livro} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
