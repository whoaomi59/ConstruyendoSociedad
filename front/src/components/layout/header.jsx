export default function Header() {
  return (
    <header className="site-header bg-blue-500">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-12 d-flex flex-wrap">
            <p class="d-flex me-4 mb-0">
              <i class="bi-geo-alt me-2"></i>
              Akershusstranda 20, 0150 Oslo, Norway
            </p>

            <p class="d-flex mb-0">
              <i class="bi-envelope me-2"></i>

              <a href="mailto:info@company.com">info@company.com</a>
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
