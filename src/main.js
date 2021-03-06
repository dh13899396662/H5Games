// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import Reg from './common/js/reg'
import VueLazyload from 'vue-lazyload'
import '@/styles/index.css'
import { vueBaberrage } from 'vue-baberrage'
import { ToastPlugin, LoadingPlugin } from 'vux'

Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
Vue.use(vueBaberrage)
Vue.use(VueLazyload, {
  loading: require('./common/images/orange-icon.png')
})

//  点击延迟
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body)
  }, false)
}
Vue.config.productionTip = false
Vue.prototype.Reg = Reg
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
