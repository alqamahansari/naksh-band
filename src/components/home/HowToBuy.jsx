export default function HowToBuy() {
  return (
    <section className="py-40 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-serif text-gold mb-12">
          How To Buy
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <BuyCard
            title="Retail"
            text="Visit our stores or contact us to purchase authentic Banarasi fabrics."
          />
          <BuyCard
            title="Wholesale"
            text="Partner with us for bulk supply directly from Varanasi."
          />
          <BuyCard
            title="Export"
            text="International buyers supported with documentation and logistics."
          />
        </div>

      </div>
    </section>
  );
}

function BuyCard({ title, text }) {
  return (
    <div className="border border-neutral-800 p-10">
      <h3 className="text-xl font-serif mb-4 text-gold">{title}</h3>
      <p className="text-neutral-400 leading-relaxed">{text}</p>
    </div>
  );
}
