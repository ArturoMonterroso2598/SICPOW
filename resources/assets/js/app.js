/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('municipio', require('./components/Municipio.vue').default);
Vue.component('comunidad', require('./components/Comunidad.vue').default);
Vue.component('distrito', require('./components/Distrito.vue').default);
Vue.component('usuario', require('./components/Usuario.vue').default);
Vue.component('familia', require('./components/Familia.vue').default);
Vue.component('vivienda', require('./components/Vivienda.vue').default);
Vue.component('rol', require('./components/Rol.vue').default);
Vue.component('reporte', require('./components/Reporte.vue').default);
Vue.component('dashboard', require('./components/Dashboard.vue').default);

const app = new Vue({
    el: '#app',
    data :{
        menu : 0
    }
});
