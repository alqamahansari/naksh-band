import certificate from "../../assets/about/certificate.png";

export default function CraftProtocol() {
  return (
    <section className="py-32">

      <h2 className="text-3xl mb-12 text-gold">
        Our Craft Protocol
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-center">

        <div>
          <p className="text-neutral-400 leading-relaxed mb-8">
            Every Naksh Band fabric is woven in Varanasi, inspected for zari purity,
            loom discipline, and motif accuracy, and certified at our headquarters.
          </p>

          <ul className="text-neutral-400 space-y-4">
            <li>• Handloom-only production</li>
            <li>• Pure & tested zari verification</li>
            <li>• Weaver identity traceability</li>
            <li>• Final certification seal</li>
          </ul>
        </div>

        <img
          src={certificate}
          alt="Naksh Band authenticity certificate"
          className="border border-neutral-800"
        />

      </div>
    </section>
  );
}
