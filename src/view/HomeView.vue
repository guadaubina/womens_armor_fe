<template>

  <Header v-on:mainEvent="showMainOptionSelected"/>
  <Home v-if="main.home"/>
  <Informacion v-if="main.informacion"/>


</template>

<script>

import Header from "@/components/Header";
import Home from "@/components/Home";
import Informacion from "@/components/Informacion";

export default {
  name: "HomeView",
  components: {
    Header,
    Home,
    Informacion,
  },
  data() {
    return {

      main: {
        activeOption: "home",
        home: true,
        informacion: false,

      }
    }
  },

  methods: {
    showMainOptionSelected(option) {
      console.log("hola")
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