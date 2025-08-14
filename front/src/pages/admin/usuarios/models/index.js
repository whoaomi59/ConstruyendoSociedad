export const ModelsUsuarios = [
  { key: "ID", label: "N°" },
  { key: "Nombre", label: "Nombre" },
  { key: "Correo", label: "Correo" },
  { key: "Rol", label: "Rol" },
  { key: "Contraseña", label: "Contraseña" },
];

export const fields = [
  { name: "Nombre", label: "Nombre", type: "text" },
  { name: "Correo", label: "Correo", type: "email" },
  {
    name: "Rol",
    label: "Rol",
    type: "select",
    options: [
      { value: "Administrador", label: "Administrador" },
      { value: "Invitado", label: "Invitado" },
    ],
  },
  { name: "ID", label: "ID", type: "number", disable: true },
];
