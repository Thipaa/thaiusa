
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

// Define types for the dotlottie player
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dotlottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src: string;
        background?: string;
        speed?: string | number;
        loop?: boolean;
        autoplay?: boolean;
        style?: React.CSSProperties;
      };
    }
  }
}

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading and set animation triggers
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Solid dark blue background instead of gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy-blue z-10"></div>
        
        {/* Star silhouettes */}
        <div className="absolute inset-0 z-20 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <dotlottie-player
              key={i}
              src="https://lottie.host/5de9a9b5-87fb-445e-a738-c9534196e4e2/faovaVaVLC.lottie"
              background="transparent"
              speed="1"
              style={{
                position: 'absolute',
                width: `${Math.random() * 40 + 20}px`,
                height: `${Math.random() * 40 + 20}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.1,
              }}
              loop
              autoplay
            ></dotlottie-player>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 text-center">
        <div 
          className={`transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
          }`}
        >
          <span className="text-white uppercase tracking-widest font-medium inline-block mb-4 animate-fade-in">Huntington, NY</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium text-white mb-6 md:mb-8 leading-tight md:leading-tight animate-fade-in flex flex-col items-center">
            THAI
            <dotlottie-player
              src="https://lottie.host/5de9a9b5-87fb-445e-a738-c9534196e4e2/faovaVaVLC.lottie"
              background="transparent"
              speed="1"
              style={{ width: '170px', height: '170px', margin: '-30px 0' }}
              loop
              autoplay
            ></dotlottie-player>
            USA
          </h1>
          <p className="max-w-lg mx-auto text-white/80 mb-8 md:mb-10 text-lg animate-fade-in">
            Experience authentic Thai cuisine in the heart of Huntington
          </p>
          <div className="flex justify-center items-center animate-fade-in">
            <a href="#menu" className="btn-primary inline-flex items-center justify-center">
              View Our Menu
            </a>
          </div>
        </div>
        
        {/* Scroll indicator - centered with flex and mx-auto */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#menu" className="text-white/80 hover:text-white transition-colors">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
