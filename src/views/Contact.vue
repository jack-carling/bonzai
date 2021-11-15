<template>
  <main>
    <section class="main">
      <h5>Hitta till oss</h5>
      <p>
        Vi finns i 10 olika städer runt om i Sverige. Alla hotell ser likadana ut och du kan välja mellan de olika
        uterummen på samtliga hotell.
      </p>
      <p>Använd kartan nedan för att hitta ett hotell nära dig.</p>
      <iframe
        width="100%"
        height="500"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=postgatan%2015%20g%C3%B6te&t=&z=15&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
      >
      </iframe>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
iframe {
  filter: grayscale(100);
}
</style>
