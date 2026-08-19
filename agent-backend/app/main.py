"""
LVC AI Agent Backend Service
FastAPI Async Application with OpenAPI Docs and RBAC Tool Calling.
"""

from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from .agent import LVCAgentOrchestrator, AgentResponse
from .tools import ToolSchemas

app = FastAPI(
    title="LVC AI Concierge Service",
    description="Microservicio de Agente Autónomo de IA para Luxury Voyage Collection (LVC) con Parametric Tool Calling y Seguridad RBAC.",
    version="2.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    query: str = Field(..., example="Quiero cotizar un viaje a Japón para 2 personas")
    history: Optional[List[Dict[str, str]]] = Field(default=[], example=[])

@app.get("/health", tags=["System"])
async def health_check():
    return {
        "status": "healthy",
        "service": "LVC AI Agent On-Premise",
        "version": "2.0.0",
        "architecture": "Parametric Tool Calling + RBAC"
    }

@app.post("/api/v1/chat", response_model=AgentResponse, tags=["AI Agent"])
async def chat_endpoint(request: ChatRequest):
    """
    Endpoint principal del agente autónomo de IA.
    Ejecuta validación de seguridad, tool calling y scoring de confianza.
    """
    try:
        response = await LVCAgentOrchestrator.process_user_query(request.query, request.history)
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error en el orquestador del agente: {str(e)}")

@app.get("/api/v1/destinations", tags=["Catalog"])
async def get_destinations(continent: Optional[str] = None, keyword: Optional[str] = None):
    """
    Consulta directa al catálogo de destinos y colecciones de ultra lujo.
    """
    return ToolSchemas.search_destinations(continent=continent, keyword=keyword)
