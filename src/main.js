import { createApp } from 'vue';

import ViyMenu from 'viy-menu';
import App from './App.vue';
import i18n from './i18n';
import menuSetting from './settings/menuSetting';

import 'viy-ui/style.css';
import 'viy-menu/style.css';
import './styles/main.css';

const app = createApp(App);

app.use(i18n);

app.use(ViyMenu, menuSetting);

await ViyMenu.isReady();

app.mount('#app');
