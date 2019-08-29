<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,i) in swipeLise" :key="i">
        <a :href="item.link">
          <img :src="item.image" alt />
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "mint-ui";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  props: ["swipeLise"],
  created() {
   
  }
};
</script>
<style scoped>
.mint-swipe{
  height:200px;
}
img {
  width:100%;
}
</style>