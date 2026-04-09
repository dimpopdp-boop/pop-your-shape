export default function PopYourShapeSite() {
  const offers = [
    {
      title: "Programme PDF 8 semaines",
      price: "49€",
      items: [
        "2 séances / semaine",
        "Programme d'entraînement à la maison",
        "Accès au contenu Conseils nutritionnels de base",
        "Idéal pour reprendre en main ton corps"
      ],
      cta: "Je veux le programme"
    },
    {
      title: "Pop Your Shape Coaching",
      price: "99€/mois",
      items: [
        "2 séances guidées par semaine",
        "Conseils nutritionnels",
        "Accès groupe WhatsApp Pop Your Shape",
        "Motivation + dynamique de groupe"
      ],
      cta: "Réserver un appel"
    },
    {
      title: "Transformation",
      price: "149€/mois",
      items: [
        "Programme personnalisé",
        "3 séances / semaine adaptées à ton niveau",
        "Suivi WhatsApp",
        "Accès groupe WhatsApp Pop Your Shape",
        "Bilan tous les 15 jours",
        "Conseils nutritionnels"
      ],
      cta: "Je veux une transformation"
    }
  ];

  const faq = [
    {
      q: "Est-ce que c'est adapté si je débute ?",
      a: "Oui. Les séances sont pensées pour être progressives, même si tu pars de zéro ou que tu reprennes après une longue pause."
    },
    {
      q: "Faut-il du matériel ?",
      a: "Très peu. Une corde à sauter suffit dans la majorité des cas, le reste peut se faire au poids du corps."
    },
    {
      q: "Est-ce que tu aides aussi sur l'alimentation ?",
      a: "Oui, avec des conseils simples, concrets et applicables au quotidien. Le PDF nutrition est inclus dans l'offre Coaching Elite."
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
            Perds du gras.
            <br />
            <span className="text-red-600">Renforce ton mental.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Perds du gras, reprends le contrôle de ton corps et développe un mental solide grâce à un coaching inspiré de la boxe, même si tu repars de zéro.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap">
            <a href="#offres" className="bg-red-600 px-6 py-4 rounded-xl font-bold">
              Commencer maintenant
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
            Coach sportif spécialisé en boxe et préparation physique, issu d'un parcours dans les forces armées, où j'ai développé rigueur, discipline et exigence.
          </p>
          <p className="mt-4 text-gray-600 leading-8">
            Aujourd'hui, j'applique ces principes pour t'aider à transformer ton corps durablement, avec une méthode simple, structurée et efficace.
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
            src="https://www.darty.com/darty-et-vous/sites/darty-et-vous/files/2025-02/corde%20%C3%A0%20sauter_0.jpg"
            alt="course plage"
            className="rounded-2xl shadow-lg w-full h-full object-cover"
          />
        </div>
      </section>

      <section id="offres" className="bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-black mb-3">Choisis ton niveau d'accompagnement</h2>
            <p className="text-gray-300">
              Trois formules simples selon ton besoin : démarrer, être accompagné davantage, ou viser une vraie transformation avec suivi renforcé.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <div
                key={offer.title}
                className={`p-8 rounded-2xl ${index === 1 ? "bg-red-600 text-white scale-[1.02]" : "bg-gray-900 text-white"}`}
              >
                <p className="text-sm uppercase tracking-wider opacity-80">
                  {index === 0 ? "Entrée" : index === 1 ? "Le plus équilibré" : "Premium"}
                </p>
                <h3 className="text-2xl font-bold mt-2">{offer.title}</h3>
                <p className={`text-4xl mt-4 font-black ${index === 1 ? "text-white" : "text-red-600"}`}>{offer.price}</p>
                <ul className="mt-6 space-y-3">
                  {offer.items.map((i) => (
                    <li key={i}>• {i}</li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/590690864014"
                  className={`mt-8 block w-full py-3 rounded-xl text-center font-bold ${index === 1 ? "bg-black text-white" : "bg-red-600 text-white"}`}
                >
                  {offer.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-red-600 font-bold uppercase tracking-wide">Coaching en présentiel</p>
            <h2 className="text-3xl md:text-4xl font-black mt-3">Séance privée 1h à Bosrédon</h2>
            <p className="mt-6 text-gray-600 leading-8">
              Tu préfères une séance en direct avec corrections, motivation et travail ciblé ? Je propose aussi du coaching individuel à domicile, à Bosrédon Morne-à-l'Eau.
            </p>
            <div className="mt-6 space-y-3 text-lg">
              <p><strong>Tarif :</strong> 40€ / 1h</p>
              <p><strong>Lieu :</strong> Bosrédon, Morne-à-l'Eau</p>
              <p><strong>Sur rendez-vous</strong></p>
            </div>
            <a href="https://wa.me/590690864014" className="inline-block mt-8 bg-red-600 text-white px-6 py-4 rounded-xl font-bold">
              Réserver une séance
            </a>
          </div>
         <div>
          <img
          src="/images/coach-boxe-pop-your-shape.jpg"
          alt="Coaching boxe"
          className="rounded-2xl shadow-lg"
          />
          </div>
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
        <div className="relative px-6">
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
