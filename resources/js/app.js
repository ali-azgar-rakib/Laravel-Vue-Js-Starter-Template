require('./bootstrap');

window.Vue = require('vue');

// user vue router 
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from './routes'

const router = new VueRouter({
    routes,
    mode: 'history'
});

// import vuex 
import Vuex from 'vuex'
Vue.use(Vuex)
import storeData from './store'
const store = new Vuex.Store(storeData)

// vform 
import { Form, HasError, AlertError } from 'vform'

window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

// sweet alert 

import swal from 'sweetalert2'

window.swal = swal


window.toastr = swal.mixin({
    toastr: true,
    position: 'top-end',
});


// Vue.component('example-component', require('./components/ExampleComponent.vue').default);




const app = new Vue({
    el: '#app',
    router,
    store
});
