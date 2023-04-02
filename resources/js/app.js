import './bootstrap';

import { createApp } from 'vue';

import app from './components/app.vue'

import router from './router/index.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlusSquare, faTrash);

createApp(app).component("font-awesome-icon", FontAwesomeIcon).use(router).mount("#app")