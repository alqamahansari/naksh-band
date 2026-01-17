export default function WeavingProcess() {
  return (
    <section className="py-40 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-serif text-gold mb-12">
          Our Weaving Process · Varanasi HQ
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <ProcessCard
            step="01"
            title="Zari Selection"
            text="Only certified pure zari threads are sourced and verified at our Varanasi headquarters."
          />
          <ProcessCard
            step="02"
            title="Design & Motif Development"
            text="Traditional Banarasi motifs are refined by master designers preserving heritage."
          />
          <ProcessCard
            step="03"
            title="Handloom Weaving"
            text="Each fabric is woven on traditional looms by skilled Banarasi artisans."
          />
          <ProcessCard
            step="04"
            title="Quality Inspection"
            text="Every fabric passes a multi-stage quality check for authenticity and durability."
          />
          <ProcessCard
            step="05"
            title="Certification"
            text="Only authentic Banarasi fabrics receive Naksh Band certification from Varanasi."
          />
        </div>

      </div>
    </section>
  );
}

function ProcessCard({ step, title, text }) {
  return (
    <div className="border border-neutral-800 p-10">
      <div className="text-gold font-serif mb-2">{step}</div>
      <h3 className="text-xl font-serif mb-4">{title}</h3>
      <p className="text-neutral-400 leading-relaxed">{text}</p>
    </div>
  );
}
