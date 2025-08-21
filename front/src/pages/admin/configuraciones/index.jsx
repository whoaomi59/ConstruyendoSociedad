import { useState } from "react";
import axios from "axios";

export default function Configuraciones() {
  const opciones = [
    {
      titulo: "Baners",
      descripcion: "Fondos del inicio de la pagina.",
      icono: "🎨",
    },
    {
      titulo: "Cuentas Bancarias",
      descripcion: "Cuentas bancarias de la empresa.",
      icono: "🔗",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
  const [formData, setFormData] = useState({ nombre: "", descripcion: "" });

  const handleOpenModal = (opcion) => {
    setOpcionSeleccionada(opcion);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({ nombre: "", descripcion: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/controllers/config.php", formData, {
        headers: { "Content-Type": "application/json" },
      });
      alert(response.data.message);
      handleCloseModal();
    } catch (error) {
      alert("Error al enviar: " + error.message);
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <h1
        className="text-3xl font-bold text-gray-800 mb-6 text-center"
        style={{
          fontSize: 35,
        }}
      >
        Configuraciones
      </h1>

      {/* Tarjetas */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {opciones.map((opcion, index) => (
          <div
            key={index}
            onClick={() => handleOpenModal(opcion)}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 cursor-pointer border border-gray-200 hover:border-blue-500"
          >
            <div className="text-3xl mb-4">{opcion.icono}</div>
            <h2
              className="text-xl font-semibold text-gray-800"
              style={{
                fontSize: 25,
              }}
            >
              {opcion.titulo}
            </h2>
            <p className="text-gray-600 mt-2">{opcion.descripcion}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <h2 className="text-xl font-bold mb-4">
              {opcionSeleccionada?.titulo}
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={(e) =>
                    setFormData({ ...formData, nombre: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Descripción
                </label>
                <textarea
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={(e) =>
                    setFormData({ ...formData, descripcion: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                ></textarea>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
