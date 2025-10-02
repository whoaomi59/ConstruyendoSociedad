import { useEffect, useState } from "react";
import axios from "axios";

export default function Fundadores() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const Get = async () => {
      try {
        let get = await axios.get(`/controllers/fundadores.php`);
        console.log(get.data);
        return setData(get.data);
      } catch (error) {
        return console.log("Error Fundadores❌");
      }
    };
    Get();
  }, []);

  return (
    <>
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-12" id="fundadores">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-10 mt-20">
            Fundadores
          </h2>
          <br />

          <div className="space-y-12">
            {data.map((fundador, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } items-center gap-6`}
              >
                <div className="w-full md:w-1/2">
                  <img
                    src={fundador.Img}
                    alt={fundador.Nombre}
                    className="w-full h-120  rounded-lg shadow-md"
                  />
                </div>
                <div className="w-full md:w-1/2 text-gray-700 text-sm leading-relaxed">
                  <h3 className="text-lg font-semibold mb-1">
                    {fundador.Nombre}
                  </h3>
                  <p className="text-xs text-gray-500 mb-2">{fundador.rol}</p>
                  <p className="mb-2">{fundador.Descripcion}</p>
                  <p>{fundador.extra}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
