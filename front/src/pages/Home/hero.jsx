const data = [
  {
    id: 1,
    img: "images/slide/volunteer-helping-with-donation-box.jpg",
    title: "be a Kind Heart",
    label:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, nostrum non?",
  },
  {
    id: 2,
    img: "images/slide/volunteer-selecting-organizing-clothes-donations-charity.jpg",
    title: "be a Kind Heart",
    label:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, nostrum non?",
  },
  {
    id: 3,
    img: "images/slide/medium-shot-people-collecting-donations.jpg",
    title: "be a Kind Heart",
    label:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, nostrum non?",
  },
];

export default function HeroHome() {
  return (
    <section class="hero-section hero-section-full-height">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 col-12 p-0">
            <div
              id="hero-slide"
              class="carousel carousel-fade slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                {data.map((item, index) => (
                  <div class="carousel-item active" key={index}>
                    <img
                      src={item.img}
                      class="carousel-image img-fluid"
                      alt={item.title}
                    />
                    <div class="carousel-caption d-flex flex-column justify-content-end">
                      <h1>{item.title}</h1>
                      <p>{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#hero-slide"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>

              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#hero-slide"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
