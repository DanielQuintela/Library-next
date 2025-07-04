"use client";
import React, { useState } from "react";
import { User } from "../types/User";
import { authUser } from "../services/authUser";

export default function LoginPage() {
  const initialValue: User = {
    email: "",
    password: "",
    name: "",
    id: 0,
    birth: "",
  };

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
    } catch (error: any) {
      if (error.response?.status === 401) {
        setErrorMsg("Email ou senha incorretos.");
      } else {
        setErrorMsg("Erro inesperado ao fazer login.");
      }
    }
  };

  return (
    <section className="max-w-md mx-auto mt-12">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="space-y-4" onSubmit={handleLogin}>
        <input
          type="email"
          onChange={handleChange}
          placeholder="Email"
          className="w-full border p-2 rounded"
          name="email"
          value={formatData.email}
        />
        <input
          type="password"
          onChange={handleChange}
          value={formatData.password}
          placeholder="Senha"
          name="password"
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Entrar
        </button>
        {errorMsg && (
          <p className="text-red-600 text-sm mt-2 font-semibold">{errorMsg}</p>
        )}
      </form>
    </section>
  );
}
