// core-js => polyfill solution
import 'core-js';

// Import Vue
import Vue from 'vue'

// Import Framework7
import Framework7 from 'framework7/framework7.esm.bundle';

// Import Framework7 Vue
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle';

// Import F7 Style
import 'framework7/css/framework7.css'

// Import Material Icons
import 'material-design-icons/iconfont/material-icons.css'

// Import App Custom Styles
// import AppStyles from './assets/sass/main.scss'

// Import App Component
import app from './App.vue'

// Import Vuex Storage
import store from './assets/vuex/storage'


// Different F7-Vue plugin initialization with f7 v3.0
Framework7.use(Framework7Vue)


// Init Vue App
export default new Vue({
  // Root Element
  el: '#app',
  store,
  render: c => c('app'),
  components: {
    app
  }
});