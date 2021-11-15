<template>
  <div id="root">
    <Menu id="menu" />
    <div id="root-grid">
      <router-view id="view" />
      <Footer />
    </div>
  </div>
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
