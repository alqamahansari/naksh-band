import { Link } from "react-router-dom";

export default function Collections() {
  return (
    <section className="py-40 max-w-6xl mx-auto">

      <h1 className="text-5xl mb-20">
        Banarasi Sarees, Borders & Fabrics
      </h1>

      <p className="text-neutral-400 max-w-4xl mb-24 text-lg leading-relaxed">
        Our collections represent the living heritage of Banarasi weaving —
        authentic handloom sarees, borders, and fabrics woven in Varanasi
        with ethical production and certified zari.
      </p>

      <div className="grid md:grid-cols-3 gap-20">

        <CollectionCard
          title="Banarasi Sarees"
          text="Heritage bridal and ceremonial sarees woven by master artisans."
          link="/products"
        />

        <CollectionCard
          title="Banarasi Borders"
          text="Authentic handwoven borders for couture, lehenga, and saree finishing."
          link="/products"
        />

        <CollectionCard
          title="Banarasi Fabrics"
          text="Pure handloom Banarasi fabrics for designers and ateliers."
          link="/products"
        />

      </div>
    </section>
  );
}

function CollectionCard({ title, text, link }) {
  return (
    <div className="border border-neutral-800 p-10">
      <h2 className="text-2xl mb-6 text-gold">{title}</h2>
      <p className="text-neutral-400 mb-10">{text}</p>
      <Link to={link} className="btn-gold">Explore</Link>
    </div>
  );
}
