import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-10 py-6 flex justify-between bg-neutral-950/80 backdrop-blur">
      <Link to="/" className="font-serif text-xl">
        Naksh Band
      </Link>
      <div className="space-x-8 text-sm uppercase tracking-widest text-neutral-400">
        <Link to="/about">About</Link>
        <Link to="/craftsmanship">Craft</Link>
        <Link to="/collections">Collections</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
