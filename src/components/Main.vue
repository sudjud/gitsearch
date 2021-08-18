<template>
    
  <div class="main">
    <Search/>
    <div class="main__wrapper">
      <Repo 
        v-for="repo in allRepos" 
        :key="repo.id" 
        :data="repo" 
      />
    </div>
  </div>

</template>

<style lang="sass">

.main
  &__wrapper
    padding: 20px
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(440px, 1fr))
    grid-gap: 1rem

</style>

<script>
import Repo from './Repo.vue';
import Search from './Search.vue'
import Pagination from 'vue-pagination-2';
import { mapGetters, mapActions } from 'vuex';

export default {

  data(){
    return {
      loading: true
    }
  },

  components: {
    Repo,
    Search,
    Pagination
  },

  computed: mapGetters(['allRepos', 'getReq']),
  // Это можно сделать и без импортирования mapGetters и mapActions. Но так все выглядит лаконично и приятно.
  methods: mapActions(['getRepos']),

  async mounted(){
    // Взял из геттера наш запрос и вставил его в функцию, которая отправит массив с нужными данными из гита в блок статических данных
    this.getRepos(this.$store.getters.getReq);
  }

};
</script>