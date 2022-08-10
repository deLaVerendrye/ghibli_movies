import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import './assets/css/style.css'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min.js'

createApp(App).use(router).mount('#app')
