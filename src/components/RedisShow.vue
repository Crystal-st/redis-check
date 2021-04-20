<template>
  <div class="bg">
      <select name="keywords" id="keywords" class="keywords">
          <option >{{KeyList[0]}}</option>
          <option >{{KeyList[1]}}</option>
          <option >{{KeyList[2]}}</option>
      </select>
      <select name="filenames" id="filenames">
          <option >{{FormList[0]}}</option>
          <option >{{FormList[1]}}</option>
          <option >{{FormList[2]}}</option>
          <option >{{FormList[3]}}</option>
          <option >{{FormList[4]}}</option>
      </select>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
   name:'RedisShow',
   data() {
       return{
           KeyList: ['请选择关键字','Collect','Retransmit'],
           FormList: ['表1','表2','表3','表4','表5','表6','表7','表8','表9']
       }
   }
}
</script>



<style scoped lang="stylus">
.bg{
    background-size contain 
    background-image url('../assets/images/bg.png')
    background-repeat none 
    overflow hidden 
}
.keywords{
    margin-top 20px
    margin-left 10px
    width 120px
    height 30px
}
#filenames{
    width 220px
    height 30px
    margin-left 10px
}

</style>

