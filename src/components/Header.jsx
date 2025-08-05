import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header
      id="header"
      className="bg-white border-b border-neutral-200 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl text-neutral-900">Casa Lagoa</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#hero"
              className="text-neutral-700 hover:text-neutral-900 px-3 py-2 cursor-pointer"
            >
              Início
            </a>
            <a
              href="#featured-dishes"
              className="text-neutral-700 hover:text-neutral-900 px-3 py-2 cursor-pointer"
            >
              Cardápio
            </a>
            <a
              href="#gallery"
              className="text-neutral-700 hover:text-neutral-900 px-3 py-2 cursor-pointer"
            >
              Galeria
            </a>
            <a
              href="#about"
              className="text-neutral-700 hover:text-neutral-900 px-3 py-2 cursor-pointer"
            >
              Sobre
            </a>
            <a
              href="#footer"
              className="text-neutral-700 hover:text-neutral-900 px-3 py-2 cursor-pointer"
            >
              Contato
            </a>
          </nav>
          <button className="bg-neutral-900 text-white px-6 py-2 rounded-md hover:bg-neutral-800 hidden md:block">
            Venha nós conhecer
          </button>
          <button className="md:hidden">
            <FontAwesomeIcon icon={faBars} className="text-neutral-700" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
