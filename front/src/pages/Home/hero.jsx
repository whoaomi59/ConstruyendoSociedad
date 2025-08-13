import { useEffect, useState } from "react";
import axios from "axios";
import { LoaderComponents } from "../../components/content/loader";

export default function HeroHome() {
  const [baner, setBaner] = useState([]);
  const [loader, setloader] = useState(false);
  useEffect(() => {
    const Get = async () => {
      try {
        setloader(true);
        const response = await axios.get("/controllers/baner.php");
        setBaner(response.data);
        return setloader(false);
      } catch (error) {
        setloader(false);
        return alert(error);
      }
    };
    Get();
  }, []);

  if (loader) {
    return <LoaderComponents />;
  }

  return (
    <section class="hero-section hero-section-full-height">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 col-12 p-0">
            <div
              id="hero-slide"
              class="carousel carousel-fade slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {baner.map((item, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    key={index}
                  >
                    <img
                      src={item.Img}
                      className="carousel-image img-fluid w-100"
                      alt={item.Nombre}
                      style={{ objectFit: "cover", height: "500px" }}
                    />
                    <div className="carousel-caption d-flex flex-column justify-content-end rounded">
                      <h1 className="h2 fw-bold text-primary text-wrap">
                        {item.Nombre}
                      </h1>
                      <p className="text-p-color text-wrap">
                        {item.Descripcion}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#hero-slide"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>

              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#hero-slide"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
