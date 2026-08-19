# LVC AI Agent - On-Premise & Cloud Backend

Microservicio de Inteligencia Artificial para **Luxury Voyage Collection (LVC)** desarrollado en **Python FastAPI**, implementando arquitecturas de **Parametric Tool Calling**, **Seguridad RBAC** y **Despliegue Contenerizado con Docker**.

Desarrollado por **Ricardo Delfín** (*Senior AI Agent Developer & Cloud Architect*).

---

## 🌟 Características Técnicas

1. **Model-Never-Generates-Raw-Code/SQL:** Toda la ejecución de herramientas y cotizaciones se valida paramétricamente en Python mediante esquemas estrictos de Pydantic.
2. **Detección de Patrones de Riesgo & Guardrails:** Algoritmo integrado para detección de prompt injection y sanitización en tiempo real.
3. **Observabilidad en Tiempo Real:** Métricas estructuradas de latencia (`latency_ms`), `confidence_score` y log de auditoría en cada respuesta.
4. **Listo para Producción:** Incluye `Dockerfile` multi-stage optimizado y `docker-compose.yml`.

---

## 🚀 Ejecución Local con Python

```bash
# 1. Crear entorno virtual
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate

# 2. Instalar dependencias
pip install -r requirements.txt

# 3. Iniciar servicio
uvicorn app.main:app --reload --port 8000
```

Acceder a la documentación Swagger interactiva en:
👉 `http://localhost:8000/docs`

---

## 🐳 Ejecución con Docker

```bash
docker-compose up --build -d
```

Verificar estado:
```bash
curl http://localhost:8000/health
```
