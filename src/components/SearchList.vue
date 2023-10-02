<template>
  <div class="container">
    <ul class="search__list">
      <li class="search__joke-item" v-for="joke in jokes" :key="joke.id">
        <router-link :to="'/' + joke.id" class="search__joke">
          <div class="search__joke-text">{{ joke.value }}</div>
          <div class="search__joke-info">
            <div class="search__joke-id">{{ joke.id }}</div>
            <div class="search__joke-date">{{ joke.created_at.split(' ')[0] }}</div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SearchList',
  computed: {
    jokes() {
      return this.$store.getters['getJokes'];
    },
  }
}
</script>

<style lang="scss" scoped>
.search__list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 60px;
  .search__joke {
    display: flex;
    flex-direction: column;
    height: 100%;
    &-item {
      width: calc((100% / 3) - 20px);
      padding: 40px 40px 25px;
      box-shadow: 0px 7px 25px 0px rgba(100, 100, 111, 0.20);
    }
    &-item:nth-child(1), &-item:nth-child(2) {
      width: calc(50% - 10px);
    }
    &-text {
      color: #282626;
      font-family: 'Fira Sans';
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px;
      margin-bottom: auto;
    }
    &-info {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
    }
    &-id, &-date {
      color: #767676;
      font-family: 'Montserrat';
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
}

@media (max-width: 1650px) {
  .search__list {
    .search__joke-item,
    .search__joke-item:nth-child(1),
    .search__joke-item:nth-child(2) {
      width: calc(50% - 10px);
    }
    .search__joke-info {
      flex-direction: column;
    }
    .search__joke-date {
      margin-left: auto;
      margin-top: 10px;
    }
  }
}

@media (max-width: 1024px) {
  .search__list {
    .search__joke-item,
    .search__joke-item:nth-child(1),
    .search__joke-item:nth-child(2) {
      width: 100%;
    }
    .search__joke-item {
      padding: 20px 20px 12px;
    }
  }
}
</style>