import { Book } from "../types/Book";


export default function LivroCard({ livro }: { livro: Book }) {
  return (
    <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-[1.02] transition bg-gray-100 dark:bg-neutral-700 flex flex-col items-center hover:bg-neutral-100 dark:hover:bg-neutral-700">
      <img
        src={`https://covers.openlibrary.org/b/isbn/${livro.isbn}-M.jpg`}
        alt={`Capa do livro ${livro.title}`}
        className="mb-4 rounded-md shadow-md w-32 h-48 object-cover bg-white dark:bg-neutral-700"
      />
      <h2 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300">{livro.title}</h2>
      <p className="text-sm text-neutral-700 dark:text-neutral-300">Autor: {livro.author}</p>
      <p className="text-sm text-neutral-700 dark:text-neutral-300">Gênero: {livro.genre}</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">ISBN: {livro.isbn}</p>
    </div>

  );
}