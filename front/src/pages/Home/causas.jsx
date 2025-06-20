import { MockCausas } from "../../mock/causas";

export default function Causas() {
  return (
    <section class="section-padding" id="section_3">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-12 text-center mb-4">
            <h2>Nuestras causas</h2>
          </div>
          {MockCausas.map((item, index) => (
            <div class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
              <div class="custom-block-wrap">
                <img
                  src={item.img}
                  class="custom-block-image img-fluid"
                  alt=""
                />

                <div class="custom-block">
                  <div class="custom-block-body">
                    <h5 class="mb-3">{item.nombre}</h5>

                    <p>{item.descripcion}</p>

                    <div class="progress mt-4">
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
                    </div>
                  </div>

                  <a href="donate.html" class="custom-btn btn">
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
