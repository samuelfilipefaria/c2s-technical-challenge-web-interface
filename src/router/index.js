import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../views/HomeView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: import('../views/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: import('../views/LoginView.vue')
    },
    {
      path: '/edition',
      name: 'edition',
      component: import('../views/EditionView.vue')
    },
    {
      path: '/task-creation',
      name: 'task-creation',
      component: import('../views/TaskCreationView.vue')
    },
    {
      path: '/task-edition/:taskId',
      name: 'task-edition',
      component: import('../views/TaskEditionView.vue')
    },
    {
      path: '/error',
      name: 'error',
      component: import('../views/ErrorView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: import('../views/NotFoundView.vue')
    },
  ]
})

export default router
