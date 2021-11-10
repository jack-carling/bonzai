<template>
  <section>
    <router-link to="/">
      <img src="@/assets/logo.png" alt="Logo" />
    </router-link>
    <nav>
      <router-link to="/rooms">VÅRA UTERUM</router-link>
      <router-link to="/about">OM HOTELLET</router-link>
      <router-link to="/contact">KONTAKT</router-link>
      <router-link to="/booking">BOKA</router-link>
    </nav>
  </section>
</template>

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
img {
  cursor: pointer;
}
</style>
