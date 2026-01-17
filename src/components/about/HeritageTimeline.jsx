export default function HeritageTimeline() {
  return (
    <section className="py-40">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-serif text-gold mb-16">
          Heritage Timeline
        </h2>

        <div className="space-y-12 max-w-3xl">
          <TimelineItem year="1700s" text="Banaras emerges as the world’s centre for zari craftsmanship." />
          <TimelineItem year="1850s" text="Family ateliers refine Mughal motifs and weaving discipline." />
          <TimelineItem year="1950s" text="Modern looms introduced while preserving handwoven integrity." />
          <TimelineItem year="2026" text="Naksh Band established to protect and elevate Banaras borders globally." />
        </div>

      </div>
    </section>
  );
}

function TimelineItem({ year, text }) {
  return (
    <div className="flex gap-8 items-start">
      <div className="text-gold font-serif text-lg w-24">{year}</div>
      <p className="text-neutral-400 leading-relaxed">{text}</p>
    </div>
  );
}
