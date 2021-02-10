import MainPage from './pages/MainPage.vue';
import AboutPage from './pages/AboutPage.vue';
import DynamicRoutePage from './pages/DynamicRoutePage.vue';
import FormPage from './pages/FormPage.vue';
import VuexPage from './pages/VuexPage.vue';
import ColorThemePage from './pages/ColorThemePage.vue';

const routes: object = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/aboutPage/',
    component: AboutPage
  },
  {
    path: '/dynamicRoutePage/blog/:url/:path/:hash',
    component: DynamicRoutePage
  },
  {
    path: '/formPage/',
    component: FormPage
  },
  {
    path: '/vuex/',
    component: VuexPage
  },
  {
    path: '/colorThemePage/',
    component: ColorThemePage
  }
]

export default routes;
