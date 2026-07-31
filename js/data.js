/**
 * Cafe Menu Data Configuration
 * Currency: ILS (₪)
 * Language: English
 */

export const CURRENCY = '₪';

export const CATEGORIES = [
  { id: 'all', name: 'All Items', icon: '✨' },
  { id: 'coffee', name: 'Coffee & Drinks', icon: '☕' },
  { id: 'salads', name: 'Fresh Salads', icon: '🥗' },
  { id: 'sandwiches', name: 'Artisan Sandwiches', icon: '🥪' },
  { id: 'pastries', name: 'Bakery & Sweets', icon: '🥐' },
  { id: 'beans', name: 'Coffee Beans', icon: '🫘' }
];

export const DIET_FILTERS = [
  { id: 'bestseller', label: '⭐ Best Seller' },
  { id: 'vegan', label: '🌱 Vegan' },
  { id: 'vegetarian', label: '🧀 Vegetarian' },
  { id: 'gluten-free', label: '🌾 Gluten-Free' }
];

export const MENU_ITEMS = [
  // --- COFFEE & DRINKS ---
  {
    id: 'c1',
    name: 'Velvet Cappuccino',
    category: 'coffee',
    price: 18,
    description: 'Double shot of signature Ethiopian espresso blended with silky micro-foam steamed milk.',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
    tags: ['bestseller'],
    calories: '150 kcal',
    options: {
      milk: [
        { name: 'Whole Milk', price: 0 },
        { name: 'Oat Milk', price: 3 },
        { name: 'Almond Milk', price: 3 },
        { name: 'Soy Milk', price: 2 }
      ],
      extraShot: { name: 'Extra Shot Espresso', price: 5 }
    }
  },
  {
    id: 'c2',
    name: 'Spanish Caramel Latte',
    category: 'coffee',
    price: 22,
    description: 'Espresso infused with house-made sweetened condensed milk, Madagascar vanilla, and caramel drizzle.',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
    tags: ['bestseller'],
    calories: '240 kcal',
    options: {
      milk: [
        { name: 'Whole Milk', price: 0 },
        { name: 'Oat Milk', price: 3 },
        { name: 'Almond Milk', price: 3 }
      ],
      extraShot: { name: 'Extra Shot Espresso', price: 5 }
    }
  },
  {
    id: 'c3',
    name: 'Artisan Cold Brew',
    category: 'coffee',
    price: 20,
    description: 'Slow-steeped for 20 hours using single-origin Guatemalan beans. Smooth, chocolatey, and crisp over ice.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
    tags: ['vegan', 'gluten-free', 'bestseller'],
    calories: '10 kcal',
    options: {
      syrup: [
        { name: 'None', price: 0 },
        { name: 'Vanilla Syrup', price: 3 },
        { name: 'Salted Caramel', price: 3 }
      ]
    }
  },
  {
    id: 'c4',
    name: 'Lavender Honey Iced Latte',
    category: 'coffee',
    price: 24,
    description: 'Espresso over cold oat milk infused with wild French lavender flowers and raw local wildflower honey.',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80',
    tags: ['vegetarian'],
    calories: '180 kcal',
    options: {
      milk: [
        { name: 'Oat Milk', price: 0 },
        { name: 'Whole Milk', price: 0 },
        { name: 'Almond Milk', price: 3 }
      ]
    }
  },
  {
    id: 'c5',
    name: 'Flat White',
    category: 'coffee',
    price: 17,
    description: 'Ristretto espresso shots poured over velvety textured micro-foam milk for an intense coffee flavor.',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80',
    tags: [],
    calories: '120 kcal',
    options: {
      milk: [
        { name: 'Whole Milk', price: 0 },
        { name: 'Oat Milk', price: 3 },
        { name: 'Almond Milk', price: 3 }
      ]
    }
  },
  {
    id: 'c6',
    name: 'Ceremonial Grade Matcha Latte',
    category: 'coffee',
    price: 23,
    description: 'Premium Japanese Uji ceremonial matcha whisked with warm oat milk and raw agave nectar.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    tags: ['vegan', 'gluten-free'],
    calories: '130 kcal',
    options: {
      milk: [
        { name: 'Oat Milk', price: 0 },
        { name: 'Almond Milk', price: 0 },
        { name: 'Soy Milk', price: 0 }
      ]
    }
  },

  // --- SALADS ---
  {
    id: 's1',
    name: 'Grilled Halloumi & Roasted Beet Salad',
    category: 'salads',
    price: 48,
    description: 'Warm crispy halloumi cheese, slow-roasted beets, baby arugula, toasted walnut crumble, and pomegranate balsamic vinaigrette.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    tags: ['vegetarian', 'gluten-free', 'bestseller'],
    calories: '420 kcal',
    options: {
      protein: [
        { name: 'No Extra Protein', price: 0 },
        { name: 'Add Grilled Chicken Breast', price: 16 },
        { name: 'Add Avocado', price: 8 }
      ]
    }
  },
  {
    id: 's2',
    name: 'Mediterranean Superfood Quinoa Bowl',
    category: 'salads',
    price: 46,
    description: 'Fluffy tri-color quinoa, English cucumbers, cherry tomatoes, Kalamata olives, chickpeas, fresh mint, and lemon tahini dressing.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    tags: ['vegan', 'gluten-free'],
    calories: '380 kcal',
    options: {
      protein: [
        { name: 'Standard', price: 0 },
        { name: 'Add Crumbled Feta', price: 6 },
        { name: 'Add Grilled Halloumi', price: 12 }
      ]
    }
  },
  {
    id: 's3',
    name: 'Avocado & Citrus Salad',
    category: 'salads',
    price: 44,
    description: 'Sliced Haas avocado, ruby red grapefruit segments, baby spinach, shaved fennel, toasted pumpkin seeds, and citrus-herb dressing.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    tags: ['vegan', 'gluten-free'],
    calories: '320 kcal',
    options: {
      dressing: [
        { name: 'Citrus Herb Vinaigrette', price: 0 },
        { name: 'Tahini Dressing', price: 0 }
      ]
    }
  },

  // --- SANDWICHES ---
  {
    id: 'sw1',
    name: 'Smoked Salmon & Everything Bagel',
    category: 'sandwiches',
    price: 42,
    description: 'Fresh toasted artisan bagel, Norwegian smoked salmon, dill whipped cream cheese, capers, pickled red onions, and fresh cucumbers.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    tags: ['bestseller'],
    calories: '510 kcal',
    options: {
      bread: [
        { name: 'Everything Bagel', price: 0 },
        { name: 'Sesame Bagel', price: 0 },
        { name: 'Gluten-Free Bread', price: 5 }
      ]
    }
  },
  {
    id: 'sw2',
    name: 'Roasted Turkey & Basil Pesto Focaccia',
    category: 'sandwiches',
    price: 44,
    description: 'Oven-roasted turkey breast, fresh mozzarella, house basil pesto, sun-dried tomatoes, and wild rocket on warm garlic olive oil focaccia.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    tags: ['bestseller'],
    calories: '580 kcal',
    options: {
      cheese: [
        { name: 'Mozzarella', price: 0 },
        { name: 'Extra Mozzarella', price: 6 },
        { name: 'Dairy-Free Cheese', price: 4 }
      ]
    }
  },
  {
    id: 'sw3',
    name: 'Avocado & Poached Egg Toast',
    category: 'sandwiches',
    price: 38,
    description: 'Thick sourdough toast spread with mashed avocado, chili flakes, microgreens, organic poached egg, and zaatar oil.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    tags: ['vegetarian'],
    calories: '430 kcal',
    options: {
      egg: [
        { name: '1 Poached Egg', price: 0 },
        { name: '2 Poached Eggs', price: 6 }
      ]
    }
  },
  {
    id: 'sw4',
    name: 'Grilled Halloumi & Olive Tapenade Sourdough',
    category: 'sandwiches',
    price: 40,
    description: 'Seared halloumi cheese, roasted sweet peppers, black olive tapenade, fresh tomato, and mint leaves on pressed sourdough.',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
    tags: ['vegetarian'],
    calories: '520 kcal',
    options: {}
  },

  // --- BAKERY & PASTRIES ---
  {
    id: 'p1',
    name: 'French Butter Croissant',
    category: 'pastries',
    price: 14,
    description: 'Classic flaky, golden, layered French butter croissant baked fresh every morning.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    tags: ['vegetarian', 'bestseller'],
    calories: '280 kcal',
    options: {}
  },
  {
    id: 'p2',
    name: 'Double Almond Croissant',
    category: 'pastries',
    price: 18,
    description: 'Filled with rich almond frangipane cream, topped with toasted sliced almonds and dusted with powdered sugar.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    tags: ['vegetarian', 'bestseller'],
    calories: '390 kcal',
    options: {}
  },
  {
    id: 'p3',
    name: 'Cardamom & Cinnamon Brioche Bun',
    category: 'pastries',
    price: 16,
    description: 'Soft Swedish-style brioche knot infused with fragrant ground green cardamom seeds and caramelized Ceylon cinnamon butter.',
    image: 'https://images.unsplash.com/photo-1583338917451-face2751d8d5?auto=format&fit=crop&w=800&q=80',
    tags: ['vegetarian'],
    calories: '340 kcal',
    options: {}
  },
  {
    id: 'p4',
    name: 'Pistachio Creme Danish',
    category: 'pastries',
    price: 20,
    description: 'Flaky pastry nest filled with silky Sicilian pistachio pastry cream and topped with crushed bronte pistachios.',
    image: 'https://images.unsplash.com/photo-1621236378699-8597faf6a145?auto=format&fit=crop&w=800&q=80',
    tags: ['vegetarian'],
    calories: '410 kcal',
    options: {}
  },
  {
    id: 'p5',
    name: 'Basque Burnt Cheesecake Slice',
    category: 'pastries',
    price: 28,
    description: 'Caramelized crust on the outside with a lush, creamy center. Served with seasonal berry compote.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
    tags: ['vegetarian', 'gluten-free'],
    calories: '450 kcal',
    options: {}
  },

  // --- COFFEE BEANS ---
  {
    id: 'b1',
    name: 'Ethiopia Yirgacheffe (250g)',
    category: 'beans',
    price: 58,
    description: 'Single Origin Whole Bean. Light Roast with vibrant floral jasmine notes, bergamot tea, and wild peach sweetness.',
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=800&q=80',
    tags: ['vegan', 'gluten-free', 'bestseller'],
    calories: 'N/A',
    options: {
      grind: [
        { name: 'Whole Bean', price: 0 },
        { name: 'Espresso Grind', price: 0 },
        { name: 'Filter / Pour-Over Grind', price: 0 },
        { name: 'French Press Grind', price: 0 }
      ],
      weight: [
        { name: '250g Bag', price: 0 },
        { name: '1kg Bag', price: 95 }
      ]
    }
  },
  {
    id: 'b2',
    name: 'Colombia Huila Reserve (250g)',
    category: 'beans',
    price: 54,
    description: 'Single Origin Whole Bean. Medium Roast featuring rich red apple acidity, dark caramel sweetness, and milk chocolate finish.',
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&w=800&q=80',
    tags: ['vegan', 'gluten-free'],
    calories: 'N/A',
    options: {
      grind: [
        { name: 'Whole Bean', price: 0 },
        { name: 'Espresso Grind', price: 0 },
        { name: 'Filter / Pour-Over Grind', price: 0 }
      ],
      weight: [
        { name: '250g Bag', price: 0 },
        { name: '1kg Bag', price: 90 }
      ]
    }
  },
  {
    id: 'b3',
    name: 'Signature Velvet House Blend (250g)',
    category: 'beans',
    price: 48,
    description: 'Curated blend of Brazil Cerrado & Sumatra Mandheling. Medium-Dark Roast delivering intense cocoa notes, hazelnut, and thick crema.',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80',
    tags: ['vegan', 'gluten-free', 'bestseller'],
    calories: 'N/A',
    options: {
      grind: [
        { name: 'Whole Bean', price: 0 },
        { name: 'Espresso Grind', price: 0 },
        { name: 'Filter / Pour-Over Grind', price: 0 }
      ],
      weight: [
        { name: '250g Bag', price: 0 },
        { name: '1kg Bag', price: 80 }
      ]
    }
  }
];
