import { useState } from "react";

export default function EnquiryForm({ product }) {
  const [city, setCity] = useState("Varanasi");

  const whatsappMessage = encodeURIComponent(
    `Hello Naksh Band,\n\nI am interested in:\n${product.name}\nMotif: ${product.motif}\nZari: ${product.zari}\nWidth: ${product.width}\n\nCity: ${city}`
  );

  return (
    <div className="border border-neutral-800 p-8 mt-10">
      <h3 className="text-2xl font-serif text-gold mb-6">
        Enquire Now
      </h3>

      <select
        className="bg-black border border-neutral-800 p-3 mb-4 w-full"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        <option>Varanasi</option>
        <option>Hyderabad</option>
        <option>Delhi NCR</option>
        <option>Mumbai</option>
        <option>Bengaluru</option>
        <option>Kolkata</option>
      </select>

      <a
        href={`https://wa.me/91XXXXXXXXXX?text=${whatsappMessage}`}
        target="_blank"
        className="border border-gold px-8 py-3 text-gold inline-block"
      >
        Enquire on WhatsApp
      </a>
    </div>
  );
}
