import Vue from 'vue';
import Router from 'vue-router';
import Header from './views/Home/Header.vue';
import Footer from './components/Footer.vue'
import Mymusic from'@/views/Music/Mymusic.vue';
import Radio from'@/views/Radio/Radio.vue';
import Video from'@/views/Video/Video.vue';
import Localmusic from '@/views/Music/Localmusic/Localmusic.vue';
import Homepage from '@/views/Home/Homepage.vue'
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

      },{
        path:'/localmusic',
          component:Localmusic,
      },{
        path:'/homepage',
          component:Homepage,
      }
  ],
});
