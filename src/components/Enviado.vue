 <template>

    <div id="success-sub-main">
      <Header v-bind:show-button="false"/>
      <span class="title-sub-success">¡{{ this.$route.query["clientName"] }}!</span>
      <span class="title-sub-success"> Gracias por la  suscripción, recibiras un e-mail con descuentos</span>

      <div id="sub-success-img">
        <img src="../assets/img/coffee_subscription_footer.png" alt="">
      </div>

    </div>

  </template>

  <script>
    import Header from "@/components/Header";
    export default {
      name: "SubscribeSuccess",
      components: {Header}
    }
  </script>
