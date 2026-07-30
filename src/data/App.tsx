import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import About from "../components/About";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="bg-white min-h-screen text-gray-900 antialiased">
      
      <Navbar />

     <Hero/>

     <About/>

      <Projects/>

      <Skills/>

      <Contact/>

      <Footer/>

      {/* Zone pour les prochaines sections (À propos, Projets, Contact) */}
      <main className="container mx-auto px-6 py-12">
        {/* Vos sections s'inséreront ici au fur et à mesure */}
      </main>
    </div>
  );
}

export default App;
