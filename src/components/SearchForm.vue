<template>
  <div class="container">
    <form @submit.prevent="search" class="search__form">
      <label for="search">
        <input type="text" placeholder="Search jokes..."
          class="search__input" id="search" v-model="input"
          @keyup="debounce" autofocus
        >
      </label>
    </form>
    <div class="search__count" v-if="jokesLength > 0 && !fetching">
      Found jokes: {{ jokesLength }}
    </div>
    <div class="search__count" v-if="jokesLength === 0 && input.trim().length > 3 && !fetching">
      Nothing Found
    </div>
    <div class="search__count" v-if="fetching">
      Searching jokes!
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  data() {
    return {
      input: '',
      timeout: null,
      fetching: false,
    }
  },
  watch: {
    input(val) {
      if (val.trim() === '') this.$store.commit('setJokes', []);
    }
  },
  methods: {
    async search() {
      if (this.input.trim().length > 3) {
        this.fetching = true;
        await this.$store.dispatch('fetchJokes', this.input);
        this.fetching = false;
      }
    },
    debounce() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.search, 750);
    },
  },
  computed: {
    jokesLength() {
      return this.$store.getters['getJokes'].length;
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 956px;
  margin-bottom: 60px;
}

.search__form {
  margin-top: 128px;
  margin-bottom: 20px;
  label, input {
    width: 100%;
  }
  .search__input {
    border: none;
    padding: 19px 30px;
    box-shadow: 0px 7px 12px rgba(100, 100, 111, 0.20);
    color: #656EC2;
    font-family: 'Fira Sans';
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    &::placeholder {
      color: #656EC2;
    }
  }
}

.search__count {
  color: #282626;
  padding-left: 36px;
  font-family: 'Montserrat';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>