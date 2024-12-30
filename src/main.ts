import { createApp } from 'vue';
import './assets/css/style.css';
import './assets/css/tailwind.css';
import App from './App.vue';
import { MotionPlugin } from '@vueuse/motion';
import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import es from './locales/es.json';
import 'vue3-carousel/dist/carousel.css';
import router from './router';


const i18n = createI18n({
  legacy: false,
  locale: 'es',
  messages: {
    en,
    es,
  },
});
const app = createApp(App);
app.use(MotionPlugin);
app.use(i18n);
app.use(router);
app.mount('#app');