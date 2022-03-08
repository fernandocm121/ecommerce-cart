import { createApp } from 'vue'
import App from './App.vue'

// reset from tailwind
// import '@unocss/reset/tailwind.css'

import 'uno:components.css'

// Core css variables
import './styles/index.sass'

// Quasar css
import './styles/quasar/index.sass'

// SRP css
import './styles/index.sass'

import 'uno.css'

import 'uno:utilities.css'

const app = createApp(App)

// install all modules under core and srp
Object.values(
  import.meta.globEager('./modules/*.{js,ts}'),
).forEach(i => i.install?.(app))

app.mount('#app')
