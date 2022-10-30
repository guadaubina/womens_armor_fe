<template>

  <div id="divformulario">
    <div id="formulario">
      <form action="">
        <table>
          <tbody>
          <tr>
            <th> Nombre completo* </th>
            <td> <input name="Nombre completo" type="text" placeholder="Ingrese su nombre y apellido" id="nombreId" size="130" required> </td>
          </tr>
          <tr>
            <th> Dirección* </th>
            <td> <input name="Dirección" type="text" placeholder="Ingrese su dirección" id="direccionId" size="130" required> </td>
          </tr>
          </tbody>
        </table>
        <div class="botonesflex">
          <button type="button" class="inputbutton" id="btnAddDenuncia">save</button>
        </div>
      </form>
    </div>
  </div>

</template>

<script>

export default {
  name: "ayuda",
  emits:["mainEvent"],
}

document.querySelector("#btnAddDenuncia").addEventListener("click", saveDenuncia);

function saveDenuncia(){
  var sNombre = document.querySelector("#nombreId").value;
  var sDireccion = document.querySelector("#direccionId").value;

  addDenuncia(sNombre, sDireccion)

}

var denunciasLista = []

function addDenuncia(pnombre, pdireccion) {
  var denunciaObj = {
    nombre: pnombre,
    direccion: pdireccion
  };
  console.log(denunciaObj)
  denunciasLista.push(JSON.stringify(denunciaObj));
}

</script>

<style>

@import "../assets/css/home.css";

</style>