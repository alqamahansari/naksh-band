import { useParams } from "react-router-dom";
import products from "../data/products";
import EnquiryForm from "../components/EnquiryForm";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="py-40 text-center">Product not found</p>;
  }

  return (
    <section className="py-40 max-w-6xl mx-auto grid md:grid-cols-2 gap-24">

      {/* Image */}
      <div className="border border-neutral-800 h-[440px] flex items-center justify-center text-neutral-500">
        Product Image
      </div>

      {/* Details */}
      <div>
        <h1 className="text-4xl mb-8 text-gold">
          {product.name}
        </h1>

        <p className="text-neutral-400 mb-8 text-lg leading-relaxed">
          Motif: {product.motif}<br />
          Zari: {product.zari}<br />
          Width: {product.width}<br />
          Origin: Varanasi
        </p>

        <p className="text-neutral-400 leading-relaxed mb-12">
          This authentic Banarasi border is handwoven in Varanasi using
          traditional techniques and certified zari.  
          Each piece is inspected and certified at Naksh Band headquarters.
        </p>

        <p className="text-neutral-400 mb-8">
          Available at: {product.stores.join(", ")}
        </p>

        <div className="border border-neutral-800 p-8 mb-12">
          <h3 className="text-xl mb-4 text-gold">
            Export Information
          </h3>
          <p className="text-neutral-400 leading-relaxed">
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
