import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

export default function Products() {
  const [zari, setZari] = useState("All");
  const [motif, setMotif] = useState("All");

  const filtered = products.filter(p =>
    (zari === "All" || p.zari === zari) &&
    (motif === "All" || p.motif === motif)
  );

  return (
    <section className="py-40 max-w-7xl mx-auto px-6">

      <h1 className="text-5xl mb-16 font-serif text-charcoal dark:text-ivory">
        Banarasi Borders — Authentic Handwoven Borders from Varanasi
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-6 mb-16">
        <select
          className="bg-ivory dark:bg-charcoal border border-neutral-300 dark:border-neutral-700 
          p-4 text-charcoal dark:text-ivory"
          value={zari}
          onChange={(e) => setZari(e.target.value)}
        >
          <option>All</option>
          <option>Pure Zari</option>
          <option>Silver Zari</option>
          <option>Tested Zari</option>
        </select>

        <select
          className="bg-ivory dark:bg-charcoal border border-neutral-300 dark:border-neutral-700 
          p-4 text-charcoal dark:text-ivory"
          value={motif}
          onChange={(e) => setMotif(e.target.value)}
        >
          <option>All</option>
          <option>Mughal Floral</option>
          <option>Peacock</option>
          <option>Geometric</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-16">
        {filtered.map(product => (
          <div key={product.id} className="border border-neutral-200 dark:border-neutral-800 p-8 rounded-sm">

            <img
              src={product.image}
              alt={product.name}
              className="h-64 w-full object-cover mb-8"
            />

            <h2 className="text-2xl mb-2 text-gold font-serif">
              {product.name}
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 mb-2">
              {product.motif} · {product.zari}
            </p>

            <p className="text-neutral-500 mb-8">
              Width: {product.width} · Origin: Varanasi
            </p>

            <Link to={`/products/${product.id}`} className="btn-gold">
              View Details
            </Link>
          </div>
        ))}
      </div>

    </section>
  );
}
