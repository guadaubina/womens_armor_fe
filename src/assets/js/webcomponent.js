import Vue from "vue"

Vue.component("logo", {
    template:`
            <a href="#">
                <img src="../img/logoPrincipal.png" alt="Women´s Armor logo" id="logo">
            </a>`
});
new Vue({
    el: "#logoprincipal"
})

Vue.component("navegador", {
    template: `
        <nav class="navbar">
            <div class="contenedor">
                <div> <a href="#">INFORMACIÓN</a> </div>
                <div> <a href="#">DENUNCIAR</a> </div>
                <div> <a href="#">PROFESIONALES</a></div>
                <div> <a href="#">TESTIMONIOS</a></div>
            </div>
        </nav>`
});
new Vue({
    el:"#navcomponent"
})

Vue.component("btnContactos",
    {
        template: ''
    });
new Vue({
    el:"#botoncontactos"
})

