<template>
  <div class="app">
    <Header />
    <main>
      <section class="search">
        <SearchForm />
        <SearchList v-if="jokesLength > 0" />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue';
import SearchList from '@/components/SearchList.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'

export default {
  name: 'IndexPage',
  components: {
    Header,
    Footer,
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