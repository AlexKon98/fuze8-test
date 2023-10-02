<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import url(./assets/styles/style.scss);

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

footer, header {
  background-color: rgba(118, 118, 118, .5);
}

footer {
  margin-top: auto;
}
</style>
