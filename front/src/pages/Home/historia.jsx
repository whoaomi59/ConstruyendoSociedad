import { useEffect, useState } from "react";
import axios from "axios";

export default function Historia() {
  const [data, setdata] = useState([]);
  const [dataimg, setdataimg] = useState([]);
  //Funcioal✅
  useEffect(() => {
    const Get = async () => {
      try {
        let data = await axios.get("/controllers/historia.php");
        setdata(data.data);
      } catch (error) {
        console.log("Error al consultar❌");
      }
    };
    const Get_img = async () => {
      try {
        let data = await axios.get("/controllers/historia_img.php");
        setdataimg(data.data[0]);
      } catch (error) {
        console.log("Error al consultar❌");
      }
    };
    Get_img();
    Get();
  }, []);
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-20" id="section_2">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={dataimg.Img}
              alt="Nuestra historia"
              className="w-full h-auto rounded-xl shadow-md object-cover"
            />
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Nuestra historia
            </h2>
            {data.map((item) => (
              <div>
                <h5 className="text-lg text-gray-600 mb-4">{item.Nombre}</h5>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.Descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
