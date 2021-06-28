import { createApp } from 'vue'
import store from './store'
import Main from './Main.vue'

const App = createApp(Main)

App.use(store)

App.mount('#app')


