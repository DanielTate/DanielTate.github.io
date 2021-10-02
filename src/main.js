import { createApp } from 'vue'
import store from './store'
import Main from './Main.vue'
import mitt from 'mitt'

const App = createApp(Main)

App.config.globalProperties.$bus = mitt() 

App.use(store)

App.mount('#app')

