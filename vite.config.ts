import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Root of the site; adjust if deploying to a subpath
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});