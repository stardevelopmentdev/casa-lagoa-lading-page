import React from "react";
import Chef  from "../assets/images/chef.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl text-neutral-900 mb-6">Nossa História</h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              O Casa Lagoa nasceu do sonho de criar um espaço onde a gastronomia
              de qualidade encontra a serenidade da natureza. Localizado em uma
              posição privilegiada com vista para a lagoa, nosso restaurante
              oferece uma experiência única.
            </p>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Nosso chef, com mais de 15 anos de experiência, desenvolveu um
              cardápio que celebra os sabores locais com técnicas
              contemporâneas, sempre priorizando ingredientes frescos e
              sazonais.
            </p>
            <div className="flex items-center">
              <img
                src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=4521"
                alt="Chef"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-neutral-900 font-semibold">
                  Chef Marina Silva
                </h3>
                <p className="text-neutral-600">Chef Executiva</p>
              </div>
            </div>
          </div>
          <div className="h-96 bg-neutral-300 rounded-lg flex items-center justify-center">
            <img
              src={Chef}
              alt="Chef"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
