import Vue from 'vue'
import Vuex from 'vuex'
import repo from './modules/repo'

Vue.use(Vuex)

// Дабы не мусорить в индексном файле, переносим все узкие настройки в отдельную папку. В repo.js.

export default new Vuex.Store({
  modules: {
    repo
  }
})
