import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Luisa from 'luisa-vue'
import ComplexCustomComponent from './components/ComplexCustomComponent'

createApp(App)
    .use(router)
    .use(Luisa)
    .component('ComplexCustomComponent', ComplexCustomComponent)
    .mount('#app')