<template>
  <div id="app">
    <Search/>
    <Main/>
  </div>
</template>

<script>
import Main from './components/Main.vue'
import Search from './components/Search.vue'

export default {
  components: {
    Main,
    Search
  }
}
</script>

<style lang="sass">

body
  margin: 0
  box-sizing: border-box
img
  width: 100%

</style>