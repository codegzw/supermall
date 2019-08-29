<template>
    <div class="goodsList">
        <goodsListItem class="goodsList_item" v-for="(item,i) in goodsListData" :key="i" :goodsListItem="item" />
    </div>
</template>
<script>
import goodsListItem from 'components/content/goods/GoodsListItem.vue'
export default {
    components:{
        goodsListItem
    },
    props:['goodsListData'],
    
    
}
</script>
<style scoped>
.goodsList{
    width:100%;
    padding:10px 5px;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.goodsList_item{
    width:49%;
    
}
</style>