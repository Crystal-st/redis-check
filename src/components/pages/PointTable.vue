<template>
    <div class="pointtable" style="display:flex; flex-direction:column">
        <div style="position: relative;">
            <!-- 把formselect作为子组件插入 -->
            <form-select style="display:inline-block;"></form-select>

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
        <!-- 多页签设置 每行存放三列数据-->
        <!-- tab1 功能码2-->
        <div v-show="selectTab === 'tab1'" class="Vtable">
            <vxe-table
                v-for="(item, index) in tabData1"
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
                <vxe-table-column field="adress" title="地址" width="33%"></vxe-table-column>
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
                :data="tabData2">
                <!-- <vxe-table-column type="seq" width="60px"></vxe-table-column> -->
                <vxe-table-column field="name" title="点名" width="50%"></vxe-table-column>
                <vxe-table-column field="value" title="数值" width="50%"></vxe-table-column>
            </vxe-table>
        </div>

        <!-- tab3 功能码4-->
        <div v-show="selectTab === 'tab3'" class="Vtable">
            <vxe-table
                v-for="(item, index) in tabData3"
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
                <vxe-table-column field="adress" title="地址" width="33%"></vxe-table-column>
            </vxe-table>
        </div>
        
        <!-- 翻页功能 -->
        <div>
            <vxe-pager
                size="small"
                :loading="loading"
                :current-page="tablePage.currentPage"
                :page-size="tablePage.pageSize"
                :total="tablePage.totalResult"
                :page-sizes="[30]"
                :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                @page-change="handlePageChange"
                class="page"
            >
            </vxe-pager>
        </div>   
    </div>
    
</template>
  
<script>
  import FormSelect from './FormSelect'
  export default {
      name: 'PointTable',
      components: {
          FormSelect
      },
      data(){
          return{
                selectTab: 'tab1',
                tabData1: [
                    [],[],[]
                ],
                tabData2: [ [] ],
                tabData3: [
                    [],[],[]
                ],
                loading: false,
                tablePage: {
                    currentPage: 1,
                    pageSize: 30,
                    totalResult: 0
                }
            }
        },
        created(){
            this.findList()
        },
        methods: {
            findList(){
                this.loading=true,
                setTimeout(()=>{
                    this.loading=false
                    this.tablePage.totalResult=44

                    this.tableData=[
                    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'vxe-table 从入门到放弃' },
                    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 23, address: 'vxe-table 从入门到放弃' },
                    { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women ', age: 30, address: 'Shanghai' },
                    { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women ', age: 21, address: 'vxe-table 从入门到放弃' },
                    { id: 10007, name: 'Test7', role: 'Test', sex: 'Man ', age: 29, address: 'vxe-table 从入门到放弃' },
                    { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man ', age: 35, address: 'vxe-table 从入门到放弃' },
                    { id: 10009, name: 'Test9', role: 'Develop', sex: 'Man', age: 28, address: 'vxe-table 从入门到放弃' },
                    { id: 10010, name: 'Test10', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10011, name: 'Test11', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10012, name: 'Test12', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10013, name: 'Test13', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10014, name: 'Test14', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10015, name: 'Test15', role: 'Develop', sex: 'Man', age: 28, address: 'vxe-table 从入门到放弃' },
                    { id: 10016, name: 'Test16', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10017, name: 'Test17', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10018, name: 'Test18', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10019, name: 'Test19', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10020, name: 'Test20', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10021, name: 'Test21', role: 'Develop', sex: 'Man', age: 28, address: 'vxe-table 从入门到放弃' },
                    { id: 10022, name: 'Test22', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10023, name: 'Test23', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10024, name: 'Test24', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10025, name: 'Test25', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10026, name: 'Test26', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10027, name: 'Test27', role: 'Develop', sex: 'Man', age: 28, address: 'vxe-table 从入门到放弃' },
                    { id: 10028, name: 'Test28', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10029, name: 'Test29', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10030, name: 'Test30', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10031, name: 'Test31', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10032, name: 'Test32', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10033, name: 'Test33', role: 'Develop', sex: 'Man', age: 28, address: 'vxe-table 从入门到放弃' },
                    { id: 10034, name: 'Test34', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10035, name: 'Test35', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10036, name: 'Test36', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10037, name: 'Test37', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10038, name: 'Test38', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10039, name: 'Test39', role: 'Develop', sex: 'Man', age: 28, address: 'vxe-table 从入门到放弃' },
                    { id: 10040, name: 'Test40', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10041, name: 'Test41', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10042, name: 'Test42', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10043, name: 'Test43', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10044, name: 'Test44', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    ]
                    // 功能码2和功能码4填充满30个数据
                    let fillNum =Math.ceil(this.tableData.length/30)*30 - this.tableData.length
                    let fillArray = Array(fillNum).fill({})

                    this.tableData1 = this.tableData.concat(fillArray)
                    // console.log(this.tableData1)
                    let first = []
                    let sec = []
                    let thr = []
                    if(this.tableData1.length>=10) {
                        first = this.tableData1.slice(0,10)
                    }else{
                        first = this.tableData1.slice(0)
                    }

                    if(this.tableData1.length<=10) {
                        sec = []
                    }else if(this.tableData1.length>=20) {
                        sec = this.tableData1.slice(10,20)
                    }else{
                        sec = this.tableData.slice(10)
                    }

                    if(this.tableData1.length<=20) {
                        thr = []
                    }else 
                    if(this.tableData1.length>=30) {
                        thr = this.tableData1.slice(20,30)
                    }else{
                        thr = this.tableData1.slice(20)
                    }
                    this.tabData1 = [first, sec, thr]
                    this.tabData3 = [first, sec, thr]

                    // 功能码3填充满10个数据
                    let fillNum2 = Math.abs(10 - this.tableData.length)
                    // console.log(this.tableData.length)
                    let fillArray2 = Array(fillNum2).fill({})
                    this.tableData2 = this.tableData.concat(fillArray2) //把表格填充为10行
                    // console.log(this.tableData2)
                    this.tabData2 = this.tableData2.slice(0,10) //显示功能码3的数据
                    
                },300)
            },
           
            handlePageChange({currentPage,pageSize}){
                this.tablePage.currentPage = currentPage
                // console.log(this.tablePage.currentPage)
                this.tablePage.pageSize = pageSize
                console.log(pageSize)
                this.findList()
            }
        }
    }  
</script>
  
  <style scoped lang="stylus">
    .Vtable{
        width auto
        height 528px
        margin 6px 14px 0 14px
    }
    .selectTab{
        // margin-top 20px
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
        margin 0 15px 8px 14px
    }
  </style>