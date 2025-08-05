import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer id="footer" className="bg-neutral-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl mb-4">Casa Lagoa</h3>
            <p className="text-neutral-400 mb-4">
              Onde a natureza encontra a alta gastronomia em um ambiente único e
              acolhedor.
            </p>
            <div className="flex space-x-4">
              <a
                target="_blank"
                href="https://www.instagram.com/restaurantecasalagoa/"
                className="hover:text-neutral-300"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-xl" />
              </a>
              <a target="_blank" href="#" className="hover:text-neutral-300">
                <FontAwesomeIcon icon={faFacebook} className="text-xl" />
              </a>
              <a target="_blank" href="#" className="hover:text-neutral-300">
                <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-4">Contato</h4>
            <div className="space-y-2 text-neutral-400">
              <p>
                <FontAwesomeIcon icon={faPhone} className="mr-2" /> (31)
                3141-7513
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />{" "}
                contato@casalagoa.com.br
              </p>
              <p>
                <FontAwesomeIcon icon={faLocationDot} className="mr-2" /> Rua da
                R. Algarve, 400 - São Francisco Belo Horizonte - MG, 31255-090
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-4">Horários</h4>
            <div className="space-y-2 text-neutral-400">
              <p>Segunda a Sexta: 11h às 14h</p>
              <p>Sábado e Domingo: -</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-4">Newsletter</h4>
            <p className="text-neutral-400 mb-4">
              Receba nossas novidades e ofertas especiais
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-l-md focus:outline-none focus:border-neutral-500"
              />
              <button className="bg-neutral-700 px-4 py-2 rounded-r-md hover:bg-neutral-600">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-400">
          <p>© 2025 Casa Lagoa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
