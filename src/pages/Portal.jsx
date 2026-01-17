export default function Portal() {
  return (
    <section className="py-32 max-w-6xl mx-auto">
      <h1 className="text-5xl font-serif mb-12">
        Designer & Export Portal
      </h1>

      <p className="text-lg text-neutral-400 leading-relaxed max-w-3xl mb-16">
        Naksh Band collaborates with couture designers, luxury boutiques,
        and international textile houses seeking uncompromising craftsmanship.
        <br /><br />
        Access our private catalogue, technical specifications, and export
        documentation below.
      </p>

      <div className="grid md:grid-cols-3 gap-12">
        <PortalCard
          title="Private Catalogue"
          description="Request access to our complete border collections with technical specifications."
        />
        <PortalCard
          title="Custom Orders"
          description="Commission bespoke borders tailored to your design language and market."
        />
        <PortalCard
          title="Export Readiness"
          description="Compliance, packaging, HS codes, and international shipping support."
        />
      </div>
    </section>
  );
}

function PortalCard({ title, description }) {
  return (
    <div className="border border-neutral-800 p-10">
      <h2 className="text-2xl font-serif mb-4 text-gold">
        {title}
      </h2>
      <p className="text-neutral-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
