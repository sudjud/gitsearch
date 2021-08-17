<template>
  <div class="repo">
    <div class="repo__project">
      {{ data.name }}
    </div>
    <div class="repo__wrapper">
      <div class="repo__author-pic">
        <img :src="data.owner.avatar_url"> 
      </div>
      <div class="repo__author-name">
        {{ data.owner.login }}
      </div>
      <div class="repo__statics">
        <div class="repo__statics-stars">
          {{ data.stargazers_count }}
        </div>
        <div class="repo__statics-views">
          {{ data.watchers_count }}
        </div>
      </div>
      <div class="repo__comment">
        <input type="text" class="repo__comment-text">
        <input type="submit" class="repo__comment-submit">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    data: Object 
  }
}
</script>