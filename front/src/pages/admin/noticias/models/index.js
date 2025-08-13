export const ModelsUsuarios = [
  { key: "ID", label: "N°" },
  { key: "Nombre", label: "Nombre" },
  { key: "Descripcion", label: "Descripcion" },
  { key: "Etiquetas", label: "Etiquetas" },
  { key: "Usuario", label: "Usuario" },
  { key: "Estado", label: "Estado" },
  { key: "Fecha", label: "Fecha" },
];

export const fields = [
  { name: "nombre", label: "Nombre", type: "text" },
  { name: "email", label: "Correo", type: "email" },
  { name: "telefono", label: "Telefono", type: "number" },
  { name: "ApiKey", label: "Key Api whatsApp", type: "number" },
  {
    name: "rol",
    label: "Rol",
    type: "select",
    options: [
      { value: "admin", label: "admin" },
      { value: "negocio", label: "negocio" },
      { value: "cliente", label: "cliente" },
      { value: "domiciliario", label: "domiciliario" },
    ],
  },
  { name: "password", label: "Password", type: "text" },
  { name: "id", label: "ID", type: "number", disable: true },
];
