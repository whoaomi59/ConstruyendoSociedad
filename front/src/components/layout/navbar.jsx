import { useState } from "react";
import * as Icons from "lucide-react";
import { RoutesHome } from "../../mock/axios";
import Donar from "../../pages/Home/donar";

export default function Navbar({ empresa }) {
  const [isOpen, setIsOpen] = useState(false);
  const [OpenModal, setOpenModal] = useState(false);

  return (
    <nav className="shadow-lg p-3 bg-white sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="/" className="flex items-center space-x-3">
          <img
            src={empresa.Logo}
            alt={empresa.Nombre}
            className="h-12 w-auto"
          />
          <div className="text-left">
            <span className="block text-lg font-semibold text-blue-500">
              {empresa.Nombre}
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
            {RoutesHome.map((item) => (
              <li>
                <a
                  href={item.paht}
                  className="text-blue-500 hover:text-blue-500 "
                >
                  {item.nombre}
                </a>
              </li>
            ))}
            <li>
              <a
                onClick={() => setOpenModal((prev) => !prev)}
                className="hover:bg-blue-200   px-4 py-2 border border-blue-500 text-blue-500 rounded transition"
              >
                Donar
              </a>
              <a
                href="/au5Z4YhReMcxh1r0WdbGNrGiMU7+j6CfaUrMxP2TGJNv7ZgI72muOl1gie2Lc7da"
                className="hover:bg-blue-400  px-4 py-2 border border-blue-500 text-white rounded transition bg-blue-500 ml-2"
              >
                Ingresar
              </a>
            </li>
          </ul>
          <Donar OpenModal={OpenModal} setOpenModal={setOpenModal} />
        </div>
      </div>
    </nav>
  );
}
