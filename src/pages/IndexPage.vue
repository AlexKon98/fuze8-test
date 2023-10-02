<template>
  <div class="app">
    <main>
      <section class="search">
        <SearchForm />
        <SearchList v-if="jokesLength > 0" />
      </section>
    </main>
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue';
import SearchList from '@/components/SearchList.vue';

export default {
  name: 'IndexPage',
  components: {
    SearchForm,
    SearchList
  },
  computed: {
    jokesLength() {
      return this.$store.getters['getJokes'].length;
    },
  },
  mounted() {
    this.$store.commit('setJokes', []);
  }
}
</script>