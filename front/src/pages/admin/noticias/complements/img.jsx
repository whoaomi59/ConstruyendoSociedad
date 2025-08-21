import { useEffect, useState } from "react";
import axios from "axios";
import { fields } from "./models";
import Loader from "../../../../components/content/loader";
import { ArrowLeft, NotebookPen, Plus, Trash } from "lucide-react";
import Form from "../../../../components/grid/formulario";
import { useParams } from "react-router-dom";

export default function Noticias_Img({ decoded }) {
  const [data, setdata] = useState([]);
  const [refresh, setrefresh] = useState([]);
  const [loader, setloader] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const { id } = useParams();

  const handleFormSubmit = async (newData) => {
    try {
      let response = await axios.post(
        `/controllers/noticias_img.php`,
        {
          noticia_id: id,
          Img: newData.Img,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data.message);
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
      const response = await axios.delete("/controllers/noticias_img.php", {
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
        let response = await axios.get("/controllers/noticias_img.php", {
          params: { id: id },
        });
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
    <div>
      <Form
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingItem(null);
        }}
        fields={fields}
        onSubmit={handleFormSubmit}
        title={editingItem ? `Editar Imagen` : "Imagen"}
        initialValues={editingItem}
      />
      <div className="flex items-center">
        <h1
          className="font-extrabold text-gray-600"
          style={{
            fontSize: "30px",
          }}
        >
          Imagenes de noticias
        </h1>
      </div>
      <div>
        <a href="/admin/noticias" className="text-blue-500 mr-1">
          Noticias
        </a>
        <strong>/</strong>
        <a href="#" className="ml-1">
          Imagen
        </a>
      </div>

      <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
        <button
          type="button"
          className="flex items-center justify-center text-white bg-blue-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 "
          onClick={() => {
            setEditingItem(null);
            setIsModalOpen(true);
          }}
        >
          <Plus />
          Añadir Imagen
        </button>
      </div>
      <div className="p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <div
            key={item.ID}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.Img}
              alt={item.titulo}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <button
                className="p-2 rounded bg-red-500 text-white hover:bg-gray-400 m-0.5"
                title="Editar"
                onClick={() => DeleteRegister(item)}
              >
                <Trash className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
