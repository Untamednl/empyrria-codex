// @ts-check
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
/**
 * Dev-only: Vite dev mishandles `/admin` index and can fail to serve `/admin/config.yml` for Decap.
 * Production (`astro build` / `astro preview`) uses copied `public/` assets — this plugin’s `configureServer` does not run on build.
 */
function adminPublicIndex() {
  return {
    name: 'empyrria-admin-public-index',
    /** @param {import('vite').ViteDevServer} server */
    configureServer(server) {
      server.middlewares.use(
        /** @param {import('http').IncomingMessage} req @param {import('http').ServerResponse} res @param {() => void} next */
        (req, res, next) => {
          const raw = req.url ?? '';
          const pathOnly = raw.split('?')[0];
          const q = raw.includes('?') ? raw.slice(raw.indexOf('?')) : '';

          if (pathOnly === '/admin/config.yml') {
            try {
              const configPath = join(__dirname, 'public', 'admin', 'config.yml');
              const body = readFileSync(configPath, 'utf8');
              res.setHeader('Content-Type', 'text/yaml; charset=utf-8');
              res.statusCode = 200;
              res.end(body);
              return;
            } catch {
              next();
              return;
            }
          }

          if (pathOnly === '/admin' || pathOnly === '/admin/') {
            req.url = '/admin/index.html' + q;
          }
          next();
        }
      );
    },
  };
}

export default defineConfig({
  vite: {
    plugins: [tailwindcss(), adminPublicIndex()],
    server: {
      host: true,
      port: 4321,
      allowedHosts: true
    }
  }
});