import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    host: '0.0.0.0',
    watch: {
      usePolling: true, // WSL2 Live File Tracking Fix Active
    },
  },
  build: {
    rollupOptions: {
      input: {
        /* FIXED: Realigned path string to flat asset registry to secure seamless Vercel ingestion */
        main: 'index.html',
      },
    },
  },
});
