import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'albums',
    component: () => import('../components/Album/AlbumsList.vue'),
  },
  {
    path: '/albums/new',
    name: 'albums-new',
    component: () => import('../components/Album/AlbumForm.vue'),
  },
  {
    path: '/albums/edit/:albumid',
    name: 'albums-edit',
    component: () => import('../components/Album/AlbumForm.vue'),
  },
  {
    path: '/albums/:albumid',
    name: 'albums-details',
    component: () => import('../components/Album/AlbumDetail.vue'),
  },
  {
    path: '/albums/delete/:albumid',
    name: 'albums-delete',
    component: () => import('../components/Album/AlbumDelete.vue'),
  },
  {
    path: '/albums/:albumid/photos/new',
    name: 'photos-new',
    component: () => import('../components/Photo/PhotoForm.vue'),
  },
  {
    path: '/albums/:albumid/photos/edit/:photoid',
    name: 'photos-edit',
    component: () => import('../components/Photo/PhotoForm.vue'),
  },
  {
    path: '/albums/:albumid/photos/:photoid',
    name: 'photos-details',
    component: () => import('../components/Photo/PhotoDetail.vue'),
  },
  {
    path: '/albums/:albumid/photos/delete/:photoid',
    name: 'photos-delete',
    component: () => import('../components/Photo/PhotoDelete.vue'),
  },
  {
    path: '/view/:albumid',
    name: 'view-fullscreen',
    component: () => import('../components/FullScreen/IOMLFullScreen.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../components/About.vue'),
  },
];

const router = createRouter(
  {
    history: createWebHistory(),
    routes,
  },
  { path: '*', redirect: '/' }
);

export default router;
