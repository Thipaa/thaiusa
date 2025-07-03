
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-navy-blue shadow-md py-3"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="relative z-50 text-2xl font-display font-medium tracking-wide text-white hover:text-gold transition-colors duration-300 flex items-center"
          >
            THAI
            <dotlottie-player
              src="https://lottie.host/5de9a9b5-87fb-445e-a738-c9534196e4e2/faovaVaVLC.lottie"
              background="transparent"
              speed="1"
              style={{ width: '64px', height: '64px', margin: '-8px -4px' }}
              loop
              autoplay
            ></dotlottie-player>
            USA
          </a>

          {/* Mobile menu button */}
          <button 
            className="md:hidden relative z-50 text-white hover:text-gold transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="nav-link-light">Home</a>
            <a href="#menu" className="nav-link-light">Menu</a>
            <a href="#location" className="nav-link-light">Location</a>
          </nav>

          {/* Mobile Navigation */}
          <div className={`
            fixed inset-0 bg-navy-blue flex flex-col justify-center items-center space-y-8 
            transition-all duration-500 ease-in-out md:hidden
            ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
          `}>
            <a 
              href="#" 
              className="text-2xl font-serif text-white hover:text-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a 
              href="#menu" 
              className="text-2xl font-serif text-white hover:text-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </a>
            <a 
              href="#location" 
              className="text-2xl font-serif text-white hover:text-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Location
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
