export default function PopYourShapeSite() {
  const offers = [
    {
      title: "Offre Découverte",
      price: "49€/mois",
      items: [
        "1 séance guidée par semaine",
        "Programme d'entraînement à la maison",
        "Accès simple et rapide",
        "Idéal pour reprendre en main ton corps"
      ],
      cta: "Commencer maintenant"
    },
    {
      title: "Offre Transformation",
      price: "149€/mois",
      items: [
        "3 séances à distance",
        "Suivi WhatsApp",
        "Audios de relaxation / motivation",
        "Bilan tous les 15 jours"
      ],
      cta: "Réserver un appel"
    }
  ];

  const benefits = [
    "Perte de gras rapide",
    "Méthode simple et efficace",
    "Mental de combattant",
    "Accessible à tous",
    "Suivi motivant",
    "Résultats visibles"
  ];

  const faq = [
    {
      q: "Est-ce que c'est adapté si je débute ?",
      a: "Oui. Les séances sont pensées pour être progressives, même si tu pars de zéro ou que tu reprends après une longue pause."
    },
    {
      q: "Faut-il du matériel ?",
      a: "Très peu. Une corde à sauter suffit dans la majorité des cas, le reste peut se faire au poids du corps."
    },
    {
      q: "Est-ce que tu aides aussi sur l'alimentation ?",
      a: "Oui, avec des conseils simples, concrets et applicables au quotidien."
    },
    {
      q: "Combien de temps pour voir des résultats ?",
      a: "Les premiers changements peuvent se voir rapidement si tu es régulier, souvent en quelques semaines."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <a
        href="https://wa.me/590690864014"
        className="fixed bottom-5 right-5 bg-red-600 text-white px-5 py-3 rounded-full shadow-lg z-50"
      >
        WhatsApp
      </a>

      <section className="relative bg-black text-white">
        <img
          src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed"
          alt="boxe"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Transforme ton corps.
            <br />
            <span className="text-red-600">Renforce ton mental.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Perds du gras, reprends le contrôle de ton corps et développe un mental solide en 8 semaines grâce à la boxe.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#offres" className="bg-red-600 px-6 py-4 rounded-xl font-bold">
              Voir les offres
            </a>
            <a href="#contact" className="border border-white px-6 py-4 rounded-xl font-bold">
              Me contacter
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-black mb-8">Ce que tu peux obtenir</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-xl">-3 à -8 kg selon ton point de départ</div>
          <div className="bg-gray-100 p-6 rounded-xl">Corps plus tonique et athlétique</div>
          <div className="bg-gray-100 p-6 rounded-xl">Plus d'énergie au quotidien</div>
          <div className="bg-gray-100 p-6 rounded-xl">Mental plus fort et discipliné</div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-black">Ce coaching est fait pour toi si :</h3>
            <ul className="mt-6 space-y-3">
              <li>✔️ Tu veux perdre du gras</li>
              <li>✔️ Tu manques de motivation</li>
              <li>✔️ Tu veux un cadre simple</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-black">Ce n'est PAS pour toi si :</h3>
            <ul className="mt-6 space-y-3">
              <li>❌ Tu cherches une solution miracle</li>
              <li>❌ Tu ne veux pas t'impliquer</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <img
          src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
          alt="corde à sauter"
          className="w-full h-[400px] object-cover"
        />
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-black">Avant</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>Fatigue</li>
            <li>Manque de motivation</li>
            <li>Corps relâché</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-black">Après</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>Plus d'énergie</li>
            <li>Discipline</li>
            <li>Corps transformé</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-black">Qui suis-je ?</h2>
          <p className="mt-6 text-gray-600 leading-8">
            Coach sportif spécialisé en boxe et préparation physique, issu d’un parcours dans les forces armées, où j’ai développé rigueur, discipline et exigence.
          </p>
          <p className="mt-4 text-gray-600 leading-8">
            Aujourd’hui, j’applique ces principes pour t’aider à transformer ton corps durablement, avec une méthode simple, structurée et efficace.
          </p>
          <div className="mt-6 space-y-2 text-gray-700">
            <p>✔️ BPJEPS Boxe</p>
            <p>✔️ Prévôt Fédéral (Boxe)</p>
            <p>✔️ Moniteur de Savate Boxe Française</p>
            <p>✔️ Préparateur physique</p>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf"
            alt="course"
            className="rounded-2xl shadow-lg w-full h-full object-cover"
          />
        </div>
      </section>

      <section id="offres" className="bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          {offers.map((offer) => (
            <div key={offer.title} className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold">{offer.title}</h3>
              <p className="text-4xl text-red-600 mt-4">{offer.price}</p>
              <ul className="mt-6 space-y-2">
                {offer.items.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
              <a
                href="https://wa.me/590690864014"
                className="mt-6 block w-full bg-red-600 py-3 rounded-xl text-center"
              >
                {offer.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black mb-8">FAQ</h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <div key={f.q} className="border p-4 rounded-xl">
              <p className="font-bold">{f.q}</p>
              <p className="text-gray-600 mt-2">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative py-16 text-center text-white">
        <img
          src="https://images.unsplash.com/photo-1517960413843-0aee8e2b3285"
          alt="corde à sauter sol"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-red-600 opacity-90"></div>
        <div className="relative">
          <h2 className="text-3xl font-black">Prêt à passer à l'action ?</h2>
          <div className="mt-6 flex justify-center gap-4">
            <a href="https://wa.me/590690864014" className="bg-black px-6 py-3 rounded-xl">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}