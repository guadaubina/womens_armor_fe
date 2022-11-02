<template>

  <div id="textoForms">
    <p id="textoForms">En este formulario encontrarás puntos básicos e información necesaria para que podamos comprender la situación. El objetivo del mismo es poder que luego de brindarnos un contacto podriamos orientatte en el proceso. </p>
  </div>
  <div class="linea"></div>


  <div id="formulario">

    <form action="http://127.0.0.1:5000" method="post">
      <h2>El formulario lo realizo para:</h2>
      <div id="formsSec1">
        <div><input name="quien" type="radio" value="mi misma" required><label>Para mí</label></div>
        <div><input name="quien" type="radio" value="un tercero"><label>Para un tercero</label></div>
        <div><input type="text" name="vinculo" placeholder="Vinculo con la victima"></div>
      </div>


      <h2>Contacto</h2>

      <label>Teléfono*</label>
      <input type="tel" name="telefono" id="" placeholder="Ingrese Número" maxlength="10" required>
      <label>Mail*</label>
      <input type="email" name="mail" placeholder="Ingrese Mail" required><br>


      <h3>Horarios seguros de contacto</h3>
      <div class="horarios">
        <strong>Opcion 1*</strong><br>
        <div id="rowForm">
          <div id="rowMit">
            <div><label>Día</label> </div>
            <div><select name="Seleccionar" required>
              <option value="Seleccionar">Seleccionar</option>
              <option value="Lunes">Lunes</option>
              <option value="Martes">Martes</option>
              <option value="Miercoles">Miercoles</option>
              <option value="Jueves">Jueves</option>
              <option value="Viernes">Viernes</option>
              <option value="Sábado">Sábado</option>
              <option value="Domingo">Domingo</option>
            </select> </div>
          </div>
          <div id="rowMit">
            <div><label>Hora</label></div>
            <div><input type="time" name="horario" required><br></div>
          </div>
        </div>

        <strong>Opcion 2</strong><br>
        <div id="rowForm">
          <div id="rowMit">
            <div><label>Día</label></div>
            <div><select name="Seleccionar">
              <option value="Seleccionar">Seleccionar</option>
              <option value="Lunes">Lunes</option>
              <option value="Martes">Martes</option>
              <option value="Miercoles">Miercoles</option>
              <option value="Jueves">Jueves</option>
              <option value="Viernes">Viernes</option>
              <option value="Sábado">Sábado</option>
              <option value="Domingo">Domingo</option>
            </select></div>
          </div>
          <div id="rowMit">
            <div><label>Hora</label></div>
            <div><input type="time" name="horario"><br></div>
          </div>
        </div>

        <div>
          <strong>Opcion 3</strong><br>
          <div id="rowForm">
            <div id="rowMit">
              <div><label>Día</label></div>
              <div><select name="Seleccionar">
                <option value="Seleccionar">Seleccionar</option>
                <option value="Lunes">Lunes</option>
                <option value="Martes">Martes</option>
                <option value="Miercoles">Miercoles</option>
                <option value="Jueves">Jueves</option>
                <option value="Viernes">Viernes</option>
                <option value="Sábado">Sábado</option>
                <option value="Domingo">Domingo</option>
              </select></div>
            </div>
            <div id="rowMit">
              <div><label>Hora</label></div>
              <div><input type="time" name="horario"></div>
            </div>
          </div>
        </div>
      </div>

        <fieldset>
          <legend><h2>Persona que sufrió violencia</h2></legend>
          <div>
            <div id="formulario">
              <table>
                <tbody id="table">
                <tr>
                  <td>Nombre completo</td>
                  <td><input type="text" name="nombre" placeholder="Ingrese nombre completo"></td>
                </tr>
                <tr>
                  <td>DNI</td>
                  <td><input type="text" name="dni" placeholder="Ingrese DNI"></td>
                </tr>
                <tr>
                  <td>Edad</td>
                  <td><input type="number" name="edad" value="18"></td>
                </tr>
                <tr>
                  <td>Provincia</td>
                  <td><select name="Seleccionar">
                    <option value="Seleccionar" selected>Seleccionar</option>
                    <option value="BSAS">Buenos Aires</option>
                    <option value="Ciudad Autonoma De Buenos Aires">Ciudad Autónoma de Buenos Aires</option>
                    <option value="Catamarca">Catamarca</option>
                    <option value="Chaco">Chaco</option>
                    <option value="Chubut">Chubut</option>
                    <option value="Cordoba">Córdoba</option>
                    <option value="Corrientes">Corrientes</option>
                    <option value="Entre Rios">Entre Rios</option>
                    <option value="Formosa">Formosa</option>
                    <option value="Jujuy">Jujuy</option>
                    <option value="la Pampa">La Pampa</option>
                    <option value="la rioja">La Rioja</option>
                    <option value="mendoza">Mendoza</option>
                    <option value="misiones">Misiones</option>
                    <option value="Neuquén">Neuquén</option>
                    <option value="rio negro">Rio Negro</option>
                    <option value="Salta">Salta</option>
                    <option value="san juan">San Juan</option>
                    <option value="san luis">San Luis</option>
                    <option value="santa cruz">Santa Cruz</option>
                    <option value="santa fe">Santa Fe</option>
                    <option value="santiago del estero">Santiago Del Estero</option>
                    <option value="tierra del fuego">Tierra del Fuego</option>
                    <option value="tucuman">Tucumán</option>
                  </select>
                  </td>
                </tr>
                <tr>
                  <td>Ciudad</td>
                  <td><input type="text" placeholder="Ingrese su ciudad"></td>
                </tr>
                <tr>
                  <td>Localidad</td>
                  <td> <input type="text" placeholder="Ingrese su localidad"></td>
                </tr>
                <tr>
                  <td>Direccion</td>
                  <td><input type="text" placeholder="Ingrese su direccion"></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </fieldset>

        <h2>Sucesos</h2>
        <textarea rows="15" cols="30" placeholder="Este es un espacio para que puedas ponernos en contexto de la situación. Conta con la cantidad de detalles que te sientas comoda." id="textarea"></textarea>

        <div>
          <h3>¿Quiere dejar asentados datos del agresor?
          <a class="leermasmenos" @click="showHide(value1)" v-if="mas1">[ver más]</a>
          </h3>
        </div>

        <div id="fieldset">
          <fieldset v-if="value1">
            <legend><h2>Agresor</h2></legend>
            <div>
              <div id="formulario">
                <table>
                  <tbody id="table">
                  <tr>
                    <td>Nombre completo</td>
                    <td><input type="text" name="nombre" placeholder="Ingrese nombre completo"></td>
                  </tr>
                  <tr>
                    <td>DNI</td>
                    <td><input type="text" name="dni" placeholder="Ingrese DNI"></td>
                  </tr>
                  <tr>
                    <td>Sexo</td>
                    <td>
                      <input name="sexo" type="radio" value="Femenino" required><label>Femenino</label>
                      <input name="sexo" type="radio" value="Masculino"><label>Masculino</label>
                      <input name="sexo" type="radio" value="Otro"><label>Otro</label>
                    </td>
                  </tr>
                  <tr>
                    <td>Edad</td>
                    <td><input type="number" name="edad" value="18"></td>
                  </tr>
                  <tr>
                    <td>Vínculo</td>
                    <td><input type="text" name="vinculo" placeholder="Vinculo con el agresor"></td>
                  </tr>
                  <tr>
                    <td>Provincia</td>
                    <td><select name="Seleccionar">
                      <option value="Seleccionar" selected>Seleccionar</option>
                      <option value="BSAS">Buenos Aires</option>
                      <option value="Ciudad Autonoma De Buenos Aires">Ciudad Autónoma de Buenos Aires</option>
                      <option value="Catamarca">Catamarca</option>
                      <option value="Chaco">Chaco</option>
                      <option value="Chubut">Chubut</option>
                      <option value="Cordoba">Córdoba</option>
                      <option value="Corrientes">Corrientes</option>
                      <option value="Entre Rios">Entre Rios</option>
                      <option value="Formosa">Formosa</option>
                      <option value="Jujuy">Jujuy</option>
                      <option value="la Pampa">La Pampa</option>
                      <option value="la rioja">La Rioja</option>
                      <option value="mendoza">Mendoza</option>
                      <option value="misiones">Misiones</option>
                      <option value="Neuquén">Neuquén</option>
                      <option value="rio negro">Rio Negro</option>
                      <option value="Salta">Salta</option>
                      <option value="san juan">San Juan</option>
                      <option value="san luis">San Luis</option>
                      <option value="santa cruz">Santa Cruz</option>
                      <option value="santa fe">Santa Fe</option>
                      <option value="santiago del estero">Santiago Del Estero</option>
                      <option value="tierra del fuego">Tierra del Fuego</option>
                      <option value="tucuman">Tucumán</option>
                    </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Ciudad</td>
                    <td><input type="text" placeholder="Ingrese su ciudad"></td>
                  </tr>
                  <tr>
                    <td>Localidad</td>
                    <td> <input type="text" placeholder="Ingrese su localidad"></td>
                  </tr>
                  <tr>
                    <td>Direccion</td>
                    <td><input type="text" placeholder="Ingrese su direccion"></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <a class="leermasmenos" href="#" @click="showHide">[ver menos]</a>
          </fieldset>
        </div>
      <div class="botonesflex">
        <button type="button" class="inputbutton" id="btnAddDenuncia">save</button>
      </div>

    </form>
  </div>

</template>

<script>

export default {
  name: "ayudaComp",
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

@import "../assets/css/home.css";
@import "../assets/css/forms.css";

</style>