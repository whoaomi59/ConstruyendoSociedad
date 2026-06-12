import { useEffect, useState } from "react";
import axios from "axios";
import { fields, ModelsUsuarios } from "./models";
import Loader from "../../../components/content/loader";
import Grid from "../../../components/grid/grid";

export default function Gerentes() {
  const [data, setUsuarios] = useState([]);
  const [refresh, setrefresh] = useState([]);
  const [loader, setloader] = useState(false);

  //Funcional✅
  const handleFormSubmit = async (newData) => {
    try {
      if (newData.ID) {
        let response = await axios.post(
          "/controllers/gerentes_update.php",
          newData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );
        alert(response.data.message);
      } else {
        let response = await axios.post(`/controllers/gerentes.php`, newData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        alert(response.data.message);
      }
      return setrefresh((prev) => !prev);
    } catch (error) {
      alert(error);
    }
  };
  //Funcional✅
  const DeleteRegister = async (row) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas eliminar este registro?",
    );

    if (!confirmDelete) return;

    try {
      const response = await axios.delete("/controllers/gerentes.php", {
        data: { ID: row.ID },
        headers: {
          "Content-Type": "application/json",
        },
      });

      setrefresh((prev) => !prev);
      alert(response.data.message);
    } catch (error) {
      alert("Error al eliminar: " + error);
    }
  };
  //Funcional✅
  useEffect(() => {
    const Get = async () => {
      try {
        setloader(true);
        let response = await axios.get("/controllers/gerentes.php");
        setUsuarios(response.data);
        return setloader(false);
      } catch (error) {
        console.log(error);
        return setloader(false);
      }
    };
    Get();
  }, [refresh]);
  //Funcional✅
  const Formater = data.map((item) => ({
    ID: item.ID,
    Nombre: item.Nombre,
    Img: <img src={item.Img} className="w-20" />,
    Descripcion: item.Descripcion,
  }));

  if (loader) {
    return <Loader />;
  }

  return (
    <Grid
      module={"Fundadores"}
      columns={ModelsUsuarios}
      data={Formater}
      fields={fields}
      handleFormSubmit={handleFormSubmit}
      actions={[
        {
          icon: "Trash",
          className: "bg-red-500 text-white",
          onClick: (record) => DeleteRegister(record),
        },
      ].filter(Boolean)}
    />
  );
}
