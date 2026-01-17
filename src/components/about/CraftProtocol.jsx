export default function CraftProtocol() {
  return (
    <section className="py-40 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-serif text-gold mb-12">
          Our Craft Protocol
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <ProtocolCard
            step="01"
            title="Zari Purity Verification"
            text="Every thread is tested for composition, sheen, and tensile strength before acceptance."
          />
          <ProtocolCard
            step="02"
            title="Loom Calibration"
            text="Each loom is tuned for tension and symmetry ensuring structural perfection."
          />
          <ProtocolCard
            step="03"
            title="Weave Integrity Inspection"
            text="Borders are inspected for uniformity, alignment, and durability."
          />
          <ProtocolCard
            step="04"
            title="Finishing Discipline"
            text="Edges are refined, trimmed, and stabilized for longevity."
          />
          <ProtocolCard
            step="05"
            title="Final Certification"
            text="Only borders that pass all stages earn the Naksh Band mark."
          />
        </div>

      </div>
    </section>
  );
}

function ProtocolCard({ step, title, text }) {
  return (
    <div className="border border-neutral-800 p-10">
      <div className="text-gold font-serif text-lg mb-2">{step}</div>
      <h3 className="text-xl font-serif mb-4">{title}</h3>
      <p className="text-neutral-400 leading-relaxed">{text}</p>
    </div>
  );
}
