import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const pages = ['', 'polizas', 'cotizador', 'como-trabajamos', 'siniestros', 'nosotros', 'blog', 'preguntas-frecuentes', 'contactar'];
export default defineConfig({
  appType: 'mpa',
  server: { allowedHosts: ['terminal.local'] },
  build: {
    rollupOptions: {
      input: Object.fromEntries(pages.map(page => [page || 'inicio', resolve(page, 'index.html')]))
    }
  }
});
