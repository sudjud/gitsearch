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
import { mapGetters, mapActions } from 'vuex';
export default {
  components: {
    Repo,
    Search
  },
  computed: mapGetters(['allRepos', 'getReq']),
  methods: mapActions(['getRepos']),
  async mounted(){
    this.getRepos(this.$store.getters.getReq);
  }
};
</script>