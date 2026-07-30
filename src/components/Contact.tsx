import { useState } from "react";

function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsPending(true);
    setIsSuccess(false);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        e.currentTarget.reset();
      } else {
        alert(result.message || "Une erreur est survenue lors de l'envoi.");
      }
    } catch (error) {
      console.error(error);
      alert("Impossible d'envoyer le message pour le moment.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white text-gray-900 scroll-mt-20"
    >
      <div className="container mx-auto px-6 max-w-4xl">

        {/* Titre */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight">
            Me Contacter
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Une opportunité en CDI, un projet freelance ou une question
            technique ? N'hésitez pas à me contacter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Informations */}
          <div className="md:col-span-1 flex flex-col gap-6">

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Email
              </h3>

              <a
                href="mailto:sodakonde00@gmail.com"
                className="text-gray-700 font-medium hover:text-orange-600 transition-colors break-words"
              >
                sodakonde00@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">
                Réseaux professionnels
              </h3>

              <div className="flex flex-col gap-2">

                <a
                  href="https://www.linkedin.com/in/soda-konde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 transition-colors"
                >
                  💼 LinkedIn
                </a>

                <a
                  href="https://github.com/Soda17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 transition-colors"
                >
                  💻 GitHub
                </a>

              </div>
            </div>

          </div>

          {/* Formulaire */}
          <div className="md:col-span-2 bg-gray-50 border border-gray-100 p-6 rounded-2xl shadow-sm">

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              {/* Clé Web3Forms */}
              <input
                type="hidden"
                name="access_key"
                value="4fe9fe10-c1d7-44f2-bec7-b6dcd623f600"
              />

              {/* Sujet du mail */}
              <input
                type="hidden"
                name="subject"
                value="Nouveau message depuis le Portfolio de Soda Kondé"
              />

              {/* Nom de l'expéditeur */}
              <input
                type="hidden"
                name="from_name"
                value="Portfolio Soda Kondé"
              />

              {/* Empêche la redirection */}
              <input
                type="hidden"
                name="redirect"
                value=""
              />

              {/* Nom */}
              <div>

                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Nom complet
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Votre nom"
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
                />

              </div>

              {/* Email */}
              <div>

                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Adresse e-mail
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="nom@exemple.com"
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
                />

              </div>

              {/* Message */}
              <div>

                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Bonjour Soda, je souhaite vous contacter concernant..."
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 resize-none focus:outline-none focus:border-orange-500"
                />

              </div>

              {/* Succès */}
              {isSuccess && (
                <div className="bg-green-100 border border-green-300 text-green-700 p-3 rounded-lg text-sm font-medium">
                  ✅ Votre message a été envoyé avec succès. Merci pour votre
                  prise de contact !
                </div>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold transition"
              >
                {isPending
                  ? "Envoi en cours..."
                  : "Envoyer le message"}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;