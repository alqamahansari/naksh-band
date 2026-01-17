import { useState } from "react";

export default function EnquiryForm({ product }) {
  const [city, setCity] = useState("Varanasi");

  const whatsappMessage = encodeURIComponent(
    `Hello Naksh Band,\n\nI am interested in:\n${product.name}\nMotif: ${product.motif}\nZari: ${product.zari}\nWidth: ${product.width}\n\nCity: ${city}`
  );

  return (
    <div className="border border-neutral-200 dark:border-neutral-800 p-8 mt-10 rounded-sm">

      <h3 className="text-2xl font-serif text-gold mb-6">
        Enquire Now
      </h3>

      <select
        className="w-full bg-ivory dark:bg-charcoal 
        border border-neutral-300 dark:border-neutral-700 
        p-4 mb-6 text-charcoal dark:text-ivory 
        focus:outline-none focus:ring-2 focus:ring-gold appearance-none"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        <option className="bg-ivory text-charcoal">Varanasi</option>
        <option className="bg-ivory text-charcoal">Hyderabad</option>
        <option className="bg-ivory text-charcoal">Delhi NCR</option>
        <option className="bg-ivory text-charcoal">Mumbai</option>
        <option className="bg-ivory text-charcoal">Bengaluru</option>
        <option className="bg-ivory text-charcoal">Kolkata</option>
      </select>

      <a
        href={`https://wa.me/91XXXXXXXXXX?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
        className="btn-gold inline-block"
      >
        Enquire on WhatsApp
      </a>

    </div>
  );
}
