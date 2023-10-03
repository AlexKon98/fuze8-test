<template>
  <div class="app">
    <Header />
    <main>
      <section class="joke__info">
        <div class="container" v-if="!fetching && joke">
          <router-link class="joke-link" to="/">
            <img class="joke__img" src="@/assets/chuck.png" :alt="joke.value">
          </router-link>
          <h1 class="joke__text">
            {{ joke.value }}
          </h1>
          <div class="joke__dates">
            <div class="joke__created">created: <span>{{ data(joke.created_at) }}</span></div>
            <div class="joke__updated">updated: <span>{{ data(joke.updated_at) }}</span></div>
          </div>
          <div class="joke__source">
            <span>Find this joke on</span>
            <a :href="joke.url">this site</a>
          </div>
        </div>
        <div class="joke__loading" v-else-if="fetching">
          Loading...
        </div>
        <div class="joke__loading error" v-else>
          <div>Seems like joke does not exist</div>
          <router-link to="/">go to home page</router-link>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'

export default {
  name: 'JokePage',
  components: {
    Header, Footer
  },
  data() {
    return {
      joke: {},
      fetching: true,
    }
  },
  methods: {
    data(val) {
      if(val) return val.split('.')[0]; // т.к. во vue3 вырезали фильтры...
    }
  },
  async mounted() {
    const req = await this.$store.dispatch('fetchJokeInfo', this.$route.params.id);
    this.joke = req;
    this.fetching = false;
  }
}
</script>

<style lang="scss" scoped>
.joke__loading {
  position: fixed;
  left: 0;
  right: 0;
  top: 80px;
  bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  line-height: 52px;
  &.error {
    display: flex;
    flex-direction: column;
  }
  a {
    color: #656EC2;
  }
}

.container {
  position: relative;
  margin-top: 30px;
}

.joke__img {
  width: 50%;
  margin: 0 auto 45px;
}

.joke__text {
  text-align: center;
  margin-bottom: 60px;
  color: #282626;
  font-family: 'Fira Sans';
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
}

.joke__dates {
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  margin-bottom: 30px;
}

.joke__created span,
.joke__updated span {
  color: #767676;
  text-align: right;
  font-family: 'Montserrat';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.joke__source {
  text-align: center;
  a, span {
    display: inline;
  }
  a {
    color: #767676;
    padding-left: 5px;
  }
}

@media (max-width: 1024px) {
  .joke__img {
    width: 100%;
    margin: 0 auto 30px;
  }

  .joke__text {
    font-size: 18px;
    line-height: 20px;
  }
}
</style>
