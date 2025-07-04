import {
  Calendar,
  CalendarCheck,
  MessageSquare,
  UsersRound,
} from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { LoaderComponents } from "../../components/content/loader";

export default function Noticias() {
  const [ultimanoticias, setUltimanoticia] = useState([]);
  const [noticiasrecientes, setNoticiasrecientes] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const UltimaNoticias = async () => {
      try {
        setLoader(true);
        const response = await axios.get(
          "controllers/noticias_join.php?action=ultimanoticias"
        );
        const noticiasrecientes = await axios.get(
          "controllers/noticias_join.php?action=noticiasrecientes"
        );
        setUltimanoticia(response.data);
        setNoticiasrecientes(noticiasrecientes.data);
        return setLoader(false);
      } catch (error) {
        console.table(error);
        return setLoader(false);
      }
    };
    UltimaNoticias();
  }, []);

  if (loader) {
    return <LoaderComponents />;
  }

  return (
    <section class="news-section section-padding" id="section_5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-12 mb-5">
            <h2>Últimas noticias</h2>
          </div>

          <div class="col-lg-7 col-12">
            {ultimanoticias.map((item, index) => (
              <div class="news-block" key={index}>
                <div class="news-block-top">
                  <a href="news-detail.html">
                    <img src={item.Img} class="news-image img-fluid" alt="" />
                  </a>

                  <div class="news-category-block">
                    <a href="#" class="category-block-link">
                      {item.Etiquetas}
                    </a>
                  </div>
                </div>

                <div class="news-block-info">
                  <div class="d-flex mt-2">
                    <div class="news-block-date">
                      <p className="flex">
                        <Calendar className="w-4 mr-2" />
                        {item.Fecha}
                      </p>
                    </div>

                    <div class="news-block-author mx-5">
                      <p className="flex">
                        <UsersRound className="w-4 mr-2" />
                        {item.Usuario}
                      </p>
                    </div>

                    <div class="news-block-comment">
                      <p className="flex">
                        <MessageSquare className="w-4 mr-2" />
                        {item.total_comentarios} comentarios
                      </p>
                    </div>
                  </div>

                  <div class="news-block-title mb-2">
                    <h4>
                      <a href="news-detail.html" class="news-block-title-link">
                        {item.Nombre}
                      </a>
                    </h4>
                  </div>

                  <div class="news-block-body">
                    <p>{item.Descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div class="col-lg-4 col-12 mx-auto">
            <form
              class="custom-form search-form"
              action="#"
              method="get"
              role="form"
            >
              <input
                name="search"
                type="search"
                class="form-control"
                id="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button type="submit" class="form-control">
                <i class="bi-search"></i>
              </button>
            </form>

            <h5 class="mt-5 mb-3">Noticias recientes</h5>

            {noticiasrecientes.map((item, index) => (
              <div
                class="news-block news-block-two-col d-flex mt-4"
                key={index}
              >
                <div class="news-block-two-col-image-wrap">
                  <a href="news-detail.html">
                    <img
                      src={item.Img}
                      className="w-full h-full object-cover"
                      alt={item.Nombre}
                    />
                  </a>
                </div>

                <div class="news-block-two-col-info">
                  <div class="news-block-title mb-2">
                    <h6>
                      <a href="news-detail.html" class="news-block-title-link">
                        {item.Nombre}
                      </a>
                    </h6>
                  </div>

                  <div class="news-block-date">
                    <p className="flex">
                      <CalendarCheck className="w-5 mr-2" />
                      {item.Fecha}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div class="tags-block mt-5">
              <h5 class="mb-3">Etiquetas</h5>

              <a href="#" class="tags-block-link">
                Donación
              </a>

              <a href="#" class="tags-block-link">
                Ropa
              </a>

              <a href="#" class="tags-block-link">
                Alimento
              </a>

              <a href="#" class="tags-block-link">
                Niños
              </a>
            </div>

            <form
              class="custom-form subscribe-form"
              action="#"
              method="get"
              role="form"
            >
              <h5 class="mb-4">Formulario de boletín informativo</h5>

              <input
                type="email"
                name="subscribe-email"
                id="subscribe-email"
                pattern="[^ @]*@[^ @]*"
                class="form-control"
                placeholder="Correo electronico"
                required
              />

              <div class="col-lg-12 col-12">
                <button type="submit" class="form-control">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
