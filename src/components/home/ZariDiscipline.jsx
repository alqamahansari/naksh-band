export default function ZariDiscipline() {
  return (
    <section className="py-40">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-serif text-gold mb-12">
          The Zari Discipline
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <DisciplineCard
            title="Pure Zari Selection"
            text="Only certified zari threads with controlled purity and sheen are accepted into our looms."
          />
          <DisciplineCard
            title="Weave Precision"
            text="Each border is woven under calibrated tension ensuring longevity and uniformity."
          />
          <DisciplineCard
            title="Seven-Stage Inspection"
            text="Every Naksh Band passes through seven quality gates before it earns our mark."
          />
        </div>

      </div>
    </section>
  );
}

function DisciplineCard({ title, text }) {
  return (
    <div className="border border-neutral-800 p-10">
      <h3 className="text-xl font-serif mb-4 text-gold">{title}</h3>
      <p className="text-neutral-400 leading-relaxed">{text}</p>
    </div>
  );
}
