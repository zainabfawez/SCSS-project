import { createApp } from 'vue'
import App from './App.vue'


import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config'
import TabMenu from 'primevue/tabmenu';

const app = createApp(App);
app.use(PrimeVue);

app.component("TabMenu", TabMenu);

app.mount('#app')
