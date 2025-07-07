"use client";
import { useEffect, useState } from "react";
import { getLivros } from "../services/getBooks";
import { Book } from "../types/Book";
import LivroCard from "../components/LivroCard";
import { useBooks } from "../context/books-context";


export default function LivrosPage() {
   const { livros, isLoading } = useBooks();

  if (isLoading) {
    return <p className="text-center text-gray-600 dark:text-gray-300">Carregando livros...</p>;
  }

  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Livros Disponíveis</h1>
      {livros.length === 0 ? (
        <p className="text-gray-700 text-lg text-center dark:text-gray-200">Não há livros cadastrados.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {livros.map((livro) => (
            <LivroCard key={livro.id} livro={livro} />
          ))}
        </div>
      )}
    </section>
  );
}
