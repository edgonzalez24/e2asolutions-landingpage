import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import viteCompression from 'vite-plugin-compression';



// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    viteCompression(),
    vueI18n({
      include: path.resolve(__dirname, './src/locales/**'),
    }),
  ],
});
