import { useState } from "react";
import Donar from "./donar";

export default function Section() {
  const [OpenModal, setOpenModal] = useState(false);

  return (
    <section className="py-16 bg-white" id="inicio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Bienvenido a
          <span className="text-blue-600">Construyendo Sociedad</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-gray-50 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl p-6 cursor-pointer">
            <a href="#section_4" className="flex flex-col items-center">
              <img
                src="images/icons/hands.png"
                alt="Voluntariado"
                className="w-20 h-20 mb-4"
              />
              <p className="text-gray-700 text-lg font-medium">
                Hazte <strong className="text-blue-600">voluntario</strong>
              </p>
            </a>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl p-6 cursor-pointer">
            <a href="#section_3" className="flex flex-col items-center">
              <img
                src="images/icons/heart.png"
                alt="Cuidando la Tierra"
                className="w-20 h-20 mb-4"
              />
              <p className="text-gray-700 text-lg font-medium text-center">
                <strong className="text-green-600">Cuidando</strong> la Tierra
              </p>
            </a>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl p-6 cursor-pointer">
            <button
              onClick={() => setOpenModal(true)}
              className="flex flex-col items-center w-full focus:outline-none"
            >
              <img
                src="images/icons/receive.png"
                alt="Donar"
                className="w-20 h-20 mb-4"
              />
              <p className="text-gray-700 text-lg font-medium">
                Haz una <strong className="text-red-600">donación</strong>
              </p>
            </button>
          </div>
        </div>
      </div>

      <Donar OpenModal={OpenModal} setOpenModal={setOpenModal} />
    </section>
  );
}
