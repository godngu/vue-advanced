import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes';
import store from './store';
import mitt from "mitt";

const app = createApp(App);
const emitter = mitt();
app.use(store);
app.use(router);
app.config.globalProperties.emitter = emitter;
app.mount('#app');

