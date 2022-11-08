<template>

  <div class="divTestimonio">

    <div>

      <img class= "imgMujer1"  v-bind:src="require('../assets/img/' + img)">
      <h2> {{ nombre }} </h2>
      <div class="texto1">
        <p> {{ noOculto }} </p>
        <div @click="showHide(value1)" v-if="mas1"><a href="#"> {{ mas }} </a></div>
      </div>

    </div>

    <div v-if="value1">
      <p id="desplegar1" class="texto1">
        {{ oculto }}
        <a href="#" @click="showHide">{{ menos }}</a>
      </p>
    </div>

  </div>

</template>

<script>

export default {
  name: "testimoniosComp",
  props: [
      "img",
      "nombre",
      "oculto",
      "noOculto",
      "mas",
      "menos"
  ],
  emits:["mainEvent"],
  data: function () {
    return {
      value1: false,
      mas1: true,
    };
  },

  methods: {
    showHide() {
      this.value1 = ! this.value1;
      this.mas1 = ! this.mas1;
    }
  },
};

</script>

<style>

@import "../assets/css/testimonios.css";

h2 {
  color: black;
}

</style>
