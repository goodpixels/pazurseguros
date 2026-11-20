import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

// Helper to find the entry HTML file regardless of casing on Linux/Netlify
function getHtmlEntry() {
  const currentDir = process.cwd();
  if (fs.existsSync(resolve(currentDir, 'index.html'))) {
    return resolve(currentDir, 'index.html');
  }
  if (fs.existsSync(resolve(currentDir, 'Index.html'))) {
    return resolve(currentDir, 'Index.html');
  }
  // Search for any .html in root
  const files = fs.readdirSync(currentDir);
  const htmlFile = files.find(f => f.toLowerCase() === 'index.html');
  if (htmlFile) {
    return resolve(currentDir, htmlFile);
  }
  return resolve(currentDir, 'index.html');
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: getHtmlEntry()
    }
  }
});
