<template>
    <div class="pointtable" style="display:flex; flex-direction:column">
        <div style="position: relative;">
            <!-- 把formselect作为子组件插入 -->
            <form-select  v-on:type-change="typeChange" style="display:inline-block;"></form-select>

            <!-- 用于显示数据点的表格 -->
            <!-- 多页签切换 -->
            <p class="selectTab">
                <vxe-radio-group v-model="selectTab">
                    <vxe-radio-button label="tab1" content="功能码2"></vxe-radio-button>
                    <vxe-radio-button label="tab2" content="功能码3"></vxe-radio-button>
                    <vxe-radio-button label="tab3" content="功能码4"></vxe-radio-button>
                </vxe-radio-group>
            </p>
        </div>

            <!-- 翻页功能 -->
            <div>
                <vxe-pager
                    size="small"
                    :loading="loading"
                    :current-page="tablePage.currentPage"
                    :page-size="tablePage.pageSize"
                    :total="tablePage.totalResult"
                    :page-sizes="[30,60,90]"
                    :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                    @page-change="handlePageChange"
                    class="page"
                >
                </vxe-pager>
            </div>   

        <!-- 多页签设置 每行存放三列数据-->
        <!-- tab1 功能码2-->
        <div v-show="selectTab === 'tab1'" class="Vtable">
            <vxe-table
                v-for="(item, index) in tabData1()"
                v-bind:key="index"
                v-bind:data="item"
                border
                show-overflow
                row-id="id"
                size="middle"
                :loading="loading"
                :sync-resize="selectTab"
                class="table1">
                <!-- <vxe-table-column type="seq" width="60px"></vxe-table-column> -->
                <vxe-table-column field="name" title="点名" width="33.5%"></vxe-table-column>
                <vxe-table-column field="value" title="数值" width="33.5%"></vxe-table-column>
                <vxe-table-column field="address" title="地址" width="33%"></vxe-table-column>
            </vxe-table>
        </div>

        <!-- tab2 功能码3-->
        <div v-show="selectTab === 'tab2'" class="Vtable">
            <vxe-table
                border
                show-overflow
                row-id="id"
                size="middle"
                :loading="loading"
                :sync-resize="selectTab"
                :data="tabData2()">
                <!-- <vxe-table-column type="seq" width="60px"></vxe-table-column> -->
                <vxe-table-column field="name" title="点名" width="33.5%"></vxe-table-column>
                <vxe-table-column field="value" title="数值" width="33.5%"></vxe-table-column>
                <vxe-table-column field="address" title="地址" width="33%"></vxe-table-column>
            </vxe-table>
        </div>

        <!-- tab3 功能码4-->
        <div v-show="selectTab === 'tab3'" class="Vtable">
            <vxe-table
                v-for="(item, index) in tabData3()"
                v-bind:key="index"
                v-bind:data="item"
                border
                show-overflow
                row-id="id"
                size="middle"
                :loading="loading"
                :sync-resize="selectTab"
                class="table1">
                <!-- <vxe-table-column type="seq" width="60px"></vxe-table-column> -->
                <vxe-table-column field="name" title="点名" width="33.5%"></vxe-table-column>
                <vxe-table-column field="value" title="数值" width="33.5%"></vxe-table-column>
                <vxe-table-column field="address" title="地址" width="33%"></vxe-table-column>
            </vxe-table>
        </div>
        
       
    </div>
    
</template>
  
<script>
import axios from 'axios'
  import FormSelect from './FormSelect'
  export default {
      name: 'PointTable',
      components: {
          FormSelect
      },
      computed: {
            selectTab: {
                // getter
                get: function () {
                    return this.currentTab
                },
                // setter
                set: function (newValue) {
                    console.log("newvalue:" + newValue);
                    switch(newValue) {
                        case "tab1": this.tablePage = this.tab1Page; break; 
                        case "tab2": this.tablePage = this.tab2Page; break;
                        case "tab3": this.tablePage = this.tab3Page; break;
                    } 
                    
                    this.currentTab = newValue
                }
            },
            
            
            

      },
      data(){
          return{
                currentTab: 'tab1',
                loading: false,
                
                allTab1Data: [],
                allTab2Data: [],
                allTab3Data: [],
                tab1Page: {
                    currentPage: 1,
                    pageSize: 30,
                    totalResult: 0
                },
                tab2Page: {
                    currentPage: 1,
                    pageSize: 30,
                    totalResult: 0
                },
                tab3Page: {
                    currentPage: 1,
                    pageSize: 30,
                    totalResult: 0
                },
                tablePage: {
                    currentPage: 1,
                    pageSize: 30,
                    totalResult: 0
                },
                
            }
        },
        created(){
            this.tablePage = this.tab1Page;
            this.findList({})
        },
        methods: {
            tabData3 () {
                    const page = this.tab3Page.currentPage
                    const offset = (page - 1) * this.tab3Page.pageSize
                    let end = offset + this.tab3Page.pageSize

                    if(end > this.allTab3Data.length -1) {
                        end = this.allTab3Data.length 
                    }
                    const current = this.allTab3Data.slice(offset, end)
                    return this.reFill(current, this.tab3Page.pageSize)
            },
            tabData2 () {
                    const page = this.tab2Page.currentPage
                    const offset = (page - 1) * this.tab2Page.pageSize
                    let end = offset + this.tab2Page.pageSize

                    if(end > this.allTab2Data.length -1) {
                        end = this.allTab2Data.length 
                    }
                    const current = this.allTab2Data.slice(offset, end)
                    let fillNum = this.tab2Page.pageSize - current.length
                    let tableData1 = current
                    if(fillNum>0) {
                        const fillArray = Array(fillNum).fill({})
                        tableData1 = current.concat(fillArray)
                    }
                    return tableData1
            },
            tabData1 () {
                    const page = this.tab1Page.currentPage
                    const offset = (page - 1) * this.tab1Page.pageSize
                    let end = offset + this.tab1Page.pageSize

                    if(end > this.allTab1Data.length -1) {
                        end = this.allTab1Data.length 
                    }
                    const current = this.allTab1Data.slice(offset, end)
                    console.log("current:" + current);
                    console.log("pageSize:" + this.tab1Page.pageSize);
                    return this.reFill(current, this.tab1Page.pageSize)
            },
            reFill(tableData, pageSize) { //tableData.length<=this.pageSize 
                    // 功能码2和功能码4填充满pageSize个数据
                    let fillNum = pageSize - tableData.length
                    let tableData1 = tableData
                    if(fillNum>0) {
                        const fillArray = Array(fillNum).fill({})
                        tableData1 = tableData.concat(fillArray)
                    }
                    
                    // console.log(this.tableData1)
                    let first = []
                    let sec = []
                    let thr = []
                    const splitPageSize = pageSize/3;
                    if(tableData1.length>=splitPageSize) {
                        first = tableData1.slice(0,splitPageSize)
                    }else{
                        first = tableData1.slice(0)
                    }

                    if(tableData1.length<=splitPageSize) {
                        sec = []
                    }else if(tableData1.length>=splitPageSize * 2) {
                        sec = tableData1.slice(splitPageSize,splitPageSize * 2)
                    }else{
                        sec = tableData.slice(10)
                    }

                    if(tableData1.length<=splitPageSize * 2) {
                        thr = []
                    }else 
                    if(tableData1.length>=splitPageSize * 3) {
                        thr = tableData1.slice(splitPageSize * 2,splitPageSize * 3)
                    }else{
                        thr = tableData1.slice(splitPageSize * 2)
                    }
                    return  [first, sec, thr]
                    //this.tabData1 = [first, sec, thr]
                    // this.tabData3 = [first, sec, thr]

                    // // 功能码3填充满10个数据
                    // let fillNum2 = 10 - this.tableData.length
                    // // console.log(this.tableData.length)
                    // let fillArray2 = Array(fillNum2).fill({})
            },
            typeChange({name, path}) {
                //console.log(arguments[0])
                this.findList({name, path})
            },
            findList({
                name, path
            }){
                if(!name || !path) {return}
                this.loading=true,
                axios.get("http://localhost:8080/redis", {params: {
                        path, 
                        name,
                    }}).then(res=>{
                    this.loading=false
                    let allTab1Data=[], allTab2Data=[], allTab3Data=[]
                    this.allTab1Data = []
                    this.allTab2Data = []
                    this.allTab3Data = []
                    this.tab1Page.totalResult = 0
                    this.tab2Page.totalResult = 0
                    this.tab3Page.totalResult = 0
                    this.tablePage.totalResult = 0
                    console.log("len:" + res.data.length);
                    for(let i=0; i<res.data.length; i++) {
                        console.log("item:" + res.data[i].items.length);
                        if(res.data[i].dataConfig==2) {
                            this.allTab1Data = res.data[i].items
                            this.tab1Page.totalResult = this.allTab1Data.length
                            if(this.currentTab=='tab1') {this.tablePage.totalResult = this.tab1Page.totalResult  }
                        }
                        else if(res.data[i].dataConfig==3) {
                            this.allTab2Data = res.data[i].items
                            this.tab2Page.totalResult = this.allTab2Data.length
                            if(this.currentTab=='tab2') {this.tablePage.totalResult = this.tab2Page.totalResult  }

                        }
                        else if(res.data[i].dataConfig==4) {
                            this.allTab3Data = res.data[i].items
                            this.tab3Page.totalResult = this.allTab3Data.length
                            if(this.currentTab=='tab3') {this.tablePage.totalResult = this.tab3Page.totalResult  }
                        }
                    }
                    
                })
            },
           
            handlePageChange({currentPage,pageSize}){
                this.tablePage.currentPage = currentPage
                console.log("currentPage:" + this.tablePage.currentPage)
                console.log("cur_pagesize:" + pageSize);
                this.tablePage.pageSize = pageSize
                console.log(pageSize)
                //this.findList()
            }
        }
    }  
</script>
  
  <style scoped lang="stylus">
    .Vtable{
        width auto
        height 528px
        margin 0px 14px 0px 14px
    }
    .selectTab{
        margin-bottom 5px
        margin-left 14px
        margin-right 14px
        padding 5px
        border-radius 4px
        display inline-block
        position absolute
        right 0
        bottom 0
    }
    .Vtable .table1{
        float left
        width 33.3%
    }
    .page{  
        margin 20px 15px 0px 14px
    }
  </style>