<template>
    <div class="nav-bar">
        <div class="left"><slot name="nav-left"></slot></div>
        <div class="center"><slot name="nav-center"></slot></div>
        <div class="right"><slot name="nav-left"></slot></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style  scoped>
.nav-bar{
    position: fixed;
    top:0;
    left:0;
    right:0;
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    z-index: 99;

}
.left,.right{
    width:60px;
}
.center{
    flex:1;
    color:#fff;
}
</style>