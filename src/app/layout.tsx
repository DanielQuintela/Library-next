

import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/NavBar";
import { Flip, ToastContainer } from "react-toastify";
import { BooksProvider } from "./context/books-context";

export const metadata = {
  title: "Livraria Digital",
  description: "Frontend para gerenciamento de livros",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head />
      <body>
        <BooksProvider>
          <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              closeOnClick={true}
              pauseOnHover={false}
              draggable={true}
              theme="light"
              transition={Flip}
              style={{ fontSize: "16px" }}
            />
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div >
              <Navbar />
              <main className="max-w-5xl mx-auto p-4">{children}</main>
            </div>
          </ThemeProvider>
        </BooksProvider>
      </body>
    </html>
  );
}
