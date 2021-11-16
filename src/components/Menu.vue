<template>
  <section>
    <router-link to="/">
      <img src="@/assets/logo.png" alt="Logo" />
    </router-link>
    <div class="menu">
      <i @click="toggleNav" id="hamburger" class="material-icons">menu</i>
      <nav ref="nav">
        <router-link @click="toggleNav" to="/rooms">VÅRA UTERUM</router-link>
        <router-link @click="toggleNav" to="/about">OM HOTELLET</router-link>
        <router-link @click="toggleNav" to="/contact">KONTAKT</router-link>
        <router-link @click="toggleNav" to="/booking">BOKA</router-link>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    toggleNav() {
      if (!this.$refs.nav.style.display) {
        this.$refs.nav.style.display = 'flex';
      } else {
        this.$refs.nav.style.display = '';
      }
    },
  },
  watch: {
    $route() {
      this.$refs.nav.style.display = '';
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  height: 60px;
  background-color: $white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $light-gray;
  padding: 0 5rem;
}
#hamburger {
  display: none;
}
img {
  cursor: pointer;
}
@media screen and (max-width: 800px) {
  section {
    flex-direction: row-reverse;
    padding: 0 1rem;
  }
  #hamburger {
    display: block;
    cursor: pointer;
  }
  nav {
    display: none;
    position: absolute;
    top: 60px;
    left: 0;
    flex-direction: column;
    width: 100%;
    a {
      margin: 0;
      padding: 1rem;
      background-color: $white;
      width: 100%;
      border-bottom: 1px solid $light-gray;
    }
  }
}
</style>
