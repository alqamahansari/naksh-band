import CraftProtocol from "../components/about/CraftProtocol";
import HeritageTimeline from "../components/about/HeritageTimeline";

export default function About() {
  return (
    <section className="py-40 max-w-6xl mx-auto">

      <h1 className="text-5xl mb-16">
        About Naksh Band — Banarasi Heritage House
      </h1>

      <p className="text-neutral-400 leading-relaxed text-lg max-w-4xl mb-32">
        <strong>NAKSH BAND™</strong> is a heritage Banarasi handloom house rooted in Banaras,
        dedicated to preserving authentic Banarasi weaving through ethical production,
        transparent provenance, and contemporary restraint.
        <br /><br />
        The brand is owned and produced by <strong>Ansari Fabric Pvt Ltd</strong>,
        a community-rooted textile manufacturing company based in Varanasi, Uttar Pradesh, India.
      </p>

      <CraftProtocol />
      <HeritageTimeline />

    </section>
  );
}
