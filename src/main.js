/**
 * PAZUR SEGUROS - MEDELLÍN & RIONEGRO, COLOMBIA
 * Modern interactive scripts: 14 sections support, Hero category selector,
 * Cotizador con mini-quiz (Autos & Salud), Directorio 24/7 de aseguradoras,
 * Timeline animada, Portafolio completo (20 pólizas), Formulario y Modales.
 */

// 1. Portafolio Oficial de 20 Pólizas (9 Personas, 5 Empresa, 6 Equipo)
export const insuranceData = {
  personas: [
    {
      id: "salud-personas",
      title: "Salud",
      tag: "Para ti y los tuyos",
      image: "https://res.cloudinary.com/mrjnagvc/image/upload/f_auto,q_auto,w_800/v1793851205/vitaly-gariev-XqMo4OlBnh0-unsplash_tsqcuv.jpg",
      highlight: "Atención oportuna y especialistas",
      badge: "Desde $92.000 / mes (2 personas)",
      desc: "Atención médica oportuna y acceso a especialistas para ti y tu familia.",
      details: [
        "Consultas directas con especialistas sin remisiones ni trámites demorados",
        "Habitación individual en caso de hospitalización y urgencias 24/7",
        "Cobertura en maternidad, exámenes diagnósticos avanzados y cirugías",
        "Atención médica domiciliaria y orientación telefónica continua",
        "Comparamos opciones con SURA, Allianz, Seguros Bolívar y más"
      ]
    },
    {
      id: "vida-personas",
      title: "Vida",
      tag: "Para ti y los tuyos",
      image: "https://res.cloudinary.com/mrjnagvc/image/upload/f_auto,q_auto,w_800/v1793849134/young-family-with-their-sons-home-having-fun_fdtwty.jpg",
      highlight: "Respaldo para tus sueños familiares",
      badge: "Protección financiera",
      desc: "Un respaldo económico para que los sueños de tu familia sigan su curso.",
      details: [
        "Indemnización por fallecimiento por cualquier causa",
        "Amparo por incapacidad total y permanente",
        "Anticipo por enfermedades graves (cáncer, infarto, ACV)",
        "Garantía para educación de tus hijos y metas a largo plazo",
        "Planes adaptados a tu presupuesto y etapa familiar"
      ]
    },
    {
      id: "accidentes-personas",
      title: "Accidentes personales",
      tag: "Para ti y los tuyos",
      image: "https://res.cloudinary.com/mrjnagvc/image/upload/f_auto,q_auto,w_800/v1793850995/towfiqu-barbhuiya-B3PxVCnbsSI-unsplash_uofstt.jpg",
      highlight: "Apoyo ante imprevistos",
      badge: "Cobertura inmediata",
      desc: "Apoyo económico ante lesiones o incapacidad por un accidente.",
      details: [
        "Reembolso de gastos médicos de urgencia por accidente",
        "Renta diaria por hospitalización o reposo médico",
        "Indemnización por desmembración o invalidez accidental",
        "Protección durante prácticas deportivas recreativas y traslados",
        "Emisión sencilla y sin trámites médicos complejos"
      ]
    },
    {
      id: "hogar-personas",
      title: "Hogar",
      tag: "Para ti y los tuyos",
      image: "https://res.cloudinary.com/mrjnagvc/image/upload/f_auto,q_auto,w_800/v1791481832/card-hogar_jqcyxg.jpg",
      highlight: "Estructura + Contenidos",
      badge: "Tu casa 100% protegida",
      desc: "Tu casa y todo lo que has construido, protegidos frente a imprevistos.",
      details: [
        "Cobertura frente a terremoto, sismo, incendio e inundaciones",
        "Protección contra hurto calificado y daños a electrodomésticos",
        "Asistencia de plomería, cerrajería y electricidad de emergencia 24/7",
        "Responsabilidad civil familiar por daños causados a vecinos o terceros",
        "Planes flexibles para propietarios o inquilinos arrendatarios"
      ]
    },
    {
      id: "autos-personas",
      title: "Autos y motos",
      tag: "Para ti y los tuyos",
      image: "https://res.cloudinary.com/mrjnagvc/image/upload/f_auto,q_auto,w_800/v1793849139/junior-reis-98AVD0fctzA-unsplash_odwhu8.jpg",
      highlight: "Rueda tranquilo 24/7",
      badge: "Asistencia en carretera",
      desc: "Rueda tranquilo con asistencia en carretera y respaldo ante terceros.",
      details: [
        "Responsabilidad Civil Extracontractual de amplia cobertura",
        "Pérdida total y parcial por daños o hurto",
        "Grúa nacional, conductor elegido y carro de reemplazo",
        "Asistencia jurídica y acompañamiento telefónico ante un choque",
        "Comparamos tarifas con o sin deducible según tu conveniencia"
      ]
    },
    {
      id: "mascotas-personas",
      title: "Mascotas",
      tag: "Para ti y los tuyos",
      image: "https://res.cloudinary.com/mrjnagvc/image/upload/f_auto,q_auto,w_800/v1791481831/vision-dog_hithzu.jpg",
      highlight: "Cuidado para quien es familia",
      badge: "Urgencias veterinarias",
      desc: "Cuidado veterinario para quien también es parte de la familia.",
      details: [
        "Consultas veterinarias por accidente o enfermedad imprevista",
        "Exámenes de laboratorio, medicamentos y cirugías",
        "Responsabilidad civil por daños que cause tu mascota a terceros",
        "Servicios exequiales y de eutanasia asistida con respeto y dignidad",
        "Red aliada de clínicas veterinarias en el Valle de Aburrá y Oriente"
      ]
    },
    {
      id: "bicicletas-personas",
      title: "Bicicletas",
      tag: "Para ti y los tuyos",
      image: "https://res.cloudinary.com/mrjnagvc/image/upload/f_auto,q_auto,w_800/v1793850994/tuvalum-PhEOyi3l-pQ-unsplash_sfkcq6.jpg",
      highlight: "Pedalea con confianza",
      badge: "Robo y accidentes",
      desc: "Protección ante daño o hurto para que sigas pedaleando.",
      details: [
        "Cobertura por hurto calificado en ciudad y carretera",
        "Daños parciales o totales por caída o colisión",
        "Responsabilidad civil por accidentes causados a peatones",
        "Asistencia de traslado y transporte de la bicicleta si se vara",
        "Aplica para bicicletas de ruta, montaña, urbanas y eléctricas"
      ]
    },
    {
      id: "responsabilidad-profesional",
      title: "Responsabilidad profesional",
      tag: "Para ti y los tuyos",
      image: "https://res.cloudinary.com/mrjnagvc/image/upload/f_auto,q_auto,w_800/v1793849136/christin-hume-Hcfwew744z4-unsplash_a7obzm.jpg",
      highlight: "Blindaje a tu profesión",
      badge: "Respaldo jurídico",
      desc: "Respaldo ante reclamaciones derivadas del ejercicio de tu profesión.",
      details: [
        "Amparo ante reclamaciones de clientes por errores u omisiones involuntarias",
        "Gastos de defensa legal, abogados especializados y costas judiciales",
        "Ideal para médicos, odontólogos, contadores, abogados, ingenieros y arquitectos",
        "Protección a tu patrimonio personal frente a demandas civiles",
        "Asesoría previa para evaluar los riesgos particulares de tu ejercicio"
      ]
    },
    {
      id: "cumplimiento-personas",
      title: "Cumplimiento",
      tag: "Para ti y los tuyos",
      image: "https://res.cloudinary.com/mrjnagvc/image/upload/f_auto,q_auto,w_800/v1793850993/romain-dancre-doplSDELX7E-unsplash_iia3jj.jpg",
      highlight: "Garantía contractual ágil",
      badge: "Licitaciones y contratos",
      desc: "La garantía que necesitas para firmar contratos con confianza.",
      details: [
        "Pólizas para personas naturales contratistas o consultores",
        "Garantías de cumplimiento, buen manejo de anticipo y calidad del servicio",
        "Trámite rápido para contratos con entidades públicas (SECOP) y privadas",
        "Estudio ágil de cupos y emisión en tiempos récord",
        "Acompañamiento en el cumplimiento estricto de los términos de referencia"
      ]
    }
  ],
  empresariales: [
    {
      id: "todo-riesgo-empresa",
      title: "Todo riesgo empresarial",
      tag: "Para tu empresa",
      image: "https://res.cloudinary.com/mrjnagvc/image/upload/f_auto,q_auto,w_800/v1791481834/Banner2_cyfnca.jpg",
      highlight: "Blindaje de tu operación",
      badge: "Instalaciones & Mercancía",
      desc: "Protege tus instalaciones, equipos y mercancía, y la continuidad de tu operación.",
      details: [
        "Daños materiales por incendio, explosión, terremoto o inundación",
        "Amparo de lucro cesante: cubrimiento de gastos fijos y utilidades si paras",
        "Hurto de mercancías, materias primas y dinero en caja",
        "Avería de maquinaria y equipos electrónicos de cómputo",
        "Asistencia técnica de emergencia en instalaciones comerciales"
      ]
    },
    {
      id: "responsabilidad-civil-empresa",
      title: "Responsabilidad civil",
      tag: "Para tu empresa",
      image: "https://res.cloudinary.com/mrjnagvc/image/upload/f_auto,q_auto,w_800/v1793849141/portrait-handsome-man-white-tee-sunglasses-holds-backpack-passport-tickets-poses-near-airport-good-mood_kk6afw.jpg",
      highlight: "Respaldo legal y económico",
      badge: "Daños a terceros",
      desc: "Respaldo legal y económico ante daños a terceros.",
      details: [
        "Responsabilidad civil de predios, labores y operaciones comerciales",
        "RCE patronal frente a accidentes laborales de colaboradores",
        "RCE de productos elaborados y servicios suministrados",
        "Gastos de defensa jurídica y representación legal calificada",
        "Requisito indispensable para contratar con grandes corporaciones"
      ]
    },
    {
      id: "cumplimiento-empresa",
      title: "Cumplimiento",
      tag: "Para tu empresa",
      image: "https://res.cloudinary.com/mrjnagvc/image/upload/f_auto,q_auto,w_800/v1793850993/romain-dancre-doplSDELX7E-unsplash_iia3jj.jpg",
      highlight: "Garantías gestionadas a tiempo",
      badge: "Licitaciones y contratos",
      desc: "Garantías para licitaciones y contratos, gestionadas a tiempo.",
      details: [
        "Seriedad de la oferta y garantía de cumplimiento de contrato",
        "Buen manejo y correcta inversión del anticipo",
        "Pago de salarios, prestaciones sociales e indemnizaciones",
        "Calidad del servicio y estabilidad de obras civiles",
        "Gestión expedita con las mejores aseguradoras del país"
      ]
    },
    {
      id: "fraudes-empresa",
      title: "Fraudes",
      tag: "Para tu empresa",
      image: "https://res.cloudinary.com/mrjnagvc/image/upload/f_auto,q_auto,w_800/v1793849136/christin-hume-Hcfwew744z4-unsplash_a7obzm.jpg",
      highlight: "Protección digital y financiera",
      badge: "Fraude y ciberriesgo",
      desc: "Protección frente a pérdidas por fraude, incluido el entorno digital.",
      details: [
        "Infidelidad de empleados o colaboradores clave",
        "Falsificación o alteración de instrumentos de pago y cheques",
        "Fraude computarizado y transferencias bancarias no autorizadas",
        "Pérdida de dinero y valores en tránsito o en instalaciones",
        "Respaldo ante delitos financieros que pongan en riesgo la empresa"
      ]
    },
    {
      id: "flota-transporte",
      title: "Flota de transporte",
      tag: "Para tu empresa",
      image: "https://res.cloudinary.com/mrjnagvc/image/upload/f_auto,q_auto,w_800/v1793849139/junior-reis-98AVD0fctzA-unsplash_odwhu8.jpg",
      highlight: "Los vehículos que mueven tu negocio",
      badge: "Tarifas corporativas",
      desc: "Cobertura integral para los vehículos que mueven tu negocio.",
      details: [
        "Pólizas todo riesgo para camiones, utilitarios y vehículos de carga",
        "Amparo ante pérdidas totales o parciales por choque o hurto",
        "Cobertura de transporte de mercancías nacional y urbano",
        "Asistencia vial para vehículos comerciales y grúas especializadas",
        "Administración centralizada de vencimientos y trámites con Pazur"
      ]
    }
  ],
  colectivas: [
    {
      id: "salud-colectiva",
      title: "Salud colectiva",
      tag: "Para tu equipo",
      image: "https://res.cloudinary.com/mrjnagvc/image/upload/f_auto,q_auto,w_800/v1793849137/happy-stylish-caucasian-man-with-backpack-travel-rice-plantation-making-self-portrai-memories_izcg8e.jpg",
      highlight: "Bienestar con condiciones de grupo",
      badge: "Beneficio para colaboradores",
      desc: "Bienestar médico para tus colaboradores con condiciones de grupo.",
      details: [
        "Planes de salud corporativos con tarifas preferenciales negociadas",
        "Posibilidad de extender la cobertura a cónyuge e hijos",
        "Acceso directo a especialistas y la mejor red hospitalaria",
        "Beneficios tributarios de bienestar social para la empresa",
        "Acompañamiento personalizado de Pazur en la gestión de citas"
      ]
    },
    {
      id: "vida-colectiva",
      title: "Vida colectiva",
      tag: "Para tu equipo",
      image: "https://res.cloudinary.com/mrjnagvc/image/upload/f_auto,q_auto,w_800/v1793849132/ta-focando-LOuffSFpWQI-unsplash_ngyksr.jpg",
      highlight: "Respaldo para sus familias",
      badge: "Protección integral",
      desc: "Respaldo para las familias de tu equipo.",
      details: [
        "Indemnización a beneficiarios por fallecimiento por cualquier causa",
        "Amparo por incapacidad total y permanente",
        "Planes con valor asegurado fijo o múltiplo de salarios",
        "Opciones con pago patronal o deducción por nómina",
        "Emisión colectiva ágil sin exámenes médicos individuales"
      ]
    },
    {
      id: "autos-colectiva",
      title: "Autos y motos colectiva",
      tag: "Para tu equipo",
      image: "https://res.cloudinary.com/mrjnagvc/image/upload/f_auto,q_auto,w_800/v1793849139/junior-reis-98AVD0fctzA-unsplash_odwhu8.jpg",
      highlight: "Descuento por volumen",
      badge: "Vehículos del grupo",
      desc: "Protección para los vehículos de tu organización o grupo.",
      details: [
        "Tarifas corporativas exclusivas para empleados y directivos",
        "Mismas coberturas todo riesgo premium a un costo menor",
        "Facilidad de pago descontado por nómina o pago directo",
        "Asistencia en carretera 24/7 y grúa nacional",
        "Manejo de siniestros coordinado por un asesor Pazur dedicado"
      ]
    },
    {
      id: "hogar-colectiva",
      title: "Hogar colectiva",
      tag: "Para tu equipo",
      image: "https://res.cloudinary.com/mrjnagvc/image/upload/f_auto,q_auto,w_800/v1791481832/card-hogar_jqcyxg.jpg",
      highlight: "Beneficios de grupo para la casa",
      badge: "Tranquilidad familiar",
      desc: "Beneficios en protección del hogar para los miembros de tu grupo.",
      details: [
        "Tarifas preferenciales en seguros de vivienda y contenidos",
        "Protección contra terremoto, incendio y hurto",
        "Asistencias domiciliarias de cerrajería, plomería y electricidad",
        "Disponible para fondos de empleados, cooperativas y gremios",
        "Un gran incentivo de bienestar y retención de talento"
      ]
    },
    {
      id: "accidentes-colectiva",
      title: "Accidentes colectiva",
      tag: "Para tu equipo",
      image: "https://res.cloudinary.com/mrjnagvc/image/upload/f_auto,q_auto,w_800/v1793849133/holly-mandarich-UVyOfX3v0Ls-unsplash_bg1e5c.jpg",
      highlight: "Cobertura para todo el equipo",
      badge: "Eventos y labores",
      desc: "Cobertura ante accidentes para todo tu equipo.",
      details: [
        "Atención médica de urgencia por accidentes en jornadas o traslados",
        "Indemnización por invalidez accidental o desmembración",
        "Ideal para empresas, eventos, colegios y academias",
        "Carnetización y atención sin trámites dilatados",
        "Excelente complemento a los amparos obligatorios de ley"
      ]
    },
    {
      id: "pac-sura",
      title: "PAC SURA",
      tag: "Para tu equipo",
      image: "https://res.cloudinary.com/mrjnagvc/image/upload/f_auto,q_auto,w_800/v1793849134/young-family-with-their-sons-home-having-fun_fdtwty.jpg",
      highlight: "Mejora la atención en salud",
      badge: "Plan Complementario",
      desc: "El plan complementario que mejora la atención de salud de tu grupo.",
      details: [
        "Plan de Atención Complementaria SURA con tarifas de grupo",
        "Habitación individual, acceso rápido a especialistas y red preferente",
        "Articulación perfecta con la EPS SURA de tus colaboradores",
        "Diferentes planes (Básico, Plus) según el presupuesto empresarial",
        "Asesoría directa de Pazur para afiliar a tu equipo sin fricción"
      ]
    }
  ]
};

// 2. Directorio Oficial de Aseguradoras Aliadas y Líneas 24/7
export const insurersDirectory = [
  {
    id: "sura",
    name: "SURA",
    shortCode: "#888",
    nationalPhone: "01 8000 51 8888",
    cellDial: "tel:#888",
    logoColor: "#0033A0",
    specialty: "Líder en Salud, Autos y Vida",
    description: "Asistencia de grúa, choque, urgencias médicas y hogar 24/7."
  },
  {
    id: "mapfre",
    name: "MAPFRE",
    shortCode: "#324",
    nationalPhone: "01 8000 919 738",
    cellDial: "tel:#324",
    logoColor: "#D81E05",
    specialty: "Autos, Empresas y Hogar",
    description: "Atención inmediata en carretera y siniestros a nivel nacional."
  },
  {
    id: "bolivar",
    name: "Seguros Bolívar",
    shortCode: "#322",
    nationalPhone: "01 8000 123 322",
    cellDial: "tel:#322",
    logoColor: "#1B7E36",
    specialty: "Salud, Vida, Autos y Cumplimiento",
    description: "Asistencia verde 24 horas y orientación en accidentes."
  },
  {
    id: "allianz",
    name: "Allianz Colombia",
    shortCode: "#265",
    nationalPhone: "01 8000 513 888",
    cellDial: "tel:#265",
    logoColor: "#003780",
    specialty: "Salud Premium, Autos y Empresas",
    description: "Red médica nacional y asistencia vehicular de alta gama."
  },
  {
    id: "liberty",
    name: "Liberty Seguros",
    shortCode: "#224",
    nationalPhone: "01 8000 113 390",
    cellDial: "tel:#224",
    logoColor: "#1E2B4D",
    specialty: "Autos, Cumplimiento y Todo Riesgo",
    description: "Atención prioritaria en carretera y siniestros empresariales."
  },
  {
    id: "sbs",
    name: "SBS Seguros",
    shortCode: "#727",
    nationalPhone: "01 8000 522 727",
    cellDial: "tel:#727",
    logoColor: "#5A2B81",
    specialty: "Patrimonio, Flotas y Cumplimiento",
    description: "Línea rápida para reporte de daños, pólizas y asistencias."
  },
  {
    id: "panamerican",
    name: "Pan American Life",
    shortCode: "01 8000 913 232",
    nationalPhone: "01 8000 913 232",
    cellDial: "tel:018000913232",
    logoColor: "#0D5C75",
    specialty: "Vida Individual y Colectiva",
    description: "Especialistas en protección de vida y salud internacional."
  },
  {
    id: "qualitas",
    name: "Qualitas Seguros",
    shortCode: "01 8000 180 044",
    nationalPhone: "01 8000 180 044",
    cellDial: "tel:018000180044",
    logoColor: "#6C205E",
    specialty: "Autos y Movilidad Especializada",
    description: "Respaldo y grúa para vehículos particulares y de trabajo."
  }
];

// Estado del Paquete Unificado
let selectedBundle = ['salud', 'auto'];

const bundleItems = [
  { id: 'salud', name: 'Salud & Medicina Prepagada', icon: '🩺', label: 'Desde $92.000/mes' },
  { id: 'auto', name: 'Autos & Motos Todo Riesgo', icon: '🚗', label: 'Protección 24/7' },
  { id: 'hogar', name: 'Hogar & Estructura', icon: '🏠', label: 'Sismo y contenidos' },
  { id: 'vida', name: 'Vida & Sueños Familiares', icon: '🛡️', label: 'Respaldo futuro' },
  { id: 'mascotas', name: 'Mascotas & Bicicletas', icon: '🐾', label: 'Veterinaria y hurto' },
  { id: 'empresa', name: 'Empresa & Cumplimiento', icon: '🏢', label: 'RCE y todo riesgo' }
];

document.addEventListener('DOMContentLoaded', () => {
  const legacyRoutes = {portafolio:'/polizas/', paquete:'/polizas/#paquete', cotizador:'/cotizador/', 'como-trabajamos':'/como-trabajamos/', siniestros:'/siniestros/', equipo:'/nosotros/', blog:'/blog/', faq:'/preguntas-frecuentes/', contacto:'/contactar/#contacto'};
  if (window.location.pathname === '/' && legacyRoutes[window.location.hash.slice(1)]) {
    window.location.replace(legacyRoutes[window.location.hash.slice(1)]);
    return;
  }
  initAlliesTicker();
  initNavbarScroll();
  initMobileNav();
  initHeroCategorySelector();
  initPortfolioTabs();
  initCotizadoresSection();
  initTimelineScroll();
  initSiniestrosDirectory();
  initBundleBuilder();
  initFaqAccordion();
  initContactForm();
  initQuoteModal();
  initPortfolioDetailsModal();
  initScrollAnimations();
});

/**
 * Navbar elevation on scroll
 */
function initNavbarScroll() {
  const navbar = document.getElementById('navbarPill');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  }, { passive: true });
}

/**
 * Mobile Navigation Drawer
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const overlay = document.getElementById('mobileNavOverlay');
  const closeBtn = document.getElementById('mobileNavClose');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !overlay) return;

  const openDrawer = () => {
    overlay.classList.add('is-open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  };
  const closeDrawer = () => {
    overlay.classList.remove('is-open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    toggleBtn.focus();
  };
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && overlay.classList.contains('is-open')) closeDrawer();
  });

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeDrawer();
  });

  links.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/**
 * Hero Category Selector: "¿Qué quieres proteger hoy?"
 */
function initHeroCategorySelector() {
  document.querySelectorAll('.hero-tag-btn').forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const target = btn.dataset.protectTarget;
      if (target === 'auto' || target === 'salud') {
        window.location.assign(`/cotizador/?tipo=${target === 'auto' ? 'autos' : 'salud'}`);
      } else {
        const category = target === 'empresa' ? 'empresariales' : target === 'equipo' ? 'colectivas' : 'personas';
        window.location.assign(`/polizas/?categoria=${category}`);
      }
    });
  });
}

/**
 * Portafolio Category Tabs (Personas, Empresariales, Colectivas)
 */
function initPortfolioTabs() {
  const tabButtons = document.querySelectorAll('.portfolio-tab-btn');
  const cardsContainer = document.getElementById('portfolioCardsGrid');
  if (!tabButtons.length || !cardsContainer) return;

  const category = new URLSearchParams(window.location.search).get('categoria');
  const initialCategory = Object.hasOwn(insuranceData, category) ? category : 'personas';
  tabButtons.forEach(btn => btn.classList.toggle('is-active', btn.dataset.category === initialCategory));
  renderPortfolioCards(initialCategory);

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;
      if (!category) return;
      switchPortfolioTab(category);
    });
  });
}

function switchPortfolioTab(category) {
  const tabButtons = document.querySelectorAll('.portfolio-tab-btn');
  const cardsContainer = document.getElementById('portfolioCardsGrid');
  if (!tabButtons.length || !cardsContainer) return;

  tabButtons.forEach(b => {
    b.classList.toggle('is-active', b.dataset.category === category);
  });

  cardsContainer.style.opacity = '0';
  cardsContainer.style.transform = 'translateY(8px)';
  cardsContainer.style.transition = 'all 0.22s ease';

  setTimeout(() => {
    renderPortfolioCards(category);
    cardsContainer.style.opacity = '1';
    cardsContainer.style.transform = 'translateY(0)';
  }, 220);
}

function renderPortfolioCards(category) {
  const container = document.getElementById('portfolioCardsGrid');
  if (!container) return;

  const items = insuranceData[category] || insuranceData.personas;

  container.innerHTML = items.map((item, index) => `
    <article class="portfolio-card reveal-fade-up is-revealed" data-card-id="${item.id}" data-category="${category}">
      <div class="portfolio-card-media">
        <img src="${item.image}" alt="${item.title}" class="portfolio-card-img" loading="lazy" />
        <span class="portfolio-card-tag">${item.tag}</span>
        ${item.badge ? `<span class="portfolio-card-badge-pill">${item.badge}</span>` : ''}
      </div>
      <div class="portfolio-card-body">
        <div>
          <div class="portfolio-card-title-row">
            <h3 class="portfolio-card-title">${item.title}</h3>
          </div>
          <p class="portfolio-card-desc">${item.desc}</p>
        </div>
        <div class="portfolio-card-footer-actions">
          <button class="btn btn-card-learn" data-card-action="details" data-card-id="${item.id}" data-category="${category}">
            <span>Conocer más</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          <button class="btn btn-card-quote" data-card-action="quote" data-policy="${item.title}">
            <span>Cotizar</span>
          </button>
        </div>
      </div>
    </article>
  `).join('');

  // Attach card click handlers
  const detailsBtns = container.querySelectorAll('[data-card-action="details"]');
  detailsBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openDetailsModal(btn.dataset.cardId, btn.dataset.category);
    });
  });

  const quoteBtns = container.querySelectorAll('[data-card-action="quote"]');
  quoteBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openQuoteModalWithPolicy(btn.dataset.policy);
    });
  });
}

/**
 * Sección 5. Cotizadores Interactivos de Autos y Salud con Mini-Quiz
 */
function initCotizadoresSection() {
  const tabAutos = document.getElementById('cotizadorTabAutos');
  const tabSalud = document.getElementById('cotizadorTabSalud');
  const formAutos = document.getElementById('formCotizadorAutos');
  const formSalud = document.getElementById('formCotizadorSalud');

  if (tabAutos && tabSalud) {
    tabAutos.addEventListener('click', () => switchCotizadorTab('autos'));
    tabSalud.addEventListener('click', () => switchCotizadorTab('salud'));
  }

  const initialType = new URLSearchParams(window.location.search).get('tipo');
  if (initialType === 'salud' || initialType === 'autos') switchCotizadorTab(initialType);

  // Format Placa Input (e.g. ABC123 -> ABC-123)
  const placaInput = document.getElementById('cotizAutoPlaca');
  if (placaInput) {
    placaInput.addEventListener('input', (e) => {
      let val = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
      if (val.length > 6) val = val.substring(0, 6);
      if (val.length > 3) {
        val = val.substring(0, 3) + ' · ' + val.substring(3);
      }
      e.target.value = val;
    });
  }

  // Autos form submission
  if (formAutos) {
    formAutos.addEventListener('submit', (e) => {
      e.preventDefault();
      const placa = document.getElementById('cotizAutoPlaca').value || 'Sin placa';
      const tipoVehiculo = document.querySelector('input[name="autoTipo"]:checked')?.value || 'Carro particular';
      const nombre = document.getElementById('cotizAutoNombre').value;
      const telefono = document.getElementById('cotizAutoTel').value;
      const qPrioridad = document.querySelector('input[name="autoPrioridad"]:checked')?.value || 'Equilibrio costo/cobertura';
      const qAsistencias = document.querySelector('input[name="autoAsistencias"]:checked')?.value || 'Sí, indispensable';
      const qUso = document.querySelector('input[name="autoUso"]:checked')?.value || 'Particular';

      showCotizadorConfirmation('autos', {
        nombre,
        telefono,
        resumen: `Placa: ${placa} (${tipoVehiculo}) · Prioridad: ${qPrioridad} · Asistencias: ${qAsistencias} · Uso: ${qUso}`
      });

      // Dispatch to WhatsApp
      const waMsg = `Hola Pazur Seguros! 🚗 Quisiera cotizar póliza para mi vehículo:%0A%0A• *Nombre:* ${encodeURIComponent(nombre)}%0A• *Teléfono:* ${encodeURIComponent(telefono)}%0A• *Placa:* ${encodeURIComponent(placa)}%0A• *Tipo:* ${encodeURIComponent(tipoVehiculo)}%0A• *Prioridad:* ${encodeURIComponent(qPrioridad)}%0A• *Asistencias:* ${encodeURIComponent(qAsistencias)}%0A• *Uso:* ${encodeURIComponent(qUso)}%0A%0A¿Podrían preparar mi cuadro comparativo entre SURA, MAPFRE, Bolívar y Allianz?`;

      const sendWaBtn = document.getElementById('btnCotizAutosWa');
      if (sendWaBtn) {
        sendWaBtn.onclick = () => window.open(`https://wa.me/573054034164?text=${waMsg}`, '_blank');
      }
    });
  }

  // Salud form submission
  if (formSalud) {
    formSalud.addEventListener('submit', (e) => {
      e.preventDefault();
      const personas = document.querySelector('input[name="saludPersonas"]:checked')?.value || '2 personas (pareja/familiar)';
      const edades = document.getElementById('cotizSaludEdades').value || 'No especificadas';
      const ciudad = document.getElementById('cotizSaludCiudad').value;
      const nombre = document.getElementById('cotizSaludNombre').value;
      const telefono = document.getElementById('cotizSaludTel').value;
      const qPrioridad = document.querySelector('input[name="saludPrioridad"]:checked')?.value || 'Equilibrio precio/cobertura';
      const qEps = document.querySelector('input[name="saludEps"]:checked')?.value || 'Sí';
      const qTipoPlan = document.querySelector('input[name="saludTipoPlan"]:checked')?.value || 'Asesoría entre PAC y Prepagada';

      showCotizadorConfirmation('salud', {
        nombre,
        telefono,
        resumen: `${personas} · Edades: ${edades} · Ciudad: ${ciudad} · Prioridad: ${qPrioridad} · EPS: ${qEps}`
      });

      // Dispatch to WhatsApp
      const waMsg = `Hola Pazur Seguros! 🩺 Quisiera cotizar plan de salud a mi medida:%0A%0A• *Nombre:* ${encodeURIComponent(nombre)}%0A• *Teléfono:* ${encodeURIComponent(telefono)}%0A• *Personas a asegurar:* ${encodeURIComponent(personas)}%0A• *Edades aproximadas:* ${encodeURIComponent(edades)}%0A• *Ciudad:* ${encodeURIComponent(ciudad)}%0A• *Prioridad:* ${encodeURIComponent(qPrioridad)}%0A• *Tiene EPS:* ${encodeURIComponent(qEps)}%0A• *Preferencia:* ${encodeURIComponent(qTipoPlan)}%0A%0A¿Podrían asesorarme con las opciones más convenientes?`;

      const sendWaBtn = document.getElementById('btnCotizSaludWa');
      if (sendWaBtn) {
        sendWaBtn.onclick = () => window.open(`https://wa.me/573054034164?text=${waMsg}`, '_blank');
      }
    });
  }
}

function switchCotizadorTab(tab) {
  const tabAutos = document.getElementById('cotizadorTabAutos');
  const tabSalud = document.getElementById('cotizadorTabSalud');
  const panelAutos = document.getElementById('panelCotizadorAutos');
  const panelSalud = document.getElementById('panelCotizadorSalud');

  if (tab === 'autos') {
    tabAutos?.classList.add('is-active');
    tabSalud?.classList.remove('is-active');
    panelAutos?.classList.remove('is-hidden');
    panelSalud?.classList.add('is-hidden');
  } else {
    tabSalud?.classList.add('is-active');
    tabAutos?.classList.remove('is-active');
    panelSalud?.classList.remove('is-hidden');
    panelAutos?.classList.add('is-hidden');
  }
}

function showCotizadorConfirmation(tipo, data) {
  const confCard = document.getElementById(`cotizConfirmCard_${tipo}`);
  const formEl = document.getElementById(tipo === 'autos' ? 'formCotizadorAutos' : 'formCotizadorSalud');
  if (confCard && formEl) {
    formEl.style.display = 'none';
    confCard.classList.remove('is-hidden');
    const resumeText = confCard.querySelector('.confirm-resume-text');
    if (resumeText) resumeText.textContent = data.resumen;
  }
}

/**
 * Sección 6. Timeline Animada (Antes, Durante, Después)
 */
function initTimelineScroll() {
  const steps = document.querySelectorAll('.timeline-step-card');
  if (!steps.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-active');
      }
    });
  }, {
    threshold: 0.25
  });

  steps.forEach(step => observer.observe(step));
}

/**
 * Sección 8. Siniestros & Directorio de Aseguradoras 24/7
 */
function initSiniestrosDirectory() {
  const grid = document.getElementById('siniestrosInsurersGrid');
  if (!grid) return;

  grid.innerHTML = insurersDirectory.map(ins => `
    <div class="insurer-card reveal-fade-up">
      <div class="insurer-card-header">
        <span class="insurer-badge-icon" style="background:${ins.logoColor}; color:#fff;">
          ${ins.name.substring(0, 1)}
        </span>
        <div>
          <h4 class="insurer-name">${ins.name}</h4>
          <span class="insurer-specialty">${ins.specialty}</span>
        </div>
      </div>
      <p class="insurer-desc">${ins.description}</p>
      <div class="insurer-actions">
        <a href="${ins.cellDial}" class="btn btn-call-short">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span>Marcar ${ins.shortCode}</span>
        </a>
        <a href="tel:${ins.nationalPhone.replace(/\s+/g, '')}" class="btn btn-call-national" title="Línea nacional gratuita">
          <span>${ins.nationalPhone}</span>
        </a>
      </div>
    </div>
  `).join('');
}

/**
 * Sección 9. Paquete Unificado Pazur (Ahorro Dúo / Familiar)
 */
function initBundleBuilder() {
  const container = document.getElementById('bundlePillsList');
  if (!container) return;

  renderBundlePills();

  const ctaBtn = document.getElementById('bundleWhatsAppBtn');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
      sendBundleToWhatsApp();
    });
  }
}

function renderBundlePills() {
  const container = document.getElementById('bundlePillsList');
  const counterPill = document.getElementById('bundleCounterPill');
  const calcInfo = document.getElementById('bundleCalcInfo');
  if (!container) return;

  container.innerHTML = bundleItems.map(item => {
    const isChecked = selectedBundle.includes(item.id);
    return `
      <div class="bundle-item-pill ${isChecked ? 'is-selected' : ''}" data-bundle-id="${item.id}">
        <div class="bundle-item-left">
          <span>${item.icon}</span>
          <span>${item.name}</span>
        </div>
        <div class="bundle-item-right-wrap">
          <span class="bundle-item-label">${item.label}</span>
          <div class="bundle-check-circle">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const pillElements = container.querySelectorAll('.bundle-item-pill');
  pillElements.forEach(pill => {
    pill.addEventListener('click', () => {
      const id = pill.dataset.bundleId;
      if (selectedBundle.includes(id)) {
        if (selectedBundle.length > 1) {
          selectedBundle = selectedBundle.filter(x => x !== id);
        }
      } else {
        selectedBundle.push(id);
      }
      renderBundlePills();
    });
  });

  if (counterPill) {
    counterPill.textContent = `${selectedBundle.length} seleccionadas`;
  }

  if (calcInfo) {
    if (selectedBundle.length >= 3) {
      calcInfo.innerHTML = `✨ <strong>Beneficio Integral Pazur:</strong> Asesor dedicado 24/7 + hasta 15% de ahorro consolidado y gestión única de renovaciones sin vencimientos sorpresa.`;
    } else if (selectedBundle.length === 2) {
      calcInfo.innerHTML = `✨ <strong>Paquete Dúo:</strong> 10% de beneficio en seguros combinados + un solo punto de contacto en Medellín y Rionegro.`;
    } else {
      calcInfo.innerHTML = `💡 Selecciona 2 o más pólizas para activar beneficios de unificación y tarifas de grupo.`;
    }
  }
}

function sendBundleToWhatsApp() {
  const selectedNames = selectedBundle.map(id => {
    const item = bundleItems.find(b => b.id === id);
    return item ? `• ${item.name}` : '';
  }).join('%0A');

  const text = `Hola Pazur Seguros! 👋 Me gustaría recibir asesoría para unificar mi paquete de pólizas:%0A${selectedNames}%0A%0A¿Podrían cotizarme las mejores opciones entre sus aseguradoras aliadas?`;
  window.open(`https://wa.me/573054034164?text=${text}`, '_blank');
}

/**
 * Sección 13. FAQ Accordion (7 Preguntas del brief oficial)
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      faqItems.forEach(i => i.classList.remove('is-open'));
      if (!isOpen) {
        item.classList.add('is-open');
      }
    });
  });
}

/**
 * Sección 14. Formulario de Cierre ("Tu tranquilidad empieza con una conversación")
 */
function initContactForm() {
  const form = document.getElementById('mainContactForm');
  const confMessage = document.getElementById('mainContactConfirmation');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('contactNombre').value;
    const celular = document.getElementById('contactCelular').value;
    const correo = document.getElementById('contactCorreo').value;
    const queProtege = document.getElementById('contactProtege').value;
    const mensaje = document.getElementById('contactMensaje').value;
    const habeasData = document.getElementById('contactHabeas').checked;

    if (!habeasData) {
      alert('Por favor autoriza la Política de Tratamiento de Datos Personales para continuar.');
      return;
    }

    if (confMessage) {
      form.style.display = 'none';
      confMessage.classList.remove('is-hidden');
    }

    // Prefilled WhatsApp message
    const waText = `Hola Pazur Seguros! 🤝 Deseo solicitar mi asesoría personalizada:%0A%0A• *Nombre:* ${encodeURIComponent(nombre)}%0A• *Celular:* ${encodeURIComponent(celular)}%0A• *Correo:* ${encodeURIComponent(correo)}%0A• *Deseo proteger:* ${encodeURIComponent(queProtege)}%0A${mensaje ? `• *Mensaje:* ${encodeURIComponent(mensaje)}%0A` : ''}%0AQuedo atento a su acompañamiento.`;

    // Auto open WhatsApp in new tab
    window.open(`https://wa.me/573054034164?text=${waText}`, '_blank');
  });
}

/**
 * Directorio Modal Flotante (Botón flotante "Directorio 24/7")
 */
/**
 * Cotizador Modal General
 */
function initQuoteModal() {
  const modal = document.getElementById('quoteModal');
  const openButtons = document.querySelectorAll('[data-open-quote]');
  const closeBtn = document.getElementById('quoteModalClose');
  const quoteForm = document.getElementById('quoteForm');

  if (!modal) return;

  const openModal = (preselected = '') => {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    if (preselected) {
      const select = document.getElementById('quotePolicyType');
      if (select) select.value = preselected;
    }
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(btn.dataset.policy || '');
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = document.getElementById('quoteNombre').value;
      const telefono = document.getElementById('quoteTelefono').value;
      const ciudad = document.getElementById('quoteCiudad').value;
      const tipo = document.getElementById('quotePolicyType').value;
      const notas = document.getElementById('quoteNotas').value;

      const message = `Hola Pazur Seguros! 👋%0A%0ADeseo solicitar una asesoría personalizada:%0A• *Nombre:* ${encodeURIComponent(nombre)}%0A• *Teléfono:* ${encodeURIComponent(telefono)}%0A• *Ciudad:* ${encodeURIComponent(ciudad)}%0A• *Póliza de interés:* ${encodeURIComponent(tipo)}%0A${notas ? `• *Detalles:* ${encodeURIComponent(notas)}%0A` : ''}%0A¿Podrían contactarme para evaluar las mejores opciones?`;

      window.open(`https://wa.me/573054034164?text=${message}`, '_blank');
      closeModal();
      quoteForm.reset();
    });
  }
}

function openQuoteModalWithPolicy(policyName) {
  const modal = document.getElementById('quoteModal');
  if (!modal) return;
  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  const select = document.getElementById('quotePolicyType');
  if (select) {
    // Look for matching option or select closest
    let matched = false;
    for (let opt of select.options) {
      if (opt.text.toLowerCase().includes(policyName.toLowerCase()) || opt.value.toLowerCase().includes(policyName.toLowerCase())) {
        opt.selected = true;
        matched = true;
        break;
      }
    }
    if (!matched) select.value = "Salud y Medicina Prepagada";
  }
}

/**
 * Modal de Detalles de Póliza
 */
function initPortfolioDetailsModal() {
  const modal = document.getElementById('detailsModal');
  const closeBtn = document.getElementById('detailsModalClose');
  if (!modal || !closeBtn) return;

  const closeModal = () => {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

function openDetailsModal(cardId, category) {
  const modal = document.getElementById('detailsModal');
  if (!modal) return;

  const catList = insuranceData[category] || insuranceData.personas;
  const item = catList.find(c => c.id === cardId);
  if (!item) return;

  document.getElementById('detailsModalTitle').textContent = item.title;
  document.getElementById('detailsModalTag').textContent = item.tag;
  document.getElementById('detailsModalDesc').textContent = item.desc;
  document.getElementById('detailsModalHighlight').textContent = item.highlight;
  document.getElementById('detailsModalImg').src = item.image;

  const listContainer = document.getElementById('detailsModalList');
  listContainer.innerHTML = item.details.map(d => `
    <li style="display:flex; align-items:flex-start; gap:10px; margin-bottom:10px; font-size:0.95rem; color:var(--text-dark);">
      <span style="color:var(--color-sage); font-weight:bold; margin-top:1px;">✓</span>
      <span>${d}</span>
    </li>
  `).join('');

  const ctaBtn = document.getElementById('detailsModalWhatsAppBtn');
  if (ctaBtn) {
    ctaBtn.onclick = () => {
      const text = `Hola Pazur Seguros! 👋 Me interesa conocer más detalles y cotizar la póliza de *${item.title}* (${item.tag}). ¿Me podrían brindar asesoría?`;
      window.open(`https://wa.me/573054034164?text=${encodeURIComponent(text)}`, '_blank');
    };
  }

  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

/**
 * Scroll Animations (IntersectionObserver)
 */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-fade-up');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));
}


// Keep the same gentle speed across browser widths and after logos finish loading.
function initAlliesTicker() {
  const track = document.querySelector('.ticker-track');
  if (!track) return;
  const updateSpeed = () => {
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const distance = (track.scrollWidth + gap) / 2;
    track.style.setProperty('--ticker-duration', `${distance / 20}s`);
  };
  updateSpeed();
  new ResizeObserver(updateSpeed).observe(track);
  document.fonts?.ready.then(updateSpeed);
}

function initProtectionCarousel() {
  const root = document.querySelector('.protection-carousel');
  if (!root) return;
  const viewport = root.querySelector('.protection-viewport');
  const slides = [...root.querySelectorAll('.protection-slide')];
  const pauseButton = root.querySelector('[data-carousel-pause]');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let paused = motion.matches;
  let index = 0;
  function update() {
    const center = viewport.scrollLeft + viewport.clientWidth / 2;
    let nearest = Infinity;
    slides.forEach((slide, i) => {
      const distance = slide.offsetLeft - viewport.offsetLeft + slide.offsetWidth / 2 - center;
      if (Math.abs(distance) < nearest) { nearest = Math.abs(distance); index = i; }
      slide.style.setProperty('--card-angle', Math.max(-16, Math.min(16, -distance / 25)) + 'deg');
      slide.style.setProperty('--card-scale', Math.max(.9, 1 - Math.abs(distance) / 5000));
    });
  }
  function move(direction) {
    index = (index + direction + slides.length) % slides.length;
    viewport.scrollTo({ left: slides[index].offsetLeft - viewport.offsetLeft - (viewport.clientWidth - slides[index].offsetWidth) / 2, behavior: motion.matches ? 'instant' : 'smooth' });
  }
  function updatePause() {
    pauseButton.textContent = paused ? '▶' : 'Ⅱ';
    pauseButton.setAttribute('aria-label', paused ? 'Activar movimiento automático' : 'Pausar movimiento automático');
  }
  root.querySelector('[data-carousel-prev]').addEventListener('click', () => move(-1));
  root.querySelector('[data-carousel-next]').addEventListener('click', () => move(1));
  pauseButton.addEventListener('click', () => { paused = !paused; updatePause(); });
  motion.addEventListener('change', () => { paused = motion.matches; updatePause(); });
  viewport.addEventListener('scroll', update, { passive:true });
  window.addEventListener('resize', update);
  setInterval(() => {
    if (!paused && !document.hidden && !root.matches(':hover') && !root.contains(document.activeElement)) move(1);
  }, 5000);
  updatePause();
  update();
}
document.addEventListener('DOMContentLoaded', initProtectionCarousel);
