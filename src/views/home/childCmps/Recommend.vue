<template>
    <div class="recommend">
        <div class="recommend_item" v-for="(item,i) in recommend" :key="i">
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
            <div>{{item.title}}</div>
        </div>
        
    </div>
</template>
<script>
export default {
    props:['recommend']
    
}
</script>
<style scoped>
.recommend{
    width:100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
}
.recommend_item{
    width:25%;
    flex:1;
    text-align: center;
    padding:10px;
}
.recommend_item img{
    width:100%;
    margin-bottom: 10px;

}
</style>