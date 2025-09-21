// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
// import DataTable from 'primevue/datatable'
// import Column from 'primevue/Column'

const app = createApp(App)
app.use(PrimeVue, { 
    theme: { 
        preset: Aura, 
        options: {
        darkModeSelector: false
    }}})
app.use(router)

// app.component('DataTable' DataTable)
// app.component('Column', Column)

app.mount('#app')

const roles = ref({
    'user1@gmail.com': 'Admin',
    'user2@gmail.com': 'User',
    'user3@gmail.com': 'role'
})

export { roles }