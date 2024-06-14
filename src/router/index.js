import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../components/HomePage.vue"
import AboutPage from "../components/AboutPage.vue"
import LandPage from "../components/LandPage.vue"
import SocietiesPage from "../components/SocietiesPage.vue"
import MediaPage from "../components/MediaPage.vue"
import ContactPage from "../components/ContactPage.vue"
import DhaDetailPage from "../components/DhaDetailPage.vue"
import BahriaDetailPage from "../components/BahriaDetailPage.vue"
import RequestForm from "../components/RequestForm.vue"
import LandDetaiPage from "../components/LandDetaiPage.vue"




const router = createRouter({

  mode: 'history',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {

      path: '/',
      name: 'home',
      component: HomePage
    },

    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },

    {
      path: '/land',
      name: 'land',
      component: LandPage
    },

    {
      path: '/societies',
      name: 'societies',
      component: SocietiesPage
    },


    {
      path: '/media',
      name: 'media',
      component: MediaPage
    },


    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },

    {
      path: '/dha',
      name: 'dha',
      component: DhaDetailPage
    },

    {
      path: '/bahria',
      name: 'bahria',
      component: BahriaDetailPage
    },

    {
      path: '/requestform',
      name: 'requestform',
      component: RequestForm
    },

    {
      path: '/land-detail/:id',
      name: 'land-detail',
      component: LandDetaiPage
    },


  ],

  scrollBehavior() {
    return { left: 0, top: 0 };
  }

});


export default router
