import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  // Use root base in dev to avoid 404s, use repo path for preview/build
  base: command === 'serve' ? '/' : '/redspider-web/',
  plugins: [react()],
  optimizeDeps: {
    include: ['lucide-react'],
  },
}));
