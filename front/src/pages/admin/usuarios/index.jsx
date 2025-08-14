import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "../../../components/grid/grid";
import { fields, ModelsUsuarios } from "./models";
import Loader from "../../../components/content/loader";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [refresh, setrefresh] = useState([]);
  const [loader, setloader] = useState(false);

  const handleFormSubmit = async (newData) => {
    try {
      if (newData.id) {
        let response = await axios.put(
          "/api/usuarios/controller.php",
          {
            id: newData.id,
            nombre: newData.nombre,
            telefono: newData.telefono,
            rol: newData.rol,
            ApiKey: newData.ApiKey,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response);
      } else {
        let response = await axios.post(`/api/usuarios/controller.php`, {
          email: newData.email,
          empresa_id: 1,
          nombre: newData.nombre,
          password: newData.password,
          rol: newData.rol,
          telefono: newData.telefono,
        });
        console.log(response);
      }
      setrefresh((prev) => !prev);
      alert("Exito!");
    } catch (error) {
      alert("Error!");
    }
  };

  useEffect(() => {
    const Get = async () => {
      try {
        setloader(true);
        let response = await axios.get("/controllers/usuarios.php");
        setUsuarios(response.data);
        return setloader(false);
      } catch (error) {
        console.log(error);
        return setloader(false);
      }
    };
    Get();
  }, [refresh]);

  if (loader) {
    return <Loader />;
  }

  return (
    <Grid
      module={"Usuarios"}
      columns={ModelsUsuarios}
      data={usuarios}
      fields={fields}
      handleFormSubmit={handleFormSubmit}
      actions={[
        {
          icon: "KeyIcon",
          className: "bg-gray-500 text-white",
          onClick: (record) => abrirModal(record),
        },
      ].filter(Boolean)}
    />
  );
}
