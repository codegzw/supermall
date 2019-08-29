<template>
<div>
  <router-view></router-view>
  <tabbar></tabbar>
</div>



</template>

<script>
import tabbar from '@/components/common/tabbar/tabbar.vue'



export default {
  name: 'app',
  components: {
    tabbar
    
    
  }
}
</script>

<style>
@import "assets/css/base.css";


</style>
