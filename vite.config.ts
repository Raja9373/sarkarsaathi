import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('lucide-react')) {
              return 'vendor-react';
            }
            return 'vendor';
          }
          if (id.includes('opportunitiesData') || id.includes('paimana')) {
            return 'data-opportunities';
          }
          if (id.includes('verifiedQuestionsData') || id.includes('topCitizenQueriesData')) {
            return 'data-questions';
          }
          if (id.includes('SubsidyRepository') || id.includes('quarantinedSubsidies')) {
            return 'data-subsidies';
          }
        },
      },
    },
  },
});
