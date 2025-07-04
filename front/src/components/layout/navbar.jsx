import { useState } from "react";
import * as Icons from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-lg p-3 bg-white sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo + Nombre */}
        <a href="/" className="flex items-center space-x-3">
          <img
            src="./img/logos/logo 1.png"
            alt="CONSTRUYENDO SOCIEDAD"
            className="h-12 w-auto"
          />
          <div className="text-left">
            <span className="block text-lg font-semibold text-blue-500">
              CONSTRUYENDO SOCIEDAD
            </span>
            <small className="block text-xs text-gray-600">FUNDACION</small>
          </div>
        </a>
        <button
          className="text-gray-700 lg:hidden mt-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <Icons.X /> : <Icons.TableOfContents />}
        </button>
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-6 lg:mt-0 text-gray-700 font-medium">
            <li>
              <a href="" className="text-blue-500 hover:text-blue-500 ">
                Inicio
              </a>
            </li>
            <li>
              <a href="" className="hover:text-blue-500">
                Nosotros
              </a>
            </li>
            <li>
              <a href="" className="hover:text-blue-500">
                Causa
              </a>
            </li>
            <li>
              <a href="" className="hover:text-blue-500">
                Voluntario
              </a>
            </li>
            <li className="relative group">
              <a
                href="#section_5"
                className="hover:text-blue-500 cursor-pointer"
              >
                Noticias
              </a>
            </li>
            <li>
              <a href="#section_6" className="hover:text-blue-500">
                Contacto
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:bg-blue-200   px-4 py-2 border border-blue-500 text-blue-500 rounded transition"
              >
                Donar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
