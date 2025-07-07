"use client";

import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full flex top-11 min-h-screen bg">
      {/* Imagem de fundo centralizada, menor e com bordas */}
      <div className="relative w-[90vw] max-w-5xl h-[85vh] rounded-3xl overflow-hidden border-4 border-gray-500 shadow-2xl z-0 dark:border-black">
        <Image
          src="/lib.jpeg"
          alt="Fundo de livraria"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          className="brightness-75"
          priority
        />
      </div>

      {/* Conteúdo principal sobreposto */}
      <main className="absolute inset-0 z-10 flex flex-col items-center top-24 text-white px-4 pt-32">
        <motion.h1
          className="font-bold text-3xl md:text-5xl text-center mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Typewriter
            words={[
              "Bem-vindo à Livraria Digital",
              "Explore autores e títulos",
              "Gerencie sua biblioteca",
            ]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.h1>

        <motion.p
          className="text-lg text-zinc-200 max-w-2xl text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Acesse sua coleção, descubra novos livros e mergulhe em histórias
          incríveis.
        </motion.p>

        <motion.div
          className="mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <Link href="/login">
            <button className="bg-white text-black px-6 py-2 rounded-xl shadow-lg hover:bg-zinc-100 transition-all cursor-pointer hover:shadow-2xs">
              Entrar
            </button>
          </Link>
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-1/2 transform -translate-x-1/2 w-72 h-14 backdrop-blur-md bg-white/10 rounded-full flex items-center justify-center text-white text-sm animate-bounce z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{ delay: 2 }}
        >
          ↓ Role para explorar
        </motion.div>
      </main>
    </div>
  );
}
