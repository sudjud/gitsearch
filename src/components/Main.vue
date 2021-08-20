<template>
  <div>
    <div class="main">
      <Search />
      <div class="main__wrapper">
        <Repo 
          v-for="repo in currentRepos" 
          :key="repo.id" 
          :data="repo" 
        />
      </div>
    </div>

    <div class="main__buttons">

      <button class="main__buttons_btn" @click="prevPage">
        ❮
      </button>

      <button
        class="main__buttons_btn"
        :class="{ main__buttons_active: page === pageNumber }"
        v-for="page in pages" 
        :key="page" 
        @click="pageNumber = page"
      >
        {{ page }}
      </button>

      <button class="main__buttons_btn" @click="nextPage">
        ❯
      </button>

    </div>
  </div>

</template>

<style lang="sass">

.main
  min-height: 770px
  &__wrapper
    padding: 20px
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(440px, 1fr))
    grid-gap: 1rem
  &__buttons
    margin: 0 auto
    text-align: center
    padding-bottom: 50px
    padding-top: 30px
    &_btn
      background-color: #00A3FF
      border-radius: 15px
      margin-left: 5px
      margin-right: 5px
      width: 30px
      height: 30px
      color: white
      border: none
    &_active
      background-color: #DDDDDD
      color: #00A3FF
      transform: scale(1.2)
      transition: 0.5s

</style>

<script>
import Repo from "./Repo.vue";
import Search from "./Search.vue";
import Pagination from "vue-pagination-2";
import { mapGetters, mapActions } from "vuex";

export default {

  data() {
    return {
      loading: true,
      pageNumber: 1,
    };
  },

  components: {
    Repo,
    Search,
    Pagination,
  },

  computed: {
    ...mapGetters(["allRepos", "getReq"]),

    currentRepos() {
      return this.allRepos.slice(
        (this.pageNumber - 1) * 9,
        this.pageNumber * 9 - 1
      );
    },

    pages() {
      return Math.ceil(this.allRepos.length / 8);
    },
  },
  // Это можно сделать и без импортирования mapGetters и mapActions. Но так все выглядит лаконично и приятно.
  methods: {
    ...mapActions(["getRepos"]),
    async mounted() {
      // Взял из геттера наш запрос и вставил его в функцию, которая отправит массив с нужными данными из гита в блок статических данных
      this.getRepos(this.$store.getters.getReq);
    },

    prevPage() {
      if (this.pageNumber != 1) {
        this.pageNumber--;
      }
    },
    nextPage() {
      if (this.pageNumber < Math.ceil(this.allRepos.length / 8)) {
        this.pageNumber++;
      }
    }
  }
};
</script>