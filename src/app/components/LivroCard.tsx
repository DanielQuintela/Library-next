import { Book } from "../types/Book";


export default function LivroCard({ livro }: { livro: Book }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-lg dark:hover:shadow-amber-50 transition bg-amber-50 dark:bg-zinc-600 dark:border-zinc-800 flex flex-col items-center">
      <img
        src={`https://covers.openlibrary.org/b/isbn/${livro.isbn}-M.jpg`}
        alt={`Capa do livro ${livro.title}`}
        className="mb-4 rounded-md shadow-xl w-32 h-48 object-cover bg-white dark:bg-zinc-700"
      />
      <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">{livro.title}</h2>
      <p className="text-sm text-gray-600 dark:text-zinc-300">Autor: {livro.author}</p>
      <p className="text-sm text-gray-600 dark:text-zinc-300">Gênero: {livro.genre}</p>
      <p className="text-xs text-gray-500 dark:text-zinc-400">ISBN: {livro.isbn}</p>
    </div>
  );
}