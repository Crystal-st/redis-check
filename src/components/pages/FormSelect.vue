<template>
  <div>
      <select name="keywords" id="keywords" class="keywords" v-on:change="selectKeyword">
          <option v-for="item in KeyList" :key="item">{{item}}</option>
      </select>
      <select name="filenames" id="filenames" class="filenames" v-on:change="selectFile">
          <option v-for="item in FormList" :key="item">{{item}}</option>
      </select>
  </div>
</template>

<script>
const axios = require('axios');
export default {
    name: 'FormSelect',
    data() {
       return {
           KeyList: ['请选择关键字','Collect','Retransmit'],
           FormList: ['请选择点表']
       }
   },
   methods: {
       selectKeyword:function(event){
           console.log(event.target.value)
           //console.log(this.FormList)
           let keyword = event.target.value
           let $this = this
           axios.get('http://127.0.0.1:8080/index?keyword=' + keyword)
            .then(function (response) {
                // handle success
                //console.log(response);
                console.log(response.data);
                $this.FormList = response.data
            })
            .catch(function (error) {
            // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
       },
       selectFile:function(){
           
       }   
   }

}
</script>

<style scoped lang="stylus">
.keywords{
    margin-top 20px
    margin-left 20px
    width 160px
    height 30px
    padding 5px
    border-radius 4px
}
.filenames{
    width 240px
    height 30px
    margin-left 20px
    padding 5px
    border-radius 4px
}
</style>