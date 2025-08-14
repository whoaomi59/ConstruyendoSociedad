import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "../../../components/grid/grid";
import { fields, ModelsUsuarios } from "./models";
import Loader from "../../../components/content/loader";

export default function Noticias({ decoded }) {
  const [data, setdata] = useState([]);
  const [refresh, setrefresh] = useState([]);
  const [loader, setloader] = useState(false);

  console.log(decoded);

  const handleFormSubmit = async (newData) => {
    try {
      if (newData.ID) {
        let response = await axios.put("/controllers/noticias.php", newData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        alert(response.data.message);
      } else {
        let response = await axios.post(
          `/controllers/noticias.php`,
          {
            Nombre: newData.Nombre,
            Descripcion: newData.Descripcion,
            Etiquetas: newData.Etiquetas,
            Usuario: decoded.nombre,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        alert(response.data.message);
      }
      return setrefresh((prev) => !prev);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    const Get = async () => {
      try {
        setloader(true);
        let response = await axios.get("/controllers/noticias.php");
        setdata(response.data);
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
      module={"Noticias"}
      columns={ModelsUsuarios}
      data={data}
      fields={fields}
      handleFormSubmit={handleFormSubmit}
      actions={[
        {
          icon: "ImageMinus",
          className: "bg-gray-500 text-white",
          onClick: (record) => abrirModal(record),
        },
        {
          icon: "MessagesSquare",
          className: "bg-green-500 text-white",
          onClick: (record) => abrirModal(record),
        },
      ].filter(Boolean)}
    />
  );
}
