import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
/*import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

// import HomeView from "@/view/HomeView.vue";
// import Ayuda from "@/components/Ayuda.vue";
import FormSuccessView from "@/view/FormSuccessView";
import FormErrorView from "@/view/FormErrorView";
import Ayuda from "@/components/Ayuda";
import HomeView from "@/view/HomeView";
//import NotFound from "@/components/NotFound";

//
// Vue.use(VueRouter)
// Vue.config.productionTip = false

const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home', name: "home", component: HomeView},


    //{path: '/home', name: "HomeRoute", component: HomeView},
    {path: '/ayuda', name: "ayuda", component: Ayuda},
    {path: '/success', name: "FormSuccess", component: FormSuccessView},
    {path: '/error', name: "FormError", component: FormErrorView}
   // {path: '*', name: "NotFound", component: NotFound}
]

const router = new VueRouter({
    routes,
    mode: "history"
})


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')


const app = Vue.createApp(App);
app.use(router);
app.mount('#app');


*/