"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Book, LivrosContextType } from "../types/Book";
import { getLivros } from "../services/getBooks";
import { toast } from "react-toastify";

const LivrosContext = createContext<LivrosContextType>({
  livros: [],
  isLoading: true,
  refreshLivros: async () => {},
});

export function BooksProvider({ children }: { children: React.ReactNode }) {
  const [livros, setLivros] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchLivros = async () => {
    setIsLoading(true);
    try {
      const data = await getLivros();
      setLivros(data);
    } catch(error: any) {
      toast.error(error.response?.data.error)
      return
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchLivros();
  }, []);

  return (
    <LivrosContext.Provider value={{ livros, isLoading, refreshLivros: fetchLivros }}>
      {children}
    </LivrosContext.Provider>
  );
}

export function useBooks() {
  return useContext(LivrosContext);
}