export default function OurStores() {
  return (
    <section className="py-40">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-serif text-gold mb-12">
          Our Stores
        </h2>

        <p className="text-neutral-400 mb-12">
          Our home is Varanasi.  
          Our stores connect Banarasi heritage to the world.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          <StoreCard city="Varanasi (HQ)" />
          <StoreCard city="Hyderabad" />
          <StoreCard city="Delhi NCR" />
          <StoreCard city="Mumbai" />
          <StoreCard city="Bengaluru" />
          <StoreCard city="Kolkata" />
        </div>

      </div>
    </section>
  );
}

function StoreCard({ city }) {
  return (
    <div className="border border-neutral-800 p-10">
      <h3 className="text-xl font-serif text-gold mb-2">{city}</h3>
      <p className="text-neutral-400">
        Experience authentic Banarasi fabric and expert guidance.
      </p>
    </div>
  );
}
