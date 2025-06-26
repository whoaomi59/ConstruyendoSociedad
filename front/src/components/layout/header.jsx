import * as Icons from "lucide-react";

export default function Header({ empresa }) {
  return (
    <header className="site-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-12 d-flex flex-wrap">
            <p class="d-flex me-4 mb-0">
              <Icons.Telescope className=" me-2 w-5 " />
              {empresa.Ubicacion}
            </p>
            <p class="d-flex mb-0">
              <Icons.Mails className=" me-2 w-5 " />
              <a href="mailto:info@company.com">{empresa.Email}</a>
            </p>
          </div>

          <div class="col-lg-3 col-12 ms-auto d-lg-block d-none">
            <ul class="social-icon">
              <li class="social-icon-item">
                <a href="#" class="social-icon-link bi-twitter"></a>
              </li>

              <li class="social-icon-item">
                <a href="#" class="social-icon-link bi-facebook"></a>
              </li>

              <li class="social-icon-item">
                <a href="#" class="social-icon-link bi-instagram"></a>
              </li>

              <li class="social-icon-item">
                <a href="#" class="social-icon-link bi-youtube"></a>
              </li>

              <li class="social-icon-item">
                <a href="#" class="social-icon-link bi-whatsapp"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
