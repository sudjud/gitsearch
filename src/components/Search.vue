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
    <div v-if="catchE" class="search__error">Не менее трех символов</div>
  </div>

</template>

<script>
import { mapActions } from 'vuex'

export default {

  data(){
    return{
      req: '',
      catchE: false,
      // Выше переменная для вывода ошибки.
    }
  },

  methods:{
    ...mapActions(['getRepos']),
    async getRequest(){
      // Валидацию на количество знаков здесь можно было бы сделать и с помощью vuelidate, с помощью minLength. Но мне захотелось сделать так, как показано ниже.
      if(this.req.length > 2){
        this.catchE = false
        await this.getRepos(this.req)
      } else {
        this.catchE = true
      }
    }
  },
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
  &__error
    color: red
    padding-left: 20px

</style>