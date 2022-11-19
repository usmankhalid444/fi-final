import './bootstrap';
import '../css/app.css';

import '../css/font-awesome-v5.css'
import '../css/line-icons-pro.css'
import '../css/prism-coldark-cold.css'
import '../css/tiny-slider.css'

import '../scss/main.scss'

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

import { createPinia } from 'pinia'

import { plugin as VueTippy } from 'vue-tippy'

import Iconify from '@iconify/iconify';


const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, app, props, plugin }) {

        const pinia = createPinia()

        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(pinia)
            .use(VueTippy, {
                component: 'Tippy',
                defaultProps: {
                  theme: 'light',
                },
              })
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
