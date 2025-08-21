import React, { useState } from "react";
import * as Icons from "lucide-react";
import { Outlet } from "react-router-dom";
import Alert_Access from "../content/alert_access";

const menuItems = [
  { name: "Dashboard", icon: <Icons.ChartPie />, href: "/admin" },
  { name: "Empresa", icon: <Icons.House />, href: "/admin/empresa" },
  { name: "Usuarios", icon: <Icons.User />, href: "/admin/usuarios" },
  { name: "Noticias", icon: <Icons.Newspaper />, href: "/admin/noticias" },
  { name: "Voluntariado", icon: <Icons.Users />, href: "/admin/voluntariado" },
  { name: "Causas", icon: <Icons.Coffee />, href: "/admin/causas" },
  {
    name: "Configuracion",
    icon: <Icons.Cog />,
    href: "/admin/configuraciones",
  },
];

export default function Container({ empresa, decoded }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex  bg-gray-100">
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
          className={`flex items-center justify-between h-16 px-4 border-b border-gray-400
            ${sidebarCollapsed ? "justify-center" : ""}
          `}
        >
          {!sidebarCollapsed && (
            <a href="/">
              <img
                src={empresa.Logo}
                alt={empresa.Nombre}
                className="h-12 w-15"
              />
            </a>
          )}
          <button
            onClick={() => {
              if (window.innerWidth < 768) {
                setSidebarOpen(!sidebarOpen);
              } else {
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
          className={`border-t border-gray-400 px-4 py-4 flex items-center gap-3
            ${sidebarCollapsed ? "justify-center" : ""}
          `}
        >
          <Icons.Power size={20} className="text-red-500" />
          {!sidebarCollapsed && (
            <button
              onClick={() => {
                sessionStorage.removeItem("token");
                window.location.href = "/";
              }}
              className="truncate"
            >
              Salir
            </button>
          )}
        </div>
      </aside>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
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
            <h6 className=" font-semibold text-gray-700 truncate">
              {empresa.Nombre || "AdminPanel"}
            </h6>
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
                {decoded.nombre}
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
        <main className="flex-1 p-4 overflow-auto bg-gray-50 min-h-0">
          <div className="max-w-7xl mx-auto w-full">
            {decoded.rol == "Administrador" ? <Outlet /> : <Alert_Access />}
          </div>
        </main>
      </div>
    </div>
  );
}
