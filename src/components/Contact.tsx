
import { useState, useEffect, useRef } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your reservation request! We'll contact you shortly to confirm.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      guests: "",
      date: "",
      time: "",
      message: ""
    });
  };

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
    <section id="contact" ref={sectionRef} className="py-20 md:py-28 bg-ivory">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span
            className={`inline-block text-gold font-medium tracking-wider uppercase mb-3 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100" : "opacity-0 transform translate-y-10"
            }`}
          >
            Reservations
          </span>
          <h2
            className={`text-3xl md:text-4xl font-serif mb-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0 transform translate-y-10"
            }`}
          >
            Book Your Table
          </h2>
          <p
            className={`text-muted-foreground leading-relaxed transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0 transform translate-y-10"
            }`}
          >
            Reserve your table for an authentic Thai dining experience. For immediate 
            assistance or same-day reservations, please call us directly.
          </p>
        </div>

        <div 
          className={`max-w-4xl mx-auto bg-white rounded-sm shadow-md overflow-hidden transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-20"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-2 bg-charcoal text-white p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-serif mb-4">Contact Information</h3>
              <p className="text-white/80 mb-6">
                For immediate assistance or to make a reservation by phone, please contact us directly.
              </p>
              <div className="mb-6">
                <h4 className="text-gold font-medium mb-2">Phone</h4>
                <p className="text-white/80">(555) 123-4567</p>
              </div>
              <div className="mb-6">
                <h4 className="text-gold font-medium mb-2">Email</h4>
                <p className="text-white/80">reservations@huntingtonthai.com</p>
              </div>
              <div>
                <h4 className="text-gold font-medium mb-2">Hours</h4>
                <p className="text-white/80">
                  Monday - Thursday: 11am - 9pm<br />
                  Friday - Saturday: 11am - 10pm<br />
                  Sunday: 12pm - 8pm
                </p>
              </div>
            </div>
            
            <div className="md:col-span-3 p-8 md:p-10">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label 
                      htmlFor="phone" 
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="guests" 
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Number of Guests*
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="input-field"
                    >
                      <option value="">Select number of guests</option>
                      <option value="1">1 person</option>
                      <option value="2">2 people</option>
                      <option value="3">3 people</option>
                      <option value="4">4 people</option>
                      <option value="5">5 people</option>
                      <option value="6">6 people</option>
                      <option value="7+">7+ people</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label 
                      htmlFor="date" 
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Preferred Date*
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="time" 
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Preferred Time*
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="input-field"
                    >
                      <option value="">Select time</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="11:30">11:30 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="13:30">1:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Please let us know if you have any special requests or dietary restrictions."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-primary w-full md:w-auto"
                >
                  Request Reservation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
