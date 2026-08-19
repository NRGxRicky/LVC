/**
 * LVC Agent Parametric Tools
 * Herramientas determinísticas y seguras con validación paramétrica (Model-Never-Generates-Raw-Code/SQL).
 */

import { LVC_DESTINATIONS, LVC_BRAND_INFO, type DestinationItem } from "./lvcKnowledgeBase";

export interface ToolDefinition {
  name: string;
  description: string;
  parameters: {
    type: string;
    properties: Record<string, { type: string; description: string; enum?: string[] }>;
    required: string[];
  };
}

export const LVC_TOOL_DEFINITIONS: ToolDefinition[] = [
  {
    name: "buscar_destinos_lvc",
    description: "Busca en el catálogo de LVC colecciones de ultra lujo filtrando por continente, término de búsqueda o duración.",
    parameters: {
      type: "object",
      properties: {
        continente: {
          type: "string",
          description: "Continente o Universo LVC",
          enum: ["asia", "africa", "europa", "medio-oriente", "todos"]
        },
        termino: {
          type: "string",
          description: "Palabra clave como safari, templos, japon, vino, romance, chateaux, etc."
        }
      },
      required: []
    }
  },
  {
    name: "cotizar_experiencia_lujo",
    description: "Calcula una estimación de inversión a medida basada en el destino, número de viajeros, noches y nivel de exclusividad.",
    parameters: {
      type: "object",
      properties: {
        destino_slug_o_nombre: {
          type: "string",
          description: "Nombre del destino o slug (ej. japon, safari, francia, tailandia)"
        },
        viajeros: {
          type: "number",
          description: "Número de adultos/viajeros (default: 2)"
        },
        noches: {
          type: "number",
          description: "Duración en noches estimadas"
        },
        nivel_exclusividad: {
          type: "string",
          description: "Nivel de experiencia",
          enum: ["Signature LVC", "Ultra-Luxury Bespoke", "Royal / Private Jet Experience"]
        }
      },
      required: ["destino_slug_o_nombre"]
    }
  },
  {
    name: "generar_dossier_pdf",
    description: "Genera la ficha técnica y propuesta formal de itinerario en formato Dossier PDF descargable con membrete LVC.",
    parameters: {
      type: "object",
      properties: {
        destino_slug: {
          type: "string",
          description: "Slug o nombre del destino (ej. senderos-de-japon, el-arte-del-safari-privado)"
        },
        nombre_cliente: {
          type: "string",
          description: "Nombre para personalizar la carátula del dossier"
        }
      },
      required: ["destino_slug"]
    }
  },
  {
    name: "recomendar_coleccion_segun_perfil",
    description: "Recomienda la colección ideal según las preferencias del viajero (cultura, naturaleza, gastronomía, aventura, misticismo).",
    parameters: {
      type: "object",
      properties: {
        estilo_viaje: {
          type: "string",
          description: "Estilo del viaje",
          enum: ["cultural_historico", "safari_naturaleza", "romance_gastronomia", "desierto_arqueologia", "bienestar_zen"]
        }
      },
      required: ["estilo_viaje"]
    }
  },
  {
    name: "conectar_concierge_vip",
    description: "Genera el resumen de intención del viajero y el enlace de contacto directo cifrado/estructurado hacia el Concierge VIP de LVC por WhatsApp.",
    parameters: {
      type: "object",
      properties: {
        nombre_viajero: {
          type: "string",
          description: "Nombre de contacto o preferencia"
        },
        destino_interes: {
          type: "string",
          description: "Destino o experiencia que desea consultar"
        },
        fechas_tentativas: {
          type: "string",
          description: "Fechas o temporada estimada del viaje"
        },
        notas_especiales: {
          type: "string",
          description: "Requerimientos como suite privada, vuelos ejecutivos, etc."
        }
      },
      required: ["destino_interes"]
    }
  }
];

export class LVCToolExecutor {
  /**
   * Ejecuta herramientas de manera determinística y segura en TypeScript/JS
   */
  public static execute(name: string, args: any): { success: boolean; data: any; audit: string } {
    switch (name) {
      case "buscar_destinos_lvc": {
        const cont = (args.continente || "").toLowerCase().trim();
        const term = (args.termino || "").toLowerCase().trim();

        let results = LVC_DESTINATIONS;

        if (cont && cont !== "todos") {
          results = results.filter(d => d.continent === cont);
        }

        if (term) {
          results = results.filter(d =>
            d.title.toLowerCase().includes(term) ||
            d.subtitle.toLowerCase().includes(term) ||
            d.summary.toLowerCase().includes(term) ||
            d.tags.some(t => t.includes(term))
          );
        }

        return {
          success: true,
          data: {
            total_encontrados: results.length,
            destinos: results
          },
          audit: `Tool [buscar_destinos_lvc] ejecutada: continente='${cont || "todos"}', term='${term}'. Encontrados: ${results.length}`
        };
      }

      case "cotizar_experiencia_lujo": {
        const slugOrName = (args.destino_slug_o_nombre || "").toLowerCase();
        const pax = Math.max(1, Number(args.viajeros) || 2);
        const nights = Math.max(5, Number(args.noches) || 9);
        const tier = args.nivel_exclusividad || "Signature LVC";

        let baseNightRate = 850;
        if (tier === "Ultra-Luxury Bespoke") baseNightRate = 1350;
        if (tier === "Royal / Private Jet Experience") baseNightRate = 2400;

        if (slugOrName.includes("safari") || slugOrName.includes("africa")) {
          baseNightRate *= 1.35;
        } else if (slugOrName.includes("japon") || slugOrName.includes("japan")) {
          baseNightRate *= 1.15;
        }

        const totalEstimated = Math.round(baseNightRate * nights * pax);
        const perPersonEstimated = Math.round(baseNightRate * nights);

        return {
          success: true,
          data: {
            destino_solicitado: args.destino_slug_o_nombre,
            viajeros: pax,
            duracion_noches: nights,
            nivel_exclusividad: tier,
            estimacion_total_usd: totalEstimated.toLocaleString("en-US", { style: "currency", currency: "USD" }),
            estimacion_por_persona_usd: perPersonEstimated.toLocaleString("en-US", { style: "currency", currency: "USD" }),
            incluye: [
              "Hospedajes 5★ Gran Lujo / Lodges de Conservación / Châteaux",
              "Transporte privado VIP durante todo el itinerario",
              "Guías privados de habla hispana y acceso a puerta cerrada",
              "Concierge LVC 24/7 disponible antes y durante la travesía",
              "Experiencias gastronómicas y catas exclusivas de autor"
            ]
          },
          audit: `Tool [cotizar_experiencia_lujo] ejecutada: destino='${args.destino_slug_o_nombre}', pax=${pax}, noches=${nights}, tier='${tier}'. Total: $${totalEstimated} USD`
        };
      }

      case "generar_dossier_pdf": {
        const slug = (args.destino_slug || "").toLowerCase();
        const clientName = args.nombre_cliente || "Viajero Distinguido";
        const dest = LVC_DESTINATIONS.find(d => d.slug.includes(slug) || d.title.toLowerCase().includes(slug)) || LVC_DESTINATIONS[0];

        return {
          success: true,
          data: {
            destino: dest,
            cliente: clientName,
            fecha_emision: new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" }),
            codigo_referencia: `LVC-${Math.floor(100000 + Math.random() * 900000)}`
          },
          audit: `Tool [generar_dossier_pdf] ejecutada: destino='${dest.title}', cliente='${clientName}'. Dossier generado.`
        };
      }

      case "recomendar_coleccion_segun_perfil": {
        const estilo = args.estilo_viaje || "cultural_historico";
        let match = LVC_DESTINATIONS[0];

        if (estilo === "safari_naturaleza") {
          match = LVC_DESTINATIONS.find(d => d.continent === "africa") || match;
        } else if (estilo === "romance_gastronomia") {
          match = LVC_DESTINATIONS.find(d => d.continent === "europa") || match;
        } else if (estilo === "desierto_arqueologia") {
          match = LVC_DESTINATIONS.find(d => d.continent === "medio-oriente") || match;
        } else if (estilo === "bienestar_zen" || estilo === "cultural_historico") {
          match = LVC_DESTINATIONS.find(d => d.continent === "asia") || match;
        }

        return {
          success: true,
          data: {
            estilo_solicitado: estilo,
            recomendacion_principal: match,
            razon_eleccion: `Seleccionado por su perfecta alineación con experiencias exclusivas de ${estilo.replace("_", " ")}.`
          },
          audit: `Tool [recomendar_coleccion_segun_perfil] ejecutada: estilo='${estilo}'. Recomendado: ${match.title}`
        };
      }

      case "conectar_concierge_vip": {
        const nombre = args.nombre_viajero || "Estimado Viajero";
        const destino = args.destino_interes || "Itinerario a Medida";
        const fechas = args.fechas_tentativas || "Por definir";
        const notas = args.notas_especiales || "Deseo recibir una propuesta personalizada de ultra lujo.";

        const rawText = `*SOLICITUD LVC LUXURY CONCIERGE*\n\n👤 *Viajero:* ${nombre}\n🌍 *Destino de Interés:* ${destino}\n📅 *Fechas Estimadas:* ${fechas}\n✨ *Detalles / Notas:* ${notas}\n\n_Mensaje generado desde LVC AI Concierge_`;
        const encoded = encodeURIComponent(rawText);
        const whatsappUrl = `https://wa.me/${LVC_BRAND_INFO.contact.whatsappNumber}?text=${encoded}`;

        return {
          success: true,
          data: {
            whatsapp_url: whatsappUrl,
            telefono_display: LVC_BRAND_INFO.contact.whatsappDisplay,
            telefono_directo: LVC_BRAND_INFO.contact.phone,
            resumen_solicitud: { nombre, destino, fechas, notas }
          },
          audit: `Tool [conectar_concierge_vip] ejecutada: destino='${destino}', viajero='${nombre}'. WhatsApp link generado.`
        };
      }

      default:
        return {
          success: false,
          data: null,
          audit: `Error: Tool '${name}' no reconocida en el schema de LVC.`
        };
    }
  }
}
