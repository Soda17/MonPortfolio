import { useState } from "react";

function Navbar() {
  // État pour savoir si le menu mobile est ouvert ou fermé
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md text-gray-900 px-6 md:px-8 py-4 flex justify-between items-center z-50 border-b border-gray-100 shadow-sm">
      
      {/* Logo / Nom + Badge de disponibilité */}
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">
          Soda Kondé
        </h1>
        <span className="flex items-center gap-1.5 bg-orange-50 border border-orange-200 text-orange-700 px-2.5 py-0.5 rounded-full text-xs font-semibold animate-pulse">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          Disponible
        </span>
      </div>

      {/* 🍔 Bouton Hamburger (Visible UNIQUEMENT sur mobile/tablette) */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="md:hidden text-gray-700 focus:outline-none p-1"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            // Icône "X" pour fermer
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            // Icône "3 lignes" pour ouvrir
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* 💻 Liens de navigation pour ORDINATEUR (Cachés sur mobile) */}
      <ul className="hidden md:flex gap-8 font-medium text-sm text-gray-600">
        <li><a href="#" className="hover:text-orange-600 transition-colors">Accueil</a></li>
        <li><a href="#apropos" className="hover:text-orange-600 transition-colors">À propos</a></li>
        <li><a href="#skills" className="hover:text-orange-600 transition-colors">Compétences</a></li>
        <li><a href="#projets" className="hover:text-orange-600 transition-colors">Projets</a></li>
        <li><a href="#contact" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">Contact</a></li>
      </ul>

      {/* 📱 Menu déroulant pour SMARTPHONE (Visible uniquement si isOpen est vrai) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 md:hidden animate-fadeIn">
          <ul className="flex flex-col gap-4 font-medium text-sm text-gray-600 px-8">
            <li>
              <a href="#" onClick={() => setIsOpen(false)} className="block py-1 hover:text-orange-600 transition-colors">
                Accueil
              </a>
            </li>
            <li>
              <a href="#apropos" onClick={() => setIsOpen(false)} className="block py-1 hover:text-orange-600 transition-colors">
                À propos
              </a>
            </li>
            <li>
              <a href="#competences" onClick={() => setIsOpen(false)} className="block py-1 hover:text-orange-600 transition-colors">
                Compétences
              </a>
            </li>
            <li>
              <a href="#projets" onClick={() => setIsOpen(false)} className="block py-1 hover:text-orange-600 transition-colors">
                Projets
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)} className="block py-1 text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}

    </nav>
  );
}

export default Navbar;
