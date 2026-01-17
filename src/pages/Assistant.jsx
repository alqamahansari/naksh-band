import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

export default function Assistant() {
  const [question, setQuestion] = useState("");
  const [results, setResults] = useState([]);

  function handleAsk() {
    // Simple rule-based logic (later replaced by real AI)
    const recommended = products.filter(p =>
      p.zari === "Pure Zari" && p.motif === "Mughal Floral"
    );
    setResults(recommended);
  }

  return (
    <section className="py-40 max-w-5xl mx-auto">

      <h1 className="text-5xl mb-12">
        Ask Naksh Band — Banarasi Fabric Advisor
      </h1>

      <p className="text-neutral-400 mb-12 text-lg">
        Describe your requirement and we will guide you to the right Banarasi fabric.
      </p>

      <textarea
        className="w-full bg-charcoal border border-neutral-800 p-6 mb-8 text-lg"
        rows="4"
        placeholder="Example: I need a bridal Banarasi border for a red lehenga with Mughal floral influence"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button onClick={handleAsk} className="btn-gold mb-12">
        Ask Advisor
      </button>

      {results.length > 0 && (
        <div className="grid md:grid-cols-2 gap-12">
          {results.map(p => (
            <div key={p.id} className="border border-neutral-800 p-8">
              <h2 className="text-xl mb-2 text-gold">{p.name}</h2>
              <p className="text-neutral-400 mb-4">{p.motif} · {p.zari}</p>
              <Link to={`/products/${p.id}`} className="btn-gold">
                View Product
              </Link>
            </div>
          ))}
        </div>
      )}

    </section>
  );
}
