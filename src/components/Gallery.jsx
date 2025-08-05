import React, { useState } from "react";

// --- Passo 1: Importe todas as imagens da sua galeria ---
// (Para este exemplo, usaremos a mesma imagem várias vezes,
// substitua pelos seus próprios arquivos de imagem)
import img1 from "../assets/images/house.jpg";
import img2 from "../assets/images/backgorund.jpg"; // Exemplo
import img3 from "../assets/images/assados.jpg"; // Exemplo
import img4 from "../assets/images/house2.jpg"; // Exemplo
import img5 from "../assets/images/house1.jpg"; // Exemplo
import img6 from "../assets/images/house4.jpg"; // Exemplo
import img7 from "../assets/images/tropeiro.jpg"; // Exemplo
import img8 from "../assets/images/food1.jpg"; // Exemplo

const Gallery = () => {
  // --- Passo 2: Crie um array de objetos para a galeria ---
  const galleryImages = [
    { id: 1, src: img1, alt: "Fachada do restaurante Casa Lagoa" },
    {
      id: 2,
      src: img3,
      alt: "Vista panorâmica da lagoa a partir do restaurante",
    },
    { id: 3, src: img2, alt: "Prato principal gourmet servido na mesa" },
    { id: 4, src: img4, alt: "Chef de cozinha preparando um prato" },
    { id: 5, src: img5, alt: "Terraço externo do restaurante" },
    { id: 6, src: img6, alt: "Entrada especial do dia" },
    { id: 7, src: img7, alt: "Sobremesa de frutas vermelhas" },
    { id: 8, src: img8, alt: "Seleção de vinhos no bar" },
  ];

  // Estado para controlar a imagem selecionada no lightbox
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-neutral-900 mb-4">Galeria</h2>
            <p className="text-xl text-neutral-600">
              Uma prévia da experiência que aguarda por você
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* --- Passo 3: Renderize as imagens --- */}
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="aspect-square rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => openImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Passo 4: Lógica do Lightbox (Modal) --- */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center p-4"
          onClick={closeImage}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Imagem ampliada"
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              onClick={closeImage}
              className="absolute -top-4 -right-4 text-white text-3xl bg-neutral-900 rounded-full w-10 h-10 flex items-center justify-center hover:bg-neutral-700"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
