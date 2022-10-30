<template>

  <div id="ring-container">
    <div class="circulo">
      <div class="ring-shape" id="ring1" onclick="change()">

        <p class="texto-emphasize"><strong>1</strong> de cada 3</p>
        <p class="texto-estadistica">mujeres fue víctima de violencia de género</p>

      </div>
    </div>

    <div class="circulo">
      <div class="ring-shape">

        <p class="texto-estadistica">1 femicidio cada</p>
        <p class="texto-emphasize"><strong>35</strong> horas</p>

      </div>
    </div>

    <div class="circulo">
      <div class="ring-shape">
        <p class="texto-emphasize">81%</p>
        <p class="texto-estadistica">de los femicidios se produjeron en un contexto de violencia doméstica.</p>

      </div>
    </div>

  </div>


  <section>
    <h1>Cómo detectar la violencia de género</h1>
    <h3>Primeros signos del maltrato</h3>
    <div class="descripcion">
      <p>Ciertos comportamientos, actitudes, comentarios u omisiones son manifestaciones de la violencia de género. Puedes estar sufriendo maltrato si tu pareja o expareja…</p>
      <ul>
        <li>Ignora o desprecia tus sentimientos con frecuencia</li>
        <li>Ridiculiza, insulta o desprecia a las mujeres en general</li>
        <li>Te humilla, grita o insulta en privado o en público</li>
        <li>Amenaza con hacerte daño a ti o a tu familia</li>
        <li>Te ha agredido alguna vez físicamente</li>
        <li>Te aísla de familiares y/o amistades</li>
        <li>Te ha forzado a mantener relaciones sexuales en contra de tu voluntad</li>
        <li>Te controla el dinero y toma las decisiones por ti</li>
        <li>No te permite trabajar</li>
        <li>Amenaza con quitarte a tus hijas e hijos en caso de dejarlo</li>
      </ul>

      <p>Una relación saludable es aquella basada en los principios de confianza y respeto mutuo. Si has iniciado recientemente una relación en la que pesan más el control y los celos, y aparecen alguna de las actitudes que citamos a continuación, te recomendamos estar alerta y actuar. No permitas esta situación ya que podría ser el comienzo de una relación de maltrato:</p>

      <ul>
        <li>Él controla tu manera de vestir</li>
        <li>No expresas tus opiniones libremente por miedo a la reacción de él</li>
        <li>Él revisa tu teléfono móvil y las redes sociales</li>
        <li>Continuamente te sientes inferior o menos que él</li>
        <li>Tu pareja muestra celos frecuentemente</li>
        <li>Has dejado de salir con tu círculo de amistades porque a él “no le caen bien”</li>

      </ul>
    </div>

  </section>


  <section>
    <h1></h1>
    <h3></h3>
    <div class="descripcion">

    </div>

  </section>


  <div id="mapa">
    <iframe src="https://www.google.com/maps/d/embed?mid=1E6ZGFwFM8EoZc13PNrnSzRhNuVk&ehbc=2E312F" width="640" height="480"></iframe>
  </div>

</template>

<script>

export default {
  name: "informacion",
  emits:["mainEvent"],
}

</script>

<style>

@import "../assets/css/informacion.css";

</style>