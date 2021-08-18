import Vue from 'vue'
import Vuex from 'vuex'
import repo from './modules/repo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    repo
  }
})
