
import { useEffect, useState, useRef } from "react";
import { Clock, MapPin, Phone } from "lucide-react";

const Location = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="location" ref={sectionRef} className="py-20 md:py-28 bg-charcoal text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span 
              className={`inline-block text-gold font-medium tracking-wider uppercase mb-3 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100" : "opacity-0 transform translate-y-10"
              }`}
            >
              Visit Us
            </span>
            <h2 
              className={`text-3xl md:text-4xl font-serif text-white mb-6 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100" : "opacity-0 transform translate-y-10"
              }`}
            >
              Our Location
            </h2>
            <p 
              className={`text-white/80 leading-relaxed mb-8 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100" : "opacity-0 transform translate-y-10"
              }`}
            >
              Located in the heart of Huntington, our restaurant offers a welcoming
              ambiance for a memorable dining experience. We look forward to serving you.
            </p>

            <div 
              className={`flex items-start space-x-4 mb-6 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100" : "opacity-0 transform translate-y-10"
              }`}
            >
              <MapPin className="text-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium mb-2 text-white">Address</h3>
                <p className="text-white/80">
                  273 New York Ave<br />
                  Huntington, NY 11743<br />
                  United States
                </p>
              </div>
            </div>

            <div 
              className={`flex items-start space-x-4 mb-6 transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100" : "opacity-0 transform translate-y-10"
              }`}
            >
              <Clock className="text-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium mb-2 text-white">Hours</h3>
                <p className="text-white/80">
                  Monday: 5–9 PM<br />
                  Tuesday: Closed<br />
                  Wednesday: 12–3 PM, 5–9 PM<br />
                  Thursday: 12–3 PM, 5–9 PM<br />
                  Friday: 12–3 PM, 5–10 PM<br />
                  Saturday: 12–3 PM, 5–10 PM<br />
                  Sunday: 12–3 PM, 5–9 PM
                </p>
              </div>
            </div>

            <div 
              className={`flex items-start space-x-4 mb-8 transition-all duration-700 delay-600 ${
                isVisible ? "opacity-100" : "opacity-0 transform translate-y-10"
              }`}
            >
              <Phone className="text-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium mb-2 text-white">Contact</h3>
                <p className="text-white/80">
                  Phone: (631) 427-8464<br />
                  <a href="https://www.facebook.com/thaiusahuntingtonny/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Facebook</a> | <a href="https://www.instagram.com/thaiusahuntington/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Instagram</a>
                </p>
              </div>
            </div>
          </div>

          <div 
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 transform translate-x-0" : "opacity-0 transform translate-x-20"
            }`}
          >
            <div className="relative z-10 rounded-sm overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/fe38a228-04b5-4716-aea8-55754221cbf6.png" 
                alt="Thai cuisine chef cooking with flames" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute top-10 -left-5 w-full h-full border-2 border-gold rounded-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
