"""
LVC Parametric Tools Engine
Implements deterministic, strictly typed tools for luxury travel planning.
"""

from typing import Dict, Any, List, Optional
from pydantic import BaseModel, Field

class Destination(BaseModel):
    id: str
    slug: str
    title: str
    subtitle: str
    continent: str
    duration: str
    group_size: str
    investment: str
    hero_image: str
    summary: str
    highlights: List[str]
    tags: List[str]

# Base de datos en memoria pre-estructurada (RAG Ready)
LVC_CATALOG: List[Destination] = [
    Destination(
        id="jp-senderos",
        slug="senderos-de-japon",
        title="Senderos de Japón",
        subtitle="Japón Feudal, Aldeas UNESCO y Templos Milenarios",
        continent="asia",
        duration="10 Días / 9 Noches",
        group_size="Máx. 36 pax / Privado VIP",
        investment="desde $8,600 USD",
        hero_image="https://garage-web.luxuryvoyageco.com/images/colecciones/senderos-de-japon/hero.webp",
        summary="Conecta las ciudades imprescindibles de Japón con la histórica Ruta Nakasendo, Shirakawa-go y aguas termales de Hakone.",
        highlights=["Pueblos de posta en Ruta Nakasendo", "Aldeas Patrimonio UNESCO en Shirakawa-go", "Crucero Lago Ashi y vista Monte Fuji", "Acceso exclusivo a Onsen tradicional"],
        tags=["japon", "tokyo", "kyoto", "cultura", "templos", "onsen", "tren bala", "asia"]
    ),
    Destination(
        id="af-safari",
        slug="el-arte-del-safari-privado",
        title="El Arte del Safari Privado",
        subtitle="Masai Mara, Serengueti y Conservación Exclusiva",
        continent="africa",
        duration="11 Días / 10 Noches",
        group_size="Privado VIP (Vehículo 4x4 exclusivo)",
        investment="desde $12,500 USD",
        hero_image="https://garage-web.luxuryvoyageco.com/images/colecciones/senderos-de-japon/organized.webp",
        summary="Vuelo en avioneta privada entre lodges de ultra lujo en Masai Mara y Serengueti con guías naturalistas masai certificados.",
        highlights=["Gran Migración con acceso privilegiado", "Campamentos de tiendas de lujo eco-responsables", "Vuelo en globo aerostático con champagne", "Guías masai de élite"],
        tags=["africa", "safari", "kenya", "tanzania", "masai mara", "animales", "aventura"]
    ),
    Destination(
        id="eu-chateaux",
        slug="el-renacimiento-de-los-chateaux",
        title="El Renacimiento de los Châteaux",
        subtitle="Valle del Loira, Viñedos Gran Cru y París Privado",
        continent="europa",
        duration="8 Días / 7 Noches",
        group_size="Privado a Medida",
        investment="desde $9,800 USD",
        hero_image="https://garage-web.luxuryvoyageco.com/images/colecciones/senderos-de-japon/essence.webp",
        summary="Estancias en castillos privados con historia viva, catas exclusivas en bodegas cerradas al público y cenas orquestadas por chefs estrella Michelin.",
        highlights=["Acceso a puerta cerrada a Châteaux históricos", "Catas privadas de vinos Premier Cru", "Vuelo privado en helicóptero sobre el Loira", "Concierge personal 24/7 en Francia"],
        tags=["europa", "francia", "paris", "loira", "vinos", "gastronomia", "chateaux", "romance"]
    ),
    Destination(
        id="mo-desierto",
        slug="el-refugio-del-viento-en-el-desierto",
        title="El Refugio del Viento en el Desierto",
        subtitle="AlUla, Petra y Dunas Místicas de Arabia",
        continent="medio-oriente",
        duration="10 Días / 9 Noches",
        group_size="Privado VIP",
        investment="desde $11,200 USD",
        hero_image="https://garage-web.luxuryvoyageco.com/images/colecciones/el-legado-de-tailandia/essence.webp",
        summary="Una travesía hipnótica entre los cañones esculpidos de Hegra en AlUla, la mística ciudad rosada de Petra y campamentos beduinos de cinco estrellas.",
        highlights=["Reserva privada de Habitas AlUla", "Acceso nocturno a Petra iluminada por velas", "Cena astronómica bajo cielos del desierto", "Traslados privados en jet ejecutivo"],
        tags=["medio oriente", "arabia", "alula", "petra", "jordania", "desierto", "arqueologia"]
    )
]

class ToolSchemas:
    @staticmethod
    def search_destinations(continent: Optional[str] = None, keyword: Optional[str] = None) -> Dict[str, Any]:
        results = LVC_CATALOG
        if continent and continent.lower() != "todos":
            results = [d for d in results if d.continent == continent.lower()]
        
        if keyword:
            kw = keyword.lower()
            results = [
                d for d in results
                if kw in d.title.lower() or kw in d.subtitle.lower() or kw in d.summary.lower() or any(kw in t for t in d.tags)
            ]
        
        return {
            "total": len(results),
            "destinations": [d.model_dump() for d in results]
        }

    @staticmethod
    def calculate_estimate(destination: str, travelers: int = 2, nights: int = 9, tier: str = "Signature LVC") -> Dict[str, Any]:
        pax = max(1, travelers)
        dur = max(5, nights)
        
        base_rate = 850
        if tier == "Ultra-Luxury Bespoke":
            base_rate = 1350
        elif tier == "Royal / Private Jet Experience":
            base_rate = 2400
        
        dest_lower = destination.lower()
        if "safari" in dest_lower or "africa" in dest_lower:
            base_rate = int(base_rate * 1.35)
        elif "japon" in dest_lower or "japan" in dest_lower:
            base_rate = int(base_rate * 1.15)
        
        total = base_rate * dur * pax
        per_person = base_rate * dur
        
        return {
            "destination": destination,
            "travelers": pax,
            "nights": dur,
            "tier": tier,
            "estimated_total_usd": f"${total:,.2f}",
            "estimated_per_person_usd": f"${per_person:,.2f}",
            "inclusions": [
                "Hoteles 5★ Gran Lujo y Lodges de Conservación",
                "Transportación privada y traslados VIP en destino",
                "Guías bilingües privados y accesos prioritarios",
                "Concierge LVC 24/7 de guardia en español"
            ]
        }
