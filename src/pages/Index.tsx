
import { useEffect } from "react";
import { Star } from "lucide-react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Location from "../components/Location";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background stars for entire page */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-visible">
        {[...Array(400)].map((_, i) => (
          <Star
            key={i}
            size={Math.random() * 12 + 6}
            className={`absolute ${i % 3 === 0 ? "text-navy-blue" : i % 3 === 1 ? "text-thai-red" : "text-[#1EAEDB]"} opacity-60`}
            style={{
              top: `${Math.random() * 600}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Menu />
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
