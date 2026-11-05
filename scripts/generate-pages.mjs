import fs from 'node:fs';
import path from 'node:path';

// One shared layout and one copy of each section; generate real HTML entrypoints.
const template = fs.readFileSync('src/page-template.html', 'utf8');
const sections = new Map([...template.matchAll(/<section\b[^>]*\bid="([^"]+)"[^>]*>[\s\S]*?<\/section>/g)].map(m => [m[1], m[0]]));
const pages = [
  {slug:'', title:'Elegir bien da paz', ids:['hero','aliados','rompiendo-el-mito','por-que-pazur','testimonios']},
  {slug:'polizas', title:'Catálogo de pólizas', ids:['portafolio','paquete']},
  {slug:'cotizador', title:'Cotiza tu seguro', ids:['cotizador']},
  {slug:'como-trabajamos', title:'Cómo trabajamos', ids:['como-trabajamos']},
  {slug:'siniestros', title:'Siniestros y asistencia 24/7', ids:['siniestros']},
  {slug:'nosotros', title:'Nuestro equipo', ids:['equipo']},
  {slug:'blog', title:'Aprende a protegerte', ids:['blog']},
  {slug:'preguntas-frecuentes', title:'Preguntas frecuentes', ids:['faq']},
  {slug:'contactar', title:'Contactar', ids:['contacto']},
];
const routes = Object.fromEntries(pages.flatMap(p => p.ids.map(id => [id, p.slug ? `/${p.slug}/` : '/'])));
const contactHub = `<section class="contact-hub"><div class="container">
  <div class="contact-hub-intro"><span class="kicker kicker-blue">Estamos contigo</span>
    <h1>¿Cómo podemos ayudarte?</h1><p>Elige lo que necesitas y encuentra el canal indicado para acompañarte.</p></div>
  <div class="contact-options">
    <article class="contact-option"><span class="contact-option-number">01 / ASISTENCIA</span><h2>Líneas 24/7</h2>
      <p>Consulta el directorio de tu aseguradora para solicitar grúa, asistencia o reportar un siniestro.</p>
      <a class="btn btn-sage" href="/siniestros/">Ver directorio 24/7 <span aria-hidden="true">↗</span></a></article>
    <article class="contact-option contact-option-advisor"><span class="contact-option-number">02 / ASESORÍA CERCANA</span><h2>Habla con tu asesor</h2>
      <p>Escríbenos por WhatsApp o llámanos al <a href="tel:+573054034164">305 403 4164</a>. Te orientamos con tus pólizas y trámites.</p>
      <a class="btn btn-butter" href="https://wa.me/573054034164?text=Hola%20Pazur%20Seguros%2C%20quisiera%20recibir%20asesor%C3%ADa%20personalizada" target="_blank" rel="noopener noreferrer">Contactar a mi asesor <span aria-hidden="true">↗</span></a></article>
    <article class="contact-option"><span class="contact-option-number">03 / TU PRÓXIMA PÓLIZA</span><h2>Cotiza tu protección</h2>
      <p>Cuéntanos qué quieres proteger. Comienza tu cotización de autos o salud y recibe orientación personalizada.</p>
      <a class="btn btn-sage" href="/cotizador/">Cotizar póliza <span aria-hidden="true">↗</span></a></article>
  </div></div></section>`;
const homeLinks = `<section class="home-next"><div class="container"><span class="kicker kicker-blue">Tu protección, a tu medida</span><h2>Encuentra lo que necesitas</h2><div class="home-next-links"><a href="/polizas/">Explorar nuestras pólizas <span aria-hidden="true">↗</span></a><a href="/como-trabajamos/">Conoce cómo te acompañamos <span aria-hidden="true">↗</span></a><a href="/contactar/">Hablar con Pazur <span aria-hidden="true">↗</span></a></div></div></section>`;
for (const page of pages) {
  let content = page.ids.map(id => {
    if (!sections.has(id)) throw new Error(`Missing section ${id}`);
    return sections.get(id);
  }).join('\n');
  if (page.slug === 'contactar') content = contactHub + content;
  if (!page.slug) content += homeLinks;
  let html = template.replace(/<main>[\s\S]*?<\/main>/, `<main id="contenido"${page.slug ? ' class="page-main"' : ''}>${content}</main>`);
  html = html.replace(/<div class="nav-actions-right">[\s\S]*?<\/div>\s*<\/nav>/, '<div class="nav-actions-right"><a href="/contactar/" class="nav-contact-btn">Contactar <span aria-hidden="true">↗</span></a></div></nav>');
  html = html.replace(/<div style="display:flex; flex-direction:column; gap:12px;">[\s\S]*?<\/div>/, '<div><a href="/contactar/" class="btn btn-sage mobile-nav-link" style="width:100%">Contactar</a></div>');
  // Keep a single directory: the dedicated assistance page, rather than a duplicate modal.
  html = html.replace(/<div class="modal-backdrop" id="directoryModal"[\s\S]*?(?=\s*<!-- ={10,})/, '');
  html = html.replace(/<button\b([^>]*\bdata-open-directory[^>]*)>([\s\S]*?)<\/button>/g, (_, attrs, label) => `<a href="/siniestros/"${attrs.replace(/\sdata-open-directory\b/, '')}>${label}</a>`);
  html = html.replace(/href="#([^"]*)"/g, (match, id) => id === '' ? 'href="/"' : routes[id] ? `href="${routes[id]}${page.ids.includes(id) ? '#' + id : ''}"` : match);
  html = html.replace(/<a\b([^>]*class="(?:nav-link|mobile-nav-link)"[^>]*)>/g, (match, attrs) => {
    const href = attrs.match(/href="([^"]+)"/)?.[1]?.split('#')[0];
    return href === `/${page.slug}/` ? `<a${attrs} aria-current="page">` : match;
  });
  if (page.slug === 'contactar') html = html.replace('class="nav-contact-btn"', 'class="nav-contact-btn" aria-current="page"');
  if (page.slug) html = html.replace(/(<h)2(\b[^>]*class="heading-section"[^>]*>)([\s\S]*?)(<\/h)2>/, '$11$2$3$41>');
  // Contact already has a primary heading above the original form.
  if (page.slug === 'contactar') html = html.replace('<h1 class="heading-section">', '<h2 class="heading-section">').replace('conversación</h1>', 'conversación</h2>');
  const title = `Pazur Seguros | ${page.title}`;
  html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`).replace(/(<meta (?:name="title"|property="(?:og|twitter):title") content=")[^"]*/, `$1${title}`);
  const descriptions = {polizas:'Explora seguros para personas, empresas y equipos. Compara coberturas y recibe asesoría personalizada de Pazur Seguros.',cotizador:'Inicia tu cotización de autos o salud con Pazur Seguros y prepara los datos para recibir asesoría por WhatsApp.', 'como-trabajamos':'Conoce cómo te acompañamos para elegir tu seguro y resolver tus trámites antes, durante y después de contratar.',siniestros:'Consulta las líneas de asistencia 24/7 de tu aseguradora y contacta a tu asesor Pazur para orientarte ante un siniestro.',nosotros:'Conoce al equipo de Pazur Seguros y nuestra asesoría cercana en Medellín, Rionegro y toda Colombia.',blog:'Consejos y guías de Pazur Seguros para entender tus coberturas y tomar decisiones sobre tu protección.', 'preguntas-frecuentes':'Resuelve tus preguntas sobre pólizas, asesoría, coberturas y trámites con Pazur Seguros.',contactar:'Contacta a Pazur Seguros: directorio de aseguradoras 24/7, asesoría por WhatsApp y cotizaciones de autos o salud.'};
  if (descriptions[page.slug]) html = html.replace(/(<meta (?:name="description"|property="(?:og|twitter):description") content=")[^"]*/, `$1${descriptions[page.slug]}`);
  html = html.replace(/(<meta property="og:url" content=")[^"]*/, `$1https://pazurseguros.com/${page.slug ? page.slug + '/' : ''}`);
  const out = page.slug ? `${page.slug}/index.html` : 'index.html';
  fs.mkdirSync(path.dirname(out), {recursive:true});
  fs.writeFileSync(out, html);
}
console.log(`Generated ${pages.length} independent pages.`);
