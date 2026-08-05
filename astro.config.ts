import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://daviderwin.me',
  output: 'static',
  build: {
    format: 'directory',
  },
});
