<template>

  <div class="search">
    <form class="search__form" action="">
      <input 
        class="search__text" 
        type="text" 
        placeholder="Начните вводить текст для поиска (не менее трех символов)"
      >
      <input 
        class="search__submit" 
        type="submit" 
        value=""
      >
    </form>
  </div>
  
</template>

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