import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import InfoPage from '@/views/InfoPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: HomePage,
    children: [
      {
        path: ':number',
        name: 'number',
        component: HomePage,
        meta: {
          layout: 'HomeLayout',
        },
      },
    ],
    meta: {
      layout: 'HomeLayout',
    },
  },
  // {
  //   path: '/:number',
  //   name: 'homePageWithNumber',
  //   component: HomePage,
  //   meta: {
  //     layout: 'HomeLayout',
  //   },
  // },
  {
    path: '/info',
    name: 'infoPage',
    component: InfoPage,
    meta: {
      layout: 'InfoLayout',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
