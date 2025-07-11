import { Book } from "../types/Book";


export default function LivroCard({ livro }: { livro: Book }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-lg dark:hover:shadow-amber-50 transition bg-amber-50 dark:bg-zinc-600 dark:border-zinc-800">
      <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">{livro.title}</h2>
      <p className="text-sm text-gray-600 dark:text-zinc-300">Autor: {livro.author}</p>
      <p className="text-sm text-gray-600 dark:text-zinc-300">Gênero: {livro.genre}</p>
    </div>
  );
}