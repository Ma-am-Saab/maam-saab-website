// ============================================================
// MA'AM SAAB, MENU DATA  (edit here; the menu page reads this)
// June 2026. Prices are strings ("12 · 42" = glass · bottle).
// item fields: name, desc, price, tags[], choose[], note, sub, photo
// ============================================================
window.MS_MENU = {
  tasting: {
    title: "The Ma'am Saab Tasting Experience",
    blurb: "Three courses. One guided journey through Pakistani comfort, street fare, and spice.",
    price: "69",
    unit: "per person",
    notes: ["Full table participation required, min 2", "Limited tastings available nightly"]
  },

  food: [
    { section: "Chaat Counter", subtitle: "Meant for sharing. Good luck.", items: [
      { name: "Fritos Chaat", star: true, desc: "Fritos, cholay, sweet yogurt, tamarind, chaat masala, herbs", price: "12", tags: ["vegetarian", "gf", "vegan available"], photo: "chaat-floral.jpg" },
      { name: "Sweet Potato Chaat", desc: "Roasted sweet potatoes, mango, tamarind, yogurt, chickpeas, sev, chaat crunch", price: "14", tags: ["vegetarian", "vegan available"] },
      { name: "Samosa Chaat", desc: "Crispy vegetable samosa over spiced cholay, tamarind, yogurt, herbs", price: "14", tags: ["vegan", "vegetarian", "df"], photo: "chaat-flowers.jpg" },
      { name: "Bhel Puri", star: true, desc: "Crispy rice puffs, chickpea strings, crisps, tamarind, amchur, mint, cilantro", price: "12", tags: ["df", "vegan", "vegetarian"] },
    ]},
    { section: "Street Bites", subtitle: "Moment makers. All of them.", items: [
      { name: "Smoked Wings", star: true, desc: "Chargha spiced wings with sexy mayo", price: "14", tags: ["gf", "df"], note: "Make 'em angry +2", photo: "kabab-platter.jpg" },
      { name: "Golden Paneer Slab", desc: "Spiced paneer with golden butter sauce", price: "13", tags: ["gf"] },
      { name: "Qeema Pav", star: true, desc: "Seasoned ground lamb, butter-toasted buns, Lahori cholay", price: "14", tags: [] },
      { name: "Masala Salad", desc: "Cabbage, coconut, peanuts, herbs, crispy fried onions", price: "14", tags: ["vegan", "vegetarian", "gf"] },
    ]},
    { section: "Heritage Mains", subtitle: "Deeply spiced, rooted in tradition.", items: [
      { name: "Super Highway Karahi", desc: "Tomato, ginger, garlic, red chili masala in a hot karahi, served with naan", price: "32", tags: ["gf available", "vegetarian available"], choose: ["Beef", "Chicken", "Paneer"], photo: "karahi-feature-graded.jpg" },
      { name: "Karachi Style Biryani", star: true, desc: "Aromatic basmati rice, rich masala, served with raita & kachoomar", price: "36", tags: ["gf available", "vegan available", "vegetarian available"], choose: ["Beef", "Chicken", "Paneer", "Cholay"], photo: "karahi-sunflower.jpg" },
      { name: "Lucknow Lamb Nihari", star: true, desc: "16-hour slow-cooked lamb shank, silky spiced gravy, served with naan", price: "42", tags: [], photo: "nihari-graded.jpg" },
    ]},
    { section: "From the Grill", subtitle: "Bold spices, high heat, big flavor.", items: [
      { name: "Chicken Tikka", star: true, desc: "Kashmiri chili, yogurt and lemon marinated grilled chicken", price: "34", tags: ["gf"] },
      { name: "Boti Tikka", desc: "Garlic and Kashmiri chili steak cubes", price: "34", tags: ["gf"], photo: "kabab-platter.jpg" },
      { name: "Paneer Tikka", desc: "Roasted paneer cubes, garlic, Kashmiri chili marinade", price: "32", tags: ["gf"] },
      { name: "Frontier Kabab", star: true, desc: "Mom's recipe. Garlic and cumin spiced ground beef kabab", price: "34", tags: ["df", "gf"] },
    ]},
    { section: "Curries & Comfort", subtitle: "Rich, aromatic, deeply satisfying.", items: [
      { name: "Butter Chicken", star: true, desc: "Roast chicken in Ma'am Saab's golden butter curry, basmati rice", price: "32", tags: ["gf"], photo: "lamb-shank.jpg", printAs: "Butter Chicken / Paneer" },
      { name: "Butter Paneer", star: true, desc: "Roast paneer in Ma'am Saab's golden butter curry, basmati rice", price: "32", tags: ["gf", "vegetarian"], printOmit: true },
      { name: "Palak Chicken", desc: "Roast chicken in rich spinach and garlic curry, basmati rice", price: "32", tags: ["gf"], printAs: "Palak Chicken / Paneer" },
      { name: "Palak Paneer", desc: "Roast paneer in rich spinach and garlic curry, basmati rice", price: "32", tags: ["gf", "vegetarian"], printOmit: true },
      { name: "Vegetarian Thali", star: true, desc: "Saag paneer, methi aloo, basmati rice, paratha, kachoomar", price: "29", tags: ["vegan available", "vegetarian", "gf available"] },
    ]},
    { section: "Breads", items: [
      { name: "Butter Naan", star: true, desc: "Soft, blistered, made for scooping", price: "5", tags: ["vegetarian", "vegan available"] },
      { name: "Paratha", desc: "Flaky, buttery, griddled · two pieces", price: "9", tags: ["vegetarian", "vegan"] },
    ]},
    { section: "Rice", items: [
      { name: "Zeera Rice", desc: "Basmati rice with toasted cumin", price: "9", tags: ["gf", "vegetarian", "vegan"] },
      { name: "Biryani Rice", star: true, desc: "Basmati rice with biryani masala", price: "9", tags: ["gf", "vegetarian", "vegan"] },
    ]},
    { section: "Signature Sides", items: [
      { name: "Butter Sauce", star: true, desc: "For your naan, rice, and shameless dipping", price: "9", tags: ["vegetarian", "gf"] },
      { name: "Methi Aloo", star: true, desc: "Creamy potatoes, fenugreek, warm spice", price: "12", tags: ["gf", "vegetarian", "vegan"] },
      { name: "Palak", desc: "Spinach slow-cooked with roasted garlic and cumin", price: "12", tags: ["gf", "vegetarian"] },
      { name: "Lahori Cholay", desc: "Slow-simmered Lahori spiced chickpeas", price: "12", tags: ["gf", "vegetarian", "vegan"] },
    ]},
    { section: "Dips & Chutneys", note: "Each 6 · Three 15 · Sampler 24", items: [
      { name: "Mint Raita", desc: "Cool yogurt, mint, mild spice", tags: ["vegetarian", "gf"] },
      { name: "Onion Kachoomar", desc: "Onion, tomato, cucumber, chili", tags: ["vegetarian", "vegan", "gf"] },
      { name: "Mint & Cilantro", desc: "Bright, herby, fresh", tags: ["vegetarian", "vegan", "gf"] },
      { name: "Tamarind & Date", desc: "Sweet, tangy, deep", tags: ["vegetarian", "vegan", "gf"] },
      { name: "Chili Garlic", desc: "Hot, sharp, addictive", tags: ["vegetarian", "vegan", "gf"] },
      { name: "Coconut Mango", desc: "Creamy, tropical, gently spiced", tags: ["vegetarian", "vegan", "gf"] },
    ]},
    { section: "Sweets", items: [
      { name: "Gulab Jamun", star: true, desc: "Rosewater dumplings, cardamom syrup, pistachio", price: "11", tags: ["vegetarian"] },
      { name: "Seasonal Cheesecake", desc: "Chef's featured preparation", price: "12", tags: ["vegetarian"] },
      { name: "Rasmalai Tres Leches", star: true, desc: "Rose, cardamom infused sponge, candied pistachio", price: "12", tags: ["vegetarian"] },
      { name: "Saffron Ice Cream Sundae", desc: "Parle-G, pistachio, rose, kulfi sauce", price: "12", tags: ["vegetarian"] },
    ]},
  ],

  foodNote: "22% auto-gratuity is applied to parties of five or larger. Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of food-borne illness.",

  drinks: [
    { section: "Signature Cocktails", items: [
      { name: "Kashmiri 76", desc: "Vodka, dry curaçao, citrus, bubbles, pomegranate", price: "16", tags: [] },
      { name: "Shalimar", desc: "Gin, rose vermouth, grand marnier, lemon, ginger", price: "16", tags: [] },
      { name: "Rang-e-Bahar", desc: "Tequila, mezcal, citrus, pom", price: "15", tags: [] },
      { name: "Karachi Wala", desc: "Vodka, chai, spices, amaretto", price: "16", tags: [], photo: "cocktail-coupe.jpg" },
      { name: "Divine Intervention", desc: "Chai infused bourbon, west indies orange bitters", price: "15", tags: [] },
      { name: "Khatta Meetha Part II", desc: "Grand marnier, aperol, peach, pineapple, pom", price: "16", tags: [] },
      { name: "Party in Lahore", desc: "Tropical gin, grapefruit, peach, citrus", price: "15", tags: [] },
      { name: "The Last Temptation", desc: "Patrón XO, cream, chocolate, pistachio", price: "16", tags: [] },
    ]},
    { section: "Mocktails", items: [
      { name: "Electric Rickshaw", desc: "Guava, pomegranate, citrus", price: "12", tags: [], photo: "cocktail-orange.jpg" },
      { name: "Truckstop Cooler", desc: "Peach, pomegranate, citrus, tonic", price: "12", tags: [], photo: "cocktail-red.jpg" },
      { name: "Karachi Wala Jr", desc: "Chai · spices · simple · cream", price: "12", tags: [] },
      { name: "Ish Mojito", desc: "Lime, moroccan mint, < 0.5% abv", price: "9", tags: [] },
    ]},
    { section: "Craft Beer", items: [
      { name: "Flying Horse Lager 22oz", desc: "United Breweries · 4.7% abv · India", price: "12", tags: [] },
      { name: "Something Cold Blonde Ale", desc: "Edmund's Oast · 5% abv · Charleston SC", price: "9", tags: [] },
      { name: "Munkle Pilsner", desc: "Munkle · 5.1% abv · Charleston SC", price: "8", tags: [] },
      { name: "White Thai", desc: "Westbrook · 5% abv · Mt. Pleasant SC", price: "8", tags: [] },
      { name: "Seasonal Indian Beer", desc: "Please inquire about tonight's selection", price: "9", tags: [] },
      { name: "Seasonal IPA", desc: "Please inquire about tonight's selection", price: "9", tags: [] },
      { name: "Seasonal Cider", desc: "Please inquire about tonight's selection", price: "9", tags: [] },
      { name: "Black Widow Cider", desc: "Original Sin · 6% abv · New York NY", price: "8", tags: [] },
    ]},
    { section: "Hemp-Derived THC", urdu: "", items: [
      { name: "Raspberry Lime", desc: "Crescent 9 · 10mg", price: "12", tags: [] },
      { name: "Ginger Lemonade", desc: "Crescent 9 · 10mg", price: "12", tags: [] },
      { name: "Sour Watermelon", desc: "Crescent 9 · 10mg", price: "12", tags: [] },
      { name: "Mountain Doom", desc: "Coastalo · 10mg", price: "12", tags: [] },
      { name: "Red Cream", desc: "Coastalo · 10mg", price: "12", tags: [] },
      { name: "Lemonade", desc: "Coastal · 10mg", price: "12", tags: [] },
    ]},
    { section: "Wine", subtitle: "Glass · Bottle", items: [
      { name: "Chardonnay", desc: "", price: "12 · 42", tags: [] },
      { name: "Rosé", desc: "", price: "13 · 45", tags: [] },
      { name: "Sauvignon Blanc", desc: "", price: "12 · 42", tags: [] },
      { name: "Vinho Verde", desc: "", price: "12 · 42", tags: [] },
      { name: "Bubbles", desc: "", price: "12 · 42", tags: [] },
      { name: "Pinot Noir", desc: "", price: "12 · 42", tags: [] },
      { name: "Cabernet Sauvignon", desc: "", price: "12 · 42", tags: [] },
      { name: "Tempranillo", desc: "", price: "12 · 42", tags: [] },
    ]},
    { section: "From Pakistan", items: [
      { name: "Mango Lassi", desc: "Creamy Kesar mango, cardamom, yogurt, rosewater, maximum nirvana", price: "8", tags: [], photo: "cocktail-coupe.jpg" },
      { name: "Masala Lemonade", desc: "Sharp lemon, cane sugar, mint, chaat masala, everything all at once", price: "8", tags: [] },
      { name: "Pakola Cream Soda", desc: "Fizzy rosewater cream soda", price: "6", tags: [] },
      { name: "Pakola Lychee", desc: "Fizzy lychee cream soda", price: "6", tags: [] },
    ]},
    { section: "Non-Alcoholic", items: [
      { name: "Ceebo Classic NA Beer", desc: "", price: "7", tags: [] },
      { name: "Ginger Beer", desc: "", price: "6", tags: [] },
      { name: "Saratoga", desc: "Still · Sparkling", price: "7", tags: [] },
      { name: "Coke · Diet Coke · Sprite", desc: "", price: "5", tags: [] },
    ]},
  ],

  drinksCallout: {
    title: "Reserve Wine List",
    blurb: "A rotating cellar selection of special bottles. Ask your server for today's pours."
  },
  drinksNote: "Must be 21+ for alcohol & hemp-derived drinks. 22% auto-gratuity is applied to parties of five or larger. Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of food-borne illness.",

  specials: [
    { day: "Sunday", name: "Local Love Night", desc: "Bring a local who's never been and enjoy a special off menu chaat on us", price: "½" },
    { day: "Monday", name: "Industry Night", desc: "Food & bev hospitality crew: $10 signature cocktails & apps, all night", price: "$10" },
    { day: "Tuesday", name: "Service Appreciation", desc: "Air Force, Military, Space Force, teachers, first responders & law enforcement get 10% off", price: "10%" },
    { day: "Wednesday", name: "Date Night", desc: "Welcome bubbly and a special three course tasting menu including dessert for two", price: "99" },
    { day: "Thursday", name: "Polaroid Night", desc: "Bring friends, get a table photo, leave with evidence", price: "" }
  ]
};
