import sodaImage from "/src/assets/images/soda.jpg";

function Hero() {
  return (
    <section className="min-h-screen bg-white text-gray-900 flex items-center px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-12">
        
        {/* Présentation */}
        <div className="max-w-2xl order-2 md:order-1">
          <p className="text-orange-600 font-semibold text-lg mb-2">
            Bonjour, je suis
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Soda Kondé
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
            Ingénieure en Développement d'Application Full-Stack Web & Mobile
          </h2>

          <p className="text-gray-600 text-lg mt-6 leading-relaxed">
            Je conçois des applications modernes et évolutives en intervenant sur 
            <strong className="text-gray-900 font-semibold"> l’ensemble du cycle de vie des projets</strong>, 
            de l’analyse à la mise en production.
          </p>

          <p className="text-gray-600 text-lg mt-4 leading-relaxed">
            J’allie la robustesse de <strong className="text-orange-600 font-semibold">Spring Boot</strong>, 
            <strong className="text-orange-600 font-semibold"> PHP</strong> et 
            <strong className="text-orange-600 font-semibold"> PostgreSQL</strong> à la flexibilité d’
            <strong className="text-orange-600 font-semibold">Angular</strong> et  
            <strong className="text-orange-600 font-semibold">React Native</strong> afin de créer des solutions fiables et adaptées aux besoins métiers.
          </p>

          {/* Badges de compétences scannables */}
          <div className="flex flex-wrap gap-2 mt-8">
            {["Java", "Spring Boot", "PHP", "Angular", "React Native", "TypeScript", "PostgreSQL"].map((tech) => (
              <span key={tech} className="bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-8">
                        <a 
                href="#projets" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-sm text-center inline-block"
            >
                Voir mes projets
            </a>

            <a 
                href="/CV_Soda_Konde.pdf" 
                download="CV_Soda_Konde.pdf"
                className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-colors text-center inline-block"
                >
                Télécharger mon CV
                </a>

          </div>
        </div>

        {/* Photo avec intégration harmonieuse */}
        <div className="order-1 md:order-2 flex justify-center w-full md:w-auto">
          <div className="relative p-2 bg-gray-50 rounded-full border border-gray-100 shadow-sm">
            <img
              src={sodaImage}
              alt="Soda Kondé"
              className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
