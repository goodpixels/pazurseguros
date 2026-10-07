/**
 * PAZUR SEGUROS - MEDELLÍN, COLOMBIA
 * Modern interactive scripts: Floaty animations, Portfolio filtering,
 * Interactive bundle builder, Quote modal & WhatsApp dispatcher.
 */

// Portfolio Data based strictly on Pazur Seguros official flyers
export const insuranceData = {
  personas: [
    {
      id: "salud-personas",
      title: "Salud y Medicina Prepagada",
      tag: "Personas & Familia",
      image: "/images/card-salud.jpg",
      highlight: "Desde $92.000 / mes (para dos personas)",
      desc: "Acceso preferencial a las mejores clínicas de Medellín y Colombia. Consultas sin copagos excesivos y cobertura hospitalaria integral.",
      details: [
        "Planes de medicina prepagada y pólizas de hospitalización",
        "Atención médica domiciliaria y urgencias 24/7",
        "Cobertura en maternidad, cirugías y tratamientos de alto costo",
        "Acceso directo a especialistas sin remisión previa",
        "Alianzas con SURA, Allianz, Seguros Bolívar y AXA Colpatria"
      ]
    },
    {
      id: "auto-personas",
      title: "Autos y Motos Todo Riesgo",
      tag: "Movilidad Segura",
      image: "/images/card-auto.jpg",
      highlight: "Asistencia vial 24/7 en carretera",
      desc: "Protección total frente a colisión, hurto, daños a terceros y pérdida total con grúa inmediata y carro sustituto.",
      details: [
        "Responsabilidad Civil Extracontractual (RCE) de amplia cobertura",
        "Pérdida total y parcial por daños o hurto",
        "Vehículo de reemplazo mientras reparan el tuyo",
        "Conductor elegido ilimitado y grúa nacional",
        "Opciones con y sin deducible según tu presupuesto"
      ]
    },
    {
      id: "hogar-mascotas",
      title: "Hogar y Mascotas",
      tag: "Tranquilidad en Casa",
      image: "/images/card-hogar.jpg",
      highlight: "Estructura + Contenidos + Peludos",
      desc: "Tu patrimonio y tus seres queridos protegidos frente a sismo, incendios, agua, hurto y urgencias veterinarias.",
      details: [
        "Cobertura de estructura (terremoto, incendio, granizada)",
        "Amparo para electrodomésticos, muebles y equipos electrónicos",
        "Plomería, cerrajería y electricidad de emergencia 24/7",
        "Gastos médicos veterinarios por accidente o enfermedad",
        "Responsabilidad civil por daños que cause tu mascota"
      ]
    },
    {
      id: "vida-accidentes",
      title: "Vida & Accidentes Personales",
      tag: "Protección Familiar",
      image: "/images/hero-family.jpg",
      highlight: "Respaldo financiero garantizado",
      desc: "Garantiza el futuro educativo de tus hijos y la estabilidad de tu familia ante cualquier eventualidad o invalidez.",
      details: [
        "Indemnización por fallecimiento por cualquier causa",
        "Amparo automático de incapacidad total y permanente",
        "Renta diaria por hospitalización",
        "Anticipo por enfermedades graves (cáncer, infarto, ACV)",
        "Planes flexibles con ahorro o cobertura pura"
      ]
    }
  ],
  empresariales: [
    {
      id: "todo-riesgo-empresa",
      title: "Todo Riesgo Empresarial",
      tag: "Pyme & Corporativo",
      image: "/images/card-empresa.jpg",
      highlight: "Blindaje operativo y patrimonial",
      desc: "Protege las instalaciones físicas, maquinaria, mercancía y lucro cesante de tu empresa en Medellín y toda Colombia.",
      details: [
        "Daños materiales por incendio, explosión y eventos de la naturaleza",
        "Cobertura de lucro cesante (gastos fijos y utilidades si paras)",
        "Hurto calificado de mercancías y materias primas",
        "Avería de maquinaria y equipos electrónicos de oficina",
        "Asistencia técnica para emergencias en tu sede"
      ]
    },
    {
      id: "responsabilidad-civil",
      title: "Responsabilidad Civil (RCE)",
      tag: "Respaldo Legal",
      image: "/images/card-auto.jpg",
      highlight: "Amparo ante reclamos de terceros",
      desc: "Cubre perjuicios patrimoniales y extrapatrimoniales causados a clientes, proveedores o visitantes en tu operación.",
      details: [
        "RCE de predios, labores y operaciones comerciales",
        "RCE patronal frente a accidentes laborales de colaboradores",
        "RCE de productos y servicios entregados",
        "Gastos de defensa jurídica y honorarios de abogados",
        "Cumplimiento de requisitos para licitaciones y contratos"
      ]
    },
    {
      id: "cumplimiento-fraudes",
      title: "Pólizas de Cumplimiento & Fraude",
      tag: "Contratación Segura",
      image: "/images/advisor.jpg",
      highlight: "Garantía contractual y financiera",
      desc: "Agilidad en expedición de garantías para contratos privados, estatales (SECOP) y protección ante delitos económicos.",
      details: [
        "Seriedad de la oferta y buen manejo del anticipo",
        "Cumplimiento del contrato y calidad del servicio o bienes",
        "Pago de salarios y prestaciones sociales",
        "Póliza de infidelidad de empleados y delitos financieros",
        "Estudio ágil de cupos y emisión prioritaria"
      ]
    },
    {
      id: "flotas-transporte",
      title: "Flota de Transporte & Carga",
      tag: "Logística y Movilidad",
      image: "/images/card-auto.jpg",
      highlight: "Tarifas colectivas corporativas",
      desc: "Asegura los vehículos de tu empresa y el transporte de mercancías a nivel local, regional y nacional con monitoreo.",
      details: [
        "Póliza todo riesgo para camiones, furgones y flotillas corporativas",
        "Cobertura de transporte terrestre de mercancías",
        "Asistencia mecánica pesada 24/7 y grúas especializadas",
        "Tarificación preferencial por volumen de vehículos",
        "Administración centralizada de vencimientos y pólizas"
      ]
    }
  ],
  colectivas: [
    {
      id: "salud-colectiva",
      title: "Salud Colectiva & PAC SURA",
      tag: "Beneficio para Empleados",
      image: "/images/card-salud.jpg",
      highlight: "Retención de talento y bienestar",
      desc: "Planes corporativos de salud y Planes de Atención Complementaria (PAC SURA) a tarifas grupales altamente competitivas.",
      details: [
        "Tarifas preferenciales por número de asegurados",
        "Inclusión de cónyuge e hijos del colaborador",
        "Convenios con la mejor red hospitalaria de Antioquia",
        "Deducción tributaria de bienestar para la empresa",
        "Acompañamiento directo de Pazur en la gestión de citas"
      ]
    },
    {
      id: "vida-grupo",
      title: "Vida Grupo Corporativo",
      tag: "Seguridad para el Equipo",
      image: "/images/hero-family.jpg",
      highlight: "Protección integral a bajo costo",
      desc: "Brinda un respaldo económico a las familias de tus trabajadores ante imprevistos, accidentes o fallecimiento.",
      details: [
        "Fallecimiento por cualquier causa e incapacidad",
        "Indemnizaciones proporcionales al salario o valor pactado",
        "Facilidad de pago descontado por nómina o asumido por la empresa",
        "Sin exámenes médicos engorrosos en grupos estándar",
        "Respaldo de las mejores aseguradoras del país"
      ]
    },
    {
      id: "autos-colectivos",
      title: "Flotilla de Autos Colectiva",
      tag: "Beneficio Empleados",
      image: "/images/card-auto.jpg",
      highlight: "Descuentos de hasta el 25%",
      desc: "Permite a tus colaboradores asegurar sus vehículos particulares con tarifas corporativas negociadas por Pazur.",
      details: [
        "Mismas coberturas premium todo riesgo a menor costo",
        "Descuento por volumen transferido directamente al colaborador",
        "Planes con deducción por nómina o pago particular",
        "Asistencia de grúa y taller especializado",
        "Manejo de siniestros asistido por nuestro equipo"
      ]
    },
    {
      id: "accidentes-escolares",
      title: "Accidentes Escolares y Laborales",
      tag: "Instituciones & Gremios",
      image: "/images/vision-dog.jpg",
      highlight: "Respuesta inmediata en urgencias",
      desc: "Pólizas colectivas de accidentes para colegios, universidades, academias deportivas y eventos corporativos.",
      details: [
        "Gastos médicos de urgencia por accidente",
        "Indemnización por desmembración o invalidez",
        "Amparo durante traslados, eventos y viajes institucionales",
        "Atención en clínicas de primer nivel sin trámites dilatados",
        "Carnetización física y digital para cada beneficiario"
      ]
    }
  ]
};

// Initial state for bundle builder
let selectedBundle = ['salud', 'auto'];

const bundleItems = [
  { id: 'salud', name: 'Salud & Medicina Prepagada', icon: '🩺', price: 92000, label: 'Desde $92.000/mes' },
  { id: 'auto', name: 'Autos & Motos Todo Riesgo', icon: '🚗', price: 120000, label: 'Protección 24/7' },
  { id: 'hogar', name: 'Hogar & Estructura', icon: '🏠', price: 45000, label: 'Sismo y contenidos' },
  { id: 'vida', name: 'Vida & Accidentes', icon: '🛡️', price: 40000, label: 'Respaldo familiar' },
  { id: 'mascotas', name: 'Mascotas & Bicicletas', icon: '🐾', price: 28000, label: 'Veterinaria y hurto' },
  { id: 'empresa', name: 'Empresa & Cumplimiento', icon: '🏢', price: 150000, label: 'RCE y todo riesgo' }
];

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initNavbarScroll();
  initPortfolioTabs();
  initBundleBuilder();
  initFaqAccordion();
  initQuoteModal();
  initPortfolioDetailsModal();
  initMobileNav();
});

/**
 * 1. Floaty Appear Animations (IntersectionObserver)
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
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.12
  });

  elements.forEach(el => observer.observe(el));
}

/**
 * 2. Navbar Floating Elevation on Scroll (Brand dark grey)
 */
function initNavbarScroll() {
  const navbar = document.getElementById('navbarPill');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  });
}

/**
 * 3. Portfolio Category Tabs (Personas, Empresariales, Colectivas)
 */
function initPortfolioTabs() {
  const tabButtons = document.querySelectorAll('.portfolio-tab-btn');
  const cardsContainer = document.getElementById('portfolioCardsGrid');
  if (!tabButtons.length || !cardsContainer) return;

  // Render initial personas cards
  renderPortfolioCards('personas');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;
      if (!category) return;

      tabButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      // Subtle fade out then in
      cardsContainer.style.opacity = '0';
      cardsContainer.style.transform = 'translateY(10px)';
      cardsContainer.style.transition = 'all 0.25s ease';

      setTimeout(() => {
        renderPortfolioCards(category);
        cardsContainer.style.opacity = '1';
        cardsContainer.style.transform = 'translateY(0)';
      }, 250);
    });
  });
}

function renderPortfolioCards(category) {
  const container = document.getElementById('portfolioCardsGrid');
  if (!container) return;

  const items = insuranceData[category] || insuranceData.personas;

  container.innerHTML = items.map((item, index) => `
    <article class="portfolio-card reveal-fade-up is-revealed delay-${index + 1}" data-card-id="${item.id}" data-category="${category}">
      <div class="portfolio-card-media">
        <img src="${item.image}" alt="${item.title}" class="portfolio-card-img" loading="lazy" />
        <span class="portfolio-card-tag">${item.tag}</span>
      </div>
      <div class="portfolio-card-body">
        <div>
          <div class="portfolio-card-title-row">
            <h3 class="portfolio-card-title">${item.title}</h3>
            <button class="portfolio-card-arrow" aria-label="Ver detalles de ${item.title}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
          <p class="portfolio-card-desc">${item.desc}</p>
        </div>
        <div class="portfolio-card-badge-price">
          ${item.highlight}
        </div>
      </div>
    </article>
  `).join('');

  // Attach card click handlers for details modal
  const cards = container.querySelectorAll('.portfolio-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const cardId = card.dataset.cardId;
      const cat = card.dataset.category;
      openDetailsModal(cardId, cat);
    });
  });
}

/**
 * 4. Interactive Bundle Builder (Midlands Reference 2)
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
        <div style="display:flex; align-items:center; gap:12px;">
          <span style="font-size:0.82rem; color:var(--text-muted); font-weight:500;">${item.label}</span>
          <div class="bundle-check-circle">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach toggle listeners
  const pillElements = container.querySelectorAll('.bundle-item-pill');
  pillElements.forEach(pill => {
    pill.addEventListener('click', () => {
      const id = pill.dataset.bundleId;
      if (selectedBundle.includes(id)) {
        if (selectedBundle.length > 1) { // Keep at least one
          selectedBundle = selectedBundle.filter(x => x !== id);
        }
      } else {
        selectedBundle.push(id);
      }
      renderBundlePills();
    });
  });

  // Update counters & perks
  if (counterPill) {
    counterPill.textContent = `${selectedBundle.length} pólizas seleccionadas`;
  }

  if (calcInfo) {
    if (selectedBundle.length >= 3) {
      calcInfo.innerHTML = `✨ <strong>Beneficio Exclusivo:</strong> Asesor personal dedicado 24/7 + hasta 15% de ahorro consolidado y gestión única de renovaciones.`;
    } else if (selectedBundle.length === 2) {
      calcInfo.innerHTML = `✨ <strong>Paquete Dúo:</strong> 10% de beneficio en seguros combinados + un solo punto de contacto en Medellín.`;
    } else {
      calcInfo.innerHTML = `💡 Selecciona más pólizas para activar beneficios de unificación de coberturas.`;
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
 * 5. FAQ Accordion
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      // Close other items
      faqItems.forEach(i => i.classList.remove('is-open'));
      if (!isOpen) {
        item.classList.add('is-open');
      }
    });
  });
}

/**
 * 6. Quote Modal (Cotizador Rápido Pazur)
 */
function initQuoteModal() {
  const modal = document.getElementById('quoteModal');
  const openButtons = document.querySelectorAll('[data-open-quote]');
  const closeBtn = document.getElementById('quoteModalClose');
  const quoteForm = document.getElementById('quoteForm');

  if (!modal) return;

  const openModal = (preselectedCategory = '') => {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    if (preselectedCategory) {
      const select = document.getElementById('quotePolicyType');
      if (select) select.value = preselectedCategory;
    }
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = btn.dataset.category || '';
      openModal(cat);
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

/**
 * 7. Policy Details Modal (Deep dive into all flyer sub-coverages)
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
 * 8. Mobile Navigation Drawer
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const overlay = document.getElementById('mobileNavOverlay');
  const closeBtn = document.getElementById('mobileNavClose');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !overlay) return;

  const openDrawer = () => overlay.classList.add('is-open');
  const closeDrawer = () => overlay.classList.remove('is-open');

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeDrawer();
  });

  links.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}
