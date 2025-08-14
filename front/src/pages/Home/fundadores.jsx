export default function Fundadores() {
  const fundadores = [
    {
      nombre: "Elian Felipe",
      rol: "Socio cofundador",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit eveniet sint porro.",
      extra:
        "No se permite redistribuir esta plantilla ZIP en otros sitios. Contacta a TemplateMo para más información.",
      imagen:
        "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyZmlsfGVufDB8fDB8fHww",
    },
    {
      nombre: "Elian Felipe",
      rol: "Socio cofundador",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit eveniet sint porro.",
      extra:
        "No se permite redistribuir esta plantilla ZIP en otros sitios. Contacta a TemplateMo para más información.",
      imagen:
        "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyZmlsfGVufDB8fDB8fHww",
    },
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-12" id="fundadores">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
          Fundadores
        </h2>

        <div className="space-y-12">
          {fundadores.map((fundador, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-6`}
            >
              {/* Imagen más pequeña */}
              <div className="w-full md:w-1/2">
                <img
                  src={fundador.imagen}
                  alt={fundador.nombre}
                  className="w-full h-70 object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Texto más pequeño */}
              <div className="w-full md:w-1/2 text-gray-700 text-sm leading-relaxed">
                <h3 className="text-lg font-semibold mb-1">
                  {fundador.nombre}
                </h3>
                <p className="text-xs text-gray-500 mb-2">{fundador.rol}</p>
                <p className="mb-2">{fundador.descripcion}</p>
                <p>{fundador.extra}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
