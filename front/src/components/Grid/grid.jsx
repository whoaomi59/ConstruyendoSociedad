import React, { useState } from "react";
import * as Icons from "lucide-react";
import Form from "./formulario";

const Grid = ({
  columns,
  data,
  actions = [],
  module,
  fields,
  handleFormSubmit,
  button,
  buttonedit,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [viewMode, setViewMode] = useState("table"); // "table" o "cards"

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div class="mx-auto max-w-screen-xl">
      <Form
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingItem(null);
        }}
        fields={fields}
        onSubmit={handleFormSubmit}
        title={editingItem ? `Editar ${module}` : module}
        initialValues={editingItem}
      />
      <h1
        className="font-extrabold text-gray-600 mb-2"
        style={{
          fontSize: "30px",
        }}
      >
        {module}
      </h1>
      <div class="bg-white  relative shadow-md sm:rounded-lg overflow-hidden">
        <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-2 mt-2">
          <div class="w-full md:w-1/2">
            <form class="flex items-center">
              <label for="simple-search" class="sr-only mr-20">
                Buscar
              </label>
              <div class="relative w-full">
                <input
                  type="text"
                  id="simple-search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2                                 "
                  placeholder="Buscar...."
                  required=""
                />
              </div>
            </form>
          </div>
          {button ? (
            ""
          ) : (
            <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <button
                type="button"
                className="flex items-center justify-center text-white bg-blue-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 "
                onClick={() => {
                  setEditingItem(null);
                  setIsModalOpen(true);
                }}
              >
                <Icons.Plus />
                Añadir {module}
              </button>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-2 p-2">
          <button
            className={`px-4 py-2 rounded ${
              viewMode === "table" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setViewMode("table")}
          >
            <Icons.TableCellsMerge />
          </button>
          <button
            className={`px-4 py-2 rounded ${
              viewMode === "cards" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setViewMode("cards")}
          >
            <Icons.AlignLeft />
          </button>
        </div>

        {viewMode === "table" ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-4 py-3">Configuración 🛠️</th>
                  {columns.map((col) => (
                    <th key={col.key} className="px-4 py-3">
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentData.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="px-4 py-3 font-medium text-gray-600 whitespace-nowrap"
                  >
                    <td className="p-4 space-x-2">
                      {!buttonedit && (
                        <button
                          className="p-2 rounded bg-blue-500 text-white hover:bg-gray-400 m-0.5"
                          title="Editar"
                          onClick={() => {
                            setEditingItem(row);
                            setIsModalOpen(true);
                          }}
                        >
                          <Icons.NotebookPen className="w-4 h-4" />
                        </button>
                      )}
                      {actions.map((action, index) => {
                        const IconComponent = Icons[action.icon];
                        return (
                          <button
                            key={index}
                            className={`p-2 rounded ${action.className} hover:bg-gray-400 m-0.5 m-1`}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (typeof action.onClick === "function")
                                action.onClick(row);
                            }}
                            title={action.label}
                          >
                            {IconComponent && (
                              <IconComponent className="w-4 h-4" />
                            )}
                          </button>
                        );
                      })}
                    </td>
                    {columns.map((col) => (
                      <td key={col.key} className="px-4 py-3">
                        {row[col.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {currentData.map((row, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-100 shadow-xl rounded-2xl p-6 border border-gray-200 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300"
              >
                {/* Header de acciones */}
                <div className="flex justify-between items-start mb-4">
                  <div className="text-lg font-semibold text-gray-800">
                    {row[columns[0]?.key]}
                  </div>
                  <div className="flex space-x-2">
                    {!buttonedit && (
                      <button
                        className="p-2 rounded-full bg-blue-500 text-white hover:bg-gray-600"
                        title="Editar"
                        onClick={() => {
                          setEditingItem(row);
                          setIsModalOpen(true);
                        }}
                      >
                        <Icons.NotebookPen className="w-5 h-5" />
                      </button>
                    )}
                    {actions.map((action, actionIndex) => {
                      const IconComponent = Icons[action.icon];
                      return (
                        <button
                          key={actionIndex}
                          className={`p-2 rounded-full ${action.className} hover:bg-opacity-80`}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (typeof action.onClick === "function")
                              action.onClick(row);
                          }}
                          title={action.label}
                        >
                          {IconComponent && (
                            <IconComponent className="w-5 h-5" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  {columns.slice(1).map((col) => (
                    <div key={col.key}>
                      <div className="text-sm text-gray-500">{col.label}</div>
                      <div className="text-base font-medium text-gray-700">
                        {row[col.key]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-between items-center m-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Anterior
          </button>
          <span>
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Grid;
