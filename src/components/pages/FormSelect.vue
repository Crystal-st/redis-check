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
           keyword: "",
           KeyList: ['请选择关键字','104Retransmit','ModbusRetransmit'],
           FormList: ['请选择点表'],
       }
   },
   methods: {
       selectKeyword:function(event){
           //console.log(event.target.value)
           //console.log(this.FormList)
           this.keyword = event.target.value
           let $this = this
           axios.get('http://127.0.0.1:8080/index?keyword=' + this.keyword)
            .then(function (response) {
                // handle success
                //console.log(response);
                //console.log(response.data);
                if(response.data.length==0) {
                    $this.FormList = ['请选择点表']
                }
                else{
                    $this.FormList = response.data
                    $this.$emit('type-change', {name: $this.keyword, path: response.data[0], })
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
       selectFile:function(event){
           this.$emit('type-change', {name: this.keyword, path:event.target.value, })
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