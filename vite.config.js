import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    host: '0.0.0.0',
    watch: {
      usePolling: true, // WSL 2 لائیو ٹریکنگ فکس
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        ai: './ai.html', // یہ وائٹ کو ڈائریکٹ بتاتا ہے کہ یہ فائل بھی مین فولڈر میں ہے
      },
    },
  },
});
