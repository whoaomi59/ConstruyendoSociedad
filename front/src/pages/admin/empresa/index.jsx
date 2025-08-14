import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "../../../components/grid/grid";
import { fields, ModelsUsuarios } from "./models";
import Loader from "../../../components/content/loader";
import { Pencil } from "lucide-react";

export default function Empresa() {
  const [data, setUsuarios] = useState([]);
  const [refresh, setrefresh] = useState([]);
  const [loader, setloader] = useState(false);

  useEffect(() => {
    const Get = async () => {
      try {
        setloader(true);
        let response = await axios.get("/controllers/empresa.php");
        console.log(response.data);
        setUsuarios(response.data[0]);
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
    <div className="min-h-screen  p-2 sm:p-4">
      <div className="bg-white rounded-lg shadow-xl pb-8">
        <div className="w-full h-40 sm:h-64">
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
            className="w-full h-full object-cover rounded-t-lg"
            alt="Cover"
          />
        </div>
        <div className="flex flex-col items-center -mt-16 sm:-mt-20 px-2 text-center">
          <img
            src={data.Logo}
            className="w-28 sm:w-40 border-4 border-white rounded-full bg-white"
            alt="Profile"
          />

          <p className="text-gray-700 text-sm sm:text-base">{data.Nombre}</p>
          <p className="text-xs sm:text-sm text-gray-500">{data.Ubicacion}</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-4 px-4">
          <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100 w-full sm:w-auto">
            <Pencil className="w-4.5" />
            <span>Editar</span>
          </button>
        </div>
        <div className="mt-6 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Acerca de</h3>
            <p className="text-sm text-gray-600">{data.Descripcion}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Información personal</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                <strong>Email:</strong> {data.Email}
              </li>
              <li>
                <strong>Phone:</strong> {data.Telefono}
              </li>
              <li>
                <strong>Location:</strong> {data.Ubicacion}
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Estadística</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Proyectos completados: más de 120</li>
              <li>Seguidores: más de 5000</li>
              <li>Años de experiencia: 8</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
