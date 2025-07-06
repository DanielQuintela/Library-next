"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";

export default function Navbar() {
  const path = usePathname();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [path]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <nav className=" shadow sticky top-0 z-50 ">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center  ">
        <ThemeToggle />
        <Link href="/" className="text-xl font-bold text-blue-600">
          📚 Livraria
        </Link>
        <div className="space-x-4">
          {
            isLoggedIn ? (
              <>
                <Link
                  href="/books"
                  className={path === "/books" ? "font-semibold text-blue-600" : ""}
                >
                  Livros
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className={path === "/login" ? "font-semibold text-blue-600" : ""}
              >
                Login
              </Link>
            )
          }
        
        </div>
      </div>
    </nav>
  );
}
