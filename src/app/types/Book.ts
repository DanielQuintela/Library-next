
export interface Book {
    id       : number;
    title    : string;
    author   : string;
    isbn     : string;
    release  : Date;
    genre    : string;
}

export type LivrosContextType = {
  livros: Book[];
  isLoading: boolean;
  refreshLivros: () => Promise<void>;
};