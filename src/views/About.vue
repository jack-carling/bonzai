<template>
  <main>
    <article class="hero about">
      <h1 class="hero-header white">Om bonz.ai</h1>
    </article>
    <section class="main">
      <div class="flex gap a-center" id="about">
        <div>
          <h5>Om bonz.ai</h5>
          <p>
            bonz.ai är ett helt nytt, unikt och högteknologiskt koncept. Genom den nya Lorem ipsum-teknologin har du nu
            möjlighet att få nästan vilken vy du vill framför dig. Stå bara på laddningsplattan, säg bonz.ai och välj
            sedan ett av våra uterumsalternativ. (Fler uterum skapas med tiden.)
          </p>
          <p>
            Alla innerum är dessutom utrustade med denna nya teknologi vilket gör att du var som helst inne i rummet kan
            säga bonz.ai och sedan be om, vad du nu än vanligtvis skulle använda telefonen för att be om. “bonz.ai, jag
            vill ha nya handdukar”, “bonz.ai, kan jag få en caffe latte.”.
          </p>
        </div>
        <img src="@/assets/logo_xl.png" alt="Logo" id="logo" />
      </div>
      <article class="cards">
        <div class="card brown">
          <div class="icon">
            <i class="material-icons">location_on</i>
          </div>
          <h5>6 olika vyer</h5>
          <p>För endast 300 kr kan du byta till en ny vy när du vill.</p>
        </div>
        <div class="card green">
          <div class="icon">
            <i class="material-icons">location_on</i>
          </div>
          <h5>Service 24/7</h5>
          <p>Vi är bemannade dygnet runt. Säg bara bonz.ai så svarar vi.</p>
        </div>
        <div class="card dark-gray">
          <div class="icon">
            <i class="material-icons">location_on</i>
          </div>
          <h5>Restaurang</h5>
          <p>Frukost, lunch och middag ingår i priset.</p>
        </div>
        <div class="card gray">
          <div class="icon">
            <i class="material-icons">location_on</i>
          </div>
          <h5>4 barer</h5>
          <p>Njut av goda drycker helt gratis dygnet runt.</p>
        </div>
        <div class="card dark-gray">
          <div class="icon">
            <i class="material-icons">location_on</i>
          </div>
          <h5>Wifi</h5>
          <p>Gratis 6g-nät över hela hotellets område.</p>
        </div>
        <div class="card gray">
          <div class="icon">
            <i class="material-icons">location_on</i>
          </div>
          <h5>bonz.ai finns</h5>
          <p>i 10 olika städer i Sverige. Samtliga hotell är likadana.</p>
        </div>
        <div class="card green">
          <div class="icon">
            <i class="material-icons">location_on</i>
          </div>
          <h5>Kommunicera</h5>
          <p>Orkar du inte säga bonz.ai kan du använda vår app.</p>
        </div>
        <div class="card brown">
          <div class="icon">
            <i class="material-icons">location_on</i>
          </div>
          <h5>Betalning</h5>
          <p>Vi tar emot samtliga aktuella betalningsmedel.</p>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#logo {
  margin-left: 10rem;
}
@media screen and (max-width: 700px) {
  #about {
    flex-direction: column;
  }
  #logo {
    margin: 0;
  }
}
</style>
