// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'

// import './assets/css/robotUI.css'
// import './assets/css/ui.scss'
import './app/assets/css/scss/main.scss'

// import './app/assets2/css/scss/main.scss'

// Vue.use(mavonEditor)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
