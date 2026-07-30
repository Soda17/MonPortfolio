function Skills() {
  const categories = [
    {
      title: "Architecture Backend",
      description: "Conception d'API robustes, sécurisées et architectures MVC.",
      skills: ["Java", "Spring Boot", "PHP", "Laravel", "REST API", "JWT", "MVC"]
    },
    {
      title: "Développement Frontend",
      description: "Création d'interfaces web modernes, réactives et ergonomiques.",
      skills: ["Angular", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap", "HTML5 / CSS3"]
    },
    {
      title: "Applications Mobiles",
      description: "Développement cross-platform et fonctionnalités natives Android.",
      skills: ["React Native", "Kotlin", "Android Studio", "Jetpack Compose", "MVVM"]
    },
    {
      title: "Bases de données & DevOps",
      description: "Gestion des données relationnelles et outils de déploiement.",
      skills: ["PostgreSQL", "MySQL", "SQL","SQLITE", "Git", "Docker"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-6">
        
        {/* En-tête de section */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Compétences Techniques
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Mon expertise s'articule autour des technologies modernes du web et du mobile, avec une forte culture de la qualité logicielle.
          </p>
        </div>

        {/* Grille des catégories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Titre Catégorie */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                
                {/* Description Métier */}
                <p className="text-gray-500 text-xs leading-relaxed mb-6">
                  {category.description}
                </p>
              </div>

              {/* Liste des Badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-white border border-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-lg shadow-sm hover:border-orange-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
