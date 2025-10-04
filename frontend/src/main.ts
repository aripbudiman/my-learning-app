import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'
import router from './router'

const app = createApp(App)
// Untuk standalone devtools
if (process.env.NODE_ENV === 'development') {
    const script = document.createElement('script')
    script.src = 'http://localhost:8098'
    document.head.appendChild(script)
}

app.use(router);
app.mount('#app')