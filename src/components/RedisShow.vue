<template>
    <div class="bg">
        <point-table></point-table>
    </div> 
</template>

<script>
import PointTable from './pages/PointTable'
export default{
    name: 'RedisShow',
    components: {
        PointTable,
    }
}
</script>

<style scoped lang="stylus">
.bg{
    height: 800px
    background-size cover
    background-image url('~@/assets/images/bg.png')
    background-repeat none 
    overflow hidden 
}
</style>

