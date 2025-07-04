import { useState } from "react";
import Donar from "./donar";

export default function Section() {
  const [OpenModal, setOpenModal] = useState(false);

  return (
    <section class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 col-12 text-center mx-auto">
            <h2 class="mb-5">Bienvenido a Construyendo Sociedad</h2>
          </div>

          <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div class="featured-block d-flex justify-content-center align-items-center">
              <a href="donate.html" class="d-block">
                <img
                  src="images/icons/hands.png"
                  class="featured-block-image img-fluid"
                  alt=""
                />

                <p class="featured-block-text">
                  Hazte <strong>voluntario</strong>
                </p>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
            <div class="featured-block d-flex justify-content-center align-items-center">
              <a href="donate.html" class="d-block">
                <img
                  src="images/icons/heart.png"
                  class="featured-block-image img-fluid"
                  alt=""
                />

                <p class="featured-block-text">
                  <strong>Cuidando</strong> la Tierra
                </p>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
            <div class="featured-block d-flex justify-content-center align-items-center">
              <button
                onClick={() => setOpenModal((prev) => !prev)}
                class="d-block"
              >
                <img
                  src="images/icons/receive.png"
                  class="featured-block-image img-fluid"
                  alt=""
                />

                <p class="featured-block-text">
                  Haz una <strong>donación</strong>
                </p>
              </button>
            </div>
          </div>
          <Donar OpenModal={OpenModal} setOpenModal={setOpenModal} />
        </div>
      </div>
    </section>
  );
}
