"use client"
import React, { useState } from "react";
import { User } from "../types/User";
import { authUser } from "../services/authUser";

export default function LoginPage() {
    const initialValue = {
    email: '',
    password: '',
    name: '',
    id: 0,
    birth: ''
  };

    const [formatData, setFormatData] = useState<User>(initialValue);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormatData({... formatData, [name]:value});
    }

    const handleLogin = async() => {
        const user = await authUser(formatData)
        console.log(user)
    }


  return (
    <section className="max-w-md mx-auto mt-12">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="space-y-4">
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
            className="bg-blue-600 text-white w-full py-2 rounded"
            onClick={handleLogin}
        >
          Entrar
        </button>
      </form>
    </section>
  );
}