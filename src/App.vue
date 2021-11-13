<template>
  <main>
    <Menu />
    <router-view />
    <Footer />
  </main>
</template>

<script>
import Menu from './components/Menu.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Menu,
    Footer,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
