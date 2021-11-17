<template>
  <div id="root">
    <Modal v-if="showModal" @close-modal="showModal = false" />
    <Menu id="menu" />
    <div id="root-grid">
      <router-view
        id="view"
        :location="location"
        @update-location="handleLocation"
        :dates="dates"
        @update-settings="handleSettings"
        @open-modal="showModal = true"
      />
      <Footer />
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import Footer from './components/Footer.vue';
import Modal from './components/Modal.vue';

import { format, add } from 'date-fns';

export default {
  components: {
    Menu,
    Footer,
    Modal,
  },
  data() {
    return {
      dates: {
        today: '',
        tomorrow: '',
        fiveDays: '',
        oneYear: '',
        checkIn: '',
        checkOut: '',
        people: '1',
      },
      showModal: false,
      location: 'Maldiverna',
    };
  },
  methods: {
    handleLocation(data) {
      this.location = data;
    },
    handleSettings(data) {
      this.dates.checkIn = data.checkIn;
      this.dates.checkOut = data.checkOut;
      this.dates.people = data.people;
    },
  },
  mounted() {
    this.dates.today = format(new Date(), 'yyyy-MM-dd');
    this.dates.tomorrow = format(add(new Date(), { days: 1 }), 'yyyy-MM-dd');
    this.dates.fiveDays = format(add(new Date(), { days: 5 }), 'yyyy-MM-dd');
    this.dates.oneYear = format(add(new Date(), { years: 1 }), 'yyyy-MM-dd');
    this.dates.checkIn = this.dates.tomorrow;
    this.dates.checkOut = this.dates.fiveDays;
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  height: 100vh;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#root {
  height: 100%;
  #menu {
    width: 100%;
    position: fixed;
    z-index: 999;
  }
  #root-grid {
    padding-top: 60px;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr auto;
  }
}
</style>
