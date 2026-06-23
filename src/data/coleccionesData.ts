export interface Moment {
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface Pillar {
  title: string;
  description: string;
}

export interface Coleccion {
  slug: string;
  title: string;
  subtitle: string;
  continent: string;
  heroImage: string;
  heroDesc: string;
  badges: string[];
  essenceHeading: string;
  essenceDesc: string;
  essenceImage: string;
  moments: Moment[];
  momentsCallout: string;
  organizedImage: string;
  organizedPillars: Pillar[];
}

export const coleccionesData: Coleccion[] = [
  // ── UNIVERSO ASIA ──
  {
    slug: "japon-esencial",
    title: "Japón Esencial",
    subtitle: "JAPÓN",
    continent: "asia",
    heroImage: "/images/colecciones/card_japan.png",
    heroDesc: "Tradición y modernidad en perfecta armonía, donde cada detalle revela la esencia de Japón.",
    badges: ["Grupo Reducido", "Fechas Seleccionadas", "Experiencias Culturales"],
    essenceHeading: "Cada rincón ha sido elegido para conectar con la belleza de lo sutil y la hospitalidad más pura.",
    essenceDesc: "Desde templos ancestrales custodiados por bosques milenarios hasta el bullicio silencioso de Tokio, esta colección te invita a vivir un Japón íntimo. Descansa en ryokans históricos con onsens de aguas termales y comparte ceremonias de té privadas de la mano de maestros locales.",
    essenceImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800",
    moments: [
      {
        number: "01",
        title: "Hakone",
        description: "Estancia en un ryokan de ultra-lujo con onsen privado de aguas termales curativas y vistas despejadas al Monte Fuji.",
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800"
      },
      {
        number: "02",
        title: "Koyasan",
        description: "Noche en un templo budista tradicional en el monte sagrado, participando en la meditación matutina y degustando la cocina shojin ryori.",
        image: "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=800"
      },
      {
        number: "03",
        title: "Kyoto",
        description: "Exploración a pie por el histórico barrio de Gion y una cena privada con una inmersión en las artes tradicionales de la geisha.",
        image: "/images/colecciones/featured_japan.png"
      }
    ],
    momentsCallout: "NO SON SOLO LUGARES, SON MOMENTOS QUE PERMANECEN CONTIGO PARA SIEMPRE.",
    organizedImage: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800",
    organizedPillars: [
      { title: "ESTANCIAS SELECCIONADAS", description: "Ryokans tradicionales y hoteles de diseño elegidos por su atmósfera, ubicación y servicio." },
      { title: "RITMOS PARA DISFRUTAR", description: "Itinerarios equilibrados diseñados para que descubras Japón con calma y contemplación." },
      { title: "EXPERIENCIAS INTEGRADAS", description: "Encuentros privados con artesanos, monjes y guías locales expertos inaccesibles para el público." },
      { title: "ACOMPAÑAMIENTO DISCRETO", description: "Conserjería y coordinación continua en destino para que tu única ocupación sea disfrutar del viaje." }
    ]
  },
  {
    slug: "tailandia-vital",
    title: "Tailandia Vital",
    subtitle: "TAILANDIA",
    continent: "asia",
    heroImage: "/images/colecciones/card_thailand.png",
    heroDesc: "Naturaleza, cultura y bienestar en un viaje diseñado para reconectar contigo mismo.",
    badges: ["Retiros de Bienestar", "Gastronomía Local", "Naturaleza Exclusiva"],
    essenceHeading: "Un recorrido pensado para sanar el alma y despertar los sentidos en el Reino de Siam.",
    essenceDesc: "Tailandia Vital combina templos dorados de Bangkok, santuarios de elefantes rescatados en las montañas de Chiang Mai y el azul turquesa de las playas privadas en el sur. Una inmersión en la espiritualidad budista y la legendaria hospitalidad de su gente.",
    essenceImage: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=800",
    moments: [
      {
        number: "01",
        title: "Chiang Mai",
        description: "Alojamiento en un resort de selva y un día de cuidado respetuoso con elefantes en un santuario ético de montaña.",
        image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=800"
      },
      {
        number: "02",
        title: "Phuket Privado",
        description: "Navegación en catamarán privado por la bahía de Phang Nga, explorando cuevas marinas escondidas al atardecer.",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800"
      },
      {
        number: "03",
        title: "Bangkok Espiritual",
        description: "Acceso temprano y privado al templo Wat Pho para presenciar el canto matutino de los monjes budistas.",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800"
      }
    ],
    momentsCallout: "EL VERDADERO LUJO ES EL TIEMPO DEDICADO A REENCONTRAR LA CALMA INTERIOR.",
    organizedImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800",
    organizedPillars: [
      { title: "BIENESTAR Y SPA", description: "Masajes tradicionales y terapias holísticas incluidas en prestigiosos santuarios de wellness." },
      { title: "SABORES DE SIAM", description: "Cenas en restaurantes con estrella Michelin y clases privadas con reconocidos chefs locales." },
      { title: "GUÍAS PRIVADOS", description: "Historiadores y guías exclusivos que te revelan el significado sagrado detrás de cada templo." },
      { title: "TRASLADOS SIN FISURAS", description: "Lanchas rápidas y traslados privados coordinados al minuto para tu máxima comodidad." }
    ]
  },
  {
    slug: "bali-bienestar",
    title: "Bali & Bienestar",
    subtitle: "INDONESIA",
    continent: "asia",
    heroImage: "/images/colecciones/card_bali.png",
    heroDesc: "Retiros cuidadosamente seleccionados para renovar cuerpo, mente y espíritu en escenarios únicos.",
    badges: ["Sanación Holística", "Templos Sagrados", "Villas Privadas"],
    essenceHeading: "Habita el tiempo de una forma distinta en la mística Isla de los Dioses.",
    essenceDesc: "Descubre el Bali más místico e inexplorado. Camina entre terrazas de arroz esmeralda en Ubud, sumérgete en rituales de purificación en manantiales sagrados y descansa en espectaculares villas privadas suspendidas sobre acantilados frente al Océano Índico.",
    essenceImage: "https://images.unsplash.com/photo-1518548419070-a8e5999713c2?q=80&w=800",
    moments: [
      {
        number: "01",
        title: "Ubud",
        description: "Clase privada de yoga y meditación al amanecer sobre una plataforma de bambú suspendida en la selva.",
        image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=800"
      },
      {
        number: "02",
        title: "Tirta Empul",
        description: "Ritual privado de purificación espiritual Melukat guiado por un sacerdote balinés en fuentes sagradas históricas.",
        image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800"
      },
      {
        number: "03",
        title: "Uluwatu",
        description: "Atardecer exclusivo sobre un acantilado de Uluwatu presenciando la mística danza Kechak sin multitudes.",
        image: "https://images.unsplash.com/photo-1554481923-a6918bd997bc?q=80&w=800"
      }
    ],
    momentsCallout: "DEJA QUE LA ENERGÍA DE LA ISLA LIMPIE TUS PENSAMIENTOS Y RENUEVE TU FUERZA.",
    organizedImage: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=800",
    organizedPillars: [
      { title: "VILLAS DE ENSUEÑO", description: "Alojamiento en resorts galardonados mundialmente por su arquitectura y spas holísticos." },
      { title: "RITUALES EXCLUSIVOS", description: "Acceso privado a templos y curanderos tradicionales (Balian) respetando la cultura local." },
      { title: "CONSERJE EN DESTINO", description: "Asistente personal asignado durante todo el viaje para gestionar reservas y peticiones especiales." },
      { title: "SLOW TRAVEL", description: "Días libres programados estratégicamente para integrarte al ritmo pausado de la isla." }
    ]
  },
  {
    slug: "corea-dinamica",
    title: "Corea del Sur Dinámica",
    subtitle: "COREA DEL SUR",
    continent: "asia",
    heroImage: "/images/colecciones/card_korea.png",
    heroDesc: "La fascinante fusión entre palacios tradicionales de madera y la vanguardia urbana de Seúl.",
    badges: ["Cultura K-Luxury", "Patrimonio UNESCO", "Innovación y Diseño"],
    essenceHeading: "Un recorrido por el país que marca el ritmo estético y contemporáneo del mundo.",
    essenceDesc: "Corea del Sur te invita a experimentar una transición perfecta entre la historia y el mañana. Explora palacios reales vestidos con trajes tradicionales Hanbok, duerme en templos históricos y descubre la alta tecnología y el lujo cosmopolita de Seúl.",
    essenceImage: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=800",
    moments: [
      {
        number: "01",
        title: "Seúl Ancestral",
        description: "Visita guiada VIP exclusiva fuera de horario al Palacio Gyeongbokgung con un curador de arte histórico.",
        image: "https://images.unsplash.com/photo-1538669715515-5e3e44840253?q=80&w=800"
      },
      {
        number: "02",
        title: "Gyeongju",
        description: "Exploración de los antiguos túmulos reales y el Templo de Bulguksa, patrimonio de la humanidad de la dinastía Silla.",
        image: "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?q=80&w=800"
      },
      {
        number: "03",
        title: "Busan",
        description: "Crucero privado en yate por la barra de Haeundae, contemplando el skyline iluminado de la ciudad futurista.",
        image: "https://images.unsplash.com/photo-1617835158652-967990150d6b6?q=80&w=800"
      }
    ],
    momentsCallout: "DONDE LA SABIDURÍA ANCESTRAL CUSTODIA LA VANGUARDIA DEL FUTURO.",
    organizedImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800",
    organizedPillars: [
      { title: "ESTANCIAS HANOK", description: "Noches en residencias tradicionales de madera totalmente restauradas con el lujo actual." },
      { title: "ALTA GASTRONOMÍA", description: "Mesas reservadas en restaurantes galardonados que reinterpretan la cocina coreana tradicional." },
      { title: "ACCESOS VIP", description: "Entradas preferentes a museos de arte contemporáneo y galerías privadas exclusivas." },
      { title: "TRASLADOS K-SPEED", description: "Trenes de alta velocidad y choferes privados que garantizan un viaje puntual y confortable." }
    ]
  },
  {
    slug: "maldivas-privada",
    title: "Maldivas Privada",
    subtitle: "MALDIVAS",
    continent: "asia",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
    heroDesc: "Un refugio íntimo de villas flotantes y aguas turquesas para una total reconexión mental.",
    badges: ["Islas Privadas", "Ultra-Lujo Descalzo", "Vida Marina Única"],
    essenceHeading: "El santuario definitivo de paz, donde el horizonte se une con el infinito del océano.",
    essenceDesc: "Maldivas Privada ofrece una experiencia de desconexión absoluta. Hospédate en villas sobre el agua con piscina privada y acceso directo al arrecife de coral. Saborea cenas gourmet preparadas por chefs privados bajo las estrellas y reconéctate con el silencio.",
    essenceImage: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=800",
    moments: [
      {
        number: "01",
        title: "Atolón Baa",
        description: "Snorkel privado guiado por un biólogo marino residente en una reserva de la biosfera de la UNESCO con mantarrayas.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800"
      },
      {
        number: "02",
        title: "Isla Desierta",
        description: "Almuerzo tipo picnic gourmet de ultra-lujo preparado en un banco de arena privado completamente deshabitado.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800"
      },
      {
        number: "03",
        title: "Spa Flotante",
        description: "Sesión de masajes exclusiva en una cabina con suelo de cristal templado, observando la colorida vida marina.",
        image: "https://images.unsplash.com/photo-1512482598219-847e71a0f56b?q=80&w=800"
      }
    ],
    momentsCallout: "EL LUJO DE NO PENSAR EN NADA, RODEADO POR LA INMENSIDAD DEL OCÉANO.",
    organizedImage: "https://images.unsplash.com/photo-1484821547838-fc5274676af3?q=80&w=800",
    organizedPillars: [
      { title: "VILLAS DE AGUA", description: "Resorts premium galardonados que ofrecen máxima privacidad y servicios de mayordomo privado." },
      { title: "CENAS BAJO EL AGUA", description: "Reservas de almuerzos y cenas privadas en espectaculares restaurantes submarinos de cristal." },
      { title: "CONECTIVIDAD AÉREA", description: "Vuelos en hidroavión privado o VIP programados a tu llegada para evitar esperas." },
      { title: "RITMO DESCALZO", description: "Una experiencia de ultra-lujo sin etiquetas, diseñada para caminar descalzo sobre la arena." }
    ]
  },
  {
    slug: "singapur-moderno",
    title: "Singapur Moderno",
    subtitle: "SINGAPUR",
    continent: "asia",
    heroImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200",
    heroDesc: "Sofisticación urbana y arquitectura futurista entrelazada con espectaculares jardines verticales.",
    badges: ["Skyline Futurista", "Mixología Premium", "Jardines del Futuro"],
    essenceHeading: "La metrópolis más limpia, verde y avanzada de Asia te abre sus puertas de lujo.",
    essenceDesc: "Singapur representa la armonía perfecta entre el desarrollo urbano futurista y la naturaleza exuberante. Desde los superárboles iluminados de Gardens by the Bay hasta la histórica arquitectura colonial y la vibrante escena culinaria global de primer nivel.",
    essenceImage: "https://images.unsplash.com/photo-1506970113724-bc41e00267b5?q=80&w=800",
    moments: [
      {
        number: "01",
        title: "Marina Bay",
        description: "Acceso VIP a la terraza superior de Marina Bay Sands al atardecer, con cócteles personalizados y vistas aéreas.",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800"
      },
      {
        number: "02",
        title: "Gardens by the Bay",
        description: "Recorrido privado nocturno por los invernaderos de cristal y pasarela aérea iluminada antes de la apertura oficial.",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800"
      },
      {
        number: "03",
        title: "Chinatown",
        description: "Ruta gastronómica guiada por un crítico culinario local por los puestos de comida y restaurantes tradicionales escondidos.",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800"
      }
    ],
    momentsCallout: "EL DISEÑO URBANO CONCEBIDO COMO UNA EXTENSIÓN DE LA PROPIA NATURALEZA.",
    organizedImage: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800",
    organizedPillars: [
      { title: "HOTELES EMBLEMÁTICOS", description: "Estancias en suites de hoteles históricos y modernos rascacielos de diseño contemporáneo." },
      { title: "MIXOLOGÍA EXCLUSIVA", description: "Entradas preferentes y mesas reservadas en los bares de cócteles más aclamados de Asia." },
      { title: "EXPERIENCIAS PRIVADAS", description: "Acceso privado a colecciones botánicas y museos de arte contemporáneo de vanguardia." },
      { title: "CHÓFER A DISPOSICIÓN", description: "Vehículos ejecutivos eléctricos y chófer privado disponible durante toda tu estancia urbana." }
    ]
  },

  // ── UNIVERSO EUROPA ──
  {
    slug: "italia-clasica",
    title: "Italia Clásica",
    subtitle: "ITALIA",
    continent: "europa",
    heroImage: "https://garage-web.luxuryvoyageco.com/images/hero_carousel/europa.webp",
    heroDesc: "Un recorrido exclusivo por la cuna del arte, la historia y los paisajes inolvidables de la Toscana.",
    badges: ["Arte Renacentista", "Villas de la Toscana", "Costa de Amalfi"],
    essenceHeading: "Revive la elegancia clásica del arte, la gastronomía y los atardeceres dorados italianos.",
    essenceDesc: "Un viaje de inmersión total en el romance italiano. Desde los majestuosos museos florentinos con visitas privadas exclusivas hasta el descanso en una villa tradicional toscana rodeada de viñedos centenarios, culminando con la brisa salada de Positano.",
    essenceImage: "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?q=80&w=800",
    moments: [
      {
        number: "01",
        title: "Florencia",
        description: "Acceso privado y exclusivo fuera de horario a la Galería Uffizi para contemplar el Nacimiento de Venus sin público.",
        image: "https://images.unsplash.com/photo-1541154948462-b55c0b1903ba?q=80&w=800"
      },
      {
        number: "02",
        title: "Toscana",
        description: "Cata de vinos Chianti Classico e instruccional de cocina privada en una finca señorial toscana del siglo XVII.",
        image: "https://images.unsplash.com/photo-1528701801476-7ed982c5a299?q=80&w=800"
      },
      {
        number: "03",
        title: "Positano",
        description: "Navegación al atardecer a lo largo de la costa de Amalfi a bordo de un yate clásico de madera Riva.",
        image: "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?q=80&w=800"
      }
    ],
    momentsCallout: "EL ARTE DE VIVIR SE APRENDE OBSERVANDO LA BELLEZA DE LAS PEQUEÑAS COSAS.",
    organizedImage: "https://images.unsplash.com/photo-1486016006115-74a41448aea2?q=80&w=800",
    organizedPillars: [
      { title: "VILLAS Y PALACIOS", description: "Estancias exclusivas en hoteles históricos que combinan frescos renacentistas con confort moderno." },
      { title: "CULTURA EN PRIVADO", description: "Acceso preferente a capillas y colecciones de arte normalmente cerradas al público en general." },
      { title: "SLOW FOOD", description: "Experiencias gastronómicas privadas en viñedos y restaurantes galardonados con estrellas Michelin." },
      { title: "TRASLADOS PRIVADOS", description: "Choferes locales y yates a tu disposición durante todo el itinerario de viaje." }
    ]
  },
  {
    slug: "grecia-mistica",
    title: "Grecia Mística",
    subtitle: "GRECIA",
    continent: "europa",
    heroImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200",
    heroDesc: "Navegación privada por el Egeo y atardeceres dorados en las islas más exclusivas.",
    badges: ["Yate Privado", "Atardeceres Únicos", "Historia Clásica"],
    essenceHeading: "El origen de la civilización y el azul más profundo del Mar Mediterráneo.",
    essenceDesc: "Grecia Mística te invita a descubrir la grandeza de la antigua Atenas en visitas privadas guiadas por arqueólogos, y a navegar por las islas Cícladas en un yate privado de lujo, lejos de las rutas turísticas convencionales.",
    essenceImage: "https://images.unsplash.com/photo-1469796466635-455ede028acf?q=80&w=800",
    moments: [
      {
        number: "01",
        title: "Acrópolis",
        description: "Visita exclusiva al amanecer a la Acrópolis de Atenas con un arqueólogo experto, antes de la apertura general.",
        image: "https://images.unsplash.com/photo-1555992336-03a23c7b20eb?q=80&w=800"
      },
      {
        number: "02",
        title: "Milos Oculto",
        description: "Exploración de las playas lunares de Sarakiniko y cuevas piratas de Kleftiko a bordo de un catamarán privado.",
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800"
      },
      {
        number: "03",
        title: "Santorini",
        description: "Cena íntima con vistas a la caldera volcánica en una terraza privada en Oia, con maridaje de vinos locales.",
        image: "https://images.unsplash.com/photo-1469796466635-455ede028acf?q=80&w=800"
      }
    ],
    momentsCallout: "EL AZUL DEL EGEO NO TIENE COMPARACIÓN, ES UN ESTADO DE ÁNIMO Y DE PAZ.",
    organizedImage: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800",
    organizedPillars: [
      { title: "HOTELES BOUTIQUE", description: "Habitaciones excavadas en acantilados con piscinas infinitas y espectaculares vistas directas al mar." },
      { title: "NAVEGACIÓN EXCLUSIVA", description: "Embarcaciones privadas con tripulación completa y chef a bordo para tus días en el mar." },
      { title: "ARQUEOLOGÍA PRIVADA", description: "Guías con doctorados en historia clásica que reviven los mitos griegos en cada monumento." },
      { title: "ISLAS SECRETAS", description: "Itinerarios que incluyen paradas en islas menos conocidas para vivir el verdadero encanto griego." }
    ]
  },
  {
    slug: "paris-arte",
    title: "París & Arte",
    subtitle: "FRANCIA",
    continent: "europa",
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200",
    heroDesc: "Una inmersión en la alta costura, gastronomía estrella Michelin y el romanticismo del Sena.",
    badges: ["Alta Costura", "Visitas Privadas UHNW", "Palacio de Versalles"],
    essenceHeading: "La ciudad de la luz vivida con la máxima sofisticación y exclusividad posibles.",
    essenceDesc: "París & Arte redefine el romance de la capital francesa. Desde talleres privados de alta costura y visitas privadas al Louvre a puerta cerrada, hasta paseos en barcos históricos por el Sena y paseos en helicóptero por el Valle del Loira.",
    essenceImage: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=800",
    moments: [
      {
        number: "01",
        title: "Versalles",
        description: "Paseo VIP privado por los aposentos secretos de María Antonieta y el Salón de los Espejos a puerta cerrada.",
        image: "https://images.unsplash.com/photo-1508930415358-a883a8b4482b?q=80&w=800"
      },
      {
        number: "02",
        title: "Río Sena",
        description: "Crucero privado al atardecer en un yate veneciano de madera restaurado, con champán y jazz en vivo.",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800"
      },
      {
        number: "03",
        title: "Louvre",
        description: "Visita nocturna guiada de 3 horas por las galerías del museo completamente vacío de turistas.",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800"
      }
    ],
    momentsCallout: "PARÍS SE REVELA ANTE AQUELLOS QUE SABEN CONTEMPLAR SU ALMA SILENCIOSA.",
    organizedImage: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=800",
    organizedPillars: [
      { title: "HOTELES PALACE", description: "Estancia en los históricos hoteles clasificados como 'Palace', la máxima distinción de lujo francesa." },
      { title: "EXPERIENCIAS DE MODA", description: "Accesos privados a ateliers de diseño de moda y pruebas de ropa exclusivas de alta costura." },
      { title: "CENAS DE ESTRELLA", description: "Reservas confirmadas con menús degustación especiales en restaurantes de tres estrellas Michelin." },
      { title: "ASISTENTE PERSONAL", description: "Conserjería local que habla español disponible en todo momento para imprevistos." }
    ]
  },
  {
    slug: "suiza-alpina",
    title: "Suiza Alpina",
    subtitle: "SUIZA",
    continent: "europa",
    heroImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200",
    heroDesc: "Lujo a gran altura entre picos nevados, lagos de espejo y chalets de montaña privados de cinco estrellas.",
    badges: ["Chalets Privados", "Trenes Glaciares", "Relojería de Lujo"],
    essenceHeading: "La majestuosidad de los Alpes vivida con la precisión y discreción del lujo suizo.",
    essenceDesc: "Suiza Alpina te lleva a través de los paisajes montañosos más espectaculares de Europa. Disfruta de un viaje privado a bordo del tren Glacier Express, vuela en helicóptero sobre el Cervino y relájate en chalets privados equipados con chimeneas y spas de montaña.",
    essenceImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
    moments: [
      {
        number: "01",
        title: "Cervino",
        description: "Sobrevuelo privado en helicóptero sobre el Matterhorn (Cervino) con aterrizaje en glaciar para un brindis.",
        image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=800"
      },
      {
        number: "02",
        title: "St. Moritz",
        description: "Cena exclusiva en un refugio alpino privado a 3,000 metros de altura, con fondue gourmet preparada por un chef.",
        image: "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?q=80&w=800"
      },
      {
        number: "03",
        title: "Ginebra",
        description: "Taller privado de alta relojería en una prestigiosa manufactura ginebrina, ensamblando tu propia pieza.",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800"
      }
    ],
    momentsCallout: "EL SILENCIO DE LAS ALTURAS ALPINAS REVELA EL VERDADERO VALOR DEL TIEMPO.",
    organizedImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
    organizedPillars: [
      { title: "CHALETS EXCLUSIVOS", description: "Propiedades privadas con personal, chef y spa de uso totalmente exclusivo para el grupo." },
      { title: "TICKETS FIRST CLASS", description: "Reservas y cabinas de primera clase en los trenes panorámicos más famosos de Suiza." },
      { title: "SENDERISMO PRIVADO", description: "Guías de montaña certificados que adaptan cada ruta a tu nivel físico y de interés." },
      { title: "SPA HOLÍSTICO", description: "Tratamientos antienvejecimiento y clínicas de bienestar premium incluidas en el itinerario." }
    ]
  },
  {
    slug: "noruega-fiordos",
    title: "Fiordos de Noruega",
    subtitle: "NORUEGA",
    continent: "europa",
    heroImage: "https://images.unsplash.com/photo-1603084612671-be628f06dc06?q=80&w=1200",
    heroDesc: "Cruceros privados y cabañas de diseño frente a los fiordos más espectaculares y silenciosos del planeta.",
    badges: ["Navegación en Fiordos", "Diseño Nórdico", "Auroras Boreales / Sol de Medianoche"],
    essenceHeading: "La fuerza de la naturaleza salvaje esculpida por glaciares e inundada por el mar.",
    essenceDesc: "Fiordos de Noruega te invita a navegar por el Geirangerfjord en un catamarán eléctrico privado, a dormir en exclusivas cabañas de cristal al borde del agua y a descubrir la fascinante cultura vikinga en un ambiente de total silencio y paz.",
    essenceImage: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=800",
    moments: [
      {
        number: "01",
        title: "Geirangerfjord",
        description: "Crucero privado en yate de exploración por el fiordo Geirangerfjord, acercándote a las cascadas de las Siete Hermanas.",
        image: "https://images.unsplash.com/photo-1603084612671-be628f06dc06?q=80&w=800"
      },
      {
        number: "02",
        title: "Lofoten",
        description: "Estancia en una cabaña de pescador tradicional (Rorbu) totalmente reformada con interiores de diseño escandinavo.",
        image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=800"
      },
      {
        number: "03",
        title: "Glaciar Jostedal",
        description: "Caminata privada con crampones sobre el hielo azul del glaciar, guiada por un glaciólogo experto.",
        image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=800"
      }
    ],
    momentsCallout: "EL AGUA Y LA ROCA EN UN ABRAZO SILENCIOSO QUE LLEVA MILES DE AÑOS SIN CAMBIAR.",
    organizedImage: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800",
    organizedPillars: [
      { title: "DISEÑO Y CONFORT", description: "Alojamientos singulares que integran la arquitectura contemporánea de cristal en la naturaleza." },
      { title: "ECO-LUJO", description: "Embarcaciones eléctricas y experiencias sostenibles con un mínimo impacto ecológico." },
      { title: "CENA NÓRDICA", description: "Gastronomía local basada en pescados y mariscos frescos salvajes en restaurantes especializados." },
      { title: "LOGÍSTICA TOTAL", description: "Vuelos internos e hidroaviones coordinados para cruzar el accidentado territorio sin esfuerzo." }
    ]
  },
  {
    slug: "escocia-leyenda",
    title: "Escocia de Leyenda",
    subtitle: "ESCOCIA",
    continent: "europa",
    heroImage: "https://images.unsplash.com/photo-1628946578676-e1ee0a952c35?q=80&w=1200",
    heroDesc: "Castillos medievales cargados de historia y catas de whisky de malta exclusivo en las Tierras Altas.",
    badges: ["Castillos Privados", "Whisky Single Malt", "Highlands Místicas"],
    essenceHeading: "La melancolía de la bruma, las leyendas de clanes y los castillos de piedra centenaria.",
    essenceDesc: "Escocia de Leyenda te sumerge en la magia de las Highlands. Hospédate en castillos medievales de uso exclusivo, viaja a bordo del lujoso tren Royal Scotsman y degusta whiskies raros directamente de barricas centenarias en destilerías privadas.",
    essenceImage: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800",
    moments: [
      {
        number: "01",
        title: "Isla de Skye",
        description: "Exploración todoterreno privada por los acantilados de Skye, contemplando las extrañas formaciones de roca.",
        image: "https://images.unsplash.com/photo-1628946578676-e1ee0a952c35?q=80&w=800"
      },
      {
        number: "02",
        title: "Highlands",
        description: "Cata privada en una destilería secreta de las Tierras Altas, abriendo botellas de coleccionistas de más de 40 años.",
        image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800"
      },
      {
        number: "03",
        title: "Edimburgo",
        description: "Cena de gala privada con gaiteros dentro de un castillo medieval cerrado exclusivamente para el grupo.",
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800"
      }
    ],
    momentsCallout: "CADA PIEDRA EN ESCOCIA TIENE UNA HISTORIA QUE CONTAR, SOLO HACE FALTA SABER ESCUCHAR.",
    organizedImage: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800",
    organizedPillars: [
      { title: "CASTILLOS Y MANORS", description: "Hospedaje en propiedades de clanes históricos con servicio de mayordomo y chef privado." },
      { title: "TRENES HISTÓRICOS", description: "Reservas de suites en trenes de época con vagones comedor y spa de madera de caoba." },
      { title: "RUTAS EN 4X4", description: "Vehículos todoterreno con conductores expertos para recorrer colinas cubiertas de brezo." },
      { title: "EXPERIENCIAS RÁPIDAS", description: "Traslados privados en helicóptero para cruzar de la costa a las islas en minutos." }
    ]
  },

  // ── UNIVERSO ÁFRICA ──
  {
    slug: "safari-lujo",
    title: "Safari de Lujo",
    subtitle: "KENIA & TANZANIA",
    continent: "africa",
    heroImage: "https://garage-web.luxuryvoyageco.com/images/hero_carousel/africa.webp",
    heroDesc: "Encuentros íntimos con la fauna salvaje en campamentos móviles de lujo en el Serengueti.",
    badges: ["Gran Migración", "Campamentos de Lujo", "Globo Aerostático"],
    essenceHeading: "La llamada de la naturaleza en su estado más puro y la majestuosidad de la Gran Migración.",
    essenceDesc: "Siente el pulso de la sabana africana. Duerme en campamentos de lona de ultra-lujo al estilo de los antiguos exploradores, vuela sobre miles de ñus al amanecer y comparte momentos junto a guerreros Masái para comprender su estrecha relación con la tierra.",
    essenceImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800",
    moments: [
      {
        number: "01",
        title: "Masái Mara",
        description: "Vuelo al amanecer en globo aerostático sobre la llanura del Mara, seguido de un desayuno con champán en la sabana.",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800"
      },
      {
        number: "02",
        title: "Serengueti",
        description: "Safari fotográfico de día completo rastreando a los 'Cinco Grandes' acompañados por un guía naturalista experto.",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800"
      },
      {
        number: "03",
        title: "Cráter Ngorongoro",
        description: "Almuerzo privado tipo picnic de etiqueta montado en el suelo del cráter, rodeado de cebras e hipopótamos.",
        image: "https://garage-web.luxuryvoyageco.com/images/hero_carousel/africa.webp"
      }
    ],
    momentsCallout: "EL SILENCIO DE LA SABANA AL ATARDECER ES EL SONIDO MÁS PROFUNDO DE LA TIERRA.",
    organizedImage: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=800",
    organizedPillars: [
      { title: "LOGIS DE ULTRA-LUJO", description: "Campamentos con tiendas de lona señoriales provistas de piscina privada y baños de cobre." },
      { title: "NATURALISTAS CERTIFICADOS", description: "Rastreadores y guías dedicados exclusivamente a tu vehículo 4x4 durante todo el safari." },
      { title: "VUELOS CÁLIDOS", description: "Avionetas privadas programadas para evitar los largos e incómodos trayectos por carretera." },
      { title: "INMERSIÓN RESPETUOSA", description: "Visitas consensuadas a comunidades locales para apoyar proyectos de educación y conservación." }
    ]
  },
  {
    slug: "sudafrica-exclusiva",
    title: "Sudáfrica Exclusiva",
    subtitle: "SUDÁFRICA",
    continent: "africa",
    heroImage: "/images/colecciones/card_south_africa.png",
    heroDesc: "La ruta de los viñedos en Stellenbosch, el Cabo de Buena Esperanza y avistamiento de ballenas.",
    badges: ["Viñedos Premium", "Avistamiento de Ballenas", "Ciudad del Cabo VIP"],
    essenceHeading: "La vibrante fusión de una metrópolis costera rodeada por océanos y viñedos.",
    essenceDesc: "Sudáfrica Exclusiva combina la belleza de Ciudad del Cabo, los viñedos históricos de Stellenbosch y los acantilados de Hermanus. Una inmersión en la alta gastronomía, vinos premiados internacionalmente y una geografía costera espectacular.",
    essenceImage: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=800",
    moments: [
      {
        number: "01",
        title: "Ciudad del Cabo",
        description: "Vuelo privado en helicóptero sobre la península del Cabo, rodeando la icónica silueta de Table Mountain.",
        image: "/images/colecciones/card_south_africa.png"
      },
      {
        number: "02",
        title: "Stellenbosch",
        description: "Cata exclusiva y almuerzo de maridaje de 5 tiempos en una bodega histórica privada fundada en el siglo XVIII.",
        image: "https://images.unsplash.com/photo-1528259074747-49f33b34b206?q=80&w=800"
      },
      {
        number: "03",
        title: "Hermanus",
        description: "Navegación costera privada en catamarán para el avistamiento de ballenas francas australes en temporada.",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800"
      }
    ],
    momentsCallout: "EL ENCUENTRO DE DOS OCÉANOS BAJO EL CIELO DE LA CIUDAD MÁS ESPECTACULAR DE ÁFRICA.",
    organizedImage: "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?q=80&w=800",
    organizedPillars: [
      { title: "MANORS BOUTIQUE", description: "Estancia en residencias históricas y hoteles de diseño en el paseo marítimo con máxima seguridad." },
      { title: "BODEGAS PRIVADAS", description: "Acceso exclusivo a bodegas familiares cerradas al público general con catas privadas." },
      { title: "GASTRONOMÍA PREMIUM", description: "Reservas preferentes en los restaurantes clasificados entre los 50 mejores del mundo." },
      { title: "GUÍAS LOCALES EXPERTOS", description: "Historiadores y naturalistas locales que te acompañan para dar contexto a cada visita." }
    ]
  },
  {
    slug: "marruecos-imperial",
    title: "Marruecos Imperial",
    subtitle: "MARRUECOS",
    continent: "africa",
    heroImage: "/images/colecciones/card_morocco.png",
    heroDesc: "Ríads de ensueño en Marrakech y noches estrelladas en campamentos bereberes del Sahara.",
    badges: ["Ríads Privados", "Campamentos en el Sahara", "Zocos de Marrakech"],
    essenceHeading: "El aroma a especias, los colores de los mosaicos y el silencio del gran desierto.",
    essenceDesc: "Marruecos Imperial te abre las puertas del norte de África. Descubre los palacios de Marrakech, piérdete en los laberínticos zocos históricos con un guía personal de compras y duerme bajo millones de estrellas en un campamento de domos en el desierto del Sahara.",
    essenceImage: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=800",
    moments: [
      {
        number: "01",
        title: "Marrakech",
        description: "Visita privada exclusiva fuera de horario al Jardín Majorelle y al Museo Yves Saint Laurent antes del amanecer.",
        image: "/images/colecciones/card_morocco.png"
      },
      {
        number: "02",
        title: "Desierto del Sahara",
        description: "Paseo en camello por las dunas de Merzouga al atardecer, seguido de una cena bereber con música en vivo.",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800"
      },
      {
        number: "03",
        title: "Fez Sagrado",
        description: "Exploración VIP de la Medina de Fez y su famosa curtiduría de pieles tradicional desde terrazas privadas.",
        image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=800"
      }
    ],
    momentsCallout: "EL DESIERTO NO HABLA, PERO RESPONDE A LAS PREGUNTAS DE QUIEN SE ATREVE A ESCUCHAR.",
    organizedImage: "https://images.unsplash.com/photo-1560624052-449f5ddf0c41?q=80&w=800",
    organizedPillars: [
      { title: "RÍADS DE ENSUEÑO", description: "Estancia en antiguos palacios convertidos en hoteles boutique con patios internos y fuentes de agua." },
      { title: "GLAMPING EN EL SAHARA", description: "Tiendas de campaña con todas las comodidades de un hotel cinco estrellas en medio de las dunas." },
      { title: "LOGÍSTICA EN 4X4", description: "Flota de vehículos todoterreno de lujo con aire acondicionado y choferes con experiencia." },
      { title: "GUÍA HISTÓRICO", description: "Guías autorizados locales que te revelan la fascinante historia y el arte de la dinastía alauí." }
    ]
  },
  {
    slug: "egipto-eterno",
    title: "Egipto Eterno",
    subtitle: "EGIPTO",
    continent: "africa",
    heroImage: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1200",
    heroDesc: "Cruceros privados de lujo por el Nilo y visitas exclusivas fuera de horario a las pirámides de Giza.",
    badges: ["Crucero Dahabiya", "Visita Privada Pirámides", "Egiptología VIP"],
    essenceHeading: "La cuna de los faraones y el río sagrado que dio origen a una dinastía milenaria.",
    essenceDesc: "Egipto Eterno te lleva en un viaje en el tiempo. Disfruta de un crucero privado por el Nilo a bordo de una Dahabiya tradicional de madera, accede a las tumbas más restringidas del Valle de los Reyes y contempla las Pirámides de Giza completamente solo.",
    essenceImage: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=800",
    moments: [
      {
        number: "01",
        title: "Giza",
        description: "Acceso privado exclusivo para el grupo a la Gran Pirámide de Keops y a la Esfinge de Giza fuera de horario.",
        image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=800"
      },
      {
        number: "02",
        title: "Valle de los Reyes",
        description: "Visita guiada VIP a la tumba de Tutankamón y Seti I, acompañados por un egiptólogo de renombre internacional.",
        image: "https://images.unsplash.com/photo-1608958416743-ba6fd46bc8a9?q=80&w=800"
      },
      {
        number: "03",
        title: "Río Nilo",
        description: "Navegación de 4 noches por el Nilo en una embarcación privada Dahabiya con chef y tripulación exclusiva.",
        image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=800"
      }
    ],
    momentsCallout: "EL TIEMPO TEME A LAS PIRÁMIDES, PERO LAS PIRÁMIDES RESPETAN EL FLUIR DEL VIEJO NILO.",
    organizedImage: "https://images.unsplash.com/photo-1572244409594-df7d514eff1d?q=80&w=800",
    organizedPillars: [
      { title: "HOTELES HISTÓRICOS", description: "Noches de estancia en hoteles que hospedaron a arqueólogos y novelistas legendarios." },
      { title: "CRUCERO EXCLUSIVO", description: "Navegación lenta a vela sin el ruido de motores, con un servicio personalizado a bordo." },
      { title: "EGIPTÓLOGOS EXPERTOS", description: "Guiado exclusivo a cargo de arqueólogos e historiadores con amplia experiencia en excavaciones." },
      { title: "SEGURIDAD VIP", description: "Coordinación y personal de seguridad y protocolo dedicados a tu total tranquilidad." }
    ]
  },
  {
    slug: "botsuana-salvaje",
    title: "Botsuana Salvaje",
    subtitle: "BOTSUANA",
    continent: "africa",
    heroImage: "https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=1200",
    heroDesc: "Exploración en mokoro por el Delta del Okavango, el santuario de vida silvestre más exclusivo.",
    badges: ["Delta del Okavango", "Navegación Mokoro", "Lodges de Lujo"],
    essenceHeading: "El agua que inunda el desierto del Kalahari y crea el delta interior más grande del mundo.",
    essenceDesc: "Botsuana Salvaje representa la cumbre del safari exclusivo. Descubre el Delta del Okavango deslizándose en canoas tradicionales mokoro, realiza safaris de rastreo nocturno y hospédate en lodges de ultra-lujo construidos sobre plataformas de madera.",
    essenceImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800",
    moments: [
      {
        number: "01",
        title: "Okavango",
        description: "Paseo al atardecer en canoa tradicional mokoro por los canales inundados del delta, observando aves.",
        image: "https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800"
      },
      {
        number: "02",
        title: "Chobe",
        description: "Crucero privado al atardecer por el río Chobe para presenciar manadas de elefantes cruzando el cauce.",
        image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=800"
      },
      {
        number: "03",
        title: "Safari Aéreo",
        description: "Vuelo escénico privado en avioneta sobre el delta del Okavango para apreciar el intrincado laberinto de agua.",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800"
      }
    ],
    momentsCallout: "EL AGUA QUE CORRE SILENCIOSA TRAE CONSIGO EL REGRESO DE LA VIDA SALVAJE A LA TIERRA.",
    organizedImage: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800",
    organizedPillars: [
      { title: "LODGES DE MADERA", description: "Propiedades exclusivas con piscinas infinitas integradas en el entorno salvaje del delta." },
      { title: "RUTAS EN CANOA", description: "Exploración guiada por remeros locales con conocimientos del comportamiento animal costero." },
      { title: "TRASLADOS ESCÉNICOS", description: "Avionetas y helicópteros privados para moverte entre campamentos de manera eficiente." },
      { title: "RITMO TRANQUILO", description: "Un itinerario de safari íntimo diseñado para evitar la acumulación de vehículos." }
    ]
  },
  {
    slug: "ruanda-gorilas",
    title: "Gorilas en Ruanda",
    subtitle: "RUANDA",
    continent: "africa",
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200",
    heroDesc: "Senderismo en la selva nubosa para un encuentro íntimo de una hora con los últimos gorilas de montaña.",
    badges: ["Trekking de Gorilas", "Selva de los Volcanes", "Conservación Activa"],
    essenceHeading: "Un encuentro cercano y profundo con los últimos gigantes de la selva nubosa.",
    essenceDesc: "Gorilas en Ruanda te ofrece una de las experiencias más conmovedoras de la vida. Adéntrate en el Parque Nacional de los Volcanes acompañado de guías expertos de conservación para pasar una hora contemplando de cerca a una familia de gorilas de montaña.",
    essenceImage: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800",
    moments: [
      {
        number: "01",
        title: "Volcanes",
        description: "Senderismo privado de montaña guiado por guardaparques para un encuentro de 1 hora con gorilas de montaña.",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800"
      },
      {
        number: "02",
        title: "Kigali",
        description: "Cena privada y encuentro de debate con un scientist de la fundación Dian Fossey Gorilla Fund.",
        image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=800"
      },
      {
        number: "03",
        title: "Bosque Nyungwe",
        description: "Caminata sobre puentes colgantes aéreos en el dosel de la selva nubosa buscando chimpancés salvajes.",
        image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=800"
      }
    ],
    momentsCallout: "EL SILENCIO DE LA SELVA NUBOSA SE ROMPE SUTILMENTE CON LA MIRADA DE UN GIGANTE.",
    organizedImage: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=800",
    organizedPillars: [
      { title: "LODGES EXCLUSIVOS", description: "Estancias de lujo sostenible que contribuyen directamente a la conservación de las especies." },
      { title: "SEGUIMIENTO PRIVADO", description: "Rastreadores y guías dedicados a guiarte de forma segura por el terreno selvático." },
      { title: "ACCESO VIP", description: "Gestión preferente de permisos oficiales de trekking requeridos por las autoridades de Ruanda." },
      { title: "TRASLADOS PRIVADOS", description: "Vehículos 4x4 y helicópteros privados para una logística rápida y segura." }
    ]
  },

  // ── UNIVERSO MEDIO ORIENTE ──
  {
    slug: "petra-secreta",
    title: "Petra Secreta",
    subtitle: "JORDANIA",
    continent: "medio-oriente",
    heroImage: "https://garage-web.luxuryvoyageco.com/images/hero_carousel/medio_oriente.webp",
    heroDesc: "Exploración de la mística ciudad rosa tallada en roca y noche en el desierto de Wadi Rum.",
    badges: ["Ciudad de Petra", "Desierto Wadi Rum", "Flotación Mar Muerto"],
    essenceHeading: "La mística de los desfiladeros de roca rosa y las caravanas comerciales del pasado.",
    essenceDesc: "Petra Secreta te revela los misterios del reino nabateo. Cruza el Siq al atardecer en una visita privada con velas, duerme en domos futuristas de lujo en medio del paisaje lunar de Wadi Rum y sumérgete en las curativas aguas del Mar Muerto.",
    essenceImage: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=800",
    moments: [
      {
        number: "01",
        title: "Petra",
        description: "Acceso privado al Tesoro de Petra iluminado por más de 1,500 velas al anochecer, con música tradicional en vivo.",
        image: "https://garage-web.luxuryvoyageco.com/images/hero_carousel/medio_oriente.webp"
      },
      {
        number: "02",
        title: "Wadi Rum",
        description: "Recorrido privado en todoterreno por los cañones de arena roja de Wadi Rum, seguido de cena en campamento de domos.",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800"
      },
      {
        number: "03",
        title: "Mar Muerto",
        description: "Tarde de relajación y flotación en una playa privada de hotel spa con barros ricos en minerales curativos.",
        image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=800"
      }
    ],
    momentsCallout: "EL DESIERTO ROJO DE JORDANIA GUARDA EL SILENCIO Y LA HISTORIA DE MIL CARAVANAS DEL PASADO.",
    organizedImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
    organizedPillars: [
      { title: "DOMOS Y SPAS", description: "Campamentos espaciales y resorts cinco estrellas en la playa del Mar Muerto con tratamientos privados." },
      { title: "ACCESOS EXCLUSIVOS", description: "Entradas preferentes de arqueología para evitar las multitudes y disfrutar del paisaje." },
      { title: "GUÍA DEDICADO", description: "Historiadores y guías oficiales que reviven las leyendas nabateas en cada templo." },
      { title: "VEHÍCULOS SUV", description: "Traslados privados en cómodas camionetas todoterreno ejecutivas con aire acondicionado." }
    ]
  },
  {
    slug: "oasis-golfo",
    title: "Oasis del Golfo",
    subtitle: "EMIRATOS ÁRABES",
    continent: "medio-oriente",
    heroImage: "/images/colecciones/card_dubai.png",
    heroDesc: "Arquitectura vanguardista en Dubái, cultura en Abu Dabi y retiros de dunas de ultra-lujo.",
    badges: ["Rascacielos Futuristas", "Desierto de Liwa", "Lujo Contemporáneo"],
    essenceHeading: "La visión futurista de una metrópolis que emerge con esplendor entre dunas doradas.",
    essenceDesc: "Oasis del Golfo combina la espectacular arquitectura de Dubái con la herencia cultural de Abu Dabi. Disfruta de una cena privada en el desierto bajo una tienda beduina tradicional y relájate en un resort de ultra-lujo en medio de la nada.",
    essenceImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800",
    moments: [
      {
        number: "01",
        title: "Burj Khalifa",
        description: "Acceso VIP exclusivo a los niveles 148 a 154 de Burj Khalifa, con champán y el mirador privado más alto.",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800"
      },
      {
        number: "02",
        title: "Desierto de Liwa",
        description: "Estancia en un oasis de ultra-lujo en medio de las dunas, con paseos privados en camello al atardecer.",
        image: "/images/colecciones/card_dubai.png"
      },
      {
        number: "03",
        title: "Abu Dabi",
        description: "Visita privada guiada al Louvre Abu Dabi para apreciar su cúpula de luces de lluvia de estrellas y su arte.",
        image: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?q=80&w=800"
      }
    ],
    momentsCallout: "EL SUEÑO DE UNA CIUDAD CONCEBIDA PARA DESAFIAR LA GRAVEDAD Y EL TIEMPO.",
    organizedImage: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800",
    organizedPillars: [
      { title: "HOTELES EXCLUSIVOS", description: "Suites presidenciales en los resorts de marca de lujo más icónicos de la región costera." },
      { title: "MIXOLOGÍA Y CENAS", description: "Reservas preferenciales garantizadas en los restaurantes más demandados de Dubái." },
      { title: "ASISTENTE PERSONAL", description: "Un anfitrión local para gestionar todas tus solicitudes las 24 horas del día." },
      { title: "TRASLADOS EN HELICÓPTERO", description: "Transporte aéreo privado para traslados rápidos y espectaculares sobre el golfo." }
    ]
  },
  {
    slug: "oman-tradicional",
    title: "Omán Tradicional",
    subtitle: "OMÁN",
    continent: "medio-oriente",
    heroImage: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&w=1200",
    heroDesc: "Cañones espectaculares, fuertes antiguos y la hospitalidad más pura de la Península Arábiga.",
    badges: ["Fuertes Antiguos", "Cañones Espectaculares", "Costas de Mascate"],
    essenceHeading: "El tesoro mejor guardado de Medio Oriente, donde la tradición y la arquitectura se funden.",
    essenceDesc: "Omán Tradicional te ofrece una experiencia auténtica de Arabia. Explora cañones de piedra impresionantes, visita mercados históricos de incienso en Mascate y quédate en campamentos beduinos de lujo rodeados de un mar de dunas naranjas.",
    essenceImage: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&w=800",
    moments: [
      {
        number: "01",
        title: "Jebel Akhdar",
        description: "Caminata de exploración privada por los cañones de montaña de la cordillera del Hajar, con picnic al borde.",
        image: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&w=800"
      },
      {
        number: "02",
        title: "Wahiba Sands",
        description: "Noche estrellada en un campamento de tiendas bereberes, con cata de café con cardamomo y dátiles frescos.",
        image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=800"
      },
      {
        number: "03",
        title: "Mascate",
        description: "Navegación al atardecer en una embarcación de vela Dhow tradicional de madera por la bahía costera de Mascate.",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800"
      }
    ],
    momentsCallout: "EL INCIENSO Y LA ROSA MARCAN EL CAMINO EN UN MEDIO ORIENTE QUE SUTILMENTE PRESERVA SU PASADO.",
    organizedImage: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=800",
    organizedPillars: [
      { title: "CAMPAMENTOS BEREBERES", description: "Alojamiento boutique de tiendas saharianas con camas king size y baños privados completos." },
      { title: "RUTAS DE MONTAÑA", description: "Guías omaníes locales con gran conocimiento de la geología y la historia de los fuertes." },
      { title: "SLOW TRAVEL", description: "Días programados con tiempo libre para disfrutar del spa de los hoteles de montaña." },
      { title: "TRASLADOS SUV", description: "Vehículos 4x4 de alta gama para recorrer los sinuosos caminos de los cañones de piedra." }
    ]
  },
  {
    slug: "doha-sofisticacion",
    title: "Doha & Sofisticación",
    subtitle: "CATAR",
    continent: "medio-oriente",
    heroImage: "https://images.unsplash.com/photo-1669815007479-494b3b51c2c3?q=80&w=1200",
    heroDesc: "Diseño contemporáneo en museos flotantes de primer nivel, zocos tradicionales y resorts a orillas del Golfo.",
    badges: ["Arquitectura de Museos", "Zocos de Doha", "Mar Interior"],
    essenceHeading: "La sofisticada fusión entre el diseño arquitectónico de autor y la hospitalidad del golfo.",
    essenceDesc: "Doha & Sofisticación te invita a una experiencia de diseño y cultura contemporáneos. Desde los impresionantes museos de Jean Nouvel hasta el vibrante zoco tradicional Waqif, culminando con la espectacular vista de dunas que tocan el mar en el Inland Sea.",
    essenceImage: "https://images.unsplash.com/photo-1572244409594-df7d514eff1d?q=80&w=800",
    moments: [
      {
        number: "01",
        title: "Museo de Arte",
        description: "Visita privada exclusiva fuera de horario al Museo de Arte Islámico, guiada por un curador de arte senior.",
        image: "https://images.unsplash.com/photo-1669815007479-494b3b51c2c3?q=80&w=800"
      },
      {
        number: "02",
        title: "Khor Al Adaid",
        description: "Excursión en 4x4 de ultra-lujo por las dunas que limitan directamente con el mar en el impresionante Mar Interior.",
        image: "https://images.unsplash.com/photo-1572244409594-df7d514eff1d?q=80&w=800"
      },
      {
        number: "03",
        title: "Souq Waqif",
        description: "Recorrido privado por los callejones tradicionales del zoco, visitando la sección de halcones con un experto local.",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800"
      }
    ],
    momentsCallout: "EL CONTRASTE ENTRE LAS DUNAS ANCESTRALES Y LA SOFISTICACIÓN DEL NUEVO MUNDO.",
    organizedImage: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800",
    organizedPillars: [
      { title: "HOTELES DE MARCA", description: "Estancias en suites de hoteles boutique y resorts de ultra-lujo ubicados en islas privadas." },
      { title: "ACCESOS CULTURALES", description: "Entradas preferenciales y visitas VIP a las galerías y centros de arte contemporáneo." },
      { title: "MIXOLOGÍA Y CENAS", description: "Reservas especiales confirmadas en los mejores restaurantes de Doha." },
      { title: "VEHÍCULOS PREMIUM", description: "Flota de autos de alta gama eléctricos con choferes uniformados a tu servicio todo el día." }
    ]
  },
  {
    slug: "alula-arqueologica",
    title: "AlUla Arqueológica",
    subtitle: "ARABIA SAUDITA",
    continent: "medio-oriente",
    heroImage: "https://images.unsplash.com/photo-1663900108404-a05e8bf82cda?q=80&w=1200",
    heroDesc: "Exploración en helicóptero sobre las antiguas tumbas de Hegra y estancia en el vanguardista hotel de espejos Maraya.",
    badges: ["Tumbas de Hegra", "Hotel de Espejos Maraya", "Exploración en Helicóptero"],
    essenceHeading: "El museo al aire libre más espectacular y misterioso del reino de Arabia.",
    essenceDesc: "AlUla Arqueológica te invita a descubrir una de las fronteras de exploración más fascinantes del planeta. Explora las tumbas nabateas talladas en roca de Hegra, visita la estructura de espejos más grande del mundo en medio del desierto y vuela sobre cañones.",
    essenceImage: "https://images.unsplash.com/photo-1663900108404-a05e8bf82cda?q=80&w=800",
    moments: [
      {
        number: "01",
        title: "Hegra",
        description: "Visita privada exclusiva fuera de horario en vehículo vintage de época por los monumentos funerarios tallados en roca.",
        image: "https://images.unsplash.com/photo-1663900108404-a05e8bf82cda?q=80&w=800"
      },
      {
        number: "02",
        title: "Maraya",
        description: "Asistencia privada y cena exclusiva en el restaurante gourmet de la terraza superior del asombroso edificio Maraya.",
        image: "https://images.unsplash.com/photo-1572244409594-df7d514eff1d?q=80&w=800"
      },
      {
        number: "03",
        title: "Cañón del Sharaan",
        description: "Sobrevuelo en helicóptero privado sobre las gargantas rocosas y formaciones del desierto de AlUla.",
        image: "https://images.unsplash.com/photo-1663900108404-a05e8bf82cda?q=80&w=800"
      }
    ],
    momentsCallout: "EL PASADO SE ENCUENTRA CON EL MAÑANA EN UN DESIERTO DONDE LA PIEDRA REFLEJA EL INFINITO.",
    organizedImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
    organizedPillars: [
      { title: "RESORTS DE DISEÑO", description: "Alojamiento en hoteles de villas vanguardistas integrados arquitectónicamente en la roca." },
      { title: "VUELOS CÓMODOS", description: "Vuelos escénicos y de conexión interna coordinados en aviones y helicópteros privados." },
      { title: "ARQUEÓLOGOS VIP", description: "Acompañamiento a cargo de especialistas e historiadores con doctorados en la cultura nabatea." },
      { title: "LOGÍSTICA EXCLUSIVA", description: "Flota de camionetas todoterreno de lujo totalmente climatizadas con conductores locales." }
    ]
  },
  {
    slug: "joyas-abu-dabi",
    title: "Joyas de Abu Dabi",
    subtitle: "EMIRATOS ÁRABES UNIDOS",
    continent: "medio-oriente",
    heroImage: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?q=80&w=1200",
    heroDesc: "Visita al majestuoso museo Louvre Abu Dabi y la icónica Mezquita Sheikh Zayed en un itinerario artístico privado.",
    badges: ["Mezquita Sheikh Zayed", "Museo Louvre VIP", "Isla Saadiyat"],
    essenceHeading: "La máxima expresión del arte islámico clásico y el diseño global contemporáneo.",
    essenceDesc: "Joyas de Abu Dabi te sumerge en un mundo de arte y espiritualidad únicos. Contempla los mármoles y mosaicos de la mezquita más espectacular del mundo en una visita privada al atardecer, explora el Louvre flotante y descansa frente al golfo.",
    essenceImage: "https://images.unsplash.com/photo-1572244409594-df7d514eff1d?q=80&w=800",
    moments: [
      {
        number: "01",
        title: "Mezquita Sheikh",
        description: "Visita privada guiada al atardecer por la gran mezquita, con accesos VIP exclusivos al patio principal de mármol.",
        image: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?q=80&w=800"
      },
      {
        number: "02",
        title: "Louvre flotante",
        description: "Acceso VIP prioritario y recorrido privado con guía de arte experto para apreciar la arquitectura del Louvre.",
        image: "https://images.unsplash.com/photo-1572244409594-df7d514eff1d?q=80&w=800"
      },
      {
        number: "03",
        title: "Qasr Al Watan",
        description: "Visita exclusiva al palacio presidencial para admirar sus inmensas salas de mosaicos dorados y manuscritos históricos.",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800"
      }
    ],
    momentsCallout: "EL LUJO QUE RINDE TRIBUTO A LA ESPIRITUALIDAD Y LA BELLEZA UNIVERSAL DE LAS ARTES.",
    organizedImage: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800",
    organizedPillars: [
      { title: "RESORTS DE MARCA", description: "Alojamiento frente al mar en la exclusiva Isla Saadiyat en villas de diseño premium." },
      { title: "ACCESOS VIP", description: "Entradas preferentes de arte y visitas coordinadas de manera privada para evitar multitudes." },
      { title: "MIXOLOGÍA Y ENTRADAS", description: "Mesas reservadas de forma prioritaria en los restaurantes de mayor renombre." },
      { title: "CHÓFER A DISPOSICIÓN", description: "Vehículos ejecutivos eléctricos con chófer disponible de forma exclusiva durante toda la estancia." }
    ]
  }
];
