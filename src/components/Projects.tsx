function Projects() {
  const projectList = [
    {
  title: "Refonte et Déploiement du Site Web Institutionnel",
  subtitle: "Stage Professionnel • Perspectivia Business Center (Septembre – Décembre 2025)",
  description:
    "Refonte et mise en ligne du site web institutionnel de Perspectivia Business Center. Réalisation de l'intégration WordPress, personnalisation du thème, création et adaptation des pages, intégration des fonctionnalités nécessaires ainsi que la maintenance évolutive du site. Participation aux phases de tests, correction des anomalies et accompagnement du déploiement progressif en production.",
  tech: [
    "WordPress",
    "SEO",
    "Référencement naturel",
    "Personnalisation de thème",
    "Gestion de contenu",
    "Maintenance Web"
  ],
  type: "Professionnel",
  githubUrl: null,
  liveUrl: null
},
    {
      title: "Application Mobile Adaptive Force de Vente",
      subtitle: "Stage Professionnel • Adaptive IT (Mai – Juillet 2026)",
      description:
        "Participation au développement d'une application mobile professionnelle destinée aux équipes commerciales. Développement et optimisation de fonctionnalités Android natives, correction d'anomalies, amélioration des performances et réalisation de tests unitaires ainsi que de campagnes de tests fonctionnels afin de garantir la stabilité, la qualité et la fiabilité de l'application avant sa mise en production.",
      tech: [
        "Kotlin",
        "Android Studio",
        "Jetpack Compose",
        "MVVM",
        "Tests Unitaires",
        "Git"
      ],
      type: "Professionnel",
      githubUrl: null,
      liveUrl: null
    },
    {
      title: "Digitalisation de l'État Civil",
      subtitle: "Projet de Fin d'Études • Licence",
      description:
        "Conception et développement d'une plateforme web de digitalisation des services d'état civil permettant la gestion centralisée des actes administratifs, la sécurisation des données et l'automatisation des procédures. L'application repose sur une architecture MVC robuste basée sur Laravel, PHP et MySQL afin d'améliorer l'efficacité et la rapidité des services administratifs.",
      tech: [
        "Laravel",
        "PHP",
        "MySQL",
        "REST API",
        "MVC"
      ],
      type: "Académique", 
      githubUrl: null, 
      liveUrl: null
    },
    {
      title: "Application Mobile de Gestion des Interventions sur Site",
      subtitle: "Projet de Master",
      description:
        "Développement d'une application mobile résiliente permettant la planification, le suivi et la gestion des interventions techniques. L'application intègre une API REST sécurisée avec JWT, un mode connecté/hors ligne, la synchronisation des données ainsi qu'une interface mobile moderne développée avec React Native.",
      tech: [
        "React Native",
        "TypeScript",
        "Spring Boot",
        "PostgreSQL",
        "JWT",
        "REST API"
      ],
      type: "Académique",
      githubUrls: [
        {
          name: "Code source Frontend Mobile",
          url: "https://github.com/Soda17/intervention-management-frontend"
        },
        {
          name: "Code source Backend API",
          url: "https://github.com/Soda17/intervention-management-backend"
        }
      ],
      liveUrl: null
    },
    {
      title: "Meal Planner Express",
      subtitle: "Projet Personnel",
      description:
        "Développement d'une application web permettant de générer automatiquement des menus hebdomadaires et des listes de courses personnalisées. Le projet comprend une API REST en PHP, une base de données PostgreSQL, une interface moderne responsive et un système de gestion dynamique des recettes pour simplifier l'organisation des repas.",
      tech: [
        "PHP",
        "JavaScript",
        "PostgreSQL",
        "REST API",
        "Tailwind CSS",
        "Render"
      ],
      type: "Personnel",
      githubUrl: "https://github.com/Soda17/meal-planner-express",
      liveUrl: "https://meal-planner-express.onrender.com"
    }
  ];

  return (
    <section id="projets" className="py-20 bg-gray-50 text-gray-900 border-t border-gray-100">
      <div className="container mx-auto px-6">
        
        {/* En-tête de section */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Mes Réalisations
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Découvrez mes projets clés, alliant expériences en entreprise, réalisations académiques et projets personnels.
          </p>
        </div>

        {/* Grille des projets */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectList.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Badge Type de projet dynamique */}
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold mb-4 ${
                    project.type === "Professionnel"
                      ? "bg-green-50 border border-green-200 text-green-700"
                      : project.type === "Personnel"
                      ? "bg-orange-50 border border-orange-200 text-orange-700"
                      : "bg-blue-50 border border-blue-200 text-blue-700"
                  }`}
                >
                  {project.type}
                </span>

                {/* Titre */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {project.title}
                </h3>
                
                {/* Contexte / Sous-titre */}
                <p className="text-xs font-medium text-gray-400 mb-4 uppercase tracking-wide">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Technologies & Actions */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-gray-50 border border-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions cliquables dynamiques */}
                <div className="flex flex-col gap-2 border-t border-gray-100 pt-4 text-sm font-semibold mt-auto">
                  
                  {/* Démo en ligne */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-700 transition-colors"
                    >
                      🚀 Démo Live
                    </a>
                  )}

                  {/* Un seul dépôt GitHub */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-orange-600 transition-colors"
                    >
                      💻 Code source GitHub →
                    </a>
                  )}

                  {/* Plusieurs dépôts GitHub (Frontend + Backend) */}
                  {project.githubUrls && (
                    <div className="flex flex-col gap-2">
                      {project.githubUrls.map((repo, repoIndex) => (
                        <a
                          key={repoIndex}
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-orange-600 transition-colors"
                        >
                          💻 {repo.name} →
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Code non disponible ou confidentiel */}
                  {!project.githubUrl && !project.githubUrls && !project.liveUrl && (
                    <span className="text-gray-400 italic font-normal text-xs py-1">
                      {project.type === "Professionnel" 
                        ? "🔒 Code propriétaire (Confidentiel)" 
                        : "📚 Documentation technique sur demande"}
                    </span>
                  )}

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
