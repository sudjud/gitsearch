<template>

  <div class="search">
    <form 
      @submit.prevent="getRequest" 
      class="search__form" 
      action=""
    >
      <input 
        class="search__text" 
        type="text" 
        placeholder="Начните вводить текст для поиска (не менее трех символов)"
        v-model="req"
      >
      <button 
        class="search__submit" 
        type="submit" 
      />
    </form>
  </div>

</template>

<script>
import { mapActions } from 'vuex'

export default {

  data(){
    return{
      req: ''
    }
  },
  
  methods:{
    ...mapActions(['getRepos']),
    getRequest(){
      this.getRepos(this.req)
    },
  }
}
</script>

<style lang="sass">

.search
  padding: 20px
  background-color: #DDDDDD
  &__form
    display: flex
    justify-content: center
  &__text
    height: 54px
    width: 100%
  &__submit
    background: url('../assets/img/search.png') center no-repeat #00A3FF
    width: 100%
    height: 54px
    width: 65px
    border: none 

</style>