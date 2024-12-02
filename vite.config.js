import { defineConfig } from '@ymc-group/vite-config';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/blank': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      '/blank/websocket': {
        target: 'ws://localhost:8080',
        ws: true,
        changeOrigin: true,
      },
    },
  },
});
