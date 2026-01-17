import mughal from "../assets/borders/mughal-floral.jpg";
import peacock from "../assets/borders/kadhua-peacock.jpg";
import geometric from "../assets/borders/geometric-minimal.jpg";

const products = [
  {
    id: 1,
    name: "Mughal Floral Border",
    motif: "Mughal Floral",
    zari: "Pure Zari",
    width: "4 inches",
    image: mughal,
    stores: ["Varanasi", "Hyderabad"],
    exportInfo: {
      hsCode: "5806",
      leadTime: "4–6 weeks",
      shipping: "Worldwide shipping from Varanasi HQ",
    },
  },
  {
    id: 2,
    name: "Kadhua Peacock Border",
    motif: "Peacock",
    zari: "Silver Zari",
    width: "5 inches",
    image: peacock,
    stores: ["Varanasi"],
    exportInfo: {
      hsCode: "5806",
      leadTime: "6–8 weeks",
      shipping: "Worldwide shipping from Varanasi HQ",
    },
  },
  {
    id: 3,
    name: "Minimal Geometric Border",
    motif: "Geometric",
    zari: "Tested Zari",
    width: "3 inches",
    image: geometric,
    stores: ["Varanasi", "Bengaluru"],
    exportInfo: {
      hsCode: "5806",
      leadTime: "3–5 weeks",
      shipping: "Worldwide shipping from Varanasi HQ",
    },
  },
];

export default products;
