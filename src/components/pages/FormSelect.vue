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
           FormList: ['请选择点表'],
       }
   },
   methods: {
       selectKeyword:function(event){
           console.log(event.target.value)
           //console.log(this.FormList)
           let keyword = event.target.value
           let $this = this
           axios.get('http://127.0.0.1:8080/index?keyword=' + keyword + "&pageSize=1" + "&page=3")
            .then(function (response) {
                // handle success
                //console.log(response);
                console.log(response.data);
                if(response.data.length==0) {
                    $this.FormList = ['请选择点表']
                }
                else{
                    $this.FormList = response.data
                }
                
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
.keywords,.filenames{
    margin-top 20px
    margin-bottom 10px
    margin-left 14px
    margin-right 14px
    padding 5px
    border-radius 4px
}
.keywords{
    width 180px
    height 36px
}
.filenames{
    width 280px
    height 36px
}
</style>