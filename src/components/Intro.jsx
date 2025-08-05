import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faUtensils, faWater } from "@fortawesome/free-solid-svg-icons";

const Intro = () => {
  return (
    <section id="intro" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-neutral-900 mb-6">
            Bem-vindos à Casa Lagoa
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Uma experiência gastronômica única onde cada prato é uma celebração
            dos sabores naturais, preparado com ingredientes frescos e locais em
            um ambiente que respira tranquilidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-neutral-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon
                icon={faLeaf}
                className="text-2xl text-neutral-600"
              />
            </div>
            <h3 className="text-xl text-neutral-900 mb-2">
              Ingredientes Frescos
            </h3>
            <p className="text-neutral-600">
              Selecionamos cuidadosamente produtos locais e sazonais
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-neutral-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon
                icon={faUtensils}
                className="text-2xl text-neutral-600"
              />
            </div>
            <h3 className="text-xl text-neutral-900 mb-2">Alta Gastronomia</h3>
            <p className="text-neutral-600">Gastronomia caseira e deliciosa</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-neutral-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon
                icon={faWater}
                className="text-2xl text-neutral-600"
              />
            </div>
            <h3 className="text-xl text-neutral-900 mb-2">Ambiente Único</h3>
            <p className="text-neutral-600">
              Vista privilegiada da lagoa em um espaço acolhedor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
