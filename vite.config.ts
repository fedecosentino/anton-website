import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Alias `@/` → src (estructura shadcn: @/components/ui, @/lib/utils)
  resolve: { alias: { '@': '/src' } },
});
