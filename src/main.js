import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.css";
Vue.config.productionTip = false
import 'viewerjs/dist/viewer.css';
// import Viewer from 'viewerjs';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import '@/assets/iconfont.css'

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
