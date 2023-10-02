import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../pages/IndexPage.vue';
import JokePage from '../pages/JokePage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:id',
    name: 'joke',
    component: JokePage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
