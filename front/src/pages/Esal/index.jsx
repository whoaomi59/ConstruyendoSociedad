import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Esal() {
  const documentos = [
    {
      nombre: "Acta de Asamblea",
      archivo: "/docs/ACTA ASAMBLEA.pdf",
    },
    {
      nombre: "Acta de Constitución",
      archivo: "/docs/Acta de Constitucion Construyendo Sociedad SAH 1.pdf",
    },
    {
      nombre: "Certificación de Antecedentes",
      archivo: "/docs/CERTIFICACION DE ANTECEDENTES.pdf",
    },
    {
      nombre: "Estados Financieros 2025",
      archivo: "/docs/ESTADOS FROS 2025 CONSTRUYENDO SOCIEDAD.pdf",
    },
  ];

  const [pdfSeleccionado, setPdfSeleccionado] = useState(documentos[0].archivo);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Documentación ESAL</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Lista de documentos */}
        <div className="space-y-3">
          {documentos.map((doc) => (
            <button
              key={doc.archivo}
              onClick={() => setPdfSeleccionado(doc.archivo)}
              className="w-full text-left p-4 rounded-xl border bg-white hover:bg-slate-50 hover:shadow transition"
            >
              <p className="font-medium">{doc.nombre}</p>
              <ArrowRight />
            </button>
          ))}
        </div>

        {/* Vista previa */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-xl shadow border overflow-hidden">
            <iframe
              src={pdfSeleccionado}
              title="Vista previa PDF"
              className="w-full h-[800px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
