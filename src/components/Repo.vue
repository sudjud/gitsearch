<template>

  <a :href="data.html_url" target="_blank" class="repo">
    <div class="repo__project">
      {{ data.name }}
    </div>

    <div class="repo__wrapper">
      <div class="repo__author-pic">
        <img :src="data.owner.avatar_url" />
      </div>
      <div class="repo__author-name">
        {{ data.owner.login }}
      </div>
    </div>

    <div class="repo__wrapper repo__statistics">
      <div class="repo__statistics-stars">
        <img src="../assets/img/star.png" alt="" /> {{ data.stargazers_count }}
      </div>
      <div class="repo__statistics-views">
        <img src="../assets/img/eye.png" alt="" /> {{ data.watchers_count }}
      </div>
    </div>

    <form @submit.prevent="commentSubmit" class="repo__comment">
      <input 
        class="repo__comment_text" 
        type="text" 
        placeholder="Комментарий к проекту" 
        v-model="commentA"
      />
      <button 
        class="repo__comment_submit"
      />
    </form>
    <hr/>
    <div class="repo__comment_written">
      Комментарии:<br/> <b>{{ comment.join(", ") }}</b>
    </div>
    
  </a>

</template>

<script>
export default {
  data(){
    return{
      comment: [],
      commentA: ''
    }
  },
  methods:{
    commentSubmit(){
      this.comment.push(this.commentA)
    },
  },
  props: {
    data: Object,
  },
};
</script>

<style lang="sass">
.repo
  width: 440px
  padding: 10px
  border: 1px solid #A2A3A4
  display: flex
  flex-direction: column
  margin-bottom: 20px
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
  text-decoration: none
  color: black
  &:hover
    transition-duration: 0.2s
    color: black
    transform: scale(1.05)
    box-shadow: 0px 4px 4px rgba(10, 10, 10, 0.5)
  &:active
    transform: scale(1.03)
  &__project
    font-size: 20px
    padding-bottom: 18px
  &__wrapper
    display: flex
    padding-bottom: 15px
    align-items: center
  &__author
    &-pic
      img
        width: 50px
        height: 50px
        border-radius: 25px
    &-name
      font-size: 18px
      padding-left: 26px
  &__statistics
    font-size: 16px
    img
      width: 25px
      height: 25px
    &-stars
      padding-right: 10px
  &__comment
    width: 100%
    display: flex
    height: 54px
    &_text
      width: 100%
    &_submit
      background: url('../assets/img/pen.png') center no-repeat #00A3FF
      width: 100%
      width: 65px
      border: none 
</style>