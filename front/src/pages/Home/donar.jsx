import { useEffect, useState } from "react";
import axios from "axios";

export default function Donar({ OpenModal, setOpenModal }) {
  const [cuentas, setCuentas] = useState([]);

  useEffect(() => {
    const fetchCuentas = async () => {
      try {
        const response = await axios.get("controllers/cuentas_bancarias.php");
        setCuentas(response.data);
      } catch (error) {
        console.error("Error al obtener las cuentas bancarias:", error);
      }
    };

    fetchCuentas();
  }, []);

  return (
    <>
      {OpenModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="relative bg-white w-full max-w-4xl p-10 rounded-3xl shadow-2xl">
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>

            <h2 className="text-4xl font-extrabold mb-4 text-gray-800">
              Apóyanos con tu Donación
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Tu aporte es fundamental para continuar con nuestra labor.
              ¡Gracias por tu generosidad!
            </p>

            {/* Lista de cuentas en grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {cuentas.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.Nombre}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Cuenta: <span className="font-bold">{item.Numero}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setOpenModal(false)}
                className="px-6 py-2 bg-gray-300 text-white rounded hover:bg-gray-400 transition bg-orange-500"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
