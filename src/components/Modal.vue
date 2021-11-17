<template>
  <section>
    <article>
      <h1>Tyvärr</h1>
      <h3>bonz.ai är än sålänge inte på riktigt vi jobbar hårt på teknologin</h3>
      <p>...titta in om ett år igen så kanske det har hänt saker</p>
      <button class="green" @click="$emit('close-modal')">Okej</button>
    </article>
  </section>
</template>

<style lang="scss" scoped>
section {
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.25);
  position: fixed;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  article {
    padding: 3rem;
    background-color: $white;
    width: min(800px, 100%);
  }
  h1 {
    margin: 0;
    font-family: 'Maven Pro', sans-serif;
    font-weight: 500;
    font-size: 4rem;
  }
  h3 {
    margin: 2rem 0;
  }
  button {
    margin-top: 1rem;
  }
}
</style>
