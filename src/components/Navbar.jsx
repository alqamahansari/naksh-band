import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Naksh_Band.png";

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const linkClass = (path) =>
    `block text-sm uppercase tracking-widest transition ${
      pathname === path
        ? "text-gold"
        : "text-neutral-600 hover:text-charcoal dark:text-neutral-400 dark:hover:text-ivory"
    }`;

  return (
    <nav className="max-w-7xl mx-auto py-4 flex justify-between items-center 
      border-b border-neutral-200 dark:border-neutral-800 
      px-6 backdrop-blur-sm 
      bg-ivory/80 dark:bg-charcoal/70 
      sticky top-0 z-50">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-3">
      <img src={logo} alt="Naksh Band" className="h-10" />
      <span className="font-serif text-lg tracking-widest 
          text-charcoal dark:text-ivory uppercase">
        Naksh Band
      </span>
    </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <Link to="/" className={linkClass("/")}>Home</Link>
        <Link to="/collections" className={linkClass("/collections")}>Collections</Link>
        <Link to="/products" className={linkClass("/products")}>Borders</Link>
        <Link to="/about" className={linkClass("/about")}>About</Link>
        <Link to="/assistant" className={linkClass("/assistant")}>Advisor</Link>
        <Link to="/contact" className={linkClass("/contact")}>Contact</Link>
      </div>

      {/* Mobile Button */}
      <button 
        className="md:hidden text-neutral-700 dark:text-neutral-300"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full 
          bg-ivory/95 dark:bg-charcoal/95 backdrop-blur-lg 
          border-t border-neutral-200 dark:border-neutral-800 md:hidden">
          <div className="flex flex-col items-center gap-6 py-8">
            <Link onClick={() => setOpen(false)} to="/" className={linkClass("/")}>Home</Link>
            <Link onClick={() => setOpen(false)} to="/collections" className={linkClass("/collections")}>Collections</Link>
            <Link onClick={() => setOpen(false)} to="/products" className={linkClass("/products")}>Borders</Link>
            <Link onClick={() => setOpen(false)} to="/about" className={linkClass("/about")}>About</Link>
            <Link onClick={() => setOpen(false)} to="/assistant" className={linkClass("/assistant")}>Advisor</Link>
            <Link onClick={() => setOpen(false)} to="/contact" className={linkClass("/contact")}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
