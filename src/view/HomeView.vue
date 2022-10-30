<template>

  <Header v-on:mainEvent="showMainOptionSelected"/>
  <Home v-if="main.home"/>
  <Informacion v-if="main.informacion"/>
  <Ayuda v-if="main.ayuda"/>
  <Testimonios v-if="main.testimonios"/>


</template>

<script>

import Header from "@/components/Header";
import Home from "@/components/Home";
import Informacion from "@/components/Informacion";
import Ayuda from "@/components/Ayuda";
import Testimonios from "@/components/Testimonios";


export default {
  name: "HomeView",
  components: {
    Header,
    Home,
    Informacion,
    Ayuda,
    Testimonios

  },
  data() {
    return {

      main: {
        activeOption: "home",
        home: true,
        informacion: false,
        ayuda: false,
        testimonios: false

      }
    }
  },

  methods: {
    showMainOptionSelected(option) {
      let oldOption = this.main.activeOption;
      this.main.activeOption = option;
      this.main[oldOption] = false;
      this.main[this.main.activeOption] = true;
    }
  },
}

</script>

<style>

</style>
