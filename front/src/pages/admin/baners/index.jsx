import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "../../../components/grid/grid";
import { fields, ModelsUsuarios } from "./models";
import Loader from "../../../components/content/loader";

export default function BanersAdmin() {
  const [data, setUsuarios] = useState([]);
  const [refresh, setrefresh] = useState([]);
  const [loader, setloader] = useState(false);

  const handleFormSubmit = async (newData) => {
    try {
      if (newData.ID) {
        let response = await axios.post(
          "/controllers/baner_update.php",
          newData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        alert(response.data.message);
      } else {
        let response = await axios.post(`/controllers/baner.php`, newData, {
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

  const DeleteRegister = async (row) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas eliminar este registro?"
    );

    if (!confirmDelete) return;

    try {
      const response = await axios.delete("/controllers/baner.php", {
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

  useEffect(() => {
    const Get = async () => {
      try {
        setloader(true);
        let response = await axios.get("/controllers/baner.php");
        setUsuarios(response.data);
        return setloader(false);
      } catch (error) {
        console.log(error);
        return setloader(false);
      }
    };
    Get();
  }, [refresh]);

  const Formater = data.map((item) => ({
    ID: item.ID,
    Nombre: item.Nombre,
    Img: (
      <img
        src={item.Img}
        style={{
          width: "100px",
          height: "100px",
        }}
      />
    ),
    Descripcion: item.Descripcion,
  }));

  if (loader) {
    return <Loader />;
  }

  return (
    <Grid
      module={"Baners"}
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
