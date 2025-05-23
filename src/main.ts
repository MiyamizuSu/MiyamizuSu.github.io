import { createApp } from 'vue'
import './index.css'
import './tailwind.css'
import App from './App.vue'
import router from './lib/router'

createApp(App).use(router).mount('#app')
