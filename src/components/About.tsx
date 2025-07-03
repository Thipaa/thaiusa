
import { useEffect, useState, useRef } from "react";

const About = () => {
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
    <section id="about" ref={sectionRef} className="py-20 md:py-28 bg-ivory overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span 
            className={`inline-block text-gold font-medium tracking-wider uppercase mb-3 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100" : "opacity-0 transform translate-y-10"
            }`}
          >
            Our Story
          </span>
          <h2 
            className={`text-3xl md:text-4xl font-serif mb-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0 transform translate-y-10"
            }`}
          >
            Thai Culinary Excellence Since 1995
          </h2>
          <p 
            className={`text-muted-foreground leading-relaxed transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0 transform translate-y-10"
            }`}
          >
            At Huntington Thai, we bring the authentic flavors of Thailand to your table through 
            carefully crafted dishes made with fresh ingredients and traditional techniques passed down 
            through generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative">
            <div 
              className={`relative z-10 rounded-sm overflow-hidden transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-20"
              }`}
            >
              <img 
                src="https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80" 
                alt="Chef preparing traditional Thai dish" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div 
              className={`absolute top-10 -right-5 w-full h-full border-2 border-gold rounded-sm transition-all duration-1000 delay-600 ${
                isVisible ? "opacity-100 transform translate-x-0" : "opacity-0 transform translate-x-20"
              }`}
            ></div>
          </div>

          <div>
            <div 
              className={`mb-8 transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
              }`}
            >
              <h3 className="text-xl font-serif text-charcoal mb-3">Authentic Recipes</h3>
              <p className="text-muted-foreground">
                Our chefs prepare each dish according to authentic recipes, using traditional techniques
                to achieve the perfect balance of sweet, sour, salty, and spicy flavors that Thai cuisine is known for.
              </p>
            </div>

            <div 
              className={`mb-8 transition-all duration-700 delay-600 ${
                isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
              }`}
            >
              <h3 className="text-xl font-serif text-charcoal mb-3">Fresh Ingredients</h3>
              <p className="text-muted-foreground">
                We source the freshest local produce and authentic Thai ingredients to ensure
                that every dish not only tastes exceptional but also contributes to your well-being.
              </p>
            </div>

            <div 
              className={`transition-all duration-700 delay-700 ${
                isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
              }`}
            >
              <h3 className="text-xl font-serif text-charcoal mb-3">Warm Hospitality</h3>
              <p className="text-muted-foreground mb-6">
                Experience the warmth of Thai hospitality as our attentive staff ensures your dining
                experience is exceptional from the moment you arrive until your last bite.
              </p>
              <a href="#menu" className="btn-primary inline-block">
                Explore Our Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
