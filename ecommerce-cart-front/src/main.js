import { createApp } from 'vue'

import App from './App.vue'

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import '@unocss/reset/tailwind.css'

import '/src/styles/index.sass'

import 'quasar/src/css/index.sass'

import 'uno.css'

const app = createApp(App)

// install all modules under core and website
Object.values(
  import.meta.globEager('./modules/*.{js,ts}'),
).forEach(i => i.install?.(app))

app.mount('#app')
