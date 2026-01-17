import { useParams } from "react-router-dom";
import products from "../data/products";
import EnquiryForm from "../components/EnquiryForm";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product)
    return <p className="py-40 text-center text-neutral-700 dark:text-neutral-300">
      Product not found
    </p>;

  return (
    <section className="py-40 max-w-6xl mx-auto grid md:grid-cols-2 gap-24 px-6">

      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        className="border border-neutral-200 dark:border-neutral-800 h-[440px] w-full object-cover rounded-sm"
      />

      {/* Details */}
      <div>
        <h1 className="text-4xl mb-8 font-serif text-gold">
          {product.name} — Authentic Banarasi Border
        </h1>

        <p className="text-neutral-700 dark:text-neutral-300 mb-8 text-lg leading-relaxed">
          Motif: {product.motif}<br />
          Zari: {product.zari}<br />
          Width: {product.width}<br />
          Origin: Varanasi
        </p>

        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-12">
          This authentic Banarasi border is handwoven in Varanasi using
          traditional techniques and certified zari.
          Each piece is inspected and certified at Naksh Band headquarters.
        </p>

        <p className="text-neutral-700 dark:text-neutral-300 mb-8">
          Available at: {product.stores.join(", ")}
        </p>

        <div className="border border-neutral-200 dark:border-neutral-800 p-8 mb-12 rounded-sm">
          <h2 className="text-xl mb-4 text-gold font-serif">
            Export Information
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            HS Code: {product.exportInfo.hsCode}<br />
            Lead Time: {product.exportInfo.leadTime}<br />
            Shipping: {product.exportInfo.shipping}
          </p>
        </div>

        <EnquiryForm product={product} />
      </div>

    </section>
  );
}
