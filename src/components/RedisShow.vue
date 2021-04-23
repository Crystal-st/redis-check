<template>
    <div class="bg">
        <form-select></form-select>
        <point-table></point-table>
    </div> 
</template>

<script>
import FormSelect from './pages/FormSelect'
import PointTable from './pages/PointTable'
export default{
    name: 'RedisShow',
    components: {
        FormSelect,
        PointTable
    }
}
</script>

<style scoped lang="stylus">
.bg{
    height: 768px
    background-size cover
    background-image url('~@/assets/images/bg.png')
    background-repeat none 
    overflow hidden 
}
</style>

