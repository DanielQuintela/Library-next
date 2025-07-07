"use client";

import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
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
      redirect("/");
  };

  return (
    
      <nav className="sticky top-0 z-50 shadow bg-white dark:bg-zinc-900">

      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center  ">
        <ThemeToggle />
        { isLoggedIn ? (
            <Link href="/books" className="text-xl font-bold text-blue-600">
              📚 Livraria
            </Link> ) : (
                <Link href="/" className="text-xl font-bold text-blue-600">
                  📚 Livraria
            </Link>
          )
        }
      
        <div className="space-x-4">
          {
            isLoggedIn ? (
              <>
                <Link
                  href="/books"
                  className={
                    (path === "/books"
                      ? "font-semibold text-blue-600 px-5 py-2  "
                      : "text-zinc-700 dark:text-zinc-200 transition-colors px-5 py-2 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-700 dark:hover:text-white  hover:text-blue-800 font-semibold ") 
                  }
                >
                  Livros
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white font-semibold px-4 py-1 rounded-2xl hover:bg-red-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className={path === "/login" ? "font-semibold text-blue-600 " : "transition-colors px-5 py-2 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-700 dark:hover:text-black hover:text-blue-800 font-semibold"}
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
