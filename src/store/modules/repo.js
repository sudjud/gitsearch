export default {
  state: {
    repos: [],
    req: 'koko'
  },
  mutations: {
    updateRepos(state, repos){
      state.repos = repos
    },
    // changeReq(state, req){
    //   state.req = req.req
    // }
  },
  actions: {
    async getRepos(ctx, subject){
      const res = await fetch(
        `https://api.github.com/search/repositories?q=${subject}`
      )
      const repos = await res.json()
      ctx.commit('updateRepos', repos.items)
    }
  },
  getters:{
    allRepos(state){
      return state.repos
    },
    getReq(state){
      return state.req
    }
  },
}