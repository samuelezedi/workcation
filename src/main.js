import './app.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VsxIcon } from "vue-iconsax";
import 'primeicons/primeicons.css'


const app = createApp(App)

app.component("VsxIcon", VsxIcon);
app.use(router)

app.mount('#app')
