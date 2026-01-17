export default function Contact() {
  return (
    <section className="py-40 max-w-5xl mx-auto px-6">

      <h1 className="text-5xl mb-12 font-serif text-charcoal dark:text-ivory">
        Contact Naksh Band
      </h1>

      <p className="text-neutral-700 dark:text-neutral-300 mb-16 text-lg leading-relaxed">
        Whether you are a bride, designer, or international buyer,  
        we welcome your enquiry for authentic Banarasi fabric woven in Varanasi.
      </p>

      <div className="grid md:grid-cols-2 gap-20">

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl mb-6 text-gold font-serif">Get in Touch</h2>

          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            Email: enquires@nakshband.com
          </p>

          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            WhatsApp: +91 XXXXX XXXXX
          </p>

          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            Varanasi, Uttar Pradesh, India
          </p>
        </div>

        {/* Contact Form */}
        <div className="border border-neutral-200 dark:border-neutral-800 p-10 rounded-sm">
          <h2 className="text-2xl mb-6 text-gold font-serif">
            Send an Enquiry
          </h2>

          <input
            className="w-full bg-ivory dark:bg-charcoal border border-neutral-300 dark:border-neutral-700 
            p-4 mb-6 text-charcoal dark:text-ivory placeholder-neutral-500"
            placeholder="Your Name"
          />
          <input
            className="w-full bg-ivory dark:bg-charcoal border border-neutral-300 dark:border-neutral-700 
            p-4 mb-6 text-charcoal dark:text-ivory placeholder-neutral-500"
            placeholder="Your Email"
          />
          <textarea
            className="w-full bg-ivory dark:bg-charcoal border border-neutral-300 dark:border-neutral-700 
            p-4 mb-6 text-charcoal dark:text-ivory placeholder-neutral-500"
            rows="4"
            placeholder="Your Message"
          />

          <button className="btn-gold">
            Send Enquiry
          </button>
        </div>

      </div>

    </section>
  );
}
