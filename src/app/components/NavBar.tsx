"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const path = usePathname();

  return (
    <nav className=" shadow sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <ThemeToggle />
        <Link href="/" className="text-xl font-bold text-blue-600">
          Livraria
        </Link>
        <div className="space-x-4">
          <Link
            href="/books"
            className={path === "/books" ? "font-semibold text-blue-600" : ""}
          >
            Livros
          </Link>
          <Link
            href="/login"
            className={path === "/login" ? "font-semibold text-blue-600" : ""}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
