"""
Security & RBAC Guardrails Module
Implements parametric validation, prompt injection defense, and risk score detection.
"""

from typing import Tuple, List
import re

INJECTION_PATTERNS: List[str] = [
    r"(?i)\bdrop\s+table\b",
    r"(?i)\bselect\s+\*\s+from\b",
    r"(?i)\binsert\s+into\b",
    r"(?i)\bdelete\s+from\b",
    r"(?i)ignore\s+previous\s+instructions",
    r"(?i)system\s+prompt",
    r"(?i)eval\(",
    r"(?i)<script\b",
    r"(?i)\bexec\(",
]

class SecurityGuardrails:
    @staticmethod
    def inspect_prompt(text: str) -> Tuple[bool, float, List[str]]:
        """
        Analiza el texto de entrada en busca de patrones de riesgo.
        Retorna: (is_safe, risk_score, detected_spans)
        """
        if not text:
            return True, 0.0, []
        
        detected_spans = []
        for pattern in INJECTION_PATTERNS:
            matches = re.finditer(pattern, text)
            for m in matches:
                detected_spans.append(m.group())
        
        if detected_spans:
            return False, 0.95, detected_spans
        
        return True, 0.02, []

    @staticmethod
    def sanitize_string(text: str) -> str:
        """
        Elimina caracteres no seguros y normaliza el texto.
        """
        if not text:
            return ""
        # Limpieza básica manteniendo caracteres en español
        cleaned = re.sub(r"[<>{}]", "", text)
        return cleaned.strip()
