import React from "react";

// --- Passo 1: Importe as imagens dos pratos ---
import CarneImg from "../assets/images/food2.jpg"; // Sugestão: Nomes mais descritivos para as imagens
import GalinhadaImg from "../assets/images/food3.jpg"; // Exemplo: CarneImg em vez de Carne
import SobremesaImg from "../assets/images/food4.jpg"; // Exemplo: SobremesaImg em vez de Doce

const FeaturedDishes = () => {
  const dishes = [
    {
      name: "Carnes Nobres",
      description:
        "Cortes selecionados e preparados na brasa. Uma experiência de sabor e suculência que desperta os sentidos.",
      image: CarneImg,
    },
    {
      name: "Cozinha Afetiva",
      description:
        "Pratos clássicos com sabor de casa. Nossos cozidos são preparados lentamente para apurar o tempero e garantir a maciez.",
      image: GalinhadaImg,
    },
    {
      name: "Doces Momentos",
      description:
        "Criações artesanais para adoçar o seu dia. A sobremesa perfeita para fechar sua refeição com um toque de felicidade.",
      image: SobremesaImg,
    },
  ];

  return (
    <section id="featured-dishes" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-neutral-900 mb-4">Pratos Especiais</h2>
          <p className="text-xl text-neutral-600">
            Descubra algumas de nossas criações mais apreciadas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md group"
            >
              {/* --- Passo 3: Substitua o div pela tag <img> --- */}
              <div className="h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={`Foto do prato ${dish.name}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl text-neutral-900 mb-2">{dish.name}</h3>
                <p className="text-neutral-600 mb-4">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-neutral-900 text-white px-8 py-3 rounded-md hover:bg-neutral-800">
            Ver Cardápio Completo
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
