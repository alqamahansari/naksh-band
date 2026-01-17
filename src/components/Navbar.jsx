import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Naksh_Band.png";

export default function Navbar() {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `text-sm uppercase tracking-widest ${
      pathname === path ? "text-gold" : "text-neutral-400 hover:text-white"
    }`;

  return (
    <nav className="max-w-7xl mx-auto py-4 flex justify-between items-center border-b border-neutral-800 px-6 backdrop-blur-sm bg-black/60 sticky top-0 z-50">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Naksh Band" className="h-10" />
      </Link>

      <div className="flex gap-6">
        <Link to="/" className={linkClass("/")}>Home</Link>
        <Link to="/collections" className={linkClass("/collections")}>Collections</Link>
        <Link to="/products" className={linkClass("/products")}>Borders</Link>
        <Link to="/about" className={linkClass("/about")}>About</Link>
        <Link to="/assistant" className={linkClass("/assistant")}>Advisor</Link>
        <Link to="/contact" className={linkClass("/contact")}>Contact</Link>
      </div>
    </nav>
  );
}
