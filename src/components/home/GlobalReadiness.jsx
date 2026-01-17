export default function GlobalReadiness() {
  return (
    <section className="py-40">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-serif text-gold mb-12">
          Global Readiness
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <ReadinessCard
            title="Export Compliance"
            text="HS codes, documentation, and international standards managed with precision."
          />
          <ReadinessCard
            title="Design Collaboration"
            text="Custom borders developed for designers and couture houses worldwide."
          />
          <ReadinessCard
            title="Scalable Production"
            text="Capacity planning and quality assurance for consistent global supply."
          />
        </div>

      </div>
    </section>
  );
}

function ReadinessCard({ title, text }) {
  return (
    <div className="border border-neutral-800 p-10">
      <h3 className="text-xl font-serif mb-4 text-gold">{title}</h3>
      <p className="text-neutral-400 leading-relaxed">{text}</p>
    </div>
  );
}
