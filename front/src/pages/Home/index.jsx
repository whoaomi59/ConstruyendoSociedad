import Causas from "./causas";
import Fundadores from "./fundadores";
import HeroHome from "./hero";
import Historia from "./historia";
import Noticias from "./noticias";
import Section from "./section";
import Voluntariado from "./voluntariado";
import Voluntario from "./voluntario";

export default function Home({ empresa }) {
  return (
    <>
      <main>
        <HeroHome />
        <Section />
        <Historia />
        <Fundadores />
        <Voluntario />
        <Causas />
        <Voluntariado />
        <Noticias />

        <section class="testimonial-section section-padding section-bg">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-12 mx-auto">
                <h2 class="mb-lg-3">Clientes satisfechos</h2>

                <div
                  id="testimonial-carousel"
                  class="carousel carousel-fade slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="carousel-caption">
                        <h4 class="carousel-title">
                          Lorem Ipsum dolor sit amet, consectetur adipsicing
                          kengan omeg kohm tokito charity theme
                        </h4>

                        <small class="carousel-name">
                          <span class="carousel-name-title">Maria</span>, Boss
                        </small>
                      </div>
                    </div>

                    <div class="carousel-item">
                      <div class="carousel-caption">
                        <h4 class="carousel-title">
                          Sed leo nisl, posuere at molestie ac, suscipit auctor
                          mauris quis metus tempor orci
                        </h4>

                        <small class="carousel-name">
                          <span class="carousel-name-title">Thomas</span>,
                          Partner
                        </small>
                      </div>
                    </div>

                    <div class="carousel-item">
                      <div class="carousel-caption">
                        <h4 class="carousel-title">
                          Lorem Ipsum dolor sit amet, consectetur adipsicing
                          kengan omeg kohm tokito charity theme
                        </h4>

                        <small class="carousel-name">
                          <span class="carousel-name-title">Jane</span>, Advisor
                        </small>
                      </div>
                    </div>

                    <div class="carousel-item">
                      <div class="carousel-caption">
                        <h4 class="carousel-title">
                          Sed leo nisl, posuere at molestie ac, suscipit auctor
                          mauris quis metus tempor orci
                        </h4>

                        <small class="carousel-name">
                          <span class="carousel-name-title">Bob</span>,
                          Entreprenuer
                        </small>
                      </div>
                    </div>

                    <ol class="carousel-indicators">
                      <li
                        data-bs-target="#testimonial-carousel"
                        data-bs-slide-to="0"
                        class="active"
                      >
                        <img
                          src="images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg"
                          class="img-fluid rounded-circle avatar-image"
                          alt="avatar"
                        />
                      </li>

                      <li
                        data-bs-target="#testimonial-carousel"
                        data-bs-slide-to="1"
                        class=""
                      >
                        <img
                          src="images/avatar/portrait-young-redhead-bearded-male.jpg"
                          class="img-fluid rounded-circle avatar-image"
                          alt="avatar"
                        />
                      </li>

                      <li
                        data-bs-target="#testimonial-carousel"
                        data-bs-slide-to="2"
                        class=""
                      >
                        <img
                          src="images/avatar/pretty-blonde-woman-wearing-white-t-shirt.jpg"
                          class="img-fluid rounded-circle avatar-image"
                          alt="avatar"
                        />
                      </li>

                      <li
                        data-bs-target="#testimonial-carousel"
                        data-bs-slide-to="3"
                        class=""
                      >
                        <img
                          src="images/avatar/studio-portrait-emotional-happy-funny.jpg"
                          class="img-fluid rounded-circle avatar-image"
                          alt="avatar"
                        />
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="contact-section section-padding" id="section_6">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-12 ms-auto mb-5 mb-lg-0">
                <div class="contact-info-wrap">
                  <h2>Ponte en contacto con nosotros</h2>

                  <div class="contact-image-wrap d-flex flex-wrap">
                    <img
                      src="images/avatar/pretty-blonde-woman-wearing-white-t-shirt.jpg"
                      class="img-fluid avatar-image"
                      alt=""
                    />

                    <div class="d-flex flex-column justify-content-center ms-3">
                      <p class="mb-0">Anna</p>
                      <p class="mb-0">
                        <strong>Gerente de Recursos Humanos y Oficina</strong>
                      </p>
                    </div>
                  </div>

                  <div class="contact-info">
                    <h5 class="mb-3">Información de contacto</h5>

                    <p class="d-flex mb-2">
                      <i class="bi-geo-alt me-2"></i>
                      {empresa.Ubicacion}
                    </p>

                    <p class="d-flex mb-2">
                      <i class="bi-telephone me-2"></i>

                      <a href="tel: 120-240-9600">{empresa.Telefono}</a>
                    </p>

                    <p class="d-flex">
                      <i class="bi-envelope me-2"></i>
                      <a href="mailto:info@yourgmail.com">{empresa.Email}</a>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-5 col-12 mx-auto">
                <form
                  class="custom-form contact-form"
                  action="#"
                  method="post"
                  role="form"
                >
                  <h2>Contact form</h2>

                  <p class="mb-4">
                    O simplemente puedes enviar un correo electrónico:
                    <a href="#"> info@charity.org </a>
                  </p>
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-12">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        class="form-control"
                        placeholder="Nombre"
                        required
                      />
                    </div>

                    <div class="col-lg-6 col-md-6 col-12">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        class="form-control"
                        placeholder="Apellido"
                        required
                      />
                    </div>
                  </div>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    pattern="[^ @]*@[^ @]*"
                    class="form-control"
                    placeholder="Correo Electronico"
                    required
                  />

                  <textarea
                    name="message"
                    rows="5"
                    class="form-control"
                    id="message"
                    placeholder="¿En qué podemos ayudarte?"
                  ></textarea>

                  <button type="submit" class="form-control">
                    Enviar mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
