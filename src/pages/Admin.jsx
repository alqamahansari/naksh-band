import products from "../data/products";

export default function Admin() {
  return (
    <section className="py-32 max-w-7xl mx-auto">
      <h1 className="text-5xl font-serif mb-12">
        Naksh Band Admin
      </h1>

      <div className="grid md:grid-cols-3 gap-12">
        {products.map((p) => (
          <div key={p.id} className="border border-neutral-800 p-6">
            <h2 className="text-xl font-serif text-gold mb-2">{p.name}</h2>
            <p className="text-neutral-400">
              {p.motif} · {p.zari} · {p.width}
            </p>
            <p className="text-neutral-500 mt-2">
              Stores: {p.stores.join(", ")}
            </p>
            <p className="text-neutral-500">
              HS Code: {p.exportInfo.hsCode}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
