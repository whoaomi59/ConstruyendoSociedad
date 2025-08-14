import { useState } from "react";
import axios from "axios";

export default function Voluntariado() {
  const [Nombre, setNombre] = useState("");
  const [Email, setEmail] = useState("");
  const [Comentario, setComentario] = useState("");
  const [mensaje, setMensaje] = useState("");

  console.log(Comentario);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Nombre", Nombre);
    formData.append("Email", Email);
    formData.append("Comentario", Comentario);

    try {
      const response = await axios.post("controllers/voluntario.php", formData);
      console.log(response.data);
      setMensaje("✅ Formulario enviado correctamente");
    } catch (error) {
      console.error(error);
      setMensaje("❌ Error al conectar con el servidor.");
    }
  };

  return (
    <section className="volunteer-section section-padding" id="section_4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h2 className="text-white mb-4">Voluntario</h2>

            <form
              className="custom-form volunteer-form mb-5 mb-lg-0"
              onSubmit={handleSubmit}
            >
              <h3 className="mb-4">Conviértete en voluntario hoy</h3>

              <div className="row">
                <div className="col-lg-6 col-12">
                  <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    placeholder="Nombre Completo"
                    value={Nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                </div>

                <div className="col-lg-6 col-12">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Correo electrónico"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <textarea
                name="comentario"
                rows="3"
                className="form-control"
                placeholder="Comentario (Opcional)"
                value={Comentario}
                onChange={(e) => setComentario(e.target.value)}
              ></textarea>

              <button type="submit" className="form-control mt-3">
                Enviar
              </button>

              {mensaje && (
                <p className="mt-3 text-white bg-success p-2 rounded">
                  {mensaje}
                </p>
              )}
            </form>
          </div>

          <div className="col-lg-6 col-12">
            <img
              src="images/smiling-casual-woman-dressed-volunteer-t-shirt-with-badge.jpg"
              className="volunteer-image img-fluid"
              alt=""
            />

            <div className="custom-block-body text-center">
              <h4 className="text-white mt-lg-3 mb-lg-3">
                Acerca del voluntariado
              </h4>

              <p className="text-white">
                Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg
                kohm tokito.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
