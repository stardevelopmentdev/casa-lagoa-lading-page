import React from "react";
// 1. Importe a imagem do seu projeto
import HeroImage from "../assets/images/house.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-[700px] flex items-center justify-center text-white"
    >
      {/* 2. Div para a imagem de fundo */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      ></div>

      {/* 3. (Opcional, mas recomendado) Div de overlay para legibilidade */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* 4. Conteúdo de texto, que agora fica sobre a imagem e o overlay */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl mb-6">Casa Lagoa</h1>
        <p className="text-xl md:text-2xl mb-8">
          Onde a natureza encontra a alta gastronomia
        </p>
        <button className="bg-white text-neutral-900 px-8 py-3 rounded-md text-lg hover:bg-neutral-100">
          Fazer uma Reserva
        </button>
      </div>
    </section>
  );
};

export default Hero;
