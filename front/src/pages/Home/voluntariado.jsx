export default function Voluntariado() {
  return (
    <section class="volunteer-section section-padding" id="section_4">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-12">
            <h2 class="text-white mb-4">Voluntario</h2>

            <form
              class="custom-form volunteer-form mb-5 mb-lg-0"
              action="#"
              method="post"
              role="form"
            >
              <h3 class="mb-4">Conviértete en voluntario hoy</h3>

              <div class="row">
                <div class="col-lg-6 col-12">
                  <input
                    type="text"
                    name="volunteer-name"
                    id="volunteer-name"
                    class="form-control"
                    placeholder="Nombre Completo"
                    required
                  />
                </div>

                <div class="col-lg-6 col-12">
                  <input
                    type="email"
                    name="volunteer-email"
                    id="volunteer-email"
                    pattern="[^ @]*@[^ @]*"
                    class="form-control"
                    placeholder="Correo electronico"
                    required
                  />
                </div>
              </div>

              <textarea
                name="volunteer-message"
                rows="3"
                class="form-control"
                id="volunteer-message"
                placeholder="Comentario (Optional)"
              ></textarea>

              <button type="submit" class="form-control">
                Submit
              </button>
            </form>
          </div>

          <div class="col-lg-6 col-12">
            <img
              src="images/smiling-casual-woman-dressed-volunteer-t-shirt-with-badge.jpg"
              class="volunteer-image img-fluid"
              alt=""
            />

            <div class="custom-block-body text-center">
              <h4 class="text-white mt-lg-3 mb-lg-3">
                Acerca del voluntariado
              </h4>

              <p class="text-white">
                Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg
                kohm tokito Professional charity theme based
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
