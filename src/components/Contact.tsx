function Contact() {
  return (
    <section id="contact" className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* En-tête */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Me Contacter
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Une opportunité en CDI, un projet freelance ou une question technique ? N'hésitez pas à m'écrire.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Infos de contact & Réseaux */}
          <div className="md:col-span-1 flex flex-col gap-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Email</h3>
              <a href="mailto:soda.konde@example.com" className="text-gray-700 font-medium hover:text-orange-600 transition-colors break-words">
                soda.konde@example.com {/* 👈 À remplacer par votre email */}
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">Réseaux Professionnels</h3>
              <div className="flex flex-col gap-2 font-medium text-gray-700">
                <a 
                  href="https://www.linkedin.com/in/soda-konde" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-orange-600 transition-colors flex items-center gap-1"
                >
                  💼 LinkedIn →
                </a>
                <a 
                  href="https://github.com/Soda17" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-orange-600 transition-colors flex items-center gap-1"
                >
                  💻 GitHub →
                </a>
              </div>
            </div>
          </div>

          {/* Formulier de contact */}
          <div className="md:col-span-2 bg-gray-50 border border-gray-100 p-6 rounded-2xl shadow-sm">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Nom Complet</label>
                <input 
                  type="text" 
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Votre nom" 
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Adresse Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Sodakonde00@gmail.com.com" 
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  placeholder="Bonjour Soda, je vous contacte concernant..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2.5 rounded-lg transition-colors shadow-sm text-sm"
              >
                Envoyer le message
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
