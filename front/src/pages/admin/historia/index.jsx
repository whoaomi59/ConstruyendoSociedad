import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "../../../components/grid/grid";
import { fields, ModelsUsuarios } from "./models";
import Loader from "../../../components/content/loader";

export default function HistoriaAdmin() {
  const [usuarios, setUsuarios] = useState([]);
  const [data, setdata] = useState({});
  const [refresh, setrefresh] = useState([]);
  const [loader, setloader] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null); // Estado para la imagen

  //Funcional ✅
  const handleFormSubmit = async (newData) => {
    try {
      if (newData.ID) {
        let response = await axios.put("/controllers/historia.php", newData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        alert(response.data.message);
      } else {
        let response = await axios.post(`/controllers/historia.php`, newData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        alert(response.data.message);
      }
      return setrefresh((prev) => !prev);
    } catch (error) {
      return alert(error);
    }
  };
  //Funcional ✅
  const DeleteRegister = async (row) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas eliminar este registro?"
    );

    if (!confirmDelete) return;

    try {
      const response = await axios.delete("/controllers/historia.php", {
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

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFormSubmit_img = async () => {
    if (!selectedFile) {
      alert("Seleccione una imagen primero");
      return;
    }

    const formData = new FormData();
    formData.append("Img", selectedFile);

    try {
      let response = await axios.post(
        "/controllers/historia_img.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(response.data.message);
      setSelectedFile(null); // limpiar estado
      setrefresh((prev) => !prev); // refrescar data
    } catch (error) {
      alert("Error al enviar imagen: " + error);
    }
  };

  //Funcional ✅
  const DeleteRegister_img = async (row) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas eliminar este registro?"
    );

    if (!confirmDelete) return;

    try {
      const response = await axios.delete("/controllers/historia_img.php", {
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
  //Funcional ✅
  useEffect(() => {
    const Get = async () => {
      try {
        setloader(true);
        let response = await axios.get("/controllers/historia.php");
        setUsuarios(response.data);
        return setloader(false);
      } catch (error) {
        console.log(error);
        return setloader(false);
      }
    };
    const Get_img = async () => {
      try {
        setloader(true);
        let response = await axios.get("/controllers/historia_img.php");
        setdata(response.data[0] || {});
        return setloader(false);
      } catch (error) {
        console.log(error);
        return setloader(false);
      }
    };
    Get();
    Get_img();
  }, [refresh]);

  if (loader) {
    return <Loader />;
  }

  return (
    <>
      <div className="flexx">
        <div>
          {data && data.Img ? (
            <img src={data.Img} alt="" className="w-40" />
          ) : (
            <div className="bg-white p-5">
              <input type="file" onChange={handleFileChange} />{" "}
              {/* captura archivo */}
              <button
                onClick={handleFormSubmit_img} // aquí ya envía la imagen
                className="px-4 py-2 bg-green-500 rounded disabled:opacity-50"
              >
                Guardar
              </button>
            </div>
          )}

          {data.Img && (
            <button
              onClick={() => DeleteRegister_img(data)}
              className="px-4 py-2 bg-red-500 rounded disabled:opacity-50 mt-2"
            >
              eliminar
            </button>
          )}
        </div>
      </div>
      <Grid
        module={"Historia"}
        columns={ModelsUsuarios}
        data={usuarios}
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
    </>
  );
}
