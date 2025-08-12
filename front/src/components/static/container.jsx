import React, { useState } from "react";
import * as Icons from "lucide-react";
import { Outlet } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: <Icons.House />, href: "#" },
  { name: "Usuarios", icon: <Icons.User />, href: "#" },
  { name: "Configuración", icon: <Icons.Settings />, href: "#" },
  { name: "Reportes", icon: <Icons.ChartPie />, href: "#" },
];

export default function Container() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-white shadow-lg flex flex-col fixed inset-y-0 left-0 z-30
          transform transition-transform duration-300 ease-in-out
          ${sidebarCollapsed ? "w-20" : "w-64"}
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0
        `}
      >
        <div
          className={`flex items-center justify-between h-16 px-4 border-b
            ${sidebarCollapsed ? "justify-center" : ""}
          `}
        >
          {!sidebarCollapsed && (
            <span className="text-lg font-bold text-blue-700">AdminPanel</span>
          )}
          <button
            onClick={() => {
              if (window.innerWidth < 768) {
                // En móvil solo abrir/cerrar sidebar
                setSidebarOpen(!sidebarOpen);
              } else {
                // En desktop colapsar/expandir sidebar
                setSidebarCollapsed(!sidebarCollapsed);
              }
            }}
            aria-label="Toggle sidebar"
            className="p-1 rounded-md hover:bg-gray-200 focus:outline-none"
          >
            {sidebarCollapsed ? <Icons.ChevronRight /> : <Icons.ChevronLeft />}
          </button>
        </div>

        <nav className="flex-1 flex flex-col mt-4 overflow-y-auto">
          {menuItems.map(({ name, icon, href }) => (
            <a
              key={name}
              href={href}
              className={`flex items-center gap-3 px-4 py-3 mx-2 my-1 rounded cursor-pointer
                text-gray-700 hover:bg-blue-200 hover:text-white transition-colors duration-200
                ${sidebarCollapsed ? "justify-center" : "justify-start"}
              `}
            >
              <span className="text-xl">{icon}</span>
              {!sidebarCollapsed && (
                <span className="text-md font-medium whitespace-nowrap">
                  {name}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* User Profile */}
        <div
          className={`border-t px-4 py-4 flex items-center gap-3
            ${sidebarCollapsed ? "justify-center" : ""}
          `}
        >
          <Icons.ShieldUser size={28} className="text-gray-500" />
          {!sidebarCollapsed && (
            <div className="truncate">
              <p className="text-gray-700 font-semibold truncate">Juan Pérez</p>
              <p className="text-sm text-gray-400 truncate">Administrador</p>
            </div>
          )}
        </div>
      </aside>

      {/* Overlay para móvil */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Contenido principal */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out
          ${sidebarCollapsed ? "md:ml-20" : "md:ml-64"}
          ${sidebarOpen ? "translate-x-0" : ""}
        `}
      >
        {/* Header */}
        <header className="flex items-center justify-between bg-white shadow px-6 h-16 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle sidebar"
            >
              {sidebarOpen ? <Icons.X size={24} /> : <Icons.Menu size={24} />}
            </button>
            <h1 className="text-2xl font-semibold text-gray-700 truncate">
              Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Notificaciones */}
            <button
              className="p-2 rounded-full hover:bg-gray-200 transition"
              aria-label="Notificaciones"
            >
              🔔
            </button>
            {/* Perfil */}
            <div className="flex items-center gap-2 cursor-pointer group relative select-none">
              <Icons.ShieldUser size={28} className="text-gray-500" />
              <span className="hidden md:block font-medium text-gray-700 group-hover:text-blue-600 transition truncate">
                Juan Pérez
              </span>
              {/* Tooltip */}
              <div className="absolute right-0 top-full mt-2 w-40 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity text-sm z-20">
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                  <Icons.LogOut /> Cerrar sesión
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-auto bg-gray-50 min-h-0">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 truncate">
            Bienvenido al Panel Administrativo
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Aquí puedes añadir gráficos, tablas, formularios y cualquier
            componente que necesites para administrar tu sistema.
          </p>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
