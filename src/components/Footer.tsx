
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a 
              href="https://www.facebook.com/thaiusahuntingtonny/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-gold transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://www.instagram.com/thaiusahuntington/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-gold transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
          
          <p className="text-white/70 text-sm">
            © {currentYear} Thai USA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
