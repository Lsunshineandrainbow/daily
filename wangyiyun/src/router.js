import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'
import Mymusic from'@/views/Music/Mymusic.vue';
import Radio from'@/views/Radio/Radio.vue';
import Video from'@/views/Video/Video.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
        component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
    },
    {
      path:'/header',
        component:Header,

    },
      {
          path:'/footer',
          component:Footer,

      },  {
          path:'/mymusic1',
          component:Mymusic,

      },  {
          path:'/radio1',
          component:Radio,

      },  {
          path:'/video1',
          component:Video,

      }
  ],
});
