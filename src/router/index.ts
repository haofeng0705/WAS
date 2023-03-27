import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "login",
      meta: { title: "登录" },
      component: () => import('@/views/login/index.vue')
		},
		{
      path: '/:pathMatch(.*)',
      component: () => import('@/views/not-found/NotFound.vue')
    }
  ]
})

export default router
