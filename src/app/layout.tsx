

import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/NavBar";


export const metadata = {
  title: "Livraria Digital",
  description: "Frontend para gerenciamento de livros",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="max-w-5xl mx-auto p-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
