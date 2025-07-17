import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api-news': {
        target: 'https://berita-indo-api-next.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-news/, '/api/cnn-news'),
      },
    },
  },
});
