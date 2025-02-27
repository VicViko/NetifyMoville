export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Teak Dining Table",
    category: "Dining",
    description: "Elegant 6-seater dining table crafted from premium teak wood",
    price: 1200,
    image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Teak Wood Wardrobe",
    category: "Bedroom",
    description: "Spacious 3-door wardrobe with intricate carved details",
    price: 1500,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Traditional Teak Bed Frame",
    category: "Bedroom",
    description: "King-size bed frame with carved headboard",
    price: 2000,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "Teak Dining Chairs Set",
    category: "Dining",
    description: "Set of 6 elegant dining chairs with comfortable cushions",
    price: 1800,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    name: "Carved Teak Coffee Table",
    category: "Living",
    description: "Beautifully carved coffee table with glass top",
    price: 800,
    image: "https://images.unsplash.com/photo-1565791380713-1756b9a05343?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    name: "Teak Sideboard Cabinet",
    category: "Living",
    description: "Large storage cabinet with sliding doors",
    price: 1600,
    image: "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 7,
    name: "Teak Bedside Table",
    category: "Bedroom",
    description: "Compact nightstand with drawer and shelf",
    price: 400,
    image: "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 8,
    name: "Teak TV Console",
    category: "Living",
    description: "Modern TV stand with cable management",
    price: 900,
    image: "https://images.unsplash.com/photo-1554295405-abb8fd54f153?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 9,
    name: "Teak Bookshelf",
    category: "Living",
    description: "Tall bookshelf with adjustable shelves",
    price: 1100,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 10,
    name: "Teak Dresser",
    category: "Bedroom",
    description: "6-drawer dresser with mirror",
    price: 1300,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 11,
    name: "Teak Dining Buffet",
    category: "Dining",
    description: "Large buffet cabinet for dining room storage",
    price: 1700,
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 12,
    name: "Teak Corner Shelf",
    category: "Living",
    description: "Space-saving corner display unit",
    price: 600,
    image: "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 13,
    name: "Teak Study Desk",
    category: "Office",
    description: "Spacious desk with built-in drawers",
    price: 950,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 14,
    name: "Teak Office Chair",
    category: "Office",
    description: "Ergonomic chair with leather upholstery",
    price: 700,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 15,
    name: "Teak File Cabinet",
    category: "Office",
    description: "3-drawer file cabinet with lock",
    price: 800,
    image: "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 16,
    name: "Teak Shoe Cabinet",
    category: "Storage",
    description: "Slim shoe storage with tilt-out doors",
    price: 500,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 17,
    name: "Teak Console Table",
    category: "Living",
    description: "Narrow console table for entryway",
    price: 600,
    image: "https://images.unsplash.com/photo-1554295405-abb8fd54f153?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 18,
    name: "Teak Bar Cabinet",
    category: "Dining",
    description: "Elegant bar cabinet with wine storage",
    price: 1400,
    image: "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 19,
    name: "Teak Chest of Drawers",
    category: "Bedroom",
    description: "5-drawer chest with carved details",
    price: 1100,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 20,
    name: "Teak Wall Unit",
    category: "Living",
    description: "Modular wall unit with display shelves",
    price: 2200,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 21,
    name: "Teak Dining Extension Table",
    category: "Dining",
    description: "Expandable dining table for 8-10 people",
    price: 1800,
    image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 22,
    name: "Teak Storage Bench",
    category: "Storage",
    description: "Entry bench with storage compartment",
    price: 700,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 23,
    name: "Teak Room Divider",
    category: "Living",
    description: "3-panel carved room divider screen",
    price: 1200,
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 24,
    name: "Teak Writing Desk",
    category: "Office",
    description: "Compact writing desk with single drawer",
    price: 800,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 25,
    name: "Teak Vanity Table",
    category: "Bedroom",
    description: "Dressing table with mirror and stool",
    price: 1000,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 26,
    name: "Teak Display Cabinet",
    category: "Living",
    description: "Glass-front display cabinet with lighting",
    price: 1600,
    image: "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 27,
    name: "Teak Kitchen Island",
    category: "Kitchen",
    description: "Mobile kitchen island with storage",
    price: 1400,
    image: "https://images.unsplash.com/photo-1565791380713-1756b9a05343?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 28,
    name: "Teak Wine Rack",
    category: "Dining",
    description: "Floor-standing wine rack for 24 bottles",
    price: 600,
    image: "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 29,
    name: "Teak Coat Rack",
    category: "Storage",
    description: "Standing coat rack with umbrella holder",
    price: 400,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 30,
    name: "Teak Magazine Rack",
    category: "Living",
    description: "Floor magazine rack with handle",
    price: 300,
    image: "https://images.unsplash.com/photo-1554295405-abb8fd54f153?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 31,
    name: "Teak Folding Table",
    category: "Living",
    description: "Space-saving folding side table",
    price: 400,
    image: "https://images.unsplash.com/photo-1565791380713-1756b9a05343?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 32,
    name: "Teak Kitchen Cabinet",
    category: "Kitchen",
    description: "Wall-mounted kitchen storage cabinet",
    price: 900,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 33,
    name: "Teak Bathroom Vanity",
    category: "Bathroom",
    description: "Single sink bathroom vanity cabinet",
    price: 1200,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 34,
    name: "Teak Towel Rack",
    category: "Bathroom",
    description: "Wall-mounted towel rack with shelf",
    price: 300,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 35,
    name: "Teak Mirror Frame",
    category: "Bathroom",
    description: "Large decorative mirror with carved frame",
    price: 500,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 36,
    name: "Teak Plant Stand",
    category: "Living",
    description: "Tiered plant stand for indoor use",
    price: 250,
    image: "https://images.unsplash.com/photo-1565791380713-1756b9a05343?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 37,
    name: "Teak Storage Ottoman",
    category: "Living",
    description: "Storage ottoman with tufted leather top",
    price: 600,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 38,
    name: "Teak Wall Shelf",
    category: "Storage",
    description: "Floating wall shelf with hidden brackets",
    price: 200,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 39,
    name: "Teak Umbrella Stand",
    category: "Storage",
    description: "Traditional umbrella stand with drip tray",
    price: 150,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 40,
    name: "Teak Key Cabinet",
    category: "Storage",
    description: "Wall-mounted key storage cabinet",
    price: 180,
    image: "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?auto=format&fit=crop&q=80&w=800"
  }
];
