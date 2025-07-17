"use client"
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function SoonPage() {
  return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-100 dark:bg-zinc-900 rounded-2xl">
    <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-10 flex flex-col items-center">
     
    <div className="flex items-center gap-2 mb-4">

        <Image
          src="/miner.gif"
          alt="Mineiro trabalhando"
          width={120}
          height={60}
          quality={100}
          className="brightness-95"
          priority
        />
      </div>

      <h1 className="text-3xl font-bold mb-2 text-zinc-800 dark:text-zinc-100">Em construção 🚧</h1>
      <p className="text-lg text-zinc-700 dark:text-zinc-300 text-center">
        Esta página estará disponível em breve.<br />
      </p>
    <div className="text-lg text-zinc-700 mb-2 ">
         <Typewriter
        words={[
        "Aguarde novidades!",
        "Logo logo estará disponível"
        ]}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={2000}
    />
    </div>
   
    </div>
  </div>
);

}