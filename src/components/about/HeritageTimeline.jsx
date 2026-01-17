import hq from "../../assets/about/varanasi-hq.png";

export default function HeritageTimeline() {
  return (
    <section className="py-32 border-t border-neutral-800">

      <h2 className="text-3xl mb-12 text-gold">
        Our Home — Varanasi
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-center">

        <img
          src={hq}
          alt="Naksh Band headquarters in Varanasi"
          className="border border-neutral-800"
        />

        <p className="text-neutral-400 leading-relaxed">
          Naksh Band is born in Varanasi — the sacred geography where Banarasi weaving lives.
          <br /><br />
          Every fabric is woven, inspected, and certified at our headquarters before it reaches the world.
          This is not a supply chain. This is stewardship.
        </p>

      </div>
    </section>
  );
}
