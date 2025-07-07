"use client";

import { useState } from "react";
import Link from "next/link";
import { registerUser } from "../services/registerUser";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "", birth: "" });
   const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await registerUser(form)
            console.log("Formulário enviado:", form);
            toast.success("Usuário criado!")
            router.push("/login");
        } catch (error: any) {
            if (error.response?.status === 400) {
                toast.error(error.response?.data.error)
            } else {
                toast.error(error.response?.data.error);
            }
        }
    }

   return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-100 dark:bg-zinc-900 px-4">
      <div className="bg-white dark:bg-zinc-100 dark:text-black rounded-2xl shadow-xl p-8 max-w-md w-full">
        <motion.h2
          className="text-2xl font-bold text-center mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Crie sua conta
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <label className="block text-sm mb-1" htmlFor="name">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border dark:border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <label className="block text-sm mb-1" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border dark:border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <label className="block text-sm mb-1" htmlFor="password">
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border dark:border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <label className="block text-sm mb-1" htmlFor="birth">
              Idade
            </label>
            <input
              type="date"
              id="birth"
              name="birth"
              value={form.birth}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border dark:border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            Cadastrar
          </motion.button>
        </form>

        <motion.p
          className="mt-4 text-center text-sm text-blue-600 hover:underline cursor-pointer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          Já tem conta?{" "}
          <Link href="/login" className="font-semibold">
            Entrar
          </Link>
        </motion.p>
      </div>
    </div>
  );
}
