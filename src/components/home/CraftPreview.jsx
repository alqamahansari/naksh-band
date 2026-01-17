import craftImage from "../../assets/banaras.jpg";

export default function CraftPreview() {
  return (
    <section className="py-40 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* Image */}
        <div className="relative">
          <div
            className="h-80 bg-cover bg-center"
            style={{ backgroundImage: `url(${craftImage})` }}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-4xl font-serif text-gold tracking-tight">
            Craftsmanship
          </h2>

          <p className="mt-8 text-neutral-400 leading-relaxed max-w-xl">
            Every Naksh Band is the result of disciplined artistry —
            pure zari selection, calibrated looms, and generations
            of Banaras mastery refined through time.
          </p>
        </div>

      </div>
    </section>
  );
}
