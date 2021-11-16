<template>
  <main>
    <article class="hero landing">
      <h1 class="hero-header white">Upplev dina drömmar hos bonz.ai</h1>
      <div class="flex top gap bottom">
        <button class="green" @click="$router.push('/about')">Läs mer</button>
        <button class="white" @click="$router.push('/rooms')">Boka</button>
      </div>
    </article>
    <section class="main">
      <DatePickers :dates="dates" @update-settings="handleSettings" />
      <h5>Modernt och stilrent rum nästan var du vill</h5>
      <p>
        Slappna av och ladda batterierna framför stilla Kolsjön i Norrland, på stranden i Maldiverna eller blå lagunen
        på Island. Hos oss kan du vara där dina drömmar är. Gå bara ut till laddplatsen och säg bonz.ai.
      </p>
      <section class="gallery focus">
        <img src="@/assets/photos/09-day.jpg" alt="" />
        <img src="@/assets/photos/06-night.jpg" alt="" />
        <img src="@/assets/photos/07-day.jpg" alt="" />
        <img src="@/assets/photos/05-day.jpg" alt="" />
        <img src="@/assets/photos/04-day.jpg" alt="" />
        <img src="@/assets/photos/08-day.jpg" alt="" />
        <img src="@/assets/photos/08-night.jpg" alt="" />
        <img src="@/assets/photos/07-night.jpg" alt="" />
        <img src="@/assets/photos/03-day.jpg" alt="" />
      </section>
    </section>
  </main>
</template>

<script>
import DatePickers from '../components/DatePickers.vue';

export default {
  components: {
    DatePickers,
  },
  props: {
    dates: Object,
  },
  methods: {
    handleSettings(payload) {
      this.$emit('update-settings', payload);
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 950px) {
  #booking {
    flex-direction: column;
    align-items: center;
    button {
      margin-top: 1rem;
    }
  }
}
</style>
