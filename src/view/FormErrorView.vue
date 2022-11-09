<template>

  <div class="general">
    <div class="check-texto"><h2>El formulario de ayuda <strong>NO</strong>se ha completado correctamente</h2></div>
    <br>
    <div class="boton-volver"><router-link :to="{ name: 'HomeRoute'}">Home</router-link></div>
  </div>


</template>

<script>
export default {
  name: "FormError",
}

</script>

<style>


</style>