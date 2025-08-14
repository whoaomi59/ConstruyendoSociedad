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
      if (newData.ID) {
        let response = await axios.put("/controllers/usuarios.php", newData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        alert(response.data.message);
      } else {
        let response = await axios.post(`/controllers/usuarios.php`, newData, {
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

  const abrirModal = (item) => {
    window.open(
      `/au5Z4YhReMcxh1r0WdbGNrGiMU7+j6CfaUrMxP2TGJNv7ZgI72muOl1gie2Lc7dasdddss/${item.ID}`,
      "popup",
      "width=700,height=600"
    );
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
