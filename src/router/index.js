import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/account',
      alias: '/',
      name: 'account',
      component: import('../views/AccountView.vue')
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: import('../views/TasksView.vue')
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: import('../views/NotificationsView.vue')
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
      path: '/user-task-creation',
      name: 'user-task-creation',
      component: import('../views/UserTaskCreationView.vue')
    },
    {
      path: '/web-scraping-task-creation',
      name: 'web-scraping-task-creation',
      component: import('../views/WebScrapingTaskCreationView.vue')
    },
    {
      path: '/user-task-edition/:userTaskId',
      name: 'user-task-edition',
      component: import('../views/UserTaskEditionView.vue')
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
