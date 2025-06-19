export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-blue shadow-lg">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img
            src="./img/logos/logo 1.png"
            class="logo img-fluid"
            alt="CONSTRUYENDO SOCIEDAD"
          />
          <span className="text-blue-500">
            CONSTRUYENDO SOCIEDAD
            <small>Fundacion</small>
          </span>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link click-scroll" href="#top">
                Home
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link click-scroll" href="#section_2">
                About
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link click-scroll" href="#section_3">
                Causes
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link click-scroll" href="#section_4">
                Volunteer
              </a>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link click-scroll dropdown-toggle"
                href="#section_5"
                id="navbarLightDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                News
              </a>

              <ul
                class="dropdown-menu dropdown-menu-light"
                aria-labelledby="navbarLightDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="news.html">
                    News Listing
                  </a>
                </li>

                <li>
                  <a class="dropdown-item" href="news-detail.html">
                    News Detail
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a class="nav-link click-scroll" href="#section_6">
                Contact
              </a>
            </li>

            <li class="nav-item ms-3">
              <a
                class="nav-link custom-btn custom-border-btn btn"
                href="donate.html"
              >
                Donate
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
