export default function Historia() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-20" id="section_2">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <div>
            <img
              src="images/group-people-volunteering-foodbank-poor-people.jpg"
              alt="Nuestra historia"
              className="w-full h-auto rounded-xl shadow-md object-cover"
            />
          </div>

          {/* Contenido */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Nuestra historia
              </h2>
              <h5 className="text-lg text-gray-600 mb-4">
                Construyendo Sociedad, organización sin fines de lucro
              </h5>
              <p className="text-sm text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                amet iste similique adipisci ratione, necessitatibus impedit
                quisquam beatae dignissimos ullam sit ipsam illo quae, quos
                delectus laudantium maxime a perferendis.
              </p>
            </div>

            <div>
              <h5 className="text-lg text-gray-700 font-semibold mb-3">
                Nuestra misión
              </h5>
              <p className="text-sm text-gray-700 leading-relaxed">
                Contribuir al bienestar y desarrollo integral de las comunidades
                urbanas y rurales, priorizando a la población infantil, juvenil,
                madres cabeza de hogar y adultos mayores, mediante programas
                sociales, culturales, educativos, de salud física y mental,
                ambientales, recreativos y de fortalecimiento comunitario.
                Promovemos la participación activa, el empoderamiento ciudadano
                y la construcción de entornos sanos, seguros y resilientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
