import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

export default function Assistant() {
  const [question, setQuestion] = useState("");
  const [results, setResults] = useState([]);

  function handleAsk() {
    // Rule-based logic (placeholder for real AI later)
    const recommended = products.filter(
      p => p.zari === "Pure Zari" && p.motif === "Mughal Floral"
    );
    setResults(recommended);
  }

  return (
    <section className="py-40 max-w-5xl mx-auto px-6">

      <h1 className="text-5xl mb-12 font-serif text-charcoal dark:text-ivory">
        Ask Naksh Band — Banarasi Fabric Advisor
      </h1>

      <p className="text-neutral-700 dark:text-neutral-300 mb-12 text-lg">
        Describe your requirement and we will guide you to the right Banarasi fabric.
      </p>

      <textarea
        className="w-full bg-ivory dark:bg-charcoal border border-neutral-300 dark:border-neutral-700 
        p-6 mb-8 text-lg text-charcoal dark:text-ivory placeholder-neutral-500"
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
            <div key={p.id} className="border border-neutral-200 dark:border-neutral-800 p-8 rounded-sm">
              <h2 className="text-xl mb-2 text-gold font-serif">{p.name}</h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                {p.motif} · {p.zari}
              </p>
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
