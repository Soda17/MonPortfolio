function About() {
  return (
    <section
      id="apropos"
      className="py-20 bg-gray-50 text-gray-900 border-t border-gray-100 scroll-mt-20"
    >
      <div className="container mx-auto px-6 max-w-6xl">

        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            À propos de moi
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Ingénieure en développement Web & Mobile, spécialisée dans la
            conception d'applications modernes, performantes et adaptées aux
            besoins métiers.
          </p>
        </div>

        {/* Contenu */}
        <div className="grid lg:grid-cols-3 gap-10 items-start">

          {/* Présentation */}
          <div className="lg:col-span-2 space-y-6 text-gray-600 text-lg leading-8">

            <p>
              Diplômée d'un{" "}
              <strong className="text-gray-900">
                Master en Ingénierie de Conception et Développement
                d'Applications
              </strong>
              , je suis spécialisée dans le développement Full-Stack et Mobile.
              Je conçois des applications web et mobiles modernes en mettant
              l'accent sur la qualité du code, les bonnes pratiques de
              développement et l'expérience utilisateur.
            </p>

            <p>
              Au cours de mon parcours académique, de mes projets personnels et
              de mon expérience professionnelle, j'ai acquis une solide maîtrise
              du cycle de vie d'une application : analyse des besoins,
              modélisation, conception, développement, tests, intégration et
              déploiement.
            </p>

            <p>
              Je développe principalement avec{" "}
              <strong className="text-orange-600">
                Java, Spring Boot, Angular, React Native, PHP et PostgreSQL
              </strong>
              . Ces technologies m'ont permis de réaliser plusieurs projets
              concrets, notamment une plateforme de digitalisation de l'état
              civil, une application mobile de gestion des interventions sur
              site, une application professionnelle développée lors de mon stage
              chez <strong>Adaptive IT</strong>, ainsi qu'une plateforme web de
              planification intelligente des repas.
            </p>

            <p>
              Aujourd'hui, je souhaite intégrer une équipe dynamique afin de
              contribuer à des projets innovants, mettre en pratique mes
              compétences techniques et continuer à évoluer en tant
              qu'ingénieure en développement logiciel.
            </p>

          </div>

          {/* Carte Informations */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-7">

            <h3 className="text-lg font-bold text-orange-600 mb-6">
              Mon parcours
            </h3>

            <div className="space-y-6">

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Master
                </h4>
                <p className="text-sm text-gray-600">
                  Ingénierie de Conception et Développement d'Applications
                </p>
                <p className="text-xs text-gray-400">
                  EMSA Casablanca - IMI Developper
                </p>
              </div>
              

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Licence Informatique
                </h4>
                <p className="text-sm text-gray-600">
                  Projet de Fin d'Études : Digitalisation de l'État Civil
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Stage Professionnel
                </h4>
                <p className="text-sm text-gray-600">
                  Développeuse Mobile Android
                </p>
                <p className="text-xs text-gray-400">
                  Adaptive IT • Développement d'une application mobile
                  professionnelle
                </p>
              </div>

            </div>

            {/* Technologies */}
            <div className="mt-8">

              <h3 className="text-lg font-bold text-orange-600 mb-4">
                Technologies principales
              </h3>

              <div className="flex flex-wrap gap-2">

                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                  Java
                </span>

                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                  Spring Boot
                </span>

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Laravel
                </span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Angular
                </span>

                <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm">
                  React Native
                </span>

                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                  PHP
                </span>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  PostgreSQL
                </span>

              </div>

            </div>

            {/* Méthodologies */}
            <div className="mt-8">

              <h3 className="text-lg font-bold text-orange-600 mb-3">
                Méthodologies & Outils
              </h3>

              <p className="text-sm text-gray-600 leading-7">
                Agile (Scrum) • Git • GitHub • REST API • UML • Clean Code •
                Tests unitaires • Postman
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;