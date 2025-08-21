export default function Configuraciones() {
  const opciones = [
    {
      titulo: "Baners",
      descripcion: "Fondos del inicio de la pagina.",
      icono: "🎨",
      url: "/admin/configuraciones/baners",
    },
    {
      titulo: "Cuentas Bancarias",
      descripcion: "Cuentas bancarias de la empresa.",
      icono: "🔗",
      url: "/admin/configuraciones/bancos",
    },
  ];

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
          <a
            key={index}
            href={opcion.url}
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
          </a>
        ))}
      </div>
    </div>
  );
}
