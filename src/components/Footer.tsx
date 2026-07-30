function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-500 text-sm py-8 border-t border-gray-100">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Droits d'auteur dynamiques */}
        <div>
          <p>© {currentYear} — <span className="text-gray-900 font-semibold">Soda Kondé</span>. Tous droits réservés.</p>
        </div>

        {/* Rappel des liens rapides ou mention technique */}
        <div className="flex gap-6 font-medium text-xs uppercase tracking-wider">
          <a 
            href="https://www.linkedin.com/in/soda-konde" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-orange-600 transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/Soda17" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-orange-600 transition-colors"
          >
            GitHub
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
