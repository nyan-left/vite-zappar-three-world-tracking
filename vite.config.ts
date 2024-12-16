import type {UserConfig} from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
const config: UserConfig = {
  plugins: [basicSsl()],
  optimizeDeps: {
    exclude: ['@zappar/zappar-threejs'],
    include: ['ua-parser-js'],
  },
  server: {
    host: true,
  },
  base: '/vite-zappar-three-world-tracking/',
};

export default config;
