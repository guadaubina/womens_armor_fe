<template>

  <div class="principalheader">
    <div id="row">
      <div id="logoprincipal">
        <span v-on:click="$emit('mainEvent', 'home')">
          <img src="../assets/img/logoPrincipal.png" alt="Women´s Armor logo" id="logo">
        </span>
      </div>
      <div id="botonpanico">
        <a href="https://www.google.com.ar/"><H>Salí rapido</H></a>
      </div>
    </div>
    <div>
      <nav class="navbar">
        <div class="contenedor">
          <div> <span v-on:click="$emit('mainEvent', 'informacion')" class="navButton"> INFORMACIÓN </span> </div>
          <div> <span v-on:click="$emit('mainEvent', 'ayuda')" class="navButton"> AYUDA </span> </div>
          <div> <span v-on:click="$emit('mainEvent', 'profesionales')" class="navButton">PROFESIONALES </span> </div>
          <div> <span v-on:click="$emit('mainEvent', 'testimonios')" class="navButton">TESTIMONIOS</span> </div>
        </div>
      </nav>`
    </div>
  </div>

</template>

<script>

export default {
  name: "header",
  emits: ["mainEvent"]
}

</script>

<style>

@import "../assets/css/home.css";

</style>