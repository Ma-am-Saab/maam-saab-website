// ============================================================
// MA'AM SAAB, site.js : reveals, nav, mobile menu, specials, FAQ
// ============================================================
(function () {
  // ---- scroll reveal (IntersectionObserver + scroll fallback) ----
  function reveal(el) { el.classList.add('in'); }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
  function observeReveals(root) { (root || document).querySelectorAll('.reveal:not(.in), .clip-reveal:not(.in)').forEach(el => io.observe(el)); }
  // Fallback: reveal anything already within (or above) the viewport. Guards
  // against IO misses and guarantees nothing stays invisible.
  function sweepReveals() {
    const vh = window.innerHeight;
    document.querySelectorAll('.reveal:not(.in), .clip-reveal:not(.in)').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.94 && r.bottom > 0) reveal(el);
    });
  }
  window.addEventListener('scroll', sweepReveals, { passive: true });
  window.addEventListener('load', sweepReveals);

  // ---- nav scrolled + active hero state ----
  const nav = document.getElementById('nav');
  const mcta = document.querySelector('.mcta');
  const onScroll = () => {
    if (window.scrollY > 40) nav.classList.add('scrolled'); else nav.classList.remove('scrolled');
    if (mcta) { if (window.scrollY > window.innerHeight * 0.7) mcta.classList.add('show'); else mcta.classList.remove('show'); }
  };
  document.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // ---- mobile menu ----
  const tog = document.getElementById('navToggle');
  const mm = document.getElementById('mobileMenu');
  function closeMenu() { mm.classList.remove('open'); tog.classList.remove('open'); tog.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; }
  tog && tog.addEventListener('click', () => {
    const open = mm.classList.toggle('open');
    tog.classList.toggle('open', open);
    tog.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mm && mm.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // ---- daily specials (from menu-data.js) ----
  const sp = document.getElementById('specials');
  if (sp && window.MS_MENU && MS_MENU.specials) {
    sp.innerHTML = MS_MENU.specials.map(s => `
      <div class="special-row reveal">
        <div style="display:flex;flex-direction:column;gap:4px">
          <span class="mono" style="font-size:11px;letter-spacing:.18em;color:var(--gold)">${s.day.toUpperCase()}</span>
          <span style="font-family:'Archivo';font-weight:900;font-stretch:85%;text-transform:uppercase;font-size:clamp(20px,2.6vw,32px)">${s.name}</span>
          <span class="mono" style="font-size:12.5px;opacity:.78">${s.desc}</span>
        </div>
      </div>`).join('');
  }

  // ---- FAQ ----
  const faqs = [
    ["What is Ma'am Saab known for?", "Modern Pakistani cooking with Southern charm, bold, adventurous plates and a cocktail bar with a wink. We're a neighborhood favorite that happens to sit right where visiting Charleston wants to be, known for our chargha wings, chaats, butter chicken, tikka and biryanis. The menu is small but hard-hitting, and our Tasting Experience is a guest favorite. We pour our hearts into everything we send out."],
    ["Where are you, and what's nearby?", "We're at 251 Meeting Street, in the heart of historic downtown Charleston, steps from the City Market and an easy walk from The Charleston Place, the Mills House, the Francis Marion Hotel, Hotel Bennett, The Dewberry, the Grand Bohemian, the Market Pavilion Hotel, Emeline, and the French Quarter and Planters Inns. If you're staying downtown, odds are we're just around the corner. Closest garages are Cumberland Street, Hasell Street and the 69 Wentworth Street garage, plus metered street parking on Meeting, Wentworth, Society and King."],
    ["Is Ma'am Saab Pakistani or Indian?", "At heart, Pakistani, our founder is from Karachi. But the menu travels: Lahore, Lucknow, Mumbai and everywhere in between. Indian, Pakistani, and the shared history on a plate."],
    ["Is there a difference between Indian and Pakistani food?", "They're cousins with overlapping spice cabinets and distinct accents. Pakistani cooking leans into robust meat dishes, smoke, and char (think tikka, karahi, nihari, kababs); both share the love of biryani, chaat and high heat (and spices). We celebrate the whole family."],
    ["What is the food like? Is it spicy?", "Layered, aromatic, and generous, heat is a flavor, not a dare. Most dishes carry a gentle warmth; we'll happily turn the chili up. Just ask your server."],
    ["Great for food allergies?", "Yes. We label gluten-free (gf), vegetarian (vg) and vegan (vgn) items, and our kitchen is glad to accommodate allergies with notice. Tell us when you book or order."],
    ["Does Ma'am Saab serve hemp & THC-based drinks?", "We do, a small menu of hemp-derived THC sippers (10mg) alongside zero-proof mocktails and full cocktails, for every kind of night out."],
    ["Who enjoys Ma'am Saab?", "Everyone, honestly. We're a family destination, a special-occasion spot, a date-night classic, and just as right for the solo diner who wants to buy themselves flowers. Adventurous eaters, spice-seekers, and the sober-curious all find their corner. Come as you are, leave a little in love."],
    ["Is it easy to get a reservation?", "Weekends book up fast, so plan ahead. Weeknights and the bar are friendlier to the spontaneous. The bar is first-come, first-served if you'd rather wing it."],
    ["Corkage, cakes & parking?", "Corkage is $30/bottle, no limit. Cake cutting is $4/guest. For parking, the garage on Wentworth Street is closest; there's also street parking on Meeting, Wentworth, Society and King, plus limited-time residential parking all around us."],
    ["No-show policy", "Reservations hold a card. Parties of four or fewer may cancel up to 48 hours before their booking; parties of five or more require four days' notice. Cancellations or no-shows inside that window are charged $25 per guest. This is a strict policy."],
  ];
  const faqEl = document.getElementById('faq');
  if (faqEl) {
    faqEl.innerHTML = faqs.map(([q, a]) => `
      <details class="reveal"><summary>${q}<span class="pm">+</span></summary><div class="ans">${a}</div></details>`).join('');
  }

  observeReveals(document);
})();
