"use client";
import { postBook } from "@/app/services/registerBook";
import { useState } from "react";

export default function RegisterBook() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    release: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
// TODO: REFATORAR ESSE SUBMIT
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    postBook(formData)

  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-100 dark:bg-zinc-900 rounded-2xl px-4">
      <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-zinc-800 dark:text-zinc-100">
          Cadastrar Livro
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
                className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300"
                htmlFor="title"
            >
              Título
            </label>
            <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Digite o título"
                className="w-full px-4 py-2 border dark:border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100"
                required
            />
          </div>
          <div>
            <label
                className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300"
                htmlFor="author"
            >
              Autor
            </label>
            <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Digite o autor"
                className="w-full px-4 py-2 border dark:border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100"
                required
            />
          </div>
          <div>
            <label
                className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300"
                htmlFor="genre"
            >
              Gênero
            </label>
            <input
                type="text"
                id="genre"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                placeholder="Digite o gênero"
                className="w-full px-4 py-2 border dark:border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100"
                required
            />
          </div>
          <div>
            <label
                className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300"
                htmlFor="isbn"
            >
              ISBN
            </label>
            <input
                type="text"
                id="isbn"
                name="isbn"
                value={formData.isbn}
                onChange={handleChange}
                placeholder="Digite o ISBN"
                className="w-full px-4 py-2 border dark:border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100"
                required
            />
          </div>
          <div>
            <input
                type="date"
                id="release"
                name="release"
                value={formData.release}
                onChange={handleChange}
                placeholder="Digite o ISBN"
                className="w-full px-4 py-2 border dark:border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100"
                required 
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}