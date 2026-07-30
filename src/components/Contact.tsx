function Contact() {
  return (
    <section id="contact" className="py-20 bg-white text-gray-900 scroll-mt-20">
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
              <a href="mailto:Sodakonde00@gmail.com" className="text-gray-700 font-medium hover:text-orange-600 transition-colors break-words">
                Sodakonde00@gmail.com
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

          {/* Formulaire de contact opérationnel */}
          <div className="md:col-span-2 bg-gray-50 border border-gray-100 p-6 rounded-2xl shadow-sm">
            {/* ✅ CORRECTION : Utilisation de l'URL d'API de soumission exacte */}
            <form 
              action="https://api.web3forms.com/submit" 
                method="POST" 
                className="flex flex-col gap-4"
            >
              {/* Votre clé d'accès valide */}
              

              <input type="hidden" name="access_key" value="4fe9fe10-c1d7-44f2-bec7-b6dcd623f600"/>

              
              <input type="hidden" name="redirect" value="https://vercel.app" />

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Nom Complet</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Votre nom" 
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Adresse Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="nom@exemple.com" 
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Message</label>
                <textarea 
                  rows={4} 
                  name="message"
                  required
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
