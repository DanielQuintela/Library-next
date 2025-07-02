import { Book } from "../types/Book";


export default function LivroCard({ livro }: { livro: Book }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h2 className="text-xl font-semibold">{livro.title}</h2>
      <p className="text-sm text-gray-600">Autor: {livro.author}</p>
      <p className="text-sm text-gray-600">Gênero: {livro.genre}</p>
    </div>
  );
}