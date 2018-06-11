// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './common/viewport.js'
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button,Icon,Dropdown,DropdownMenu,DropdownItem } from 'element-ui'
import FastClick from 'fastclick'



Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Icon)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
FastClick.attach(document.body);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
