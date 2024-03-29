import Vue from 'vue'
import App from './App'

// 引入vuex
import store from '@/store'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$store = store

const app = new Vue(App)
app.$mount()
