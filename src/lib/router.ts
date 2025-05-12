import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from '../components/page/home-page.vue'
const routes= [
  { path: '/', component: HomeView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
export default router