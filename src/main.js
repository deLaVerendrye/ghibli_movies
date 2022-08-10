import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min.js'
import './assets/css/style.css'

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
