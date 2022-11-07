<template>

  <div id="divTestimonios">
    <div>
      <Testimonios v-for="(testimonio, index) in testimoniosC" v-bind:key="index"
                   v-bind:img ="testimonio.img"
                   v-bind:nombre = "testimonio.nombre"
                   v-bind:oculto = "testimonio.oculto"
                   v-bind:mas = "testimonio.mas"
                   v-bind:noOculto ="testimonio.noOculto"
                   v-bind:menos = "testimonio.menos"
      />
    </div>
  </div>

</template>

<script>

import Testimonios from "@/components/Testimonios";
import {losTestimonios} from "@/assets/js/testimonios"

export default {
  name: "TestimoniosAA",
  emits:["mainEvent"],
  components: {Testimonios},
  data () {
    return {
      testimoniosC: losTestimonios
    }
  },
}

</script>

<style>

@import "../assets/css/testimonios.css";

</style>