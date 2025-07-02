"use client";

import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  
  return (
    <section className="text-center py-12">
      <h1 className="font-bold text-4xl mb-4">
                <Typewriter
                words={['Bem-vindo à Livraria Digital','Sistema em desenvolvimento', 'Bem-vindo à Livraria Digital']}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              /> 
              </h1>
      <p className="text-lg text-gray-600 max-w-xl mx-auto">
        Explore uma coleção diversificada de livros, autores e gêneros. Gerencie
        sua biblioteca com facilidade.
      </p>
    </section>
  );
}
