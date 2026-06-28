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
  aConsiderar?: string;
  inversion?: string;
  fechas?: string;
}

export const coleccionesData: Coleccion[] = [
  // ── UNIVERSO ASIA ──
  {
    slug: "senderos-de-japon",
    title: "Senderos de Japón",
    subtitle: "JAPÓN",
    continent: "asia",
    heroImage: "https://garage-web.luxuryvoyageco.com/images/colecciones/card_japan.webp",
    heroDesc: "Entre antiguas rutas, ciudades históricas y paisajes que aún conservan otro ritmo.",
    badges: ["10 Días / 9 Noches", "Grupo Máx. 36", "Servicio en Español"],
    essenceHeading: "Donde el Japón histórico encuentra su ritmo más auténtico",
    essenceDesc: "Conecta las ciudades imprescindibles de Japón con regiones que rara vez forman parte de los recorridos convencionales. La antigua Ruta Nakasendo, Takayama, Shirakawa-go y Hakone aportan una perspectiva más pausada del país, equilibrando patrimonio, naturaleza y tradición sin renunciar a la comodidad de una operación cuidadosamente coordinada.",
    essenceImage: "https://garage-web.luxuryvoyageco.com/images/universos/asia/escenarios/japon/japon_esencial.webp",
    moments: [
      {
        number: "01",
        title: "Ruta Nakasendo",
        description: "El recorrido atraviesa dos antiguos pueblos de posta de la histórica Ruta Nakasendo, donde la arquitectura tradicional y los antiguos caminos conservan el carácter del Japón feudal.",
        image: "https://garage-web.luxuryvoyageco.com/images/universos/asia/escenarios/japon/tradicional.jpg"
      },
      {
        number: "02",
        title: "Aldeas Patrimonio",
        description: "La visita a Shirakawa-go permite conocer una de las aldeas más representativas del país, reconocida por la UNESCO y por sus emblemáticas casas tradicionales Gassho-zukuri.",
        image: "https://garage-web.luxuryvoyageco.com/images/universos/asia/escenarios/japon/japon_termal.webp"
      },
      {
        number: "03",
        title: "Hakone Natural",
        description: "El recorrido combina un crucero por el Lago Ashi y el teleférico de Hakone, con la posibilidad de contemplar el Monte Fuji cuando las condiciones meteorológicas lo permiten.",
        image: "https://garage-web.luxuryvoyageco.com/images/universos/asia/escenarios/japon/japon_contemporaneo.webp"
      }
    ],
    momentsCallout: "ALGUNOS CAMINOS PERMANECEN MUCHO DESPUÉS DE HABERLOS RECORRIDO.",
    organizedImage: "https://garage-web.luxuryvoyageco.com/images/colecciones/featured_japan.webp",
    organizedPillars: [
      { title: "HOSPEDAJES SELECCIONADOS", description: "Estancias previstas en Osaka, Kyoto, Takayama, Hakone y Tokyo, con categorías Superior o Lujo." },
      { title: "RITMO DEL RECORRIDO", description: "Una ruta que combina ciudades, regiones históricas y paisajes naturales con tiempos libres en Kyoto and Tokyo." },
      { title: "EXPERIENCIAS INTEGRADAS", description: "Visitas guiadas, tren bala, entradas a monumentos señalados, cinco almuerzos, dos cenas y acceso a onsen." },
      { title: "ACOMPAÑAMIENTO Y LOGÍSTICA", description: "Guía de habla española durante el circuito, traslados de llegada y salida, además del manejo logístico del equipaje entre ciudades." }
    ],
    aConsiderar: "Experiencias opcionales, bebidas durante las comidas, gastos personales, requisitos migratorios y ciertos servicios específicos permanecen sujetos a las preferencias individuales y a las condiciones indicadas para cada salida.",
    inversion: "desde $8,600 USD",
    fechas: "Salidas todo el año"
  },
  {
    slug: "el-legado-de-tailandia",
    title: "El Legado de Tailandia",
    subtitle: "TAILANDIA",
    continent: "asia",
    heroImage: "https://garage-web.luxuryvoyageco.com/images/colecciones/card_thailand.webp",
    heroDesc: "Del legado del antiguo Siam a las montañas del norte en un mismo recorrido.",
    badges: ["9 Días / 8 Noches", "Siam Histórico", "Servicio en Español"],
    essenceHeading: "Una ruta que conecta el corazón histórico y cultural de Tailandia",
    essenceDesc: "Reúne en un solo recorrido Bangkok, las antiguas capitales del reino, los paisajes del norte y el entorno del río Mekong. La combinación de patrimonio, comunidades locales, naturaleza y tradiciones convierte el trayecto en una propuesta especialmente activa para quienes buscan comprender Tailandia más allá de sus destinos más conocidos.",
    essenceImage: "https://garage-web.luxuryvoyageco.com/images/universos/asia/escenarios/tailandia.webp",
    moments: [
      {
        number: "01",
        title: "Antiguo Siam",
        description: "Dos antiguas capitales permiten recorrer algunos de los conjuntos históricos más representativos del país, incluyendo templos, ruinas y espacios reconocidos como Patrimonio Mundial por UNESCO.",
        image: "https://garage-web.luxuryvoyageco.com/images/universos/asia/escenarios/tailandia/tailandia_sagrada.webp"
      },
      {
        number: "02",
        title: "Fronteras del Mekong",
        description: "El recorrido incorpora navegación tradicional por el río Mekong, el Museo del Opio y encuentros con comunidades del norte, ofreciendo una perspectiva poco habitual sobre esta región fronteriza.",
        image: "https://garage-web.luxuryvoyageco.com/images/universos/asia/momentos/inmersiones/tailandia_phang_nga.webp"
      },
      {
        number: "03",
        title: "Tradiciones del Norte",
        description: "El viaje concluye entre templos de montaña, gastronomía regional, expresiones culturales y un santuario de elefantes, reflejando una faceta distinta del norte tailandés.",
        image: "https://garage-web.luxuryvoyageco.com/images/universos/asia/momentos/estancias/tailandia_four_seasons.webp"
      }
    ],
    momentsCallout: "ALGUNOS TERRITORIOS SE COMPRENDEN MEJOR CUANDO SE RECORREN DE PRINCIPIO A FIN.",
    organizedImage: "https://garage-web.luxuryvoyageco.com/images/colecciones/card_thailand.webp",
    organizedPillars: [
      { title: "HOSPEDAJES SELECCIONADOS", description: "Estancias en Bangkok, Ayutthaya, Sukhothai, Chiang Rai y Chiang Mai, en categoría Superior." },
      { title: "RITMO DEL RECORRIDO", description: "Una ruta progresiva que enlaza ciudades históricas, regiones del norte y trayectos terrestres cuidadosamente organizados." },
      { title: "EXPERIENCIAS INTEGRADAS", description: "Templos emblemáticos, navegación por el Mekong, patrimonio UNESCO, cena Khantoke, santuario de elefantes y visitas culturales." },
      { title: "ACOMPAÑAMIENTO Y LOGÍSTICA", description: "Traslados, visitas, entradas y guía de habla hispana incluidos durante el recorrido." }
    ],
    aConsiderar: "Vuelos internacionales, actividades opcionales, gastos personales o preferencias abiertas para adaptarse a las decisiones y estilo de viaje de cada viajero.",
    inversion: "desde $2,900 USD",
    fechas: "Martes (Abr - Oct 2026)"
  },
  {
    slug: "matices-de-bali",
    title: "Matices de Bali",
    subtitle: "INDONESIA",
    continent: "asia",
    heroImage: "https://garage-web.luxuryvoyageco.com/images/colecciones/card_bali.webp",
    heroDesc: "Una travesía que conecta los paisajes, templos y tradiciones que definen la isla.",
    badges: ["7 Días / 6 Noches", "Ubud y Candidasa", "Guía en Español/Inglés"],
    essenceHeading: "Una ruta que recorre la diversidad cultural y natural de Bali",
    essenceDesc: "Más que permanecer en un solo destino, esta colección atraviesa distintas regiones de Bali para comprender sus contrastes. Desde los arrozales y templos de Ubud hasta las aldeas tradicionales, la costa oriental y el norte de la isla, propone un recorrido pausado para quienes valoran conocer el territorio con mayor profundidad.",
    essenceImage: "https://garage-web.luxuryvoyageco.com/images/universos/asia/escenarios/indonesia.webp",
    moments: [
      {
        number: "01",
        title: "Bali ancestral",
        description: "Las terrazas de Tegallalang, el complejo arqueológico de Gunung Kawi y el Bosque de los Monos muestran el lado espiritual y natural que ha dado identidad a Bali durante siglos.",
        image: "https://garage-web.luxuryvoyageco.com/images/universos/asia/escenarios/indonesia/bali_entre_arrozales.webp"
      },
      {
        number: "02",
        title: "Tradiciones vivas",
        description: "La antigua aldea de Tenganan conserva costumbres, arquitectura y tejidos ceremoniales que forman parte del patrimonio cultural más representativo de la isla.",
        image: "https://garage-web.luxuryvoyageco.com/images/universos/asia/momentos/estancias/indonesia_capella_ubud.webp"
      },
      {
        number: "03",
        title: "Templos frente al mar",
        description: "El recorrido concluye entre lagos, templos y la costa de Tanah Lot, combinando paisajes volcánicos, santuarios emblemáticos y una de las postales más reconocidas de Bali.",
        image: "https://garage-web.luxuryvoyageco.com/images/universos/asia/momentos/inmersiones/indonesia_komodo.webp"
      }
    ],
    momentsCallout: "A VECES, COMPRENDER UNA ISLA REQUIERE RECORRER CADA UNO DE SUS CONTRASTES.",
    organizedImage: "https://garage-web.luxuryvoyageco.com/images/colecciones/card_bali.webp",
    organizedPillars: [
      { title: "HOSPEDAJES SELECCIONADOS", description: "Estancias en Ubud, Candidasa y Lovina, en categoría Superior." },
      { title: "RITMO DEL RECORRIDO", description: "Un itinerario equilibrado que alterna jornadas de exploración con tiempo libre en distintos puntos de la isla." },
      { title: "EXPERIENCIAS INTEGRADAS", description: "Traslados, visitas culturales, accesos incluidos y desayunos diarios, además del almuerzo indicado durante el recorrido." },
      { title: "ACOMPAÑAMIENTO Y LOGÍSTICA", description: "Vehículo con aire acondicionado, guía local durante traslados y excursiones, además de entradas y servicios previstos en el programa." }
    ],
    aConsiderar: "Vuelos internacionales, algunas comidas, actividades opcionales, gastos personales, seguro de viaje y otros servicios sujetos a preferencias individuales permanecen abiertos para que cada viajero adapte el recorrido a su manera.",
    inversion: "desde $1,900 USD",
    fechas: "Nov 2025 - Oct 2026"
  },
  {
    slug: "el-corazon-de-indochina",
    title: "El Corazón de Indochina",
    subtitle: "LAOS, VIETNAM Y CAMBOYA",
    continent: "asia",
    heroImage: "https://garage-web.luxuryvoyageco.com/images/universos/asia/escenarios/indonesia.webp",
    heroDesc: "Tres países unidos por el legado espiritual e histórico del Sudeste Asiático.",
    badges: ["13 Días / 12 Noches", "3 Países", "Grupo Máx. 20"],
    essenceHeading: "Entre antiguos reinos, ciudades imperiales y paisajes declarados Patrimonio Mundial",
    essenceDesc: "Esta colección conecta Laos, Vietnam y Camboya mediante un recorrido que reúne algunos de los mayores referentes culturales del Sudeste Asiático. Combina ciudades históricas, navegación por el Mekong y la Bahía de Halong, antiguas capitales imperiales y el legado monumental de Angkor, ofreciendo una visión amplia de la región dentro de un solo viaje cuidadosamente estructurado.",
    essenceImage: "https://garage-web.luxuryvoyageco.com/images/universos/asia/escenarios/tailandia/tailandia_frente_al_mar.webp",
    moments: [
      {
        number: "01",
        title: "Mekong Sagrado",
        description: "La navegación por el río Mekong conduce hasta las cuevas de Pak Ou, donde miles de figuras de Buda reflejan una tradición espiritual preservada durante siglos.",
        image: "https://garage-web.luxuryvoyageco.com/images/universos/asia/momentos/culinarias/indonesia_cena_ubud.webp"
      },
      {
        number: "02",
        title: "Bahía Esmeralda",
        description: "Un crucero entre islotes de piedra caliza permite recorrer uno de los paisajes naturales más representativos de Vietnam, reconocido como Patrimonio Mundial por la UNESCO.",
        image: "https://garage-web.luxuryvoyageco.com/images/universos/asia/escenarios/indonesia/bali_frente_al_mar.webp"
      },
      {
        number: "03",
        title: "Legado Angkor",
        description: "El recorrido culmina entre los templos más emblemáticos del antiguo Imperio Jemer, incluyendo Angkor Thom, Ta Prohm y Angkor Wat al atardecer.",
        image: "https://garage-web.luxuryvoyageco.com/images/universos/asia/momentos/culinarias/tailandia.webp"
      }
    ],
    momentsCallout: "HAY LUGARES CUYA HISTORIA PERMANECE MUCHO DESPUÉS DE ABANDONAR SUS TEMPLOS Y SUS RÍOS.",
    organizedImage: "https://garage-web.luxuryvoyageco.com/images/universos/asia/escenarios/indonesia.webp",
    organizedPillars: [
      { title: "HOSPEDAJES SELECCIONADOS", description: "Estancias previstas en Luang Prabang, Hanói, Halong, Hoi An, Hue, Ho Chi Minh y Siem Reap." },
      { title: "RITMO DEL RECORRIDO", description: "Una ruta continua con vuelos regionales, trayectos terrestres y navegaciones integradas entre tres países." },
      { title: "EXPERIENCIAS INTEGRADAS", description: "Cruceros, templos históricos, patrimonio UNESCO, paseos tradicionales y visitas culturales contempladas en el programa." },
      { title: "ACOMPAÑAMIENTO Y LOGÍSTICA", description: "Guías locales de habla hispana, traslados, entradas incluidas y coordinación durante todo el recorrido." }
    ],
    aConsiderar: "Vuelos internacionales, bebidas, gastos personales, visados y actividades opcionales, permanecen sujetos a las preferencias y decisiones individuales de cada viajero.",
    inversion: "desde $5,800 USD",
    fechas: "Salidas: Abr - Oct 2026"
  },
  {
    slug: "imperios-de-oriente",
    title: "Imperios de Oriente",
    subtitle: "CHINA Y JAPÓN",
    continent: "asia",
    heroImage: "https://garage-web.luxuryvoyageco.com/images/colecciones/featured_japan.webp",
    heroDesc: "Donde la historia imperial y la Asia contemporánea se encuentran en un mismo recorrido.",
    badges: ["15 Días / 13 Noches", "China y Japón", "Grupo Máx. 36"],
    essenceHeading: "Dos civilizaciones que transformaron Asia desde perspectivas completamente distintas.",
    essenceDesc: "Se une dos recorridos cuidadosamente seleccionados para ofrecer una visión amplia de Asia Oriental. Desde la herencia imperial de Beijing y Xi'an hasta la armonía de Kyoto, Hakone y Tokio, el viaje conecta monumentos históricos, paisajes culturales y grandes metrópolis en una ruta que permite comprender la evolución de dos de las sociedades más influyentes del continente.",
    essenceImage: "https://garage-web.luxuryvoyageco.com/images/universos/asia/escenarios/corea_del_sur/esencial.webp",
    moments: [
      {
        number: "01",
        title: "Legado imperial",
        description: "La Ciudad Prohibida, la Gran Muralla y el Ejército de Guerreros de Terracota reúnen algunos de los escenarios que marcaron la historia política y cultural de China durante siglos.",
        image: "https://garage-web.luxuryvoyageco.com/images/universos/asia/escenarios/corea_del_sur/esencial.webp"
      },
      {
        number: "02",
        title: "Entre tradición y calma",
        description: "Templos, santuarios, jardines, aguas termales y el paisaje del Parque Nacional de Hakone muestran una faceta de Japón donde el tiempo parece avanzar con otro ritmo.",
        image: "https://garage-web.luxuryvoyageco.com/images/universos/asia/escenarios/japon/japon_esencial.webp"
      },
      {
        number: "03",
        title: "Asia contemporánea",
        description: "Cada país concluye entre dos de las ciudades más dinámicas del continente, donde arquitectura, comercio, innovación y tradición conviven como parte de la vida cotidiana.",
        image: "https://garage-web.luxuryvoyageco.com/images/universos/asia/escenarios/japon/japon_contemporaneo.webp"
      }
    ],
    momentsCallout: "ALGUNAS CULTURAS SE VISITAN; OTRAS TRANSFORMAN LA MANERA DE COMPRENDER EL MUNDO.",
    organizedImage: "https://garage-web.luxuryvoyageco.com/images/colecciones/featured_japan.webp",
    organizedPillars: [
      { title: "HOSPEDAJES SELECCIONADOS", description: "Hoteles previstos de categoría superior durante todo el recorrido, elegidos para mantener continuidad entre ambos países." },
      { title: "RITMO DEL RECORRIDO", description: "Una combinación equilibrada de visitas guiadas, desplazamientos eficientes y espacios libres en ciudades estratégicas." },
      { title: "EXPERIENCIAS INTEGRADAS", description: "Monumentos históricos, templos, jardines imperiales, la Gran Muralla, Guerreros de Terracota, Lago Ashi, onsen y recorridos urbanos forman parte del programa." },
      { title: "ACOMPAÑAMIENTO Y LOGÍSTICA", description: "Traslados, vuelos internos, trenes de alta velocidad, guía de habla hispana y servicios coordinados durante todo el recorrido." }
    ],
    aConsiderar: "Vuelos internacionales, algunas comidas, actividades opcionales y momentos libres permanecen abiertos para adaptarse a las preferencias personales.",
    inversion: "desde $6,900 USD",
    fechas: "Salidas todo el año"
  },

  // ── UNIVERSO EUROPA ──
  {
    slug: "tierras-del-reino",
    title: "Tierras del Reino",
    subtitle: "INGLATERRA, ESCOCIA E IRLANDA",
    continent: "europa",
    heroImage: "https://garage-web.luxuryvoyageco.com/images/universos/europa/escenarios/escocia.webp",
    heroDesc: "Tres naciones unidas por historia, paisajes y tradiciones que siguen definiendo las islas británicas.",
    badges: ["Castillos Históricos", "Paisajes Legendarios", "Guía en Español"],
    essenceHeading: "Entre castillos, lagos y ciudades que marcaron una época",
    essenceDesc: "Conecta Inglaterra, Escocia e Irlanda a través de algunos de sus escenarios más representativos. Combina capitales históricas, regiones medievales, paisajes naturales y tradiciones profundamente arraigadas, incorporando accesos que difícilmente coinciden en una misma ruta. Una propuesta especialmente atractiva para quienes buscan comprender la identidad de las islas británicas desde distintas perspectivas.",
    essenceImage: "https://garage-web.luxuryvoyageco.com/images/universos/europa/escenarios/escocia/legendaria.webp",
    moments: [
      {
        number: "01",
        title: "La Corona Británica",
        description: "Desde los símbolos más reconocidos de Londres hasta una de las residencias oficiales de la familia real, esta etapa conecta historia, tradición y patrimonio.",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800"
      },
      {
        number: "02",
        title: "Tierras Altas",
        description: "Una travesía por algunos de los paisajes más emblemáticos de Escocia, entre lagos, castillos, montañas y escenarios que han definido su identidad.",
        image: "https://garage-web.luxuryvoyageco.com/images/universos/europa/escenarios/escocia/escencia.webp"
      },
      {
        number: "03",
        title: "Atlántico Irlandés",
        description: "Dos de los enclaves naturales más impresionantes de Irlanda permiten apreciar la fuerza geológica y paisajística que caracteriza la isla.",
        image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=800"
      }
    ],
    momentsCallout: "HAY TERRITORIOS QUE SE ENTIENDEN MEJOR CUANDO SE RECORREN SIGUIENDO EL HILO DE SU HISTORIA.",
    organizedImage: "https://garage-web.luxuryvoyageco.com/images/universos/europa/momentos/inmersiones/escocia_royal_scotsman.webp",
    organizedPillars: [
      { title: "HOSPEDAJES SELECCIONADOS", description: "13 noches en hoteles previstos de categoría superior ubicados en ciudades clave del recorrido." },
      { title: "RITMO DEL RECORRIDO", description: "Una ruta continua que equilibra visitas culturales, trayectos panorámicos y tiempo libre en las principales ciudades." },
      { title: "EXPERIENCIAS INTEGRADAS", description: "Castillos, patrimonio histórico, paisajes naturales, navegación en Lago Ness y visitas vinculadas al whisky y la cerveza." },
      { title: "ACOMPAÑAMIENTO Y LOGÍSTICA", description: "Guía exclusivo de habla hispana, desayunos diarios y servicios organizados durante todo el recorrido." }
    ],
    aConsiderar: "Gastos personales, comidas no indicadas, traslados específicos y decisiones individuales durante los tiempos libres permanecen sujetos a las preferencias de cada viajero.",
    inversion: "desde $8,300 USD",
    fechas: "May - Sep 2026"
  },
  {
    slug: "aurora-del-norte",
    title: "Aurora del Norte",
    subtitle: "ESCANDINAVIA Y ÁRTICO",
    continent: "europa",
    heroImage: "https://garage-web.luxuryvoyageco.com/images/universos/europa/escenarios/noruega.jpg",
    heroDesc: "Entre capitales escandinavas y el silencio del Ártico.",
    badges: ["Auroras Boreales", "Cultura Sami", "Capitales Nórdicas"],
    essenceHeading: "Escandinavia entre ciudades históricas y horizontes árticos",
    essenceDesc: "Conecta algunas de las ciudades más representativas del norte de Europa con una estancia en Tromsø, una de las puertas de entrada al Ártico. La combinación de cultura urbana, navegación entre países, paisajes polares y encuentros con la tradición sami aporta una profundidad poco habitual dentro de las rutas escandinavas convencionales.",
    essenceImage: "https://garage-web.luxuryvoyageco.com/images/universos/europa/escenarios/noruega/friodos.webp",
    moments: [
      {
        number: "01",
        title: "Noche Ártica",
        description: "Una región de cielos despejados y mínima contaminación lumínica ofrece uno de los entornos más favorables para contemplar la aurora boreal.",
        image: "https://images.unsplash.com/photo-1483168527879-c66136b56105?q=80&w=800"
      },
      {
        number: "02",
        title: "Tradición Sami",
        description: "El encuentro con la cultura indígena del norte de Escandinavia incorpora gastronomía local, relatos tradicionales y actividades vinculadas al pastoreo de renos.",
        image: "https://garage-web.luxuryvoyageco.com/images/universos/europa/escenarios/noruega/artica.webp"
      },
      {
        number: "03",
        title: "Capitales del Norte",
        description: "Tres ciudades con identidades distintas permiten recorrer historia, arquitectura, tradición marítima y algunos de los símbolos más reconocidos de Escandinavia.",
        image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=800"
      }
    ],
    momentsCallout: "ALGUNAS LUCES SOLO APARECEN CUANDO EL MUNDO PARECE DETENERSE.",
    organizedImage: "https://garage-web.luxuryvoyageco.com/images/universos/europa/momentos/estancias/noruega_storfjord.webp",
    organizedPillars: [
      { title: "HOSPEDAJES SELECCIONADOS", description: "Estancias previstas en Copenhague, Oslo, Tromsø y Estocolmo, además de una noche de navegación entre Dinamarca y Noruega." },
      { title: "RITMO DEL RECORRIDO", description: "Un equilibrio entre visitas incluidas, desplazamientos eficientes y tiempo libre en las principales ciudades." },
      { title: "EXPERIENCIAS INTEGRADAS", description: "Observación de aurora boreal, encuentro cultural sami, paseo en trineo de renos, teleférico Fjellheisen y recorridos urbanos." },
      { title: "ACOMPAÑAMIENTO Y LOGÍSTICA", description: "Guía de habla hispana, vuelos internos, tren rápido, traslados previstos y coordinación integral durante el recorrido." }
    ],
    aConsiderar: "Actividades opcionales, gastos personales, comidas no especificadas o preferencias individuales de viaje, permanecen abiertos para que cada viajero adapte ciertos momentos a su propio estilo.",
    inversion: "desde $7,300 USD",
    fechas: "Nov 2026 - Feb 2027"
  },
  {
    slug: "la-esencia-de-los-balcanes",
    title: "La Esencia de los Balcanes",
    subtitle: "ESLOVENIA, CROACIA Y BOSNIA",
    continent: "europa",
    heroImage: "https://images.unsplash.com/photo-1555990793-da11153b2473?q=80&w=1200",
    heroDesc: "Entre ciudades históricas, costas adriáticas y culturas que conviven desde hace siglos.",
    badges: ["Mar Adriático", "Ciudades Amuralladas", "Cruce de Culturas"],
    essenceHeading: "Una ruta donde convergen historia, religión y Adriático",
    essenceDesc: "Conecta algunos de los territorios más representativos de los Balcanes a través de ciudades históricas, costas adriáticas y escenarios donde distintas culturas han convivido durante siglos. Desde Eslovenia hasta Bosnia y Croacia, el recorrido combina patrimonio, arquitectura, tradición y paisajes que rara vez coinciden en una misma ruta, ofreciendo una visión amplia y profunda de la región.",
    essenceImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
    moments: [
      {
        number: "01",
        title: "Entre cuevas y lagos",
        description: "Las formaciones subterráneas de Postojna y la serenidad del lago Bled ofrecen uno de los contrastes naturales más representativos de Eslovenia.",
        image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=800"
      },
      {
        number: "02",
        title: "La costa dálmata",
        description: "Palacios romanos, ciudades amuralladas y el mar Adriático acompañan una de las rutas más emblemáticas de la costa croata.",
        image: "https://images.unsplash.com/photo-1555990793-da11153b2473?q=80&w=800"
      },
      {
        number: "03",
        title: "Cruce de culturas",
        description: "Dos ciudades que reflejan siglos de encuentros entre tradiciones religiosas, herencias imperiales y una identidad balcánica profundamente diversa.",
        image: "https://images.unsplash.com/photo-1560613271-9f206587c699?q=80&w=800"
      }
    ],
    momentsCallout: "ALGUNOS TERRITORIOS SE COMPRENDEN MEJOR CUANDO VARIAS CULTURAS COMPARTEN LA MISMA GEOGRAFÍA.",
    organizedImage: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800",
    organizedPillars: [
      { title: "HOSPEDAJES SELECCIONADOS", description: "Estancias previstas en Ljubljana, Split, Dubrovnik, Sarajevo y Zagreb en hoteles de categoría superior." },
      { title: "RITMO DEL RECORRIDO", description: "Un recorrido estructurado que combina visitas guiadas, traslados organizados y espacios libres en ciudades clave." },
      { title: "EXPERIENCIAS INTEGRADAS", description: "Visitas culturales, acceso a las cuevas de Postojna y recorridos por los principales centros históricos del viaje." },
      { title: "ACOMPAÑAMIENTO Y LOGÍSTICA", description: "Guía exclusivo de habla hispana, traslados previstos y coordinación integral durante todo el recorrido." }
    ],
    aConsiderar: "Actividades opcionales, gastos personales y decisiones individuales durante los tiempos libres permanecen abiertos para que cada viajero adapte ciertos momentos del recorrido a sus propios intereses.",
    inversion: "desde $5,500 USD",
    fechas: "Abr - Oct 2026"
  },
  {
    slug: "la-herencia-de-alemania",
    title: "La Herencia de Alemania",
    subtitle: "BAVIERA Y SELVA NEGRA",
    continent: "europa",
    heroImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200",
    heroDesc: "Una ruta entre ciudades históricas, bosques legendarios y castillos que marcaron la identidad de Baviera.",
    badges: ["Selva Negra", "Castillos de Baviera", "Pueblos Medievales"],
    essenceHeading: "Entre la Alemania medieval y los paisajes de Baviera",
    essenceDesc: "Conecta algunos de los escenarios más representativos del sur de Alemania: ciudades históricas, pueblos medievales, la Selva Negra, el lago Constanza y los castillos de Luis II de Baviera. Atractiva para quienes valoran la arquitectura, la historia, los paisajes culturales y una ruta que combina tradición, naturaleza y patrimonio en un mismo recorrido.",
    essenceImage: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800",
    moments: [
      {
        number: "01",
        title: "Ciudad detenida",
        description: "Murallas intactas, calles empedradas y fachadas de entramado de madera convierten a Rothenburg en una de las estampas medievales mejor conservadas de Alemania.",
        image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=800"
      },
      {
        number: "02",
        title: "Corazón de la Selva",
        description: "Bosques, pueblos tradicionales, el reloj de cuco más grande del mundo y la llegada a Lindau construyen una de las jornadas más representativas del sur alemán.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800"
      },
      {
        number: "03",
        title: "Castillos de Baviera",
        description: "Los palacios impulsados por la visión de Luis II reúnen arquitectura, simbolismo y algunos de los escenarios más reconocibles de toda Alemania.",
        image: "https://images.unsplash.com/photo-1508849789987-4e5333c12b78?q=80&w=800"
      }
    ],
    momentsCallout: "HAY LUGARES DONDE LA HISTORIA PERMANECE VISIBLE MUCHO DESPUÉS DE HABER PARTIDO.",
    organizedImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800",
    organizedPillars: [
      { title: "HOSPEDAJES SELECCIONADOS", description: "Estancias previstas en Frankfurt, Heidelberg, Friburgo y Múnich con categoría superior." },
      { title: "RITMO DEL RECORRIDO", description: "Una ruta lineal que combina patrimonio, naturaleza y ciudades históricas sin cambios constantes de destino." },
      { title: "EXPERIENCIAS INTEGRADAS", description: "Visitas culturales, acceso a castillos y recorridos por algunos de los paisajes más representativos del sur alemán." },
      { title: "ACOMPAÑAMIENTO Y LOGÍSTICA", description: "Guía exclusivo de habla hispana, alojamientos, desayunos y traslados contemplados dentro del programa." }
    ],
    aConsiderar: "Algunas comidas, gastos personales, actividades fuera del programa y preferencias individuales permanecen abiertos para que cada viajero pueda adaptar ciertos momentos del recorrido a su propio ritmo e intereses.",
    inversion: "desde $4,900 USD",
    fechas: "Abr - Oct 2026"
  },
  {
    slug: "fiordos-y-capitales-nordicas",
    title: "Fiordos y Capitales Nórdicas",
    subtitle: "SUECIA, NORUEGA Y DINAMARCA",
    continent: "europa",
    heroImage: "https://garage-web.luxuryvoyageco.com/images/universos/europa/escenarios/noruega/friodos.webp",
    heroDesc: "Entre ciudades nórdicas y paisajes esculpidos por el agua.",
    badges: ["Navegación en Fiordos", "Crucero Escandinavo", "Bergen y Estocolmo"],
    essenceHeading: "Donde los grandes fiordos encuentran la elegancia nórdica",
    essenceDesc: "Conecta algunas de las regiones más representativas de Escandinavia a través de una ruta que combina capitales históricas, pueblos de montaña, navegación entre fiordos y paisajes de gran escala. Su valor reside en recorrer los territorios más emblemáticos de Noruega sin renunciar al contexto cultural de Estocolmo y Copenhague, creando una visión amplia y equilibrada del norte de Europa.",
    essenceImage: "https://garage-web.luxuryvoyageco.com/images/universos/europa/escenarios/noruega/escenica.webp",
    moments: [
      {
        number: "01",
        title: "Geiranger desde el agua",
        description: "La navegación entre montañas, cascadas y paredes rocosas permite comprender por qué este fiordo ocupa un lugar central dentro de los paisajes más admirados de Noruega.",
        image: "https://garage-web.luxuryvoyageco.com/images/universos/europa/momentos/inmersiones/noruega_sauna.webp"
      },
      {
        number: "02",
        title: "El corazón de Bergen",
        description: "El antiguo barrio hanseático, el mercado junto al puerto y las vistas desde el funicular revelan una de las ciudades con mayor personalidad de Escandinavia.",
        image: "https://images.unsplash.com/photo-1531168556465-2742918a0008?q=80&w=800"
      },
      {
        number: "03",
        title: "Navegando el Norte",
        description: "La travesía nocturna entre Oslo y Copenhague aporta una transición distinta al recorrido, conectando dos capitales nórdicas a través del mar.",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800"
      }
    ],
    momentsCallout: "ALGUNOS PAISAJES NO BUSCAN IMPRESIONAR; SIMPLEMENTE PERMANECEN.",
    organizedImage: "https://garage-web.luxuryvoyageco.com/images/universos/europa/momentos/culinarias/noruega_re_naa.webp",
    organizedPillars: [
      { title: "HOSPEDAJES SELECCIONADOS", description: "Estancias previstas en ciudades clave de Suecia, Noruega y Dinamarca, incluyendo alojamiento junto a los fiordos." },
      { title: "RITMO DEL RECORRIDO", description: "Equilibrio entre desplazamientos panorámicos, visitas urbanas y tiempo suficiente para apreciar cada región." },
      { title: "EXPERIENCIAS INTEGRADAS", description: "Cruceros por Geiranger y Sognefjord, funicular de Bergen, travesía Nordic y visitas panorámicas incluidas." },
      { title: "ACOMPAÑAMIENTO Y LOGÍSTICA", description: "Guía exclusivo de habla hispana, desayunos diarios, cenas seleccionadas y traslados previstos durante el recorrido." }
    ],
    aConsiderar: "Algunas comidas, actividades opcionales, gastos personales y preferencias particulares permanecen abiertos para que cada viajero adapte ciertos momentos del recorrido a sus propios intereses.",
    inversion: "desde $6,300 USD",
    fechas: "May - Sep 2026"
  },
  {
    slug: "capitales-del-norte",
    title: "Capitales del Norte",
    subtitle: "BERLÍN, ÁMSTERDAM, BRUJAS, BRUSELAS Y PARÍS",
    continent: "europa",
    heroImage: "https://garage-web.luxuryvoyageco.com/images/universos/europa/escenarios/francia.webp",
    heroDesc: "De Berlín a París, una ruta que conecta historia, canales y grandes ciudades europeas.",
    badges: ["Ciudades Imperiales", "Canales de Ámsterdam", "París Sofisticado"],
    essenceHeading: "Entre capitales históricas y ciudades que marcaron Europa",
    essenceDesc: "Conecta algunas de las ciudades más representativas del norte de Europa a través de una ruta que combina patrimonio, arquitectura, tradición y vida urbana. Berlín, Ámsterdam, Brujas, Gante, Bruselas y París aparecen unidas por recorridos cuidadosamente seleccionados que equilibran cultura, historia y tiempo para disfrutar cada ciudad con profundidad.",
    essenceImage: "https://garage-web.luxuryvoyageco.com/images/universos/europa/escenarios/francia/atemporal.jpg",
    moments: [
      {
        number: "01",
        title: "Berlín desde el agua",
        description: "Un recorrido por el río Spree ofrece una perspectiva distinta de la capital alemana, entre puentes históricos, arquitectura contemporánea y algunos de sus espacios más emblemáticos.",
        image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=800"
      },
      {
        number: "02",
        title: "Canales históricos",
        description: "Dos ciudades marcadas por el agua revelan parte de su identidad a través de canales, fachadas centenarias y centros históricos que conservan el carácter de otra época.",
        image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=800"
      },
      {
        number: "03",
        title: "Tradición belga",
        description: "La visita a un museo especializado permite conocer una de las tradiciones más reconocidas de Bélgica mediante demostraciones artesanales y degustaciones incluidas.",
        image: "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?q=80&w=800"
      }
    ],
    momentsCallout: "ALGUNAS CIUDADES SE CONOCEN; OTRAS PERMANECEN MUCHO DESPUÉS DE HABER PARTIDO.",
    organizedImage: "https://garage-web.luxuryvoyageco.com/images/universos/europa/momentos/estancias/francia_cheval_blanc.webp",
    organizedPillars: [
      { title: "HOSPEDAJES SELECCIONADOS", description: "Estancias previstas en Berlín, Ámsterdam, Brujas, Bruselas y París, en hoteles de categoría superior cuidadosamente elegidos." },
      { title: "RITMO DEL RECORRIDO", description: "Una ruta equilibrada que combina visitas guiadas, desplazamientos organizados y espacios libres para explorar cada ciudad." },
      { title: "EXPERIENCIAS INTEGRADAS", description: "Paseo por el Spree, navegación por los canales de Ámsterdam y visita con degustación en un museo de chocolate belga." },
      { title: "ACOMPAÑAMIENTO Y LOGÍSTICA", description: "Guía exclusivo de habla hispana, alojamientos reservados, desayunos incluidos y coordinación general durante todo el recorrido." }
    ],
    aConsiderar: "Actividades opcionales, comidas no especificadas y gastos personales permanecen abiertos para que cada viajero adapte ciertos momentos del recorrido según sus propios intereses y preferencias.",
    inversion: "desde $5,500 USD",
    fechas: "May - Oct 2026"
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
    heroImage: "https://garage-web.luxuryvoyageco.com/images/colecciones/card_south_africa.webp",
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
        image: "https://garage-web.luxuryvoyageco.com/images/colecciones/card_south_africa.webp"
      },
      {
        number: "02",
        title: "Stellenbosch",
        description: "Cata exclusiva y almuerzo de maridaje de 5 tiempos en una bodega histórica privada fundada en el siglo XVIII.",
        image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800"
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
    heroImage: "https://garage-web.luxuryvoyageco.com/images/colecciones/card_morocco.webp",
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
        image: "https://garage-web.luxuryvoyageco.com/images/colecciones/card_morocco.webp"
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
    organizedImage: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800",
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
        image: "https://images.unsplash.com/photo-1600577916048-804c9191e36c?q=80&w=800"
      },
      {
        number: "03",
        title: "Río Nilo",
        description: "Navegación de 4 noches por el Nilo en una embarcación privada Dahabiya con chef y tripulación exclusiva.",
        image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=800"
      }
    ],
    momentsCallout: "EL TIEMPO TEME A LAS PIRÁMIDES, PERO LAS PIRÁMIDES RESPETAN EL FLUIR DEL VIEJO NILO.",
    organizedImage: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800",
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
    heroImage: "https://garage-web.luxuryvoyageco.com/images/colecciones/card_dubai.webp",
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
        image: "https://garage-web.luxuryvoyageco.com/images/colecciones/card_dubai.webp"
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
    essenceImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800",
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
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800"
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
        image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=800"
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
    essenceImage: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800",
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
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800"
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
