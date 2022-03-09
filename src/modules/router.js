import { createRouter, createWebHistory } from 'vue-router'

import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'

const routes = setupLayouts(generatedRoutes)

console.log('Route Generated :>> ', generatedRoutes);
console.log('layout: :>> ', setupLayouts(generatedRoutes))
console.log('routes :>> ', routes);

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// router.beforeEach((to, from, next) => {
//   console.log('router beforeEach', router.currentRoute.value.fullPath)
//   next()
// })

export const install = (app) => {
  app.use(router)
}
