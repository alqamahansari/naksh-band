export default function Stores() {
  return (
    <section className="py-32 max-w-7xl mx-auto">
      <h1 className="text-5xl font-serif mb-16">
        Our Stores
      </h1>

      <p className="text-neutral-400 max-w-3xl mb-16">
        Naksh Band is born in Varanasi — the home of authentic Banarasi weaving.  
        Our stores across India connect this heritage to designers, brides, and buyers worldwide.
      </p>

      <div className="grid md:grid-cols-2 gap-16">
        <StoreCard
          city="Varanasi (Headquarters)"
          role="Heritage · Production · Certification"
          address="Varanasi, Uttar Pradesh, India"
        />
        <StoreCard
          city="Hyderabad"
          role="South India Experience Store"
          address="Hyderabad, Telangana, India"
        />
        <StoreCard
          city="Delhi NCR"
          role="North India Flagship Store"
          address="Delhi NCR, India"
        />
        <StoreCard
          city="Mumbai"
          role="Bridal & Designer Store"
          address="Mumbai, Maharashtra, India"
        />
        <StoreCard
          city="Bengaluru"
          role="Designer & Export Hub"
          address="Bengaluru, Karnataka, India"
        />
        <StoreCard
          city="Kolkata"
          role="Eastern Heritage Store"
          address="Kolkata, West Bengal, India"
        />
      </div>
    </section>
  );
}

function StoreCard({ city, role, address }) {
  return (
    <div className="border border-neutral-800 p-10">
      <h2 className="text-2xl font-serif text-gold mb-2">
        {city}
      </h2>
      <p className="text-neutral-400 mb-2">{role}</p>
      <p className="text-neutral-500">{address}</p>
    </div>
  );
}
