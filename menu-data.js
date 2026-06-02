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
    { section: "Always Start With Chaat", subtitle: "Crisp, tangy, cooling, spicy. The proper way to wake up the table.", items: [
      { name: "Burns Road Papri Chaat", desc: "Papri crisps, Lahori cholay, seasoned sweet yogurt, tamarind, chaat masala, fresh herbs", price: "13", tags: ["gf available"], photo: "chaat-floral.jpg" },
      { name: "Sweet Potato Chaat", desc: "Local sweet potatoes, mango, tamarind, yogurt, chickpeas, ghee, and crisp chaat crunch", price: "14", tags: [] },
      { name: "Empress Market Samosa Chaat", desc: "Crispy vegetable samosa over spiced cholay with tamarind, yogurt, and fresh herbs", price: "14", tags: [], photo: "chaat-flowers.jpg" },
    ]},
    { section: "Street Bites & Shareables", subtitle: "Order one for yourself. Order a few for the table.", items: [
      { name: "Smoked Chargha Wings", desc: "Lahore-spiced smoked wings with sexy mayo", price: "14", tags: ["gf", "df"], note: "Make 'em angry +2", photo: "kabab-platter.jpg" },
      { name: "Golden Paneer Slab", desc: "Spiced paneer with golden butter sauce", price: "13", tags: ["gf available"] },
      { name: "Qeema Pav", desc: "Seasoned ground lamb, butter-toasted buns, and Lahori cholay", price: "14", tags: [] },
      { name: "Masala Salad", desc: "Cabbage, coconut, peanuts, herbs, and bright masala crunch", price: "14", tags: ["vegan", "gf available"] },
    ]},
    { section: "Heritage Mains", subtitle: "Slow-simmered, deeply spiced, and rooted in tradition.", items: [
      { name: "Lucknow Lamb Shank Nihari", desc: "16-hour slow-cooked lamb shank in a silky gravy of roasted spices and slow-bloomed aromatics, served with naan", price: "42", tags: [], photo: "nihari-graded.jpg" },
      { name: "Super Highway Karahi", desc: "Tomato, ginger, garlic, and red chili masala, cooked bold and served hot in a Karahi", price: "32", tags: [], choose: ["Beef Karahi", "Chicken Karahi", "Paneer Karahi"], photo: "karahi-feature-graded.jpg" },
      { name: "Karachi Style Biryanis", desc: "Aromatic basmati rice layered with rich masala, served with raita & kachoomar", price: "36", tags: ["gf available"], choose: ["Braised Beef Biryani", "Roasted Chicken Biryani", "Paneer Biryani, vegetarian", "Cholay Biryani, vegan"], photo: "karahi-sunflower.jpg" },
    ]},
    { section: "Tikka & Kabab", subtitle: "High-heat roasted, deeply seasoned, and served with fragrant biryani rice, raita and kachoomar.", items: [
      { name: "Chicken Tikka", desc: "Kashmiri chili, yogurt and lemon marinated grilled chicken", price: "34", tags: ["gf available"] },
      { name: "Boti Tikka Kabab", desc: "Garlic and Kashmiri chili steak cubes grilled to perfection", price: "34", tags: ["gf available"], photo: "kabab-platter.jpg" },
      { name: "Paneer Tikka Kabab", desc: "High-heat roasted paneer cubes in garlic, Kashmiri chili marinade", price: "32", tags: ["gf available"] },
      { name: "Frontier Kabab", desc: "Mom's recipe. Garlic and cumin spiced ground beef kabab", price: "34", tags: ["df", "gf available"] },
    ]},
    { section: "Curries & Comfort", subtitle: "Rich, aromatic curries served with basmati rice and love.", items: [
      { name: "Butter Chicken", desc: "Chicken in Ma'am Saab's golden butter curry with basmati rice", price: "32", tags: ["gf"], photo: "lamb-shank.jpg" },
      { name: "Butter Paneer", desc: "Roasted paneer in golden butter curry with basmati rice", price: "29", tags: ["gf available"] },
      { name: "Palak Chicken", desc: "Chicken in rich spinach and garlic curry with basmati rice", price: "32", tags: ["gf"] },
      { name: "Palak Paneer", desc: "Roasted paneer in rich spinach and garlic curry with basmati rice", price: "29", tags: ["gf"] },
      { name: "Ma'am Saab Vegetarian Thali", desc: "Saag paneer, methi aloo, basmati rice, and paratha", price: "29", tags: ["vegetarian", "gf available"] },
    ]},
    { section: "Breads", items: [
      { name: "Butter Naan", desc: "Soft, blistered, and made for scooping", price: "5", tags: [] },
      { name: "Paratha", desc: "Flaky, buttery, and griddled · two pieces", price: "9", tags: [] },
    ]},
    { section: "Rice", items: [
      { name: "Zeera Rice", desc: "Basmati rice with toasted cumin", price: "9", tags: [] },
      { name: "Biryani Rice", desc: "Fragrant basmati rice with biryani masala", price: "9", tags: [] },
    ]},
    { section: "Signature Sides", items: [
      { name: "Golden Butter Sauce", desc: "For naan, rice, and shameless dipping", price: "9", tags: [] },
      { name: "Methi Aloo", desc: "Creamy potatoes with fenugreek and warm spice", price: "12", tags: [] },
      { name: "Seasonal Vegetables", desc: "Chef's seasonal preparation", price: "12", tags: [] },
      { name: "Lahori Cholay", desc: "Slow-simmered chickpeas with bold Lahori spice", price: "12", tags: [] },
    ]},
    { section: "Housemade Chutneys", note: "Each 6 · Choose Three 15 · Full Sampler 24", items: [
      { name: "Mint Raita", desc: "Cool yogurt, mint, and mild spice" },
      { name: "Onion Kachoomar", desc: "Onion, tomato, cucumber, and chili" },
      { name: "Mint & Cilantro", desc: "Bright, herby, and fresh" },
      { name: "Tamarind & Date", desc: "Sweet, tangy, and deep" },
      { name: "Chili Garlic", desc: "Hot, sharp, and addictive" },
      { name: "Coconut Mango", desc: "Creamy, tropical, and gently spiced" },
    ]},
    { section: "Sweets", items: [
      { name: "Gulab Jamun", desc: "Warm rosewater-soaked dumplings with cardamom syrup and pistachio", price: "11", tags: [] },
      { name: "Seasonal Cheesecake", desc: "Chef's featured preparation", price: "12", tags: [] },
      { name: "Rasmalai Tiramisu Crunch", desc: "Rose and cardamom custard, ladyfingers, and spiced brittle", price: "12", tags: [] },
      { name: "Saffron Ice Cream Sundae", desc: "Parle-G crumble, pistachio, rose, and kulfi cream", price: "12", tags: [] },
    ]},
  ],

  foodNote: "22% auto-gratuity is applied to parties of five or larger. Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of food-borne illness.",

  drinks: [
    { section: "Signature Cocktails", items: [
      { name: "Kashmiri 76", desc: "Vodka, dry curaçao, citrus, bubbles, pom", price: "16", tags: [] },
      { name: "Shalimar", desc: "Gin, rose vermouth, grand marnier, lemon, ginger", price: "16", tags: [] },
      { name: "Rang-e-Bahar", desc: "Tequila, mezcal, citrus, pom", price: "15", tags: [] },
      { name: "Karachi Wala", desc: "Vodka, chai, spices, amaretto", price: "16", tags: [], photo: "cocktail-coupe.jpg" },
      { name: "Divine Intervention", desc: "Chai infused bourbon, west indies orange bitters", price: "15", tags: [] },
      { name: "Party in Lahore", desc: "Tropical gin, grapefruit, peach, citrus", price: "15", tags: [] },
      { name: "The Last Temptation", desc: "Patrón XO, cream, chocolate, pistachio", price: "16", tags: [] },
      { name: "Khatta Meetha Part II", desc: "Grand marnier, aperol, peach, pineapple, pom", price: "16", tags: [] },
    ]},
    { section: "Mocktails", items: [
      { name: "Electric Rickshaw", desc: "Guava, pomegranate, citrus", price: "12", tags: [], photo: "cocktail-orange.jpg" },
      { name: "Truckstop Cooler", desc: "Peach, pomegranate, citrus, tonic", price: "12", tags: [], photo: "cocktail-red.jpg" },
      { name: "Ish Mojito", desc: "Lime, moroccan mint, < 0.5% abv", price: "9", tags: [] },
    ]},
    { section: "Craft Beer", items: [
      { name: "Flying Horse Royal Lager 22oz", desc: "United Breweries · 4.7% abv · India", price: "12", tags: [] },
      { name: "Something Cold Blonde Ale", desc: "Edmund's Oast · 5% abv · Charleston SC", price: "9", tags: [] },
      { name: "Munkle Pilsner", desc: "Munkle · 5.1% abv · Charleston SC", price: "7", tags: [] },
      { name: "White Thai", desc: "Westbrook · 5% abv · Mt. Pleasant SC", price: "7", tags: [] },
      { name: "Seasonal Indian Beer", desc: "Please inquire about tonight's selection", price: "9", tags: [] },
      { name: "Seasonal IPA", desc: "Please inquire about tonight's selection", price: "9", tags: [] },
      { name: "Seasonal Cider", desc: "Please inquire about tonight's selection", price: "9", tags: [] },
    ]},
    { section: "Hemp-Derived THC", items: [
      { name: "Raspberry Lime", desc: "Crescent 9 · 10mg", price: "12", tags: [] },
      { name: "Sour Watermelon", desc: "Crescent 9 · 10mg", price: "12", tags: [] },
      { name: "Ginger Lemonade", desc: "Crescent 9 · 10mg", price: "12", tags: [] },
      { name: "Orange Creamsicle", desc: "Cloud Cola · 10mg", price: "12", tags: [] },
      { name: "Classic Cola", desc: "Cloud Cola · 10mg", price: "12", tags: [] },
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
      { name: "Mango Lassi", desc: "Creamy mango kissed by cardamom", price: "8", tags: [], photo: "cocktail-coupe.jpg" },
      { name: "Masala Lemonade", desc: "Delicately spiced street-style lemonade", price: "8", tags: [] },
      { name: "Pakola Cream Soda", desc: "Fizzy rosewater cream soda", price: "6", tags: [] },
      { name: "Pakola Lychee Cream Soda", desc: "Fizzy lychee cream soda", price: "6", tags: [] },
    ]},
    { section: "Non-Alcoholic", items: [
      { name: "Ceebo Classic NA Beer", desc: "", price: "7", tags: [] },
      { name: "Ginger Beer", desc: "", price: "6", tags: [] },
      { name: "Saratoga", desc: "Still · Sparkling", price: "7", tags: [] },
      { name: "Coke · Diet Coke · Sprite", desc: "", price: "4", tags: [] },
    ]},
  ],

  drinksCallout: {
    title: "The Limited Pour",
    blurb: "Ask for today's selection of limited-edition cocktails, THC beverages, beer & wine."
  },
  drinksNote: "Must be 21+ for alcohol & hemp-derived drinks. 22% auto-gratuity is applied to parties of five or larger.",

  specials: [
    { day: "Sunday", name: "Service Appreciation", desc: "Air Force, Military, Space Force, teachers & first responders get 10% off", price: "10%" },
    { day: "Monday", name: "Industry Night", desc: "$10 signature cocktails & apps, all night", price: "$10" },
    { day: "Tuesday", name: "Local Love Night", desc: "Half-price wine bottles for locals", price: "½" },
    { day: "Wednesday", name: "Date Night", desc: "Three-course prix fixe for two, welcome wine and a sweet ending", price: "99" },
    { day: "Thursday", name: "Royal Thali Night", desc: "A selection of favorites, all in one thali, at a special price", price: "" }
  ]
};
