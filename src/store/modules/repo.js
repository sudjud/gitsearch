export default {

  state: {
    // В стейте находятся две переменных. Это массив реп, и наш поисковой запрос.
    repos: [],
    req: ''
  },

  mutations: {
    // Просто мутация, ничего необычного.
    updateRepos(state, repos){
      state.repos = repos
    },
  },

  actions: {
    // Делаем асинхронный запрос на api git. subject в данном случае выполняет роль переменной, динамически меняющей url адрес. В файле Search.vue мы вызываем данный экшн, передавая в качетсве аргумента req. А req - это местный subject. В качетсве первого аргумента выступае Контекст. Но про него я знаю не много. 
    async getRepos(ctx, subject){
      const res = await fetch(
        `https://api.github.com/search/repositories?q=${subject}`
      )
      const repos = await res.json()
      // Опять же, про ctx я знаю не много. Знаю лишь, что commit является методом ctx. А commit в свою очередь вызывает мутацию. 
      ctx.commit('updateRepos', repos.items)
    }
  },

  getters:{
    // Просто геттеры.
    allRepos(state){
      return state.repos
    },

    getReq(state){
      return state.req
    }
  },

}