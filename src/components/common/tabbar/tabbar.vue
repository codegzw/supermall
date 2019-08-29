<template>
  <div>
    
    <div class="tabbar">
      <div class="bar-item" :class="{on:getFlag('/home')}" @click="goTo('/home')">
         <img v-if="getFlag('/home')" src="~assets/img/tabbar/home_active.svg" alt="">
        <img v-else src="~assets/img/tabbar/home.svg" alt="">
        
        <div class="item-text">首页</div>
      </div>
      <div class="bar-item" :class="{on:getFlag('/category')}" @click="goTo('/category')">
        <img v-if="getFlag('/category')" src="~assets/img/tabbar/category_active.svg" alt="">  
        <img v-else src="~assets/img/tabbar/category.svg" alt="">
        <div class="item-text">分类</div>
      </div>
      <div class="bar-item" :class="{on:getFlag('/cart')}" @click="goTo('/cart')">
        <img v-if="getFlag('/cart')" src="~assets/img/tabbar/cart_active.svg" alt="">
        <img v-else src="~assets/img/tabbar/cart.svg" alt="">
        <div class="item-text">购物车</div>
      </div>
      <div class="bar-item" :class="{on:$route.path === '/profile'}" @click="goTo('/profile')">
      <img  v-if="getFlag('/profile')" src="~assets/img/tabbar/profile_active.svg" alt="">
        <img v-else src="~assets/img/tabbar/profile.svg" alt="">
        <div class="item-text">我的</div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  data(){
    return{
    }
  },
    methods:{
        goTo (path) {
            this.$router.replace(path)
            
        },
        getFlag(a){
          return this.$route.path===a

        }
        

    }
};
</script>
<style scoped>
.tabbar{
  height:49px;
  background:#f6f6f6;
  border-top:1px solid #eee;
  box-shadow: 0 -1px 1px rgba(150,150,150,.1);
  position: fixed;
  bottom:0;
  left: 0;
  right:0;
  text-align: center;
  display: flex;
}
.bar-item{
  flex:1;
}
.bar-item img{
  width:24px;
  height:24px;
  margin-top:5px;
  vertical-align: middle;
}
.item-text{
  font-size: 12px;
  margin-top: 3px;
  color:#333;
}
.on .item-text{
    color:#FF5777;
}

</style>