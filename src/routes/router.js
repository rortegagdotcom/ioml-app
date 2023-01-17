import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'albums',
        component: () => import('../components/Album/AlbumsList.vue')
    },
    {
        path: '/albums/new',
        name: 'albums-new',
        component: () => import('../components/Album/AlbumForm.vue')
    },
    {
        path: '/albums/:id',
        name: 'albums-details',
        component: () => import('../components/Album/AlbumDetail.vue')
    },
    {
        path: '/albums/delete/:id',
        name: 'albums-delete',
        component: () => import('../components/Album/AlbumDelete.vue')
    },
]

console.log(process.env.BASE_URL);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;