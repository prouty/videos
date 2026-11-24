import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Keep the CRA variable name so existing .env.local files keep working.
  envPrefix: ['VITE_', 'REACT_APP_'],
  // Port 3000 matches the API key's localhost:3000 referrer restriction.
  server: { port: 3000 },
  preview: { port: 3000 },
  build: { outDir: 'build' },
});
