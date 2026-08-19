/**
 * LVC Luxury Knowledge Base
 * Base de conocimiento estructurada para el Agente Autónomo de IA de Luxury Voyage Collection.
 */

export interface DestinationItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  continent: "asia" | "africa" | "europa" | "medio-oriente";
  duration: string;
  groupSize: string;
  investment: string;
  heroImage: string;
  summary: string;
  highlights: string[];
  tags: string[];
}

export const LVC_DESTINATIONS: DestinationItem[] = [
  // ── ASIA ──
  {
    id: "jp-senderos",
    slug: "senderos-de-japon",
    title: "Senderos de Japón",
    subtitle: "Japón Feudal, Aldeas UNESCO y Templos Milenarios",
    continent: "asia",
    duration: "10 Días / 9 Noches",
    groupSize: "Máx. 36 pax / Privado VIP",
    investment: "desde $8,600 USD",
    heroImage: "https://garage-web.luxuryvoyageco.com/images/colecciones/senderos-de-japon/hero.webp",
    summary: "Conecta las ciudades imprescindibles de Japón (Tokyo, Kyoto, Osaka) con la histórica Ruta Nakasendo, las aldeas Gassho-zukuri de Shirakawa-go y las aguas termales de Hakone.",
    highlights: ["Pueblos de posta en Ruta Nakasendo", "Aldeas Patrimonio UNESCO en Shirakawa-go", "Crucero Lago Ashi y vista Monte Fuji", "Acceso exclusivo a Onsen tradicional"],
    tags: ["japon", "tokyo", "kyoto", "cultura", "templos", "onsen", "tren bala", "asia"]
  },
  {
    id: "th-legado",
    slug: "el-legado-de-tailandia",
    title: "El Legado de Tailandia",
    subtitle: "Del Antiguo Siam a las Montañas del Norte",
    continent: "asia",
    duration: "9 Días / 8 Noches",
    groupSize: "Grupo Reducido / Privado",
    investment: "desde $6,400 USD",
    heroImage: "https://garage-web.luxuryvoyageco.com/images/colecciones/el-legado-de-tailandia/hero.webp",
    summary: "Recorrido integral por Bangkok, las antiguas capitales del reino de Siam, los paisajes sagrados de Chiang Mai y el triángulo dorado del Río Mekong.",
    highlights: ["Templos milenarios de Ayutthaya", "Santuarios éticos en el norte", "Gastronomía Real Tailandesa", "Navegación tradicional por el Mekong"],
    tags: ["tailandia", "bangkok", "chiang mai", "templos", "naturaleza", "asia", "cultura"]
  },

  // ── ÁFRICA ──
  {
    id: "af-safari-kenya",
    slug: "el-arte-del-safari-privado",
    title: "El Arte del Safari Privado",
    subtitle: "Masai Mara, Serengueti y Conservación Exclusiva",
    continent: "africa",
    duration: "11 Días / 10 Noches",
    groupSize: "Privado VIP (Vehículo 4x4 exclusivo)",
    investment: "desde $12,500 USD",
    heroImage: "https://garage-web.luxuryvoyageco.com/images/colecciones/senderos-de-japon/organized.webp",
    summary: "Vuelo en avioneta privada entre lodges de ultra lujo en Masai Mara y Serengueti con guías naturalistas de élite y sobrevuelo en globo aerostático al amanecer.",
    highlights: ["Gran Migración con acceso privilegiado", "Campamentos de tiendas de lujo eco-responsables", "Vuelo en globo aerostático con champagne", "Guías locales masai certificados"],
    tags: ["africa", "safari", "kenya", "tanzania", "masai mara", "animales", "aventura de lujo"]
  },

  // ── EUROPA ──
  {
    id: "eu-chateaux",
    slug: "el-renacimiento-de-los-chateaux",
    title: "El Renacimiento de los Châteaux",
    subtitle: "Valle del Loira, Viñedos Gran Cru y París Privado",
    continent: "europa",
    duration: "8 Días / 7 Noches",
    groupSize: "Privado a Medida",
    investment: "desde $9,800 USD",
    heroImage: "https://garage-web.luxuryvoyageco.com/images/colecciones/senderos-de-japon/essence.webp",
    summary: "Estancias en castillos privados con historia viva, catas exclusivas en bodegas cerradas al público y cenas orquestadas por chefs estrella Michelin.",
    highlights: ["Acceso a puerta cerrada a Châteaux históricos", "Catas privadas de vinos Premier Cru", "Vuelo privado en helicóptero sobre el Loira", "Concierge personal 24/7 en Francia"],
    tags: ["europa", "francia", "paris", "loira", "vinos", "gastronomia", "chateaux", "romance"]
  },

  // ── MEDIO ORIENTE ──
  {
    id: "mo-desierto",
    slug: "el-refugio-del-viento-en-el-desierto",
    title: "El Refugio del Viento en el Desierto",
    subtitle: "AlUla, Petra y Dunas Místicas de Arabia",
    continent: "medio-oriente",
    duration: "10 Días / 9 Noches",
    groupSize: "Privado VIP",
    investment: "desde $11,200 USD",
    heroImage: "https://garage-web.luxuryvoyageco.com/images/colecciones/el-legado-de-tailandia/essence.webp",
    summary: "Una travesía hipnótica entre los cañones esculpidos de Hegra en AlUla, la mística ciudad rosada de Petra y campamentos beduinos de cinco estrellas.",
    highlights: ["Reserva privada de Habitas AlUla", "Acceso nocturno a Petra iluminada por velas", "Cena astronómica bajo cielos boreales del desierto", "Traslados privados en jet/chofer bilingüe"],
    tags: ["medio oriente", "arabia", "alula", "petra", "jordania", "desierto", "arqueologia"]
  }
];

export const LVC_BRAND_INFO = {
  name: "Luxury Voyage Collection",
  shortName: "LVC",
  tagline: "Viajes de Lujo a Medida y Experiencias de Autor",
  contact: {
    whatsappNumber: "522212246632",
    whatsappDisplay: "+52 (221) 224-6632",
    phone: "+52 (334) 096-1058",
    email: "concierge@luxuryvoyageco.com",
    address: "Ciudad de México / Cobertura Global"
  },
  pillars: [
    "Diseño de itinerarios 100% personalizados y a medida",
    "Acceso prioritario y a puerta cerrada en monumentos y reservas",
    "Hotelería de autor: Relais & Châteaux, Aman, Four Seasons, Belmond y Lodges de Conservación",
    "Concierge y asistencia privada 24/7 en español durante todo el viaje",
    "Gestión integral de logística VIP: vuelos privados, trenes panorámicos y traslados ejecutivos"
  ],
  universes: [
    { name: "Asia", path: "/universos/asia", desc: "Tradición milenaria, templos zen y contrastes futuristas." },
    { name: "África", path: "/universos/africa", desc: "Safaris de ensueño, naturaleza indómita y conservación ética." },
    { name: "Europa", path: "/universos/europa", desc: "Herencia clásica, alta gastronomía y palacios renacentistas." },
    { name: "Medio Oriente", path: "/universos/medio-oriente", desc: "Misticismo desértico, arquitectura monumental y oasis de lujo." }
  ]
};
