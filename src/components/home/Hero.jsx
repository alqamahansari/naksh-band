import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../assets/banaras.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="relative max-w-7xl mx-auto px-6 py-52"
      >
        <h1 className="text-6xl md:text-7xl mb-10">
          Naksh Band — Authentic Banarasi Fabric House
        </h1>

        <p className="text-neutral-300 max-w-3xl leading-relaxed mb-12">
          Born in Varanasi · Dedicated to preserving Banarasi heritage
        </p>

        <Link to="/collections" className="btn-gold inline-block">
          Explore Collections
        </Link>
      </motion.div>
    </section>
  );
}
