import certificate from "../../assets/about/certificate.png";

export default function ZariCertification() {
  return (
    <section className="py-40">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-serif text-gold mb-12">
          Zari Purity & Certification
        </h2>

        <div className="grid md:grid-cols-2 gap-20 items-center">

          <div>
            <p className="text-neutral-400 leading-relaxed max-w-xl">
              Naksh Band protects the authenticity of Banarasi weaving through
              strict zari purity standards and certification.
              <br /><br />
              Every fabric is tested for metal composition, sheen, tensile
              strength, and weave integrity at our Varanasi headquarters before
              it is released for sale.
            </p>
          </div>

          <img
            src={certificate}
            alt="Naksh Band authenticity certificate"
            className="border border-neutral-800"
          />

        </div>

      </div>
    </section>
  );
}
