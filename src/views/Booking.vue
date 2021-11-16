<template>
  <main>
    <section class="main">
      <DatePickers :dates="dates" @update-settings="handleSettings" />
      <div class="header flex j-sb a-end">
        <h3>{{ location }}</h3>
        <h5>3000kr / natt</h5>
      </div>
      <p>
        Mammasay mammasa mamma oo sa, ultricies nizzle, hendrerizzle pizzle, adipiscing quis, dawg. Etiam velizzle leo,
        aliquizzle fo, pharetra pizzle, dictizzle go to hizzle, mofo. Vivamizzle da bomb. Crizzle lorizzle.
      </p>
      <section class="gallery focus">
        <img :src="img(locationImage)" alt="" />
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
    location: String,
  },
  computed: {
    locationImage() {
      switch (this.location) {
        case 'Maldiverna':
          return 'maldiverna';
        case 'Kenya':
          return 'kenya';
        case 'Island':
          return 'island';
        case 'New York':
          return 'new_york';
        case 'Charmonix':
          return 'charmonix';
        case 'Jukkasjärvi':
          return 'norrland';
        default:
          return '';
      }
    },
  },
  methods: {
    img(location) {
      const images = require.context('../assets/locations/', false, /\.jpg$/);
      return images(`./${location}.jpg`);
    },
    handleSettings(payload) {
      this.$emit('update-settings', payload);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  margin-top: 3rem;
  h5 {
    margin: 0;
  }
}
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
