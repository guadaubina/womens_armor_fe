<template>
  <Header v-on:mainEvent="showMainOptionSelected"/>
  <Home v-if="main.home"/>
  <Informacion v-if="main.informacion"/>
  <Ayuda v-if="main.ayuda"/>
  <TestimoniosAA v-if="main.testimoniosAA"/>
  <Profesionales v-if="main.profesionales"/>
  <Contactos v-if="main.contactos"/>

</template>

<script>

import Header from "@/components/Header";
import Home from "@/components/Home";
import Informacion from "@/components/Informacion";
import Ayuda from "@/components/Ayuda";
import TestimoniosAA from "@/components/TestimoniosAA";
import Profesionales from "@/components/Profesionales";
import Contactos from "@/components/Contactos"


export default {
  name: "HomeView",
  components: {
    Header,
    Home,
    Informacion,
    Ayuda,
    TestimoniosAA,
    Profesionales,
    Contactos,
  },
  data() {
    return {

      main: {
        activeOption: "home",
        home: true,
        informacion: false,
        ayuda: false,
        testimoniosAA: false,
        profesionales: false,
        contactos: false,

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
