import {
  Calendar,
  CalendarCheck,
  MessageSquare,
  UsersRound,
} from "lucide-react";

export default function Noticias() {
  return (
    <section class="news-section section-padding" id="section_5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-12 mb-5">
            <h2>Últimas noticias</h2>
          </div>

          <div class="col-lg-7 col-12">
            <div class="news-block">
              <div class="news-block-top">
                <a href="news-detail.html">
                  <img
                    src="images/news/medium-shot-volunteers-with-clothing-donations.jpg"
                    class="news-image img-fluid"
                    alt=""
                  />
                </a>

                <div class="news-category-block">
                  <a href="#" class="category-block-link">
                    Estilo de vida,
                  </a>

                  <a href="#" class="category-block-link">
                    donación de ropa
                  </a>
                </div>
              </div>

              <div class="news-block-info">
                <div class="d-flex mt-2">
                  <div class="news-block-date">
                    <p className="flex">
                      <Calendar className="w-4 mr-2" />
                      20 de octubre de 2036
                    </p>
                  </div>

                  <div class="news-block-author mx-5">
                    <p className="flex">
                      <UsersRound className="w-4 mr-2" />
                      Por Admin
                    </p>
                  </div>

                  <div class="news-block-comment">
                    <p className="flex">
                      <MessageSquare className="w-4 mr-2" />
                      35 comentarios
                    </p>
                  </div>
                </div>

                <div class="news-block-title mb-2">
                  <h4>
                    <a href="news-detail.html" class="news-block-title-link">
                      Donación de ropa a zona urbana
                    </a>
                  </h4>
                </div>

                <div class="news-block-body">
                  <p>
                    Lorem Ipsum dolor sit amet, consectetur adipsicing kengan
                    omeg kohm tokito Professional charity theme based on
                    Bootstrap
                  </p>
                </div>
              </div>
            </div>

            <div class="news-block mt-3">
              <div class="news-block-top">
                <a href="news-detail.html">
                  <img
                    src="images/news/medium-shot-people-collecting-foodstuff.jpg"
                    class="news-image img-fluid"
                    alt=""
                  />
                </a>

                <div class="news-category-block">
                  <a href="#" class="category-block-link">
                    Comida,
                  </a>

                  <a href="#" class="category-block-link">
                    Donación,
                  </a>

                  <a href="#" class="category-block-link">
                    Cuidado
                  </a>
                </div>
              </div>

              <div class="news-block-info">
                <div class="d-flex mt-2">
                  <div class="news-block-date">
                    <p className="flex">
                      <Calendar className="w-4 mr-2" />
                      20 de octubre de 2036
                    </p>
                  </div>

                  <div class="news-block-author mx-5">
                    <p className="flex">
                      <UsersRound className="w-4 mr-2" />
                      Por Admin
                    </p>
                  </div>

                  <div class="news-block-comment">
                    <p className="flex">
                      <MessageSquare className="w-4 mr-2" />
                      35 comentarios
                    </p>
                  </div>
                </div>

                <div class="news-block-title mb-2">
                  <h4>
                    <a href="news-detail.html" class="news-block-title-link">
                      Área de donación de alimentos
                    </a>
                  </h4>
                </div>

                <div class="news-block-body">
                  <p>
                    Sed leo nisl, posuere at molestie ac, suscipit auctor
                    mauris. Etiam quis metus elementum, tempor risus vel,
                    condimentum orci
                  </p>
                </div>
              </div>
            </div>
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

            <div class="news-block news-block-two-col d-flex mt-4">
              <div class="news-block-two-col-image-wrap">
                <a href="news-detail.html">
                  <img
                    src="images/news/africa-humanitarian-aid-doctor.jpg"
                    class="news-image img-fluid"
                    alt=""
                  />
                </a>
              </div>

              <div class="news-block-two-col-info">
                <div class="news-block-title mb-2">
                  <h6>
                    <a href="news-detail.html" class="news-block-title-link">
                      Área de donación de alimentos
                    </a>
                  </h6>
                </div>

                <div class="news-block-date">
                  <p className="flex">
                    <CalendarCheck className="w-5 mr-2" />
                    16 de octubre de 2036
                  </p>
                </div>
              </div>
            </div>

            <div class="news-block news-block-two-col d-flex mt-4">
              <div class="news-block-two-col-image-wrap">
                <a href="news-detail.html">
                  <img
                    src="images/news/close-up-happy-people-working-together.jpg"
                    class="news-image img-fluid"
                    alt=""
                  />
                </a>
              </div>

              <div class="news-block-two-col-info">
                <div class="news-block-title mb-2">
                  <h6>
                    <a href="news-detail.html" class="news-block-title-link">
                      Voluntariado Limpio
                    </a>
                  </h6>
                </div>

                <div class="news-block-date">
                  <p className="flex">
                    <CalendarCheck className="w-5 mr-2" />
                    24 de octubre de 2036
                  </p>
                </div>
              </div>
            </div>

            <div class="category-block d-flex flex-column">
              <h5 class="mb-3">Categorías</h5>

              <a href="#" class="category-block-link">
                Agua potable
                <span class="badge">20</span>
              </a>

              <a href="#" class="category-block-link">
                Donación de alimentos
                <span class="badge">30</span>
              </a>
            </div>

            <div class="tags-block">
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
