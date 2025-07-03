
import { useEffect, useState, useRef } from "react";

// Menu data structure based on Huntington Thai
const menuData = {
  appetizers: [
    { id: 1, name: "Edamame", description: "", price: "$6.50" },
    { id: 2, name: "Thai Chicken Wings", description: "", price: "$10.00" },
    { id: 3, name: "Tao Hoo Tod", description: "Crispy tofu served with crushed peanut dipping sauce", price: "$10.00" },
    { id: 4, name: "Sauteed Bok Choy with Garlic", description: "", price: "$10.00" },
    { id: 5, name: "Po Pia Tod", description: "Bean thread noodles & vegetables in a crisp wrapping served with plum sauce", price: "$6.00", vegetarianOptional: true },
    { id: 6, name: "Po Pia Sod", description: "Fresh hand‑rolled shrimp, tofu, bean sprouts & cucumber wrapped in rice paper, brushed with plum sauce", price: "$11.00" },
    { id: 7, name: "Mee Krob", description: "Crispy rice noodles, tofu, shrimp & scallions in tamarind fruit sauce", price: "$12.00", vegetarianOptional: true },
    { id: 8, name: "Tod Mun Pla", description: "Thai style fish cake with cucumber relish & crushed peanut sauce", price: "$10.00" },
    { id: 9, name: "Gai Satay", description: "Marinated & grilled chicken skewers with peanut sauce", price: "$10.00" },
    { id: 10, name: "Thai Dumpling", description: "Steamed Thai dumpling with minced chicken & shrimp", price: "$10.00" },
    { id: 11, name: "Golden Shrimp", description: "Marinated shrimp wrapped in rice paper & plum sauce", price: "$10.00" },
    { id: 12, name: "Yum Pla Muk", description: "Calamari, cucumber & onions in lime sauce", price: "$12.00" },
    { id: 13, name: "Fried Calamari", description: "Deep fried calamari with sweet chili sauce", price: "$12.00" },
    { id: 14, name: "Blackened Tuna", description: "Pan-seared fresh tuna coated in spices, served with wasabi and spicy Thai sauce", price: "Market Price" },
    { id: 15, name: "Golden Puff", description: "Puff pastry stuffed with chicken and potato, served with cucumber salad (4 pieces)", price: "$10.00" },
    { id: 16, name: "Crab Dumpling", description: "Steamed or fried Thai dumpling with crab", price: "$10.00" },
    { id: 17, name: "Fried Pork Dumpling", description: "", price: "$10.00" }
  ],
  soups: [
    { id: 18, name: "Vegetable Soup", description: "Glass noodles & mixed vegetables simmered in a clear broth", price: "$6.00" },
    { id: 19, name: "Tom Kha Gai", description: "Chicken, coconut milk, galangal root, lemongrass & cilantro", price: "$6.00", vegetarianOptional: true },
    { id: 20, name: "Tom Yum Goong", description: "Shrimp, mushroom, kaffir lime leaf & chili paste in hot & sour lemongrass herb broth", price: "$6.00", vegetarianOptional: true }
  ],
  salad: [
    { id: 21, name: "U.S.A. House Salad", description: "Mixed garden greens, sprouts, cucumbers and bean curd with peanut dressing", price: "$7.00" },
    { id: 22, name: "Som Tum (Green Papaya Salad)", description: "Green papaya mixed with carrots, tomatoes and chilis in lime dressing", price: "$11.00" },
    { id: 23, name: "Crispy Calamari Salad", description: "Crispy calamari tossed in house lime dressing with mango, ginger, peanuts, onions, scallions and tomatoes", price: "$12.50" },
    { id: 24, name: "Larb (Thai Lettuce Wrap)", description: "Minced beef or chicken seasoned with roasted garlic, lemongrass, cilantro etc., served on romaine", price: "$16.50" },
    { id: 25, name: "Yum Woon Sen (Entrée)", description: "Bean thread noodles, shrimp, shiitake mushrooms, scallions, lime sauce, sprinkled cashews", price: "$17.00", vegetarianOptional: true },
    { id: 26, name: "Yum Moo (Entrée)", description: "Grilled marinated sliced pork with fresh ginger, orange, cashew and lime sauce", price: "$17.00", vegetarianOptional: true }
  ],
  lunch: [
    { id: 27, name: "Pad Thai (Chicken or Shrimp)", description: "Served with salad or soup and jasmine rice", price: "$15.00" },
    { id: 28, name: "Pad Khe Mao (Drunken Noodles)", description: "", price: "$15.00" },
    { id: 29, name: "Graprow (Chicken or Tofu)", description: "", price: "$15.00" },
    { id: 30, name: "Steamed Vegetables", description: "With rice noodles topped with Thai peanut sauce", price: "$15.00" },
    { id: 31, name: "Beef Broccoli", description: "Served with oyster sauce", price: "$16.00" },
    { id: 32, name: "Gang Massaman", description: "Sliced chicken, onions & potato simmered in mild yellow curry", price: "$15.00" },
    { id: 33, name: "Gang Gai", description: "Sliced chicken, mixed vegetables & bamboo shoots in red curry", price: "$15.00" },
    { id: 34, name: "Yum Gai (Salad)", description: "Mixed greens with fresh mango, ginger, cashews, topped with sliced chicken", price: "$15.00" },
    { id: 35, name: "Larb", description: "Ground pork flavored with garlic, lemongrass etc., served on lettuce", price: "$15.00" },
    { id: 36, name: "Goong Pad Khing", description: "Shrimp, mixed vegetables, mushrooms and onions with fresh ginger", price: "$16.00" },
    { id: 37, name: "Blackened Filet", description: "Herb‑encrusted filet of fish with mixed vegetables", price: "$18.50" }
  ],
  curries: [
    { id: 38, name: "Gang Gai", description: "Sliced chicken with mixed vegetables, basil, coconut milk & red curry", price: "$18.00", vegetarianOptional: true },
    { id: 39, name: "Gang Massaman", description: "Sliced chicken with mixed herbs, potatoes, onions, cucumbers, coconut milk & yellow curry", price: "$18.00", vegetarianOptional: true },
    { id: 40, name: "Gang Keaw Wan Nuea", description: "Sliced beef with eggplant, bamboo shoots, basil leaves, coconut milk & green curry", price: "$18.50", vegetarianOptional: true },
    { id: 41, name: "Gang Seafood", description: "Seafood curry with fish, shrimp, squid & scallop in coconut curry", price: "$23.00" }
  ],
  rice_noodle: [
    { id: 42, name: "Pad Thai Shrimp", description: "", price: "$17.00", vegetarianOptional: true },
    { id: 43, name: "Pad Se-Ew", description: "Beef, broccoli, sweet soy sauce", price: "$18.00", vegetarianOptional: true },
    { id: 44, name: "Khao Pad Gai", description: "Thai fried rice with chicken, tomato, onion & garlic", price: "$17.00", vegetarianOptional: true },
    { id: 45, name: "Thai‑USA Drunken Noodles", description: "Flat noodles with ground pork, shrimp and mixed veggies in basil chili sauce", price: "$21.00" }
  ],
  beef: [
    { id: 46, name: "Nua Yang", description: "Grilled N.Y. sirloin coated with crushed peppers served with sticky rice, vegetables & lime sauce", price: "$30.50" },
    { id: 47, name: "Nua Nam Mun Hoy", description: "Sliced sirloin stir‑fried with broccoli & onions in oyster sauce", price: "$18.50" },
    { id: 48, name: "Yum Nua", description: "Grilled sliced beef with cucumber, mint, lemongrass, onion & tomato in lime chili paste sauce", price: "$19.50" }
  ],
  poultry: [
    { id: 49, name: "Gai Pad Khing", description: "Sliced chicken sautéed with fresh ginger, mushrooms & onions in light soy sauce", price: "$18.00", vegetarianOptional: true },
    { id: 50, name: "Gai Graprow", description: "Sliced chicken sautéed with onions, red peppers, mixed vegetables & basil", price: "$18.00", vegetarianOptional: true },
    { id: 51, name: "Rama Gai", description: "Grilled marinated chicken breast with steamed vegetables & peanut curry sauce", price: "$18.00", vegetarianOptional: true },
    { id: 52, name: "Gai Yang", description: "Grilled Cornish game hen, green papaya salad, sticky rice & red chili sauce", price: "$25.00" },
    { id: 53, name: "Ped Ob Grob", description: "Crispy boneless Long Island duck glazed with plum, chili, mint & ginger sauce", price: "$33.00" }
  ],
  seafood: [
    { id: 54, name: "Available Fillet: Salmon or Catfish", description: "Blackened herb‑coated fillet with mixed vegetables", price: "$Market Price" },
    { id: 55, name: "Whole Fish Catch of the Day", description: "Deep fried whole fish or roasted fillet with chili, garlic & tamarind sauce", price: "$Market Price" },
    { id: 56, name: "Choo Chee", description: "Shrimp with vegetables, kaffir lime leaves & Panang curry in young coconut", price: "$23.00" },
    { id: 57, name: "Goong Gratiem", description: "Sautéed shrimp with garlic, black pepper & cilantro", price: "$23.00" },
    { id: 58, name: "Pad Ta‑Lay", description: "Shrimp, scallops, squid & vegetables in lightly seasoned sauce", price: "$23.00" }
  ],
  sides_extras: [
    { id: 59, name: "Jasmine Rice", description: "", price: "$2.50" },
    { id: 60, name: "Coconut Rice", description: "", price: "$4.00" },
    { id: 61, name: "Sticky Rice", description: "", price: "$3.00" },
    { id: 62, name: "Brown Rice", description: "", price: "$3.00" },
    { id: 63, name: "Substitute Brown Rice", description: "", price: "$1.50" },
    { id: 64, name: "Extra Shrimp", description: "", price: "$6.00" },
    { id: 65, name: "Extra Vegetable or Tofu", description: "", price: "$3.00" },
    { id: 66, name: "Extra Sauce", description: "", price: "$3.00" },
    { id: 67, name: "Sharing Dinner Plate", description: "(Customers sharing plates)", price: "$3.00" }
  ],
  desserts: [
    { id: 68, name: "Thai Pumpkin Custard", description: "", price: "$6.00" },
    { id: 69, name: "Homemade Key Lime Pie", description: "", price: "$6.00" },
    { id: 70, name: "Fried Banana Glazed with Honey", description: "", price: "$6.00" },
    { id: 71, name: "Fried Banana à la Mode", description: "", price: "$9.00" },
    { id: 72, name: "Chocolate Chip Brownie à la Mode", description: "", price: "$9.00" },
    { id: 73, name: "Traditional Coconut w/ Fresh Mango (seasonal)", description: "", price: "$11.00" },
    { id: 74, name: "Ice Cream (Vanilla, Coconut, Cappuccino Crush, Green Tea)", description: "", price: "" }
  ]
};

const categories = [
  { id: "appetizers", name: "Appetizers" },
  { id: "soups", name: "Soups" },
  { id: "salad", name: "Salads" },
  { id: "lunch", name: "Lunch Specials" },
  { id: "curries", name: "Curries" },
  { id: "rice_noodle", name: "Rice & Noodles" },
  { id: "beef", name: "Beef Dishes" },
  { id: "poultry", name: "Poultry" },
  { id: "seafood", name: "Seafood" },
  { id: "sides_extras", name: "Sides & Extras" },
  { id: "desserts", name: "Desserts" }
];

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("appetizers");
  const sectionRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<{[key: string]: HTMLElement | null}>({});

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

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (categoryRefs.current[categoryId]) {
      categoryRefs.current[categoryId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="menu" ref={sectionRef} className="py-20 md:py-28 bg-cream-light bg-opacity-80 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
  <span 
    className={`inline-block text-gold font-medium tracking-wider uppercase mb-3 transition-all duration-700 delay-100 ${
      isVisible ? "opacity-100" : "opacity-0 transform translate-y-10"
    }`}
  >
    Our Menu
  </span>

  <h2 
    className={`text-3xl md:text-4xl font-serif mb-6 transition-all duration-700 delay-200 ${
      isVisible ? "opacity-100" : "opacity-0 transform translate-y-10"
    }`}
  >
    Authentic Thai Cuisine
  </h2>

  <div 
    className={`text-muted-foreground leading-relaxed space-y-4 transition-all duration-700 delay-300 ${
      isVisible ? "opacity-100" : "opacity-0 transform translate-y-10"
    }`}
  >
    <p>
      Browse our menu of traditional Thai dishes, carefully prepared with authentic recipes
      and the freshest ingredients.
    </p>

    <p>
      For any dish marked with 
      <span className="mx-1 text-muted-foreground">🌿</span> mixed vegetables or tofu may be substituted as a protein option (based upon availability).
    </p>

    <p>
      A 20% gratuity will be applied to parties of six or more.
    </p>
  </div>
</div>

      

        {/* Category navigation */}
        <div 
          className={`flex overflow-x-auto pb-2 mb-12 transition-all duration-700 delay-400 sticky top-20 bg-cream-light bg-opacity-90 z-30 pt-4 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex space-x-2 mx-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`px-4 py-2 whitespace-nowrap rounded-sm border transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-maroon text-white border-maroon"
                    : "bg-transparent text-charcoal border-muted hover:border-maroon"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu categories */}
        <div className="space-y-16">
          {categories.map((category) => (
            <div 
              key={category.id}
              id={category.id}
              ref={(el) => (categoryRefs.current[category.id] = el)}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
              }`}
            >
              <h3 className="menu-category-title">{category.name}</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
                {menuData[category.id as keyof typeof menuData].map((item) => (
                  <div key={item.id} className="menu-item-container">
                    <div className="menu-item-title">
  <span>
    {item.name}
    {item.vegetarianOptional && <span className="ml-1 text-green-600">🌿</span>}
  </span>
  <span className="menu-item-price">{item.price}</span>
</div>
                    {item.description && (
                      <p className="menu-item-description">{item.description}</p>
                    )}
                    {item.options && (
                      <p className="text-xs text-thai-red italic">{item.options}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-muted-foreground text-sm">
          <p>* Spicy level can be adjusted upon request</p>
          <p>* Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness</p>
          <p>* Please inform your server of any food allergies</p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
