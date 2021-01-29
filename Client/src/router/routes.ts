import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'overview', component: () => import('pages/Overview.vue') },
      { path: 'inventory', component: () => import('pages/Inventory.vue') },
      { path: 'spells', component: () => import('pages/Spells.vue') },
      { path: 'build', component: () => import('pages/Build.vue') },
      { path: 'misc', component: () => import('pages/Misc.vue') },
      { path: 'settings', component: () => import('pages/Settings.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
