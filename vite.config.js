import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/public/photos': {
        target: 'http://localhost:5748',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/public\/photos/, '/public/photos'),
      },
    },
  },
  plugins: [vue()],
});
