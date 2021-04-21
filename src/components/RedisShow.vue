<template>
  <div class="bg">
      <select name="keywords" id="keywords" class="keywords" v-on:change="selectChange">
          <option>{{KeyList[0]}}</option>
          <option>{{KeyList[1]}}</option>
          <option>{{KeyList[2]}}</option>
          <option>{{KeyList[3]}}</option>
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
const axios = require('axios');
export default {
   name:'RedisShow',
   data() {
       return{
           KeyList: ['请选择关键字','Collect','Retransmit', '工作'],
           FormList: ['表1','表2','表3','表4','表5','表6','表7','表8','表9']
       }
   },
   methods: {
       selectChange:function(event){
           console.log(event.target.value)
           let keyword = event.target.value
           axios.get('http://127.0.0.1:8080/index?keyword=' + keyword)
            .then(function (response) {
                // handle success
                //console.log(response);
                console.log(response.data);
            })
            .catch(function (error) {
            // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
       }   
   }
}
</script>



<style scoped lang="stylus">
.bg{
    height 640px
    background-size cover
    background-image url('../assets/images/bg.png')
    background-repeat none 
    overflow hidden 
}
.keywords{
    margin-top 20px
    margin-left 20px
    width 120px
    height 30px
    padding 5px
}
#filenames{
    width 220px
    height 30px
    margin-left 20px
}

</style>

