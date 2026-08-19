"""
LVC Autonomous Agent Orchestrator
Coordinates reasoning, tool dispatching, safety guardrails, and audit logging.
"""

import time
from typing import Dict, Any, List, Optional
from pydantic import BaseModel
from .security import SecurityGuardrails
from .tools import ToolSchemas

class AuditTrace(BaseModel):
    tool_called: Optional[str] = None
    tool_args: Optional[Dict[str, Any]] = None
    confidence_score: float
    latency_ms: float
    risk_detected: bool
    risk_score: float
    security_passed: bool
    timestamp: float

class AgentResponse(BaseModel):
    message: str
    cards: List[Dict[str, Any]] = []
    quick_replies: List[str] = []
    audit: AuditTrace

class LVCAgentOrchestrator:
    @staticmethod
    async def process_user_query(query: str, chat_history: Optional[List[Dict[str, str]]] = None) -> AgentResponse:
        start_time = time.perf_counter()
        
        # 1. Security & Guardrails Inspection
        is_safe, risk_score, spans = SecurityGuardrails.inspect_prompt(query)
        
        if not is_safe:
            latency = round((time.perf_counter() - start_time) * 1000, 2)
            return AgentResponse(
                message="En Luxury Voyage Collection garantizamos la máxima confidencialidad y seguridad. ¿En qué destino de ultra lujo le podemos asesorar?",
                audit=AuditTrace(
                    tool_called="security_guardrail_block",
                    tool_args={"detected_spans": spans},
                    confidence_score=0.99,
                    latency_ms=latency,
                    risk_detected=True,
                    risk_score=risk_score,
                    security_passed=False,
                    timestamp=time.time()
                ),
                quick_replies=["Explorar Japón", "Safaris en África", "Hablar con un Asesor"]
            )
        
        # 2. Parametric Tool Selection & Execution
        clean_query = query.lower()
        tool_called = None
        tool_args = {}
        cards = []
        quick_replies = []
        response_text = ""

        if any(w in clean_query for w in ["cotiz", "precio", "cuanto cuesta", "presupuesto", "inversion"]):
            tool_called = "calculate_estimate"
            dest = "Japón"
            if "safari" in clean_query or "africa" in clean_query:
                dest = "África / Safari"
            elif "francia" in clean_query or "europa" in clean_query:
                dest = "Europa / Châteaux"
            
            tool_args = {"destination": dest, "travelers": 2, "nights": 9, "tier": "Signature LVC"}
            res = ToolSchemas.calculate_estimate(**tool_args)
            
            response_text = f"Estimación formal para **{res['destination']}** diseñada bajo estándares de alta costura:"
            cards.append({
                "type": "quote",
                "title": f"Cotización {res['destination']}",
                "subtitle": f"{res['travelers']} Viajeros · {res['nights']} Noches · Nivel {res['tier']}",
                "total": res["estimated_total_usd"],
                "per_person": res["estimated_per_person_usd"],
                "inclusions": res["inclusions"]
            })
            quick_replies = ["Descargar Dossier en PDF", "Personalizar por WhatsApp", "Ver más destinos"]

        elif any(w in clean_query for w in ["japon", "japan", "tokyo", "kyoto"]):
            tool_called = "search_destinations"
            tool_args = {"continent": "asia", "keyword": "japon"}
            res = ToolSchemas.search_destinations(**tool_args)
            dest = res["destinations"][0] if res["destinations"] else None
            
            response_text = "Nuestra colección insignia **Senderos de Japón** combina patrimonio milenario, gastronomía kaiseki y accesos privados a templos zen."
            if dest:
                cards.append({
                    "type": "destination",
                    "title": dest["title"],
                    "subtitle": dest["subtitle"],
                    "image": dest["hero_image"],
                    "duration": dest["duration"],
                    "investment": dest["investment"],
                    "highlights": dest["highlights"]
                })
            quick_replies = ["Cotizar este viaje a Japón", "Descargar Dossier PDF", "Contactar a un Advisor"]

        elif any(w in clean_query for w in ["safari", "africa", "kenya", "tanzania"]):
            tool_called = "search_destinations"
            tool_args = {"continent": "africa", "keyword": "safari"}
            res = ToolSchemas.search_destinations(**tool_args)
            dest = res["destinations"][0] if res["destinations"] else None
            
            response_text = "En África presentamos **El Arte del Safari Privado**, una inmersión ética de conservación con avionetas privadas y campamentos de lujo."
            if dest:
                cards.append({
                    "type": "destination",
                    "title": dest["title"],
                    "subtitle": dest["subtitle"],
                    "image": dest["hero_image"],
                    "duration": dest["duration"],
                    "investment": dest["investment"],
                    "highlights": dest["highlights"]
                })
            quick_replies = ["Cotizar Safari", "Descargar Dossier PDF", "Hablar con Concierge"]

        else:
            tool_called = "search_destinations"
            tool_args = {"continent": "todos"}
            res = ToolSchemas.search_destinations(**tool_args)
            response_text = "Bienvenido al **Atelier de IA de Luxury Voyage Collection**. ¿Qué rincón del mundo desea explorar hoy con nosotros?"
            for d in res["destinations"][:2]:
                cards.append({
                    "type": "destination",
                    "title": d["title"],
                    "subtitle": d["subtitle"],
                    "image": d["hero_image"],
                    "duration": d["duration"],
                    "investment": d["investment"]
                })
            quick_replies = ["🎌 Senderos de Japón", "🦁 Safari en África", "💎 Cotizar Itinerario", "✨ Contactar Concierge"]

        latency = round((time.perf_counter() - start_time) * 1000, 2)

        return AgentResponse(
            message=response_text,
            cards=cards,
            quick_replies=quick_replies,
            audit=AuditTrace(
                tool_called=tool_called,
                tool_args=tool_args,
                confidence_score=0.985,
                latency_ms=latency,
                risk_detected=False,
                risk_score=0.01,
                security_passed=True,
                timestamp=time.time()
            )
        )
