<template>

  <div class="main">
    <Repo 
      v-for="item in items" 
      :key="item.id" 
      :data="item" 
    />
  </div>

</template>

<style lang="sass">

.main
  padding: 20px
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(440px, 1fr))
  grid-gap: 1rem

</style>

<script>
import Repo from './Repo.vue'
export default {
  components: {
    Repo,
  },
  data() {
    return {
      subject: 'koko',
      items:[]
    };
  },
  async mounted(){
    const res = await fetch(
      `https://api.github.com/search/repositories?q=${this.subject}`
    )
    const posts = await res.json()
    this.items = posts.items
  }
};
</script>