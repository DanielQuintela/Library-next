"use client";
import React, { useState } from "react";
import { User } from "../types/User";
import { authUser } from "../services/authUser";
import { redirect, useRouter } from "next/navigation";
import { motion } from "framer-motion";


export default function LoginPage() {
  const initialValue: User = {
    email: "",
    password: "",
    name: "",
    id: 0,
    birth: "",
  };

const router = useRouter();
  const [formatData, setFormatData] = useState<User>(initialValue);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormatData({ ...formatData, [name]: value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(""); // limpa mensagem anterior

    try {
      const user = await authUser(formatData);
      console.log("Login bem-sucedido:", user);
      // redirecionar ou salvar usuário no localStorage aqui
      await localStorage.setItem("token", user.token);
      router.push("/books");
    } catch (error: any) {
      if (error.response?.status === 401) {
        setErrorMsg("Email ou senha incorretos.");
      } else {
        setErrorMsg("Erro inesperado ao fazer login.");
      }
    }
  };


 return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-100 dark:bg-zinc-900 px-4">
      <div className="bg-white dark:bg-zinc-100 dark:text-black rounded-2xl shadow-xl p-8 max-w-md w-full">

        <form className="space-y-4" onSubmit={handleLogin}>
          <motion.h1
            className="text-2xl font-bold text-center mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Entrar na conta
          </motion.h1>

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
              value={formatData.email}
              onChange={handleChange}
              placeholder="Digite seu e-mail"
              className="w-full px-4 py-2 border dark:border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 autofill:!bg-white autofill:!text-black"
              required
            />
          </motion.div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <label className="block text-sm mb-1" htmlFor="password">
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formatData.password}
              onChange={handleChange}
              placeholder="Digite sua senha"
              className="w-full px-4 py-2 border dark:border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 autofill:!bg-white autofill:!text-black"
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            Entrar
          </motion.button>

          {errorMsg && (
            <motion.p
              className="text-red-600 text-sm mt-2 font-semibold text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {errorMsg}
            </motion.p>
          )}

          <motion.p
            className="w-full text-center text-blue-600 hover:underline cursor-pointer mt-4"
            onClick={() => router.push("/register")}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            Não tem uma conta? <span className="font-semibold">Crie agora</span>
          </motion.p>
        </form>
      </div>
    </div>
  );

}
