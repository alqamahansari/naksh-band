export default function CollectionsPreview() {
  return (
    <section className="py-40 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-serif text-gold mb-12">
          Our Collections
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <CollectionCard title="Banarasi Sarees" />
          <CollectionCard title="Banarasi Borders (Naksh Band)" />
          <CollectionCard title="Banarasi Fabrics" />
        </div>

      </div>
    </section>
  );
}

function CollectionCard({ title }) {
  return (
    <div className="border border-neutral-800 p-10">
      <h3 className="text-xl font-serif mb-4 text-gold">{title}</h3>
      <p className="text-neutral-400 leading-relaxed">
        Authentic handwoven Banarasi collections available for retail, wholesale,
        and export from our Varanasi headquarters.
      </p>
    </div>
  );
}
