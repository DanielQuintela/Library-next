"use client";
import { useEffect, useState } from "react";
import { getLivros } from "../services/getBooks";
import { Book } from "../types/Book";
import LivroCard from "../components/LivroCard";


export default function LivrosPage() {
  const [livros, setLivros] = useState<Book[]>([]);

  useEffect(() => {
    getLivros().then(setLivros);
  }, []);

  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Livros Disponíveis</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {livros.map((livro) => (
          <LivroCard key={livro.id} livro={livro} />
        ))}
      </div>
    </section>
  );
}
