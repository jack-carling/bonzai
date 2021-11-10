<template>
  <main>
    <Menu />
    <router-view />
  </main>
</template>

<script>
import Menu from './components/Menu.vue';

export default {
  components: {
    Menu,
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
