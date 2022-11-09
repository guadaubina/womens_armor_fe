<template>
  <div class="general">
    <div class="check-texto"><h2>El formulario de ayuda se ha completado correctamente</h2></div>
    <br>
    <div class="boton-volver"><router-link :to="{ name: 'HomeRoute'}">Home</router-link></div>
  </div>

</template>

<script>
export default {
  name: "FormSuccess",
}
</script>

<style>

body {
  background-image: url("../imgs/feminismoinformacion.jpeg");
  background-size: 50%;
  display: flex;
  justify-content: center;
  margin-top: 15%;

}

.general{
  background-color:whitesmoke;
  border-radius: 10px;
  margin: 2px;
  padding: 2%;
  width: 50%;
  height: 200px;
  justify-content: center;
}

.check-texto{
  text-align: center;
  line-height: 100px;
}

.boton-volver{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 40px;
  background: transparent;
  border: 2px solid #993BC7;
  border-radius: 6px;
  transition-duration: 0.4s;
  text-align: center;
}

.boton-volver:hover{
  background-color: #F0DAF8;
}

</style>