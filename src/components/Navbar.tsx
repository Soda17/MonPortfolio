function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md text-gray-900 px-8 py-4 flex justify-between items-center z-50 border-b border-gray-100 shadow-sm">
      
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

      {/* Liens de navigation avec ancres de défilement */}
      <ul className="flex gap-8 font-medium text-sm text-gray-600">
        <li>
          <a href="#" className="cursor-pointer hover:text-orange-600 transition-colors">
            Accueil
          </a>
        </li>
        <li>
          <a href="#apropos" className="cursor-pointer hover:text-orange-600 transition-colors">
            À propos
          </a>
        </li>
        <li>
          <a href="#skills" className="cursor-pointer hover:text-orange-600 transition-colors">
            Skills
          </a>
        </li>
       <li>
        <a href="#projets" className="cursor-pointer hover:text-orange-600 transition-colors">
            Projets
        </a>
        </li>

        <li>
          <a href="#contact" className="cursor-pointer hover:text-orange-600 text-orange-600 font-semibold transition-colors">
            Contact
          </a>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;
