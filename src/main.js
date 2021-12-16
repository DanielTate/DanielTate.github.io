import { createApp } from 'vue'
import store from './store'
import Main from './Main.vue'
import mitt from 'mitt'

import './assets/styles/main.scss'

const App = createApp(Main)

App.config.globalProperties.$bus = mitt()
// App.config.globalProperties.$styles =
// console.log(getComputedStyle(document.documentElement))

App.use(store)

App.mount('#app')

