import { useState } from "react";

// ─── TRANSLATIONS ───
const ui = {
  en: {
    hero: { sub: "Central American Travel Marketplace", title: "Strategic Plan & Business Model", desc: "A comprehensive platform connecting local tour operators with eco-conscious, budget-focused travelers across Central America.", badge: "Nicaragua · El Salvador · Guatemala · Costa Rica" },
    tabs: ["The Problem", "Analysis", "AI Assistant", "Business Model", "User Journeys", "Stack", "Roadmap", "Revenue"],
    tabKeys: ["problem", "analysis", "ai", "model", "journeys", "stack", "roadmap", "revenue"],
    month: "Month",
    milestone: "Milestone",
    riskLabel: "Risk Note",
    exclusive: "EXCLUSIVE",
    footer: "Strategic Plan · Confidential · 2026",
    operatorJourney: "Operator Journey",
    travelerJourney: "Traveler Journey",
    header: "Header",
    content: "Content",
    action: "Action",
  },
  es: {
    hero: { sub: "Marketplace de Turismo en Centroamérica", title: "Plan Estratégico y Modelo de Negocio", desc: "Una plataforma integral que conecta operadores turísticos locales con viajeros eco-conscientes y enfocados en presupuesto en Centroamérica.", badge: "Nicaragua · El Salvador · Guatemala · Costa Rica" },
    tabs: ["El Problema", "Análisis", "Asistente IA", "Modelo de Negocio", "Recorridos", "Stack", "Hoja de Ruta", "Ingresos"],
    tabKeys: ["problem", "analysis", "ai", "model", "journeys", "stack", "roadmap", "revenue"],
    month: "Mes",
    milestone: "Meta",
    riskLabel: "Nota de Riesgo",
    exclusive: "EXCLUSIVO",
    footer: "Plan Estratégico · Confidencial · 2026",
    operatorJourney: "Recorrido del Operador",
    travelerJourney: "Recorrido del Viajero",
    header: "Encabezado",
    content: "Contenido",
    action: "Acción",
  },
};

// ─── PROBLEM SECTION ───
const problemData = {
  en: {
    title: "The Problem We Solve",
    subtitle: "Central America has world-class experiences hidden behind a broken distribution system",
    stats: [
      { number: "0", label: "Dedicated platforms for Central American local operators", detail: "No platform exists that specifically serves the needs of independent guides, cooperatives, and small tour companies in the region." },
      { number: "20-30%", label: "Commission charged by global platforms", detail: "Airbnb Experiences and Viator/TripAdvisor charge operators between 20-30% per booking — devastating for a guide earning $30-50 per tour." },
      { number: "70%+", label: "Operators without any digital presence", detail: "Most local operators in Nicaragua, El Salvador, Guatemala, and Costa Rica rely entirely on word-of-mouth and walk-in tourists. They're invisible to the growing segment of eco-conscious travelers researching online." },
    ],
    operatorPain: {
      title: "Pain for Operators",
      items: [
        "No affordable platform exists — global marketplaces take too much commission",
        "Creating professional listings requires skills most guides don't have (copywriting, translation, photography tips)",
        "Managing bookings across WhatsApp, phone calls, and walk-ins is chaotic",
        "No tools to reach international travelers who research and book online",
        "Payment collection from foreign tourists is unreliable",
      ],
    },
    travelerPain: {
      title: "Pain for Travelers",
      items: [
        "Global platforms show the same generic, overpriced tours",
        "Authentic, budget-friendly 'hidden gem' experiences are impossible to find online",
        "No way to verify quality or trust unknown local operators",
        "Language barrier makes booking and communication difficult",
        "Budget-conscious and eco-conscious travelers want local impact, not corporate tourism",
      ],
    },
    opportunity: {
      title: "The Opportunity",
      text: "Central America's tourism sector is growing rapidly, yet lacks a dedicated digital marketplace. The region's strongest experiences — community-led hikes, local food tours, volcanic adventures, indigenous cultural immersions — are invisible online. We build the platform that makes them discoverable, bookable, and trustworthy.",
    },
  },
  es: {
    title: "El Problema que Resolvemos",
    subtitle: "Centroamérica tiene experiencias de clase mundial ocultas detrás de un sistema de distribución roto",
    stats: [
      { number: "0", label: "Plataformas dedicadas para operadores locales centroamericanos", detail: "No existe ninguna plataforma que atienda específicamente las necesidades de guías independientes, cooperativas y pequeñas empresas de tours en la región." },
      { number: "20-30%", label: "Comisión cobrada por plataformas globales", detail: "Airbnb Experiences y Viator/TripAdvisor cobran a los operadores entre 20-30% por reserva — devastador para un guía que gana $30-50 por tour." },
      { number: "70%+", label: "Operadores sin presencia digital", detail: "La mayoría de operadores locales en Nicaragua, El Salvador, Guatemala y Costa Rica dependen completamente del boca a boca y turistas que llegan a pie. Son invisibles para el segmento creciente de viajeros eco-conscientes que investigan en línea." },
    ],
    operatorPain: {
      title: "Dolor para los Operadores",
      items: [
        "No existe una plataforma accesible — los marketplaces globales cobran demasiada comisión",
        "Crear listados profesionales requiere habilidades que la mayoría de guías no tienen (redacción, traducción, consejos de fotografía)",
        "Gestionar reservas entre WhatsApp, llamadas telefónicas y turistas walk-in es caótico",
        "No hay herramientas para llegar a viajeros internacionales que investigan y reservan en línea",
        "El cobro a turistas extranjeros es poco confiable",
      ],
    },
    travelerPain: {
      title: "Dolor para los Viajeros",
      items: [
        "Las plataformas globales muestran los mismos tours genéricos y caros",
        "Las experiencias auténticas, económicas y de 'joyas ocultas' son imposibles de encontrar en línea",
        "No hay forma de verificar calidad o confiar en operadores locales desconocidos",
        "La barrera del idioma dificulta la reserva y comunicación",
        "Los viajeros conscientes del presupuesto y del medio ambiente quieren impacto local, no turismo corporativo",
      ],
    },
    opportunity: {
      title: "La Oportunidad",
      text: "El sector turístico de Centroamérica está creciendo rápidamente, pero carece de un marketplace digital dedicado. Las experiencias más auténticas de la región — caminatas comunitarias, tours gastronómicos locales, aventuras volcánicas, inmersiones culturales indígenas — son invisibles en línea. Construimos la plataforma que las hace descubribles, reservables y confiables.",
    },
  },
};

// ─── COMPETITIVE ANALYSIS ───
const analysisData = {
  en: {
    title: "Competitive Analysis",
    subtitle: "Deconstructing global players to build a localized advantage",
    competitors: [
      {
        name: "Airbnb Experiences",
        strengths: ["Strong brand trust and curation model", "Hosts are vetted, quality is enforced", "Polished UX that inspires confidence", "Cross-sells from accommodation users"],
        weaknesses: ["~20% commission — brutal for low-income guides", "Corporate vetting process doesn't scale in rural Central America", "Thin inventory in the region — treated as afterthought", "Acquisition depends on existing Airbnb accommodation users"],
        whatWeTake: "The curation model — but through community-validated quality (local cooperatives, established guide networks) instead of corporate vetting. Zero cost, culturally aligned.",
      },
      {
        name: "TripAdvisor / Viator",
        strengths: ["Massive SEO dominance — owns search for '[city] things to do'", "Volume-first approach captures broad demand", "Review system provides social proof at scale", "Global distribution and brand recognition"],
        weaknesses: ["20-30% commission extracts maximum value from operators", "Low curation — operators feel commoditized", "Same generic tours everywhere — no 'hidden gem' positioning", "Budget travelers see through the overpriced recommendations"],
        whatWeTake: "The SEO-first acquisition strategy — long-tail content around 'hidden gems in Granada,' 'off-the-beaten-path El Salvador.' Budget eco-travelers research obsessively. We win them in the research phase.",
      },
    ],
    ourAdvantage: {
      title: "Our Competitive Moats",
      items: [
        { moat: "Lower commission (8-10%)", detail: "Vs. 20-30% from global platforms. This alone is a powerful operator acquisition lever, especially where guides currently lose 25%+ to aggregators." },
        { moat: "AI-powered listing creation", detail: "The only platform that helps operators build professional, bilingual listings. No other competitor offers this. Operators send voice notes and photos via WhatsApp — AI does the rest." },
        { moat: "Deep local partnerships", detail: "Community cooperatives, tourism boards, and local guide networks provide quality validation that global platforms can't replicate from San Francisco." },
        { moat: "Curated 'hidden gem' inventory", detail: "While competitors aggregate generic tours, we curate budget-friendly authentic experiences that eco-conscious travelers actually want." },
        { moat: "WhatsApp-native operations", detail: "Operators manage everything via WhatsApp — the tool they already use daily. Zero learning curve. No app to download. No dashboard to learn." },
        { moat: "Regional depth over global breadth", detail: "We don't compete globally. We own Central America. Depth of inventory in 4 countries beats thin coverage across 100." },
      ],
    },
  },
  es: {
    title: "Análisis Competitivo",
    subtitle: "Deconstruyendo a los competidores globales para construir una ventaja localizada",
    competitors: [
      {
        name: "Airbnb Experiences",
        strengths: ["Fuerte confianza de marca y modelo de curación", "Hosts son verificados, calidad es controlada", "UX pulido que inspira confianza", "Venta cruzada desde usuarios de alojamiento"],
        weaknesses: ["~20% comisión — brutal para guías de bajos ingresos", "Proceso de verificación corporativo no escala en Centroamérica rural", "Inventario escaso en la región — tratada como algo secundario", "Adquisición depende de usuarios existentes de alojamiento Airbnb"],
        whatWeTake: "El modelo de curación — pero a través de calidad validada por la comunidad (cooperativas locales, redes de guías establecidas) en lugar de verificación corporativa. Cero costo, culturalmente alineado.",
      },
      {
        name: "TripAdvisor / Viator",
        strengths: ["Dominio masivo de SEO — controla búsquedas de '[ciudad] qué hacer'", "Enfoque de volumen captura demanda amplia", "Sistema de reseñas proporciona prueba social a escala", "Distribución global y reconocimiento de marca"],
        weaknesses: ["20-30% comisión extrae el máximo valor de los operadores", "Poca curación — los operadores se sienten como commodities", "Los mismos tours genéricos en todas partes — sin posicionamiento de 'joyas ocultas'", "Los viajeros con presupuesto ven a través de las recomendaciones sobrevaloradas"],
        whatWeTake: "La estrategia de adquisición SEO-first — contenido de cola larga sobre 'joyas ocultas en Granada,' 'fuera de lo común en El Salvador.' Los viajeros eco-conscientes investigan obsesivamente. Los ganamos en la fase de investigación.",
      },
    ],
    ourAdvantage: {
      title: "Nuestras Ventajas Competitivas",
      items: [
        { moat: "Comisión más baja (8-10%)", detail: "Vs. 20-30% de plataformas globales. Esto solo es un poderoso imán de adquisición de operadores, especialmente donde los guías pierden 25%+ con los agregadores." },
        { moat: "Creación de listados con IA", detail: "La única plataforma que ayuda a los operadores a crear listados profesionales y bilingües. Ningún competidor ofrece esto. Los operadores envían notas de voz y fotos por WhatsApp — la IA hace el resto." },
        { moat: "Alianzas locales profundas", detail: "Cooperativas comunitarias, juntas de turismo y redes de guías locales proporcionan validación de calidad que las plataformas globales no pueden replicar desde San Francisco." },
        { moat: "Inventario curado de 'joyas ocultas'", detail: "Mientras los competidores agregan tours genéricos, nosotros curamos experiencias auténticas y económicas que los viajeros eco-conscientes realmente quieren." },
        { moat: "Operaciones nativas en WhatsApp", detail: "Los operadores gestionan todo vía WhatsApp — la herramienta que ya usan a diario. Cero curva de aprendizaje. Sin app que descargar. Sin dashboard que aprender." },
        { moat: "Profundidad regional sobre alcance global", detail: "No competimos globalmente. Dominamos Centroamérica. Profundidad de inventario en 4 países supera cobertura superficial en 100." },
      ],
    },
  },
};

// ─── AI ASSISTANT ───
const aiData = {
  en: {
    title: "AI Assistant: Our Product Differentiator",
    subtitle: "The only platform in the region that helps you build your listing",
    tagline: "\"I sent a voice note and some photos. Five minutes later, I had a professional listing in two languages.\"",
    intro: "Most operators in Central America are incredible storytellers in person — but struggle to write compelling listings. Our AI assistant solves this by turning raw input (voice notes, rough text, photos) into polished, bilingual, SEO-optimized listings that convert travelers into bookings.",
    capabilities: [
      { title: "Conversational Listing Creation", desc: "Instead of blank forms, the AI guides operators through a natural WhatsApp conversation. 'What type of experience do you offer?' → category tiles. 'What's included?' → guided prompts. The operator types rough notes or sends voice notes — the AI generates a complete listing.", icon: "💬" },
      { title: "Instant Bilingual Content", desc: "Every listing is generated simultaneously in Spanish and English. Operators who only speak Spanish instantly reach international travelers. This alone would cost $50-100+ per listing if done by a human translator.", icon: "🌐" },
      { title: "Photo Guidance", desc: "The AI analyzes uploaded photos and provides specific, actionable feedback: 'This photo is too dark — try shooting with natural light from behind you.' Better photos = more bookings.", icon: "📸" },
      { title: "SEO Optimization", desc: "Listings are automatically optimized for search engines. The AI crafts titles, descriptions, and metadata that rank for long-tail queries like 'kayak tour Isletas Granada Nicaragua' — bringing organic traffic directly to operators.", icon: "🔍" },
      { title: "Performance Intelligence", desc: "As the platform grows, the AI provides operators with actionable insights: 'Travelers are searching for sunset tours in your area — consider adding one.' 'Operators with 5+ photos get 3x more bookings.' Data-driven growth.", icon: "📊" },
      { title: "Pricing Suggestions", desc: "Based on comparable experiences in the same region, the AI can suggest competitive pricing. Operators always set their own price — but they get market context to make informed decisions.", icon: "💰" },
    ],
    whyItMatters: {
      title: "Why This Matters Strategically",
      points: [
        "Quality control without headcount — the AI is our curation layer, ensuring every listing meets a professional standard without hiring reviewers",
        "Organic growth engine — operators talk to each other. When one guide tells another 'the platform wrote my listing for me in two languages,' that's word-of-mouth we can't buy",
        "Barrier to competition — building an AI assistant tuned for Central American tourism operators is not trivial to replicate. The more operators use it, the better it gets",
        "Reduces time-to-listing from hours to minutes — this is the #1 friction point for operator onboarding on any platform",
      ],
    },
    operatorPitch: {
      title: "What We Tell Operators",
      text: "\"You focus on what you do best — creating unforgettable experiences. We handle everything else: your listing, your translation, your online presence. All you need is WhatsApp and your passion.\"",
    },
  },
  es: {
    title: "Asistente de IA: Nuestro Diferenciador de Producto",
    subtitle: "La única plataforma en la región que te ayuda a crear tu listado",
    tagline: "\"Envié una nota de voz y algunas fotos. Cinco minutos después, tenía un listado profesional en dos idiomas.\"",
    intro: "La mayoría de operadores en Centroamérica son narradores increíbles en persona — pero luchan para escribir listados atractivos. Nuestro asistente de IA resuelve esto transformando insumos crudos (notas de voz, texto básico, fotos) en listados pulidos, bilingües y optimizados para SEO que convierten viajeros en reservas.",
    capabilities: [
      { title: "Creación Conversacional de Listados", desc: "En lugar de formularios vacíos, la IA guía a los operadores a través de una conversación natural en WhatsApp. '¿Qué tipo de experiencia ofreces?' → opciones por categoría. '¿Qué incluye?' → preguntas guiadas. El operador escribe notas básicas o envía notas de voz — la IA genera un listado completo.", icon: "💬" },
      { title: "Contenido Bilingüe Instantáneo", desc: "Cada listado se genera simultáneamente en español e inglés. Los operadores que solo hablan español llegan instantáneamente a viajeros internacionales. Esto solo costaría $50-100+ por listado si lo hiciera un traductor humano.", icon: "🌐" },
      { title: "Guía Fotográfica", desc: "La IA analiza las fotos subidas y proporciona retroalimentación específica y accionable: 'Esta foto está muy oscura — intenta tomar con luz natural desde atrás.' Mejores fotos = más reservas.", icon: "📸" },
      { title: "Optimización SEO", desc: "Los listados se optimizan automáticamente para motores de búsqueda. La IA genera títulos, descripciones y metadata que posicionan para búsquedas como 'tour kayak Isletas Granada Nicaragua' — trayendo tráfico orgánico directo a los operadores.", icon: "🔍" },
      { title: "Inteligencia de Rendimiento", desc: "A medida que la plataforma crece, la IA proporciona insights accionables: 'Los viajeros buscan tours al atardecer en tu zona — considera agregar uno.' 'Los operadores con 5+ fotos obtienen 3x más reservas.' Crecimiento basado en datos.", icon: "📊" },
      { title: "Sugerencias de Precios", desc: "Basándose en experiencias comparables en la misma región, la IA puede sugerir precios competitivos. Los operadores siempre definen su propio precio — pero obtienen contexto de mercado para tomar decisiones informadas.", icon: "💰" },
    ],
    whyItMatters: {
      title: "Por Qué Esto Importa Estratégicamente",
      points: [
        "Control de calidad sin personal — la IA es nuestra capa de curación, asegurando que cada listado cumpla un estándar profesional sin contratar revisores",
        "Motor de crecimiento orgánico — los operadores hablan entre sí. Cuando un guía le dice a otro 'la plataforma escribió mi listado en dos idiomas,' eso es publicidad de boca a boca que no podemos comprar",
        "Barrera contra la competencia — construir un asistente de IA afinado para operadores turísticos centroamericanos no es trivial de replicar. Cuantos más operadores lo usan, mejor se vuelve",
        "Reduce el tiempo de creación de listado de horas a minutos — este es el punto de fricción #1 para el registro de operadores en cualquier plataforma",
      ],
    },
    operatorPitch: {
      title: "Lo Que Le Decimos a los Operadores",
      text: "\"Vos enfocate en lo que mejor hacés — crear experiencias inolvidables. Nosotros nos encargamos de todo lo demás: tu listado, tu traducción, tu presencia en línea. Solo necesitás WhatsApp y tu pasión.\"",
    },
  },
};

// ─── BUSINESS MODEL ───
const modelData = {
  en: {
    title: "Business Model",
    subtitle: "Hybrid revenue model designed for bootstrapped launch with room to scale",
    tiers: [
      { name: "Community", price: "Free", color: "#2D5016", purpose: "Operator acquisition engine — zero friction, zero risk", features: ["Up to 3 experience listings", "Basic operator profile", "AI-assisted listing creation (bilingual)", "Reserve & pay locally (no commission)", "Prepaid bookings available (8–10% commission)", "WhatsApp booking notifications"] },
      { name: "Professional", price: "$15–25/mo", color: "#3A7D1E", purpose: "For growing operators who want more visibility and tools", features: ["Unlimited listings", "Priority placement in search results", "Verified operator badge", "Reduced commission on prepaid (5–7%)", "Booking analytics dashboard", "Advanced AI features (performance tips, pricing suggestions)", "Operator referral program access"] },
      { name: "Featured", price: "À la carte", color: "#6BBF3B", purpose: "Margin boosters that don't tax free-tier operators", features: ["Featured placement on homepage (weekly fee)", "Category page spotlight", "Professional photo/video shoot partnerships", "'Top Pick' editorial badge", "Custom promotional campaigns", "Priority in curated collections"] },
    ],
    paymentModel: {
      title: "Dual Payment Model",
      desc: "Operators choose how they want to receive bookings — this turns a constraint into a feature.",
      options: [
        { name: "Reserve & Pay Locally", detail: "Traveler reserves a spot online, pays the operator directly in person. Platform charges zero commission. Ideal for operators who prefer cash-in-hand and face-to-face interaction. Available on all tiers." },
        { name: "Prepaid Booking", detail: "Traveler pays through the platform via BAC payment gateway. Operator receives weekly payout minus commission (8-10% Community, 5-7% Professional). Reduces no-shows, guarantees revenue. International card support for foreign travelers." },
      ],
    },
    pricing: {
      title: "Free Pricing for Operators",
      desc: "Operators set their own prices. The platform's job is making comparison effortless — not moderating prices. Travelers see transparent differentiators: group size, duration, included gear, guide credentials, language, and reviews. A kayak tour at $15 vs $40 is immediately understandable.",
    },
    tradeoffs: {
      title: "Why This Hybrid Model",
      items: [
        { model: "Commission-only", pro: "Simple", con: "Near-zero revenue until volume scales — dangerous when bootstrapped" },
        { model: "Subscription-only", pro: "Predictable revenue", con: "Creates friction for the independents you need most at launch" },
        { model: "Our hybrid", pro: "Resilient", con: "More complexity, but earns subscription income even when bookings are low while keeping the free tier as a growth engine" },
      ],
    },
    badges: {
      title: "Milestone Badge System",
      desc: "Badges are earned, never bought. Buying trust signals destroys credibility. Earning them builds community.",
      items: [
        { name: "Founding Partner", rule: "Listed during first 6 months — exclusive, never available again. Creates urgency for early adoption.", icon: "🌱", exclusive: true },
        { name: "Verified Experience", rule: "5 completed bookings + 3 positive reviews. Proves real-world quality.", icon: "✓", exclusive: false },
        { name: "Outstanding Operator", rule: "25+ bookings, 4.5+ rating, 90%+ response rate. The gold standard.", icon: "★", exclusive: false },
      ],
    },
  },
  es: {
    title: "Modelo de Negocio",
    subtitle: "Modelo de ingresos híbrido diseñado para lanzamiento bootstrapped con espacio para escalar",
    tiers: [
      { name: "Comunidad", price: "Gratis", color: "#2D5016", purpose: "Motor de adquisición de operadores — cero fricción, cero riesgo", features: ["Hasta 3 listados de experiencias", "Perfil básico de operador", "Creación de listados asistida por IA (bilingüe)", "Reserva y paga en el lugar (sin comisión)", "Reservas con pago anticipado (8–10% comisión)", "Notificaciones de reserva por WhatsApp"] },
      { name: "Profesional", price: "$15–25/mes", color: "#3A7D1E", purpose: "Para operadores en crecimiento que quieren más visibilidad y herramientas", features: ["Listados ilimitados", "Posición prioritaria en resultados de búsqueda", "Insignia de operador verificado", "Comisión reducida en pago anticipado (5–7%)", "Dashboard de analítica de reservas", "Funciones avanzadas de IA (tips de rendimiento, sugerencias de precios)", "Acceso al programa de referidos"] },
      { name: "Destacado", price: "À la carte", color: "#6BBF3B", purpose: "Generadores de margen que no gravan a los operadores del nivel gratuito", features: ["Colocación destacada en página de inicio (tarifa semanal)", "Spotlight en páginas de categoría", "Alianzas de sesiones fotográficas/video profesional", "Insignia editorial 'Top Pick'", "Campañas promocionales personalizadas", "Prioridad en colecciones curadas"] },
    ],
    paymentModel: {
      title: "Modelo Dual de Pagos",
      desc: "Los operadores eligen cómo quieren recibir reservas — esto convierte una limitación en una ventaja.",
      options: [
        { name: "Reserva y Paga en el Lugar", detail: "El viajero reserva un lugar en línea, paga al operador directamente en persona. La plataforma cobra cero comisión. Ideal para operadores que prefieren efectivo e interacción cara a cara. Disponible en todos los niveles." },
        { name: "Pago Anticipado", detail: "El viajero paga a través de la plataforma vía pasarela de pago BAC. El operador recibe pago semanal menos comisión (8-10% Comunidad, 5-7% Profesional). Reduce no-shows, garantiza ingresos. Soporte de tarjetas internacionales para viajeros extranjeros." },
      ],
    },
    pricing: {
      title: "Precios Libres para Operadores",
      desc: "Los operadores definen sus propios precios. El trabajo de la plataforma es hacer la comparación sencilla — no moderar precios. Los viajeros ven diferenciadores transparentes: tamaño del grupo, duración, equipo incluido, credenciales del guía, idioma y reseñas. Un tour en kayak a $15 vs $40 se entiende de inmediato.",
    },
    tradeoffs: {
      title: "¿Por Qué Este Modelo Híbrido?",
      items: [
        { model: "Solo comisión", pro: "Simple", con: "Ingresos casi nulos hasta que el volumen escala — peligroso cuando sos bootstrapped" },
        { model: "Solo suscripción", pro: "Ingresos predecibles", con: "Crea fricción para los independientes que más necesitás al inicio" },
        { model: "Nuestro híbrido", pro: "Resiliente", con: "Más complejidad, pero genera ingresos por suscripción aunque las reservas sean bajas, manteniendo el nivel gratuito como motor de crecimiento" },
      ],
    },
    badges: {
      title: "Sistema de Insignias por Logros",
      desc: "Las insignias se ganan, nunca se compran. Comprar señales de confianza destruye la credibilidad. Ganarlas construye comunidad.",
      items: [
        { name: "Socio Fundador", rule: "Listado durante los primeros 6 meses — exclusiva, nunca más disponible. Crea urgencia para la adopción temprana.", icon: "🌱", exclusive: true },
        { name: "Experiencia Verificada", rule: "5 reservas completadas + 3 reseñas positivas. Demuestra calidad en el mundo real.", icon: "✓", exclusive: false },
        { name: "Operador Destacado", rule: "25+ reservas, 4.5+ calificación, 90%+ tasa de respuesta. El estándar de oro.", icon: "★", exclusive: false },
      ],
    },
  },
};

// ─── USER JOURNEYS ───
const journeysData = {
  en: {
    operator: {
      title: "Operator Journey: Listing an Experience",
      subtitle: "WhatsApp-first. AI-assisted. 5 minutes from zero to published.",
      screens: [
        { name: "Onboarding Landing", header: "\"Your experience deserves to be discovered\"", content: "Three value props with icons — free to list, you keep your pricing, AI helps you create a listing in minutes. Social proof: '120+ operators in Nicaragua are already listed.' No forms, no complexity.", action: "\"Create my free account\" → signup via WhatsApp number or email" },
        { name: "Profile Setup (2 min)", header: "\"Tell us about yourself\"", content: "Name, location (dropdown by department/region), photo upload, short bio. The AI activates here — operator types a few rough sentences about themselves and the AI rewrites it into a polished bilingual bio they can approve or edit.", action: "\"Save and create my first experience\"" },
        { name: "Experience Builder (AI)", header: "\"Let's build your experience\"", content: "Instead of a blank form, it's conversational. Category tiles (Nature, Culture, Food, Adventure, Wellness). Guided prompts: what's included, duration, group size, meeting point. Operator types rough notes → AI generates polished listing in Spanish + English simultaneously. Photo upload with guidance.", action: "\"Preview\" → shows exactly how travelers will see it → \"Publish\"" },
        { name: "Pricing & Booking Settings", header: "\"How do you want to receive bookings?\"", content: "Two options side by side. Option A: Reserve & pay locally — zero commission. Option B: Prepaid — 8-10% commission, fewer no-shows. Calendar availability. Cancellation policy toggle (flexible/moderate/strict).", action: "\"Confirm settings\" → listing goes live" },
      ],
      whatsappFlow: "WhatsApp Parallel Flow: The entire listing can be created via WhatsApp conversation with the AI assistant. Operators send photos, voice notes describing the experience, and the AI assembles the listing for their approval. This is the rural adoption unlock — no web app needed.",
    },
    traveler: {
      title: "Traveler Journey: Booking an Experience",
      subtitle: "Discover → Compare → Book → Experience. Bilingual, transparent, trust-first.",
      screens: [
        { name: "Homepage / Discovery", header: "\"Authentic Central American Experiences\"", content: "Search bar with destination + date. Curated collections below: 'Hidden Gems near Granada,' 'Under $20 Adventures,' 'Community-Led Experiences.' Map view toggle showing experience pins. Bilingual toggle visible. No clutter, no ads.", action: "Search or tap a collection to browse" },
        { name: "Search Results", header: "Dynamic: \"[Category] in [Location]\"", content: "Card-based listings showing: hero photo, title, operator name + verified badge, price, duration, group size, rating. Critical: visible 'value comparison' — travelers instantly see why two kayak tours differ in price (group size, included lunch, bilingual guide). Filter sidebar: price range, category, language, pay-locally vs prepaid.", action: "Tap any card → experience detail page" },
        { name: "Experience Detail", header: "Full-width hero image + title + operator name", content: "AI-generated bilingual description, what's included checklist, meeting point with map pin, cancellation policy, reviews. Operator profile card: photo, bio, experiences hosted, response time. Transparent pricing breakdown if prepaid.", action: "\"Book for [date]\" → date/group size selector → checkout" },
        { name: "Checkout / Confirmation", header: "\"Confirm your booking\"", content: "For prepaid: card payment via BAC gateway. For pay-locally: confirmation with operator's WhatsApp contact + meeting details + 24hr reminder. Both paths show unique booking code.", action: "\"Confirm\" → WhatsApp notification to operator + confirmation to traveler" },
      ],
    },
  },
  es: {
    operator: {
      title: "Recorrido del Operador: Listar una Experiencia",
      subtitle: "WhatsApp-first. Asistido por IA. 5 minutos de cero a publicado.",
      screens: [
        { name: "Página de Registro", header: "\"Tu experiencia merece ser descubierta\"", content: "Tres propuestas de valor con íconos — gratis para listar, vos ponés tu precio, la IA te ayuda a crear un listado en minutos. Prueba social: '120+ operadores en Nicaragua ya están listados.' Sin formularios, sin complejidad.", action: "\"Crear mi cuenta gratis\" → registro vía número de WhatsApp o email" },
        { name: "Configuración de Perfil (2 min)", header: "\"Contanos sobre vos\"", content: "Nombre, ubicación (dropdown por departamento/región), carga de foto, bio corta. La IA se activa aquí — el operador escribe unas oraciones básicas sobre sí mismo y la IA las reescribe en una bio bilingüe pulida que puede aprobar o editar.", action: "\"Guardar y crear mi primera experiencia\"" },
        { name: "Constructor de Experiencia (IA)", header: "\"Vamos a crear tu experiencia\"", content: "En lugar de un formulario vacío, es conversacional. Categorías (Naturaleza, Cultura, Gastronomía, Aventura, Bienestar). Preguntas guiadas: qué incluye, duración, tamaño del grupo, punto de encuentro. El operador escribe notas básicas → la IA genera un listado pulido en español + inglés simultáneamente. Carga de fotos con guía.", action: "\"Vista previa\" → muestra exactamente cómo lo verán los viajeros → \"Publicar\"" },
        { name: "Precios y Configuración de Reservas", header: "\"¿Cómo querés recibir reservas?\"", content: "Dos opciones lado a lado. Opción A: Reserva y paga en el lugar — cero comisión. Opción B: Pago anticipado — 8-10% comisión, menos no-shows. Calendario de disponibilidad. Toggle de política de cancelación (flexible/moderada/estricta).", action: "\"Confirmar configuración\" → el listado se publica" },
      ],
      whatsappFlow: "Flujo Paralelo por WhatsApp: Todo el listado puede crearse vía conversación de WhatsApp con el asistente de IA. Los operadores envían fotos, notas de voz describiendo la experiencia, y la IA arma el listado para su aprobación. Este es el desbloqueo de adopción rural — sin necesidad de app web.",
    },
    traveler: {
      title: "Recorrido del Viajero: Reservar una Experiencia",
      subtitle: "Descubrir → Comparar → Reservar → Vivir. Bilingüe, transparente, confianza primero.",
      screens: [
        { name: "Página de Inicio / Descubrimiento", header: "\"Experiencias Auténticas en Centroamérica\"", content: "Barra de búsqueda con destino + fecha. Colecciones curadas debajo: 'Joyas Ocultas cerca de Granada,' 'Aventuras por Menos de $20,' 'Experiencias Comunitarias.' Toggle de vista de mapa con pins de experiencias. Toggle bilingüe visible. Sin desorden, sin anuncios.", action: "Buscar o tocar una colección para explorar" },
        { name: "Resultados de Búsqueda", header: "Dinámico: \"[Categoría] en [Ubicación]\"", content: "Listados en tarjetas mostrando: foto principal, título, nombre del operador + insignia verificada, precio, duración, tamaño del grupo, calificación. Crítico: 'comparación de valor' visible — los viajeros ven instantáneamente por qué dos tours en kayak difieren en precio (tamaño del grupo, almuerzo incluido, guía bilingüe). Filtros: rango de precio, categoría, idioma, pago local vs anticipado.", action: "Tocar cualquier tarjeta → página de detalle" },
        { name: "Detalle de Experiencia", header: "Imagen hero a ancho completo + título + operador", content: "Descripción bilingüe generada por IA, checklist de qué incluye, punto de encuentro con pin en mapa, política de cancelación, reseñas. Tarjeta de perfil del operador: foto, bio, experiencias realizadas, tiempo de respuesta. Desglose transparente de precios si es pago anticipado.", action: "\"Reservar para [fecha]\" → selector de fecha/grupo → checkout" },
        { name: "Checkout / Confirmación", header: "\"Confirmá tu reserva\"", content: "Para pago anticipado: pago con tarjeta vía pasarela BAC. Para pago local: confirmación con contacto WhatsApp del operador + detalles del encuentro + recordatorio 24hrs. Ambos caminos muestran código único de reserva.", action: "\"Confirmar\" → notificación WhatsApp al operador + confirmación al viajero" },
      ],
    },
  },
};

// ─── TECH STACK ───
const stackData = {
  en: {
    title: "Technology Architecture",
    subtitle: "Five services. Lean, scalable, bootstrapped-friendly.",
    items: [
      { name: "Vercel + Next.js", role: "Traveler web app, SEO, bilingual UI, server-side rendering", icon: "▲" },
      { name: "Supabase", role: "Database (PostgreSQL), Auth, Storage, Realtime subscriptions, Edge Functions, Row Level Security, auto-generated REST API", icon: "⚡" },
      { name: "Kapso", role: "WhatsApp Business API platform — AI agent hosting, workflow builder, WhatsApp Flows for mini-apps inside WhatsApp, broadcasting", icon: "💬" },
      { name: "BAC Gateway", role: "Banco de América Central — regional payment processing, operator payouts, operates in all 4 target countries", icon: "🏦" },
      { name: "Anthropic API", role: "Powers the AI assistant — bilingual listing generation, photo guidance, performance intelligence, SEO optimization", icon: "🧠" },
    ],
    flows: [
      { from: "Operator (WhatsApp)", to: "Kapso + AI Agent", note: "Voice notes, photos, rough text" },
      { from: "AI Agent", to: "Anthropic API", note: "Generates bilingual listing" },
      { from: "Listing data", to: "Supabase (DB + Storage)", note: "Structured data + images" },
      { from: "Traveler (Web)", to: "Supabase → Next.js → Vercel", note: "Browse, search, book" },
      { from: "Booking event", to: "Supabase + Kapso", note: "DB record + WhatsApp notification" },
      { from: "Payment", to: "BAC Gateway → Supabase", note: "Prepaid bookings (Phase 2+)" },
    ],
    whySupabase: "Why Supabase over alternatives: Auth, Storage, Realtime, and Edge Functions are all consolidated under one service. This replaces 3-4 separate services (Neon + Clerk + S3 + custom webhooks), saving weeks of integration work and reducing monthly costs at early scale.",
  },
  es: {
    title: "Arquitectura Tecnológica",
    subtitle: "Cinco servicios. Ágil, escalable, ideal para bootstrapping.",
    items: [
      { name: "Vercel + Next.js", role: "App web para viajeros, SEO, interfaz bilingüe, server-side rendering", icon: "▲" },
      { name: "Supabase", role: "Base de datos (PostgreSQL), Auth, Storage, suscripciones Realtime, Edge Functions, Row Level Security, API REST auto-generada", icon: "⚡" },
      { name: "Kapso", role: "Plataforma API de WhatsApp Business — hosting de agente IA, constructor de flujos, WhatsApp Flows para mini-apps dentro de WhatsApp, broadcasting", icon: "💬" },
      { name: "BAC Gateway", role: "Banco de América Central — procesamiento de pagos regional, pagos a operadores, opera en los 4 países objetivo", icon: "🏦" },
      { name: "Anthropic API", role: "Motor del asistente IA — generación bilingüe de listados, guía fotográfica, inteligencia de rendimiento, optimización SEO", icon: "🧠" },
    ],
    flows: [
      { from: "Operador (WhatsApp)", to: "Kapso + Agente IA", note: "Notas de voz, fotos, texto" },
      { from: "Agente IA", to: "Anthropic API", note: "Genera listado bilingüe" },
      { from: "Datos del listado", to: "Supabase (DB + Storage)", note: "Datos estructurados + imágenes" },
      { from: "Viajero (Web)", to: "Supabase → Next.js → Vercel", note: "Explorar, buscar, reservar" },
      { from: "Evento de reserva", to: "Supabase + Kapso", note: "Registro en DB + notificación WhatsApp" },
      { from: "Pago", to: "BAC Gateway → Supabase", note: "Reservas prepagadas (Fase 2+)" },
    ],
    whySupabase: "¿Por qué Supabase sobre alternativas? Auth, Storage, Realtime y Edge Functions consolidados en un solo servicio. Esto reemplaza 3-4 servicios separados (Neon + Clerk + S3 + webhooks custom), ahorrando semanas de integración y reduciendo costos mensuales en etapa temprana.",
  },
};

// ─── ROADMAP ───
const roadmapData = {
  en: [
    { id: 0, label: "Phase 0", title: "Roots — Foundation", weeks: "Months 1–2", goal: "Validate demand, onboard first 20 operators via WhatsApp", color: "#2D5016", tasks: [
      { cat: "Infrastructure", items: ["Set up Supabase project — database schema for operators, experiences, bookings", "Configure Supabase Auth + Storage", "Set up Kapso with dedicated WhatsApp business number", "Begin BAC payment gateway approval process"] },
      { cat: "AI Agent", items: ["Build AI assistant on Kapso — conversational onboarding via WhatsApp", "Integrate Anthropic API for bilingual listing generation", "Test with 5 trusted operators, iterate"] },
      { cat: "Operator Acquisition", items: ["Personally onboard Nicaragua contacts", "Award 'Founding Partner' badges", "Target: 20+ validated listings"] },
    ], milestone: "20+ listings, AI producing quality bilingual content, BAC approval started", risk: "Low. Focused on validation." },
    { id: 1, label: "Phase 1", title: "Sprouts — Traveler MVP", weeks: "Months 3–4", goal: "Traveler web app live, first bookings", color: "#3A7D1E", tasks: [
      { cat: "Web App", items: ["Next.js on Vercel — homepage, search, detail pages, profiles", "Bilingual from day one", "Supabase client SDK + Auth integration"] },
      { cat: "Booking Flow", items: ["Reserve & pay locally ONLY", "WhatsApp confirmations + 24hr reminders via Kapso"] },
      { cat: "SEO", items: ["Unique URLs per listing, structured data, Open Graph", "Curated collections for discovery"] },
    ], milestone: "Live web app, first bookings, Google indexing", risk: "Moderate. Tight for polished MVP." },
    { id: 2, label: "Phase 2", title: "Bloom — Monetization", weeks: "Months 5–6", goal: "Revenue starts, trust compounds", color: "#4FA629", tasks: [
      { cat: "Payments", items: ["BAC gateway integration — prepaid goes live", "Dual model active: pay-locally + prepaid", "Weekly operator payouts via BAC transfer"] },
      { cat: "Subscriptions", items: ["Professional tier launches ($15–25/mo)", "Reduced commission + priority placement"] },
      { cat: "Trust", items: ["Review system via WhatsApp prompts", "Trustpilot page, milestone badges activate"] },
    ], milestone: "First revenue, dual payment validated, review flywheel", risk: "Highest. BAC is the unknown — start in Phase 0." },
    { id: 3, label: "Phase 3", title: "Branches — Growth", weeks: "Months 7–8", goal: "Scale to El Salvador, 100+ listings", color: "#6BBF3B", tasks: [
      { cat: "Expansion", items: ["El Salvador launch via same Kapso flow", "Localized SEO content for El Salvador"] },
      { cat: "Premium", items: ["Featured placements, photo partnerships, Top Pick badges"] },
      { cat: "Growth", items: ["Operator referral program", "Advanced AI features", "International card validation"] },
    ], milestone: "100+ listings, 2 countries, predictable revenue", risk: "Low. Reuses existing flows." },
    { id: 4, label: "Phase 4", title: "Canopy — Maturity", weeks: "Months 9–10", goal: "Guatemala + Costa Rica, market position", color: "#8FD460", tasks: [
      { cat: "Expansion", items: ["Guatemala & Costa Rica onboarding", "Country-specific collections and SEO"] },
      { cat: "Product", items: ["PWA for operators (stretch)", "Multi-day itineraries", "Editorial curation"] },
      { cat: "Partnerships", items: ["INTUR and tourism board co-marketing", "Affiliate API for bloggers", "Capterra presence"] },
    ], milestone: "4 countries, 300+ listings, established brand", risk: "Moderate. Two launches — prioritize Guatemala if needed." },
  ],
  es: [
    { id: 0, label: "Fase 0", title: "Raíces — Fundación", weeks: "Meses 1–2", goal: "Validar demanda, registrar primeros 20 operadores vía WhatsApp", color: "#2D5016", tasks: [
      { cat: "Infraestructura", items: ["Configurar proyecto Supabase — esquema de BD para operadores, experiencias, reservas", "Configurar Supabase Auth + Storage", "Configurar Kapso con número WhatsApp dedicado", "Iniciar proceso de aprobación BAC"] },
      { cat: "Agente IA", items: ["Construir asistente IA en Kapso — registro conversacional vía WhatsApp", "Integrar API Anthropic para generación bilingüe", "Probar con 5 operadores, iterar"] },
      { cat: "Adquisición", items: ["Registrar personalmente contactos en Nicaragua", "Otorgar insignias 'Socio Fundador'", "Meta: 20+ listados validados"] },
    ], milestone: "20+ listados, IA produciendo contenido bilingüe, aprobación BAC iniciada", risk: "Bajo. Enfocado en validación." },
    { id: 1, label: "Fase 1", title: "Brotes — MVP para Viajeros", weeks: "Meses 3–4", goal: "App web para viajeros en vivo, primeras reservas", color: "#3A7D1E", tasks: [
      { cat: "App Web", items: ["Next.js en Vercel — inicio, búsqueda, detalle, perfiles", "Bilingüe desde el día uno", "Supabase client SDK + integración Auth"] },
      { cat: "Reservas", items: ["Solo reserva y paga en el lugar", "Confirmaciones WhatsApp + recordatorios 24hrs vía Kapso"] },
      { cat: "SEO", items: ["URLs únicas por listado, datos estructurados, Open Graph", "Colecciones curadas para descubrimiento"] },
    ], milestone: "App web en vivo, primeras reservas, indexación Google", risk: "Moderado. Ajustado para MVP pulido." },
    { id: 2, label: "Fase 2", title: "Floración — Monetización", weeks: "Meses 5–6", goal: "Ingresos comienzan, confianza se acumula", color: "#4FA629", tasks: [
      { cat: "Pagos", items: ["Integración pasarela BAC — pago anticipado en vivo", "Modelo dual activo: pago local + anticipado", "Pagos semanales a operadores vía transferencia BAC"] },
      { cat: "Suscripciones", items: ["Lanzamiento nivel Profesional ($15–25/mes)", "Comisión reducida + posición prioritaria"] },
      { cat: "Confianza", items: ["Sistema de reseñas vía prompts WhatsApp", "Página Trustpilot, insignias por logros se activan"] },
    ], milestone: "Primeros ingresos, pago dual validado, ciclo de reseñas", risk: "Más alto. BAC es la incógnita — iniciar en Fase 0." },
    { id: 3, label: "Fase 3", title: "Ramas — Crecimiento", weeks: "Meses 7–8", goal: "Escalar a El Salvador, 100+ listados", color: "#6BBF3B", tasks: [
      { cat: "Expansión", items: ["Lanzamiento El Salvador con mismo flujo Kapso", "Contenido SEO localizado para El Salvador"] },
      { cat: "Premium", items: ["Colocaciones destacadas, alianzas foto, insignias Top Pick"] },
      { cat: "Crecimiento", items: ["Programa de referidos", "Funciones avanzadas de IA", "Validación de tarjetas internacionales"] },
    ], milestone: "100+ listados, 2 países, ingresos predecibles", risk: "Bajo. Reutiliza flujos existentes." },
    { id: 4, label: "Fase 4", title: "Copa — Madurez", weeks: "Meses 9–10", goal: "Guatemala + Costa Rica, posición de mercado", color: "#8FD460", tasks: [
      { cat: "Expansión", items: ["Registro de operadores en Guatemala y Costa Rica", "Colecciones y SEO específicos por país"] },
      { cat: "Producto", items: ["PWA para operadores (meta extendida)", "Itinerarios multi-día", "Curación editorial"] },
      { cat: "Alianzas", items: ["Co-marketing con INTUR y juntas de turismo", "API de afiliados para bloggers", "Presencia en Capterra"] },
    ], milestone: "4 países, 300+ listados, marca establecida", risk: "Moderado. Dos lanzamientos — priorizar Guatemala si es necesario." },
  ],
};

const revData = {
  en: [
    { phase: "Months 1–4", label: "Phase 0–1", revenue: "$0", note: "Focus on inventory and first bookings. No monetization." },
    { phase: "Months 5–6", label: "Phase 2", revenue: "$500–1,500/mo", note: "Commissions (8–10% prepaid) + first Professional subscriptions." },
    { phase: "Months 7–8", label: "Phase 3", revenue: "$1,500–4,000/mo", note: "2 countries, subscriptions + commissions + featured placements." },
    { phase: "Months 9–10", label: "Phase 4", revenue: "$4,000–8,000/mo", note: "4 countries. Organic traffic reduces acquisition cost to near zero." },
  ],
  es: [
    { phase: "Meses 1–4", label: "Fase 0–1", revenue: "$0", note: "Enfoque en inventario y primeras reservas. Sin monetización." },
    { phase: "Meses 5–6", label: "Fase 2", revenue: "$500–1,500/mes", note: "Comisiones (8–10% prepago) + primeras suscripciones Profesional." },
    { phase: "Meses 7–8", label: "Fase 3", revenue: "$1,500–4,000/mes", note: "2 países, suscripciones + comisiones + colocaciones destacadas." },
    { phase: "Meses 9–10", label: "Fase 4", revenue: "$4,000–8,000/mes", note: "4 países. Tráfico orgánico reduce costo de adquisición a casi cero." },
  ],
};

// ─── STYLES ───
const s = {
  font: "'DM Sans', sans-serif",
  bg: "#FDFBF7",
  card: "#fff",
  border: "#E5E0D5",
  muted: "#8A8478",
  dark: "#1A1A18",
  sub: "#6B6560",
  accent: "#2D5016",
};

const Card = ({ children, style }) => (
  <div style={{ background: s.card, borderRadius: 12, border: `1px solid ${s.border}`, overflow: "hidden", ...style }}>{children}</div>
);

const SectionTitle = ({ title, subtitle }) => (
  <div style={{ marginBottom: 24 }}>
    <h2 style={{ fontSize: 24, fontWeight: 400, margin: "0 0 6px", fontFamily: "'Instrument Serif', Georgia, serif" }}>{title}</h2>
    {subtitle && <p style={{ fontFamily: s.font, fontSize: 13, color: s.muted, margin: 0, lineHeight: 1.5 }}>{subtitle}</p>}
  </div>
);

const Label = ({ children, color }) => (
  <div style={{ fontFamily: s.font, fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: color || s.muted, marginBottom: 8 }}>{children}</div>
);

// ─── MAIN COMPONENT ───
export default function StrategicPlan() {
  const [lang, setLang] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const l = params.get("lang");
    return l === "en" || l === "es" ? l : "es";
  });
  const [tab, setTab] = useState(0);
  const [phase, setPhase] = useState(0);
  const l = ui[lang];

  const renderProblem = () => {
    const d = problemData[lang];
    return (
      <>
        <SectionTitle title={d.title} subtitle={d.subtitle} />
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
          {d.stats.map((st, i) => (
            <Card key={i}><div style={{ padding: "16px 18px" }}>
              <div style={{ fontSize: 32, fontWeight: 700, color: s.accent, fontFamily: s.font }}>{st.number}</div>
              <div style={{ fontFamily: s.font, fontSize: 13, fontWeight: 600, color: s.dark, marginTop: 2 }}>{st.label}</div>
              <div style={{ fontFamily: s.font, fontSize: 12, color: s.muted, marginTop: 6, lineHeight: 1.5 }}>{st.detail}</div>
            </div></Card>
          ))}
        </div>
        {[d.operatorPain, d.travelerPain].map((section, si) => (
          <Card key={si} style={{ marginBottom: 12 }}><div style={{ padding: "16px 18px" }}>
            <Label color={si === 0 ? "#C4883A" : "#5B7AB5"}>{section.title}</Label>
            {section.items.map((item, ii) => (
              <div key={ii} style={{ display: "flex", gap: 8, marginBottom: 5, alignItems: "flex-start" }}>
                <span style={{ color: si === 0 ? "#C4883A" : "#5B7AB5", fontSize: 10, marginTop: 3 }}>●</span>
                <span style={{ fontFamily: s.font, fontSize: 13, color: s.dark, lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div></Card>
        ))}
        <Card style={{ marginTop: 12, background: s.accent }}>
          <div style={{ padding: "20px 18px" }}>
            <Label color="rgba(255,255,255,0.5)">{d.opportunity.title}</Label>
            <p style={{ fontFamily: s.font, fontSize: 14, color: "rgba(255,255,255,0.9)", margin: 0, lineHeight: 1.6 }}>{d.opportunity.text}</p>
          </div>
        </Card>
      </>
    );
  };

  const renderAnalysis = () => {
    const d = analysisData[lang];
    return (
      <>
        <SectionTitle title={d.title} subtitle={d.subtitle} />
        {d.competitors.map((c, ci) => (
          <Card key={ci} style={{ marginBottom: 16 }}>
            <div style={{ padding: "16px 18px 12px", borderBottom: `1px solid ${s.border}` }}>
              <div style={{ fontFamily: s.font, fontSize: 16, fontWeight: 700, color: s.dark }}>{c.name}</div>
            </div>
            <div style={{ padding: "12px 18px" }}>
              <Label color="#3A7D1E">✦ {lang === "en" ? "Strengths" : "Fortalezas"}</Label>
              {c.strengths.map((st, i) => <div key={i} style={{ fontFamily: s.font, fontSize: 12, color: s.dark, marginBottom: 4, lineHeight: 1.45, paddingLeft: 12 }}>• {st}</div>)}
              <div style={{ height: 12 }} />
              <Label color="#C4883A">⚠ {lang === "en" ? "Weaknesses" : "Debilidades"}</Label>
              {c.weaknesses.map((w, i) => <div key={i} style={{ fontFamily: s.font, fontSize: 12, color: s.dark, marginBottom: 4, lineHeight: 1.45, paddingLeft: 12 }}>• {w}</div>)}
              <div style={{ height: 12 }} />
              <Label color="#5B7AB5">→ {lang === "en" ? "What We Take" : "Lo Que Tomamos"}</Label>
              <p style={{ fontFamily: s.font, fontSize: 13, color: s.dark, margin: 0, lineHeight: 1.55, paddingLeft: 12 }}>{c.whatWeTake}</p>
            </div>
          </Card>
        ))}
        <Card style={{ background: s.accent }}>
          <div style={{ padding: "20px 18px" }}>
            <Label color="rgba(255,255,255,0.5)">{d.ourAdvantage.title}</Label>
            {d.ourAdvantage.items.map((item, i) => (
              <div key={i} style={{ marginBottom: 14 }}>
                <div style={{ fontFamily: s.font, fontSize: 14, fontWeight: 600, color: "#fff" }}>{item.moat}</div>
                <div style={{ fontFamily: s.font, fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 3, lineHeight: 1.5 }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </Card>
      </>
    );
  };

  const renderAI = () => {
    const d = aiData[lang];
    return (
      <>
        <SectionTitle title={d.title} subtitle={d.subtitle} />
        <Card style={{ marginBottom: 20, background: "linear-gradient(135deg, #2D501610, #3A7D1E08)" }}>
          <div style={{ padding: "20px 18px" }}>
            <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 18, color: s.accent, margin: 0, lineHeight: 1.4, fontStyle: "italic" }}>{d.tagline}</p>
          </div>
        </Card>
        <p style={{ fontFamily: s.font, fontSize: 13, color: s.sub, lineHeight: 1.6, marginBottom: 20 }}>{d.intro}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
          {d.capabilities.map((cap, i) => (
            <Card key={i}><div style={{ padding: "16px 18px", display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{ fontSize: 24, flexShrink: 0, marginTop: 2 }}>{cap.icon}</div>
              <div>
                <div style={{ fontFamily: s.font, fontSize: 14, fontWeight: 600, color: s.dark }}>{cap.title}</div>
                <div style={{ fontFamily: s.font, fontSize: 12, color: s.sub, marginTop: 4, lineHeight: 1.55 }}>{cap.desc}</div>
              </div>
            </div></Card>
          ))}
        </div>
        <Card style={{ marginBottom: 16 }}>
          <div style={{ padding: "16px 18px" }}>
            <Label color={s.accent}>{d.whyItMatters.title}</Label>
            {d.whyItMatters.points.map((p, i) => (
              <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start" }}>
                <span style={{ fontFamily: s.font, fontSize: 13, fontWeight: 700, color: s.accent, flexShrink: 0 }}>{i + 1}.</span>
                <span style={{ fontFamily: s.font, fontSize: 13, color: s.dark, lineHeight: 1.55 }}>{p}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card style={{ background: s.accent }}>
          <div style={{ padding: "20px 18px" }}>
            <Label color="rgba(255,255,255,0.5)">{d.operatorPitch.title}</Label>
            <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 18, color: "#fff", margin: 0, lineHeight: 1.4, fontStyle: "italic" }}>{d.operatorPitch.text}</p>
          </div>
        </Card>
      </>
    );
  };

  const renderModel = () => {
    const d = modelData[lang];
    return (
      <>
        <SectionTitle title={d.title} subtitle={d.subtitle} />
        {d.tiers.map((tier, i) => (
          <Card key={i} style={{ marginBottom: 12 }}>
            <div style={{ padding: "14px 18px", borderBottom: `1px solid ${s.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontFamily: s.font, fontSize: 16, fontWeight: 700, color: tier.color }}>{tier.name}</div>
                <div style={{ fontFamily: s.font, fontSize: 11, color: s.muted, marginTop: 2 }}>{tier.purpose}</div>
              </div>
              <div style={{ fontFamily: s.font, fontSize: 14, fontWeight: 700, background: "#F0EDE5", padding: "4px 12px", borderRadius: 20 }}>{tier.price}</div>
            </div>
            <div style={{ padding: "12px 18px 16px" }}>
              {tier.features.map((f, fi) => (
                <div key={fi} style={{ display: "flex", gap: 8, marginBottom: 4, alignItems: "flex-start" }}>
                  <span style={{ color: tier.color, fontSize: 11, marginTop: 2 }}>✦</span>
                  <span style={{ fontFamily: s.font, fontSize: 13, color: s.dark, lineHeight: 1.45 }}>{f}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
        <Card style={{ marginTop: 16, marginBottom: 16 }}>
          <div style={{ padding: "16px 18px" }}>
            <Label color={s.accent}>{d.paymentModel.title}</Label>
            <p style={{ fontFamily: s.font, fontSize: 12, color: s.muted, margin: "0 0 12px", lineHeight: 1.5 }}>{d.paymentModel.desc}</p>
            {d.paymentModel.options.map((opt, i) => (
              <div key={i} style={{ marginBottom: 12, padding: "12px 14px", background: "#FDFBF7", borderRadius: 8 }}>
                <div style={{ fontFamily: s.font, fontSize: 13, fontWeight: 600, color: s.dark }}>{opt.name}</div>
                <div style={{ fontFamily: s.font, fontSize: 12, color: s.sub, marginTop: 4, lineHeight: 1.5 }}>{opt.detail}</div>
              </div>
            ))}
          </div>
        </Card>
        <Card style={{ marginBottom: 16 }}>
          <div style={{ padding: "16px 18px" }}>
            <Label color={s.accent}>{d.pricing.title}</Label>
            <p style={{ fontFamily: s.font, fontSize: 13, color: s.dark, margin: 0, lineHeight: 1.55 }}>{d.pricing.desc}</p>
          </div>
        </Card>
        <Card style={{ marginBottom: 16 }}>
          <div style={{ padding: "16px 18px" }}>
            <Label color={s.accent}>{d.tradeoffs.title}</Label>
            {d.tradeoffs.items.map((item, i) => (
              <div key={i} style={{ marginBottom: 10, padding: "10px 12px", background: i === 2 ? `${s.accent}08` : "#FDFBF7", borderRadius: 8, border: i === 2 ? `1px solid ${s.accent}20` : "none" }}>
                <div style={{ fontFamily: s.font, fontSize: 13, fontWeight: 600, color: s.dark }}>{item.model}</div>
                <div style={{ fontFamily: s.font, fontSize: 12, marginTop: 3 }}>
                  <span style={{ color: "#3A7D1E" }}>+</span> <span style={{ color: s.sub }}>{item.pro}</span>
                  <span style={{ margin: "0 6px", color: s.muted }}>|</span>
                  <span style={{ color: "#C4883A" }}>−</span> <span style={{ color: s.sub }}>{item.con}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Label>{d.badges.title}</Label>
        <p style={{ fontFamily: s.font, fontSize: 12, color: s.muted, margin: "-4px 0 12px", lineHeight: 1.5 }}>{d.badges.desc}</p>
        {d.badges.items.map((b, i) => (
          <Card key={i} style={{ marginBottom: 8 }}>
            <div style={{ padding: "12px 16px", display: "flex", gap: 12, alignItems: "center" }}>
              <span style={{ fontSize: 22 }}>{b.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: s.font, fontSize: 13, fontWeight: 600 }}>
                  {b.name}
                  {b.exclusive && <span style={{ fontSize: 9, background: s.accent, color: "#fff", padding: "2px 6px", borderRadius: 4, marginLeft: 8, fontWeight: 700 }}>{l.exclusive}</span>}
                </div>
                <div style={{ fontFamily: s.font, fontSize: 12, color: s.muted, marginTop: 2 }}>{b.rule}</div>
              </div>
            </div>
          </Card>
        ))}
      </>
    );
  };

  const renderJourneys = () => {
    const d = journeysData[lang];
    const renderScreens = (journey, color) => (
      <>
        <h3 style={{ fontSize: 18, fontWeight: 400, margin: "0 0 4px", fontFamily: "'Instrument Serif', Georgia, serif" }}>{journey.title}</h3>
        <p style={{ fontFamily: s.font, fontSize: 13, color: s.muted, margin: "0 0 16px" }}>{journey.subtitle}</p>
        {journey.screens.map((screen, i) => (
          <Card key={i} style={{ marginBottom: 12 }}>
            <div style={{ padding: "12px 18px", borderBottom: `1px solid ${s.border}`, background: `${color}06` }}>
              <div style={{ fontFamily: s.font, fontSize: 11, fontWeight: 700, letterSpacing: 1, color: s.muted, textTransform: "uppercase" }}>
                {lang === "en" ? "Screen" : "Pantalla"} {i + 1}
              </div>
              <div style={{ fontFamily: s.font, fontSize: 14, fontWeight: 600, color: s.dark, marginTop: 2 }}>{screen.name}</div>
            </div>
            <div style={{ padding: "12px 18px" }}>
              {[{ label: l.header, text: screen.header, color: s.accent }, { label: l.content, text: screen.content, color: s.sub }, { label: l.action, text: screen.action, color: "#3A7D1E" }].map((row, ri) => (
                <div key={ri} style={{ marginBottom: ri < 2 ? 10 : 0 }}>
                  <div style={{ fontFamily: s.font, fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: row.color, marginBottom: 3 }}>{row.label}</div>
                  <p style={{ fontFamily: s.font, fontSize: 13, color: s.dark, margin: 0, lineHeight: 1.55 }}>{row.text}</p>
                </div>
              ))}
            </div>
          </Card>
        ))}
        {journey.whatsappFlow && (
          <Card style={{ background: "#1A2E0A", marginBottom: 28 }}>
            <div style={{ padding: "16px 18px" }}>
              <Label color="rgba(255,255,255,0.4)">💬 WhatsApp</Label>
              <p style={{ fontFamily: s.font, fontSize: 13, color: "rgba(255,255,255,0.85)", margin: 0, lineHeight: 1.55 }}>{journey.whatsappFlow}</p>
            </div>
          </Card>
        )}
      </>
    );
    return (
      <>
        {renderScreens(d.operator, s.accent)}
        <div style={{ height: 8 }} />
        {renderScreens(d.traveler, "#5B7AB5")}
      </>
    );
  };

  const renderStack = () => {
    const d = stackData[lang];
    return (
      <>
        <SectionTitle title={d.title} subtitle={d.subtitle} />
        {d.items.map((item, i) => (
          <Card key={i} style={{ marginBottom: 10 }}>
            <div style={{ padding: "16px 18px", display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "#F0EDE5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{item.icon}</div>
              <div>
                <div style={{ fontFamily: s.font, fontSize: 14, fontWeight: 600 }}>{item.name}</div>
                <div style={{ fontFamily: s.font, fontSize: 12, color: s.muted, marginTop: 3, lineHeight: 1.5 }}>{item.role}</div>
              </div>
            </div>
          </Card>
        ))}
        <Card style={{ marginTop: 16, marginBottom: 16 }}>
          <div style={{ padding: "16px 18px" }}>
            <Label color={s.accent}>{lang === "en" ? "Data Flow" : "Flujo de Datos"}</Label>
            {d.flows.map((f, i) => (
              <div key={i} style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "center", fontFamily: s.font, fontSize: 12 }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: s.accent, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                <div style={{ lineHeight: 1.45 }}>
                  <span style={{ fontWeight: 600 }}>{f.from}</span>
                  <span style={{ color: s.muted, margin: "0 4px" }}>→</span>
                  <span style={{ fontWeight: 600 }}>{f.to}</span>
                  <br /><span style={{ fontSize: 11, color: s.muted }}>{f.note}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card style={{ background: "#F8F6F0" }}>
          <div style={{ padding: "16px 18px" }}>
            <Label color={s.accent}>💡 {lang === "en" ? "Why Supabase" : "¿Por Qué Supabase?"}</Label>
            <p style={{ fontFamily: s.font, fontSize: 13, color: s.dark, margin: 0, lineHeight: 1.55 }}>{d.whySupabase}</p>
          </div>
        </Card>
      </>
    );
  };

  const renderRoadmap = () => {
    const data = roadmapData[lang];
    const p = data[phase];
    return (
      <>
        <SectionTitle title={lang === "en" ? "10-Month Launch Roadmap" : "Hoja de Ruta — 10 Meses"} subtitle={lang === "en" ? "5 phases, 2 months each. From first operator to 4-country marketplace." : "5 fases, 2 meses cada una. Del primer operador a un marketplace en 4 países."} />
        <div style={{ display: "flex", gap: 2, marginBottom: 8, borderRadius: 6, overflow: "hidden" }}>
          {data.map((ph, i) => <div key={i} style={{ flex: 1, height: 4, background: i <= phase ? ph.color : "#E5E0D5", transition: "background 0.3s" }} />)}
        </div>
        <div style={{ fontFamily: s.font, fontSize: 11, color: s.muted, marginBottom: 16, display: "flex", justifyContent: "space-between" }}>
          <span>{l.month} 1</span><span>{l.month} 10</span>
        </div>
        <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
          {data.map((ph, i) => (
            <button key={i} onClick={() => setPhase(i)} style={{
              flex: 1, border: "none", cursor: "pointer", borderRadius: 8, padding: "8px 4px",
              background: phase === i ? ph.color : "#F0EDE5", color: phase === i ? "#fff" : s.muted,
              fontFamily: s.font, fontSize: 9, fontWeight: 600, letterSpacing: 0.5, textTransform: "uppercase",
              transition: "all 0.2s", height: phase === i ? 56 : 44,
            }}>
              <div style={{ fontSize: 14, marginBottom: 2 }}>{["🌱","🌿","🌸","🌳","🏔"][i]}</div>
              {ph.label}<br /><span style={{ fontSize: 7, opacity: 0.8 }}>{ph.weeks}</span>
            </button>
          ))}
        </div>
        <Card>
          <div style={{ padding: "18px 18px 14px", borderBottom: `1px solid ${s.border}`, background: `${p.color}06` }}>
            <div style={{ fontFamily: s.font, fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: p.color, marginBottom: 4 }}>{p.label} · {p.weeks}</div>
            <h3 style={{ fontSize: 22, margin: "0 0 4px", fontWeight: 400, fontFamily: "'Instrument Serif', Georgia, serif" }}>{p.title}</h3>
            <p style={{ fontFamily: s.font, fontSize: 13, color: s.sub, margin: 0 }}>{p.goal}</p>
          </div>
          <div style={{ padding: "14px 18px" }}>
            {p.tasks.map((g, gi) => (
              <div key={gi} style={{ marginBottom: gi < p.tasks.length - 1 ? 16 : 0 }}>
                <Label>{g.cat}</Label>
                {g.items.map((item, ii) => (
                  <div key={ii} style={{ display: "flex", gap: 8, marginBottom: 5, alignItems: "flex-start" }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: p.color, marginTop: 6, flexShrink: 0, opacity: 0.6 }} />
                    <span style={{ fontFamily: s.font, fontSize: 13, color: s.dark, lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ padding: "12px 18px", background: `${p.color}08`, borderTop: `1px solid ${p.color}15` }}>
            <Label color={p.color}>✦ {l.milestone}</Label>
            <p style={{ fontFamily: s.font, fontSize: 13, color: s.dark, margin: 0, lineHeight: 1.5 }}>{p.milestone}</p>
          </div>
          <div style={{ padding: "10px 18px", borderTop: `1px solid ${s.border}`, background: "#FDFBF7" }}>
            <Label color="#C4883A">⚠ {l.riskLabel}</Label>
            <p style={{ fontFamily: s.font, fontSize: 12, color: s.muted, margin: 0 }}>{p.risk}</p>
          </div>
        </Card>
      </>
    );
  };

  const renderRevenue = () => {
    const rev = revData[lang];
    return (
      <>
        <SectionTitle title={lang === "en" ? "Revenue Projections" : "Proyección de Ingresos"} subtitle={lang === "en" ? "Conservative estimates based on hybrid model across 10-month timeline." : "Estimaciones conservadoras basadas en modelo híbrido en línea de tiempo de 10 meses."} />
        <Card style={{ background: s.accent, marginBottom: 20 }}>
          <div style={{ padding: "20px 18px" }}>
            <Label color="rgba(255,255,255,0.4)">{lang === "en" ? "Revenue Timeline" : "Línea de Ingresos"}</Label>
            {rev.map((r, i) => (
              <div key={i} style={{ marginBottom: i < rev.length - 1 ? 16 : 0, paddingBottom: i < rev.length - 1 ? 16 : 0, borderBottom: i < rev.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                  <span style={{ fontFamily: s.font, fontSize: 13, fontWeight: 600, color: "#fff" }}>{r.phase} <span style={{ opacity: 0.5, fontWeight: 400 }}>· {r.label}</span></span>
                  <span style={{ fontFamily: s.font, fontSize: 14, fontWeight: 700, color: "#8FD460" }}>{r.revenue}</span>
                </div>
                <div style={{ fontFamily: s.font, fontSize: 12, color: "rgba(255,255,255,0.6)", lineHeight: 1.45 }}>{r.note}</div>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div style={{ padding: "16px 18px" }}>
            <Label color={s.accent}>{lang === "en" ? "Revenue Sources by Phase" : "Fuentes de Ingresos por Fase"}</Label>
            {[
              { phase: lang === "en" ? "Phase 0–1" : "Fase 0–1", sources: [lang === "en" ? "No revenue — 100% focused on building inventory and trust" : "Sin ingresos — 100% enfocado en construir inventario y confianza"] },
              { phase: lang === "en" ? "Phase 2" : "Fase 2", sources: [lang === "en" ? "Commissions: 8–10% on prepaid bookings" : "Comisiones: 8–10% en reservas prepagadas", lang === "en" ? "Subscriptions: Professional tier at $15–25/mo" : "Suscripciones: nivel Profesional a $15–25/mes"] },
              { phase: lang === "en" ? "Phase 3" : "Fase 3", sources: [lang === "en" ? "Commissions: growing with 2-country volume" : "Comisiones: creciendo con volumen de 2 países", lang === "en" ? "Subscriptions: expanding operator base" : "Suscripciones: base de operadores en expansión", lang === "en" ? "Featured placements: à la carte premium spots" : "Colocaciones destacadas: spots premium à la carte"] },
              { phase: lang === "en" ? "Phase 4" : "Fase 4", sources: [lang === "en" ? "All above at 4-country scale" : "Todo lo anterior a escala de 4 países", lang === "en" ? "Affiliate API revenue from travel bloggers" : "Ingresos API de afiliados de bloggers de viaje", lang === "en" ? "Organic traffic reduces acquisition cost to near zero" : "Tráfico orgánico reduce costo de adquisición a casi cero"] },
            ].map((p, i) => (
              <div key={i} style={{ marginBottom: 14 }}>
                <div style={{ fontFamily: s.font, fontSize: 13, fontWeight: 600, color: s.dark, marginBottom: 4 }}>{p.phase}</div>
                {p.sources.map((src, si) => (
                  <div key={si} style={{ fontFamily: s.font, fontSize: 12, color: s.sub, marginBottom: 3, paddingLeft: 12, lineHeight: 1.45 }}>• {src}</div>
                ))}
              </div>
            ))}
          </div>
        </Card>
      </>
    );
  };

  const sections = [renderProblem, renderAnalysis, renderAI, renderModel, renderJourneys, renderStack, renderRoadmap, renderRevenue];

  return (
    <div style={{ background: s.bg, minHeight: "100vh", fontFamily: "'Instrument Serif', Georgia, serif", color: s.dark }}>
      {/* Hero */}
      <div style={{ background: "linear-gradient(165deg, #1A2E0A 0%, #2D5016 40%, #3A7D1E 100%)", padding: "40px 28px 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -60, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
        <button onClick={() => { const next = lang === "es" ? "en" : "es"; setLang(next); const url = new URL(window.location); url.searchParams.set("lang", next); window.history.replaceState({}, "", url); }} style={{
          position: "absolute", top: 16, right: 16, zIndex: 5, border: "1px solid rgba(255,255,255,0.25)",
          borderRadius: 20, padding: "5px 14px", background: "rgba(255,255,255,0.1)", cursor: "pointer",
          fontFamily: s.font, fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: 1,
        }}>
          {lang === "es" ? "EN" : "ES"}
        </button>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontFamily: s.font, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 8 }}>{l.hero.sub}</div>
          <h1 style={{ fontSize: 36, margin: 0, color: "#fff", fontWeight: 400, lineHeight: 1.1 }}>{l.hero.title}</h1>
          <p style={{ fontFamily: s.font, fontSize: 13, color: "rgba(255,255,255,0.7)", margin: "8px 0 0", lineHeight: 1.5, maxWidth: 400 }}>{l.hero.desc}</p>
          <div style={{ fontFamily: s.font, display: "inline-block", marginTop: 14, fontSize: 10, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "#fff", background: "rgba(255,255,255,0.15)", padding: "5px 12px", borderRadius: 20 }}>{l.hero.badge}</div>
        </div>
      </div>

      {/* Tab bar */}
      <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", borderBottom: `1px solid ${s.border}`, background: s.bg, position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ display: "flex", minWidth: "max-content" }}>
          {l.tabs.map((label, i) => (
            <button key={i} onClick={() => setTab(i)} style={{
              padding: "12px 14px", border: "none", cursor: "pointer", whiteSpace: "nowrap",
              fontFamily: s.font, fontSize: 11, fontWeight: tab === i ? 600 : 400,
              background: "transparent", color: tab === i ? s.accent : s.muted,
              borderBottom: tab === i ? `2px solid ${s.accent}` : "2px solid transparent",
              transition: "all 0.2s",
            }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "24px 20px 40px" }}>
        {sections[tab]()}
      </div>

      <div style={{ padding: "16px 20px 24px", borderTop: `1px solid ${s.border}`, textAlign: "center" }}>
        <p style={{ fontFamily: s.font, fontSize: 11, color: s.muted, margin: 0 }}>{l.footer}</p>
      </div>
    </div>
  );
}
