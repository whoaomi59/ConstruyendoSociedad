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
        <Voluntariado empresa={empresa} />
        <Noticias />

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
                      <a href={`mailto:${empresa.Email}`}>{empresa.Email}</a>
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
                  <h2>Formulario de contacto</h2>

                  <p class="mb-4">
                    O simplemente puedes enviar un correo electrónico:
                    <a href={`mailto:${empresa.Email}`}>{empresa.Email}</a>
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
