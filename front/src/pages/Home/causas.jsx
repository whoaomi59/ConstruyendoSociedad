import { useEffect, useState } from "react";
import axios from "axios";

export default function Causas() {
  const [causas, setCausas] = useState([]);
  useEffect(() => {
    const Get = async () => {
      try {
        const response = await axios.get("/controllers/causas.php");
        return setCausas(response.data);
      } catch (error) {
        alert(error);
      }
    };
    Get();
  }, []);

  return (
    <section class="section-padding" id="section_3">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-12 text-center mb-4">
            <h2>Nuestras causas</h2>
          </div>
          {causas.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0" key={index}>
              <div className="custom-block-wrap">
                <img
                  src={item.Img}
                  className="custom-block-image img-fluid"
                  alt=""
                  style={{
                    height: "280px", // o 300px según lo necesites
                    width: "100%",
                    objectFit: "cover", // llena el contenedor recortando si es necesario
                    borderRadius: "10px", // opcional
                  }}
                />

                <div className="custom-block">
                  <div className="custom-block-body">
                    <h5 className="mb-3">{item.Nombre}</h5>
                    <p>{item.Descripcion}</p>
                  </div>

                  <a href="donate.html" className="custom-btn btn">
                    Dona ahora
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
{
  /*  <div class="progress mt-4">
                      <div
                        class="progress-bar w-75"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>

                    <div class="d-flex align-items-center my-2">
                      <p class="mb-0">
                        <strong className="mr-2">Recaudado:</strong>$
                        {item.recaudo}
                      </p>

                      <p class="ms-auto mb-0">
                        <strong className="mr-2">Meta:</strong>${item.meta}
                      </p>
                    </div> */
}
