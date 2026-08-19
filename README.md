# 💎 Luxury Voyage Collection (LVC) — Portal Web & Autonomous AI Concierge

Plataforma digital de ultra lujo para **Luxury Voyage Collection (LVC)** integrada con un **Agente Autónomo de IA & Concierge de Autor** con capacidades de **Parametric Tool Calling, Entrada por Voz (STT), Generación de Dossiers en PDF y Panel de Auditoría Técnica en Vivo**.

Arquitectura y desarrollo de IA liderado por **Ricardo Delfín** (*Senior AI Agent Developer & Cloud Architect*).

---

## 🏛️ Arquitectura del Sistema

```
                     ┌──────────────────────────────────────────────┐
                     │          Usuario / Viajero VIP               │
                     └──────────────────────┬───────────────────────┘
                                            │ (Voz / Texto / Chips)
                                            ▼
                     ┌──────────────────────────────────────────────┐
                     │         LVC Grand Atelier Frontend           │
                     │            (Astro + Tailwind CSS)            │
                     │  ┌────────────────────────────────────────┐  │
                     │  │  LVC AI Concierge Widget               │  │
                     │  │  - Glassmorphism UI & Microanimaciones │  │
                     │  │  - Web Speech API (Dictado por Voz)    │  │
                     │  │  - Luxury PDF Dossier Generator        │  │
                     │  │  - Live Tech Audit Inspector           │  │
                     │  └───────────────────┬────────────────────┘  │
                     └──────────────────────┼───────────────────────┘
                                            │
                    ┌───────────────────────┴───────────────────────┐
                    ▼                                               ▼
     ┌─────────────────────────────┐               ┌─────────────────────────────┐
     │  Motor Local Edge / Client  │               │ Python FastAPI Microservice │
     │  - RAG Semántico en TS      │               │ (agent-backend / Docker)    │
     │  - Zero Latency Execution   │               │ - Parametric Tool Calling   │
     │  - Guardrails de Seguridad  │               │ - RBAC & Risk Scoring       │
     └──────────────┬──────────────┘               │ - Swagger OpenAPI Docs      │
                    │                              └──────────────┬──────────────┘
                    ▼                                             ▼
     ┌───────────────────────────────────────────────────────────────────────────┐
     │                     Acciones Paramétricas & Handover                      │
     │   - Búsqueda en Catálogo de Universos (Asia, África, Europa, M. Oriente)  │
     │   - Cotizador de Inversión (Signature, Bespoke, Royal Experience)         │
     │   - Generación de Dossier PDF Imprimible en 1-Click                       │
     │   - Handover Cifrado a WhatsApp VIP (+52 221 224-6632)                   │
     └───────────────────────────────────────────────────────────────────────────┘
```

---

## ✨ Características Principales

### 1. 🎙️ Entrada por Voz Nativa (Speech-to-Text)
Permite al viajero interactuar mediante comandos de voz naturales utilizando la Web Speech API integrada.

### 2. 📄 Generador de Dossier de Itinerario en PDF
Genera al instante propuestas formales con membrete dorado de LVC, código de referencia único, especificaciones de la travesía y botón de impresión / guardado en PDF de alta fidelidad.

### 3. 🔍 Inspector de Auditoría Técnica ("Tech View")
Panel desplegable en vivo que demuestra la excelencia técnica del agente:
- **Tool invocada:** Parámetros estructurados y tipados.
- **Confidence Score:** Métrica de certeza calculada (ej. `98.5%`).
- **Latencia de respuesta:** Medición en milisegundos.
- **Estado de Guardrails:** Validación de seguridad activa contra prompt injection.

### 4. 🛡️ Principio *Model-Never-Generates-SQL*
El modelo nunca emite código ejecutable ni sentencias SQL en crudo. Todas las consultas y estimaciones financieras se ejecutan a través de herramientas paramétricas seguras.

---

## 🚀 Guía de Inicio Rápido

### Frontend (Astro Web App)
```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

### Backend Python (Opcional / Microservicio On-Premise)
```bash
cd agent-backend

# Con Python
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000

# Con Docker
docker-compose up --build -d
```

---

## 🐳 Despliegue en Producción

- **Vercel / Cloudflare Pages:** Compatible con despliegue instantáneo mediante `npm run build`.
- **Docker / Azure Container Apps:** Archivos `Dockerfile` y `docker-compose.yml` preconfigurados para entornos Linux de alta concurrencia.

---

## 👤 Autor
**Ricardo Delfín**  
*Desarrollador de Agentes Autónomos de IA | Azure OpenAI, MCP, RAG, Python FastAPI & Container Apps*  
- **LinkedIn:** [linkedin.com/in/ricardo-delfin-cruz](https://linkedin.com/in/ricardo-delfin-cruz/)  
- **GitHub:** [github.com/NRGxRicky](https://github.com/NRGxRicky)  
- **WhatsApp:** +52 (221) 224-6632
