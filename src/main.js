import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

import VueCesium from 'vue-cesium'

Vue.use(VueCesium, {
  cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js',
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjYzQ4ZWVmNS03NjEwLTQxNDYtOTljNS1kOGRjYTE4MGVmOTMiLCJpZCI6MzQyMTQsImlhdCI6MTYwMDA1NDI4Nn0.5JIOvdpbT8-3FAkBUfwe4Jte2a14ajdxfYEnsm6qmn8'
})
import dataV from '@jiaminghi/data-view'

Vue.use(dataV)

import VCharts from 'v-charts'

Vue.use(VCharts)

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}
import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3001/api'
})

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
