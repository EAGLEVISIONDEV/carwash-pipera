const u = (id: string, w = 3200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=90&fm=jpg`;

export const business = {
  name: "Car Wash Pipera",
  shortName: "CAR WASH PIPERA",
  tagline: "Luxury auto care. În Pipera.",
  description:
    "Îngrijire auto premium în Pipera — exterior, interior și detailing. Șoseaua București Nord 14, Voluntari. Deschis zilnic 09:00–19:30.",
  phone: "+40743664665",
  phoneDisplay: "+40 743 664 665",
  address: {
    line1: "Șoseaua București Nord 14",
    city: "Voluntari",
    county: "Ilfov",
    postal: "077191",
    full: "Șoseaua București Nord 14, Voluntari, Ilfov 077191",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Car+Wash+Pipera+Șoseaua+București+Nord+14+Voluntari",
  mapsShareUrl: "https://share.google/7Zjz037ntfA7U9LhV",
  instagram: "https://www.instagram.com/carwashpipera/",
  instagramHandle: "@carwashpipera",
  rating: 4.3,
  reviewCount: 55,
  hours: [{ days: "Luni – Duminică", time: "09:00 – 19:30" }],
  amenities: [
    "Spălare exterior",
    "Curățare interior",
    "Detailing",
    "Degresare",
    "Carduri acceptate",
    "Zonă de așteptare",
  ],
} as const;

export const packages = [
  {
    id: "express",
    name: "Express",
    subtitle: "Spălare rapidă",
    description:
      "Spălare exterioară cu spumă activă, clătire și uscare — pentru când ai nevoie de o mașină curată, acum.",
    features: [
      "Spumă activă",
      "Clătire de înaltă presiune",
      "Uscare",
      "Jante curățate",
    ],
    accent: false,
  },
  {
    id: "complet",
    name: "Complet",
    subtitle: "Exterior + interior",
    description:
      "Pachetul preferat din Pipera: exterior impecabil plus aspirare, plasticuri și geamuri la interior.",
    features: [
      "Tot din Express",
      "Aspirare completă",
      "Plasticuri & bord",
      "Geamuri interior",
    ],
    accent: true,
  },
  {
    id: "detail",
    name: "Detail",
    subtitle: "Curățare aprofundată",
    description:
      "Detailing și degresare pentru mașini care merită atenție — finisaj de showroom, fără compromisuri.",
    features: [
      "Tot din Complet",
      "Detailing manual",
      "Degresare",
      "Finisaj premium",
    ],
    accent: false,
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Ajungi",
    text: "Pe Șoseaua București Nord 14 — aproape de birouri, magazine și săli din Pipera.",
  },
  {
    step: "02",
    title: "Alegi pachetul",
    text: "Express, Complet sau Detail. Spunem clar ce include fiecare — fără surprize.",
  },
  {
    step: "03",
    title: "Aștepți confortabil",
    text: "Zonă de așteptare pe loc. Plătești cu cardul când ești gata.",
  },
  {
    step: "04",
    title: "Pleci strălucind",
    text: "Mașina iese curată, uscată, gata de drum — sau de birou.",
  },
] as const;

/** Real location + local service imagery. */
export const images = {
  /** Ferrari at Car Wash Pipera — Instagram */
  hero: "/hero.jpg",
  /** Active foam / hand wash */
  foam: "/foam.jpg",
  wet: u("photo-1492144534655-ae79c964c9d7", 2800),
  detail: u("photo-1607860108855-64acf2078ed9", 2400),
  interior: u("photo-1485291571150-772bcfc10da5", 2400),
  /** Wet-shine finish */
  shine: "/shine.jpg",
} as const;
