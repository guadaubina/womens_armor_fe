<template>

  <div id="banner">
    <div>
      <img src="../assets/img/mujeresmarchando.jpg" alt="Foto de muchas mujeres juntas" id="imgbanner">
    </div>
  </div>

  <div id="scroll">
    <div class="descripcion">
      <h1 class="titulos">Nuestra misión</h1>
      <p class="subtitulo">Somos una organización que brinda asistencia a mujeres en situaciones de abuso. <br>
        Buscamos generar un recurso <strong>seguro</strong> que unifique información y asistencia. </p>
      <br>


      <p>
        <strong>Dentro de la plataforma se podrá acceder a asistencia personalizada: </strong> <br>

        <em>Podes completar el formulario con los puntos básicos e información necesaria para comprender la situación y poder accionar.
          Una vez obtenida la información se coordinará una comunicación por el medio seleccionado en el horario pedido para ayudar.
          Esta función sirve para orientar a víctimas que no sepan cómo seguir adelante con la solución para su situación.
          Una vez definido el curso de acción gracias a la orientación se redireccionará a quien corresponda. </em>
      </p>

    </div>

  </div>
  <div class="banner2">
    <div id="contBan2">
      <div id="divImg">
        <img src="../assets/img/marchaimagen1.webp" id="marcha1">
      </div>
      <div class="videoytexto">
        <iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/ieoQuKUxhnM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br>
        <div class="epigrafe">
          <h1 id="texto1">8 de Marzo</h1>
          <h2 id="texto2">Día Internacional de la Mujer</h2>
        </div>
      </div>
      <div id="divImg">
        <img src="../assets/img/marchaimagen2.webp" id="marcha2">
      </div>
    </div>
  </div>
  <br>
  <div id="banner">
    <img src="../assets/img/imagenejemplo.png" id="marcha3">
  </div>

  <div class="wrapper">
    <div class="typing-demo">
      Una de cada tres mujeres ha experimentado alguna vez violencia física o sexual.
    </div>
  </div>
  <br>
  <br>
  <div class="bannerinformacion">
    <a target="_blank" id="fondoblancobanner" href="https://www.argentina.gob.ar/seguridad/911emergencias">
      <div id="columnaprimeraparte">

        <div id="emergencia">
          <div>
            <img src="../assets/img/telefonp.png" id="telefono">
          </div>
          <div id="textotelefono">
            <p><b>911</b></p>
          </div>
        </div>

        <div id="textoprimeraparte">
          <p>Auxilio en situaciones de riesgo y/o emergencias</p>
        </div>

      </div>
    </a>

    <a target="_blank" id="fondoblancobanner" href="https://www.argentina.gob.ar/generos/linea-144">
      <div id="columnaprimeraparte">

        <div id="emergencia">
          <div>
            <img src="../assets/img/telefonp.png" id="telefono">
          </div>
          <div id="textotelefono">
            <p><b>144</b></p>
          </div>
        </div>

        <div id="textoprimeraparte">
          <p>Atención, asesoramiento y contención para situaciones de violencias por motivos de género.</p>
        </div>
      </div>
    </a>
  </div>

  <div class="newsletter">
    <form @submit.prevent="suscripcion()">
      <div class="newsletter-bloqueuno">
        <div id="div-img-newsletter">
          <img src="../assets/img/letter_icon-icons.com_67753.png" id="img-newsletter">
        </div>
        <div id="texto-newsletter">
          <h2> Newsletter </h2>
        </div>
      </div>
      <div>
        <div id="input-newsletter">
          <input class="newsleter-email" type="email" name="mail" placeholder="Ingrese Mail" required v-model="mailNl" size="50"><br>
        </div>
        <div id="button-newsletter">
          <button type="submit" class="button-subscribe"> Suscribirme </button>
        </div>
      </div>

    </form>
  </div>


  <input type="checkbox" id="cerrar">
  <label for="cerrar" id="btn-cerrar">X</label>
  <div class="modal">
    <div class="contenido">
      <p id="textopop"><b>Para poder navegar con más tranquilidad por los contenidos de esta web, tené en cuenta lo siguiente...</b></p>
      <p>Opción de "SALIR RÁPIDO": Dispondrás de un botón siempre accesible en pantalla.

        Borra tu historial de navegación para no dejar rastro después de informarte.

        Utiliza el modo incógnito o privado de navegación, si no quieres que tu navegador guarde registro de los sitios web que visitas y del contenido que descargas.</p>
      <img src="http://lorempixel.com/200/200" alt="">
    </div>
  </div>


  <div id="sponsorsDiv">
    <img src="../assets/img/sponsors.jpg" id="sponsors">
  </div>


</template>

<script>
import axios from "axios";

export default {
  name: "homeComp",
  emits:["mainEvent"],
  data() {
    return {
      mailNl: "",
      message: null,
    }
  },
  methods: {
    suscripcion() {

      let form = {
        mailA: this.mailNl,
      }

      axios.post("http://127.0.0.1:5000/api/v1/suscripcion", form)
          .then(response => {
            console.log(response.data.message);
            if(response.data.status === "201") {
              this.message = "Suscripción realizada con exito"
            }
          })
          .catch(error => {
            console.log(error);
            this.message = "Suscripción no realizada. Vuelva a intentarlo"
          })
    },
  }
};

</script>

<style>

@import "../assets/css/home.css";

</style>

