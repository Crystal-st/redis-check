<template>
<div class="pointtable">
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
    <!-- tab1 -->
    <div v-show="selectTab === 'tab1'" class="Vtable">
        <vxe-table
            round
            border
            :sync-resize="selectTab"
            :data="tableData"
            class="table1">
            <vxe-table-column type="seq" width="60px"></vxe-table-column>
            <vxe-table-column field="name" title="点名" width="50%"></vxe-table-column>
            <vxe-table-column filed="value" title="数值" width="50%"></vxe-table-column>
        </vxe-table>
        <vxe-table
            round
            border
            :sync-resize="selectTab"
            :data="tableData"
            class="table1">
            <vxe-table-column type="seq" width="60px"></vxe-table-column>
            <vxe-table-column field="name" title="点名" width="50%"></vxe-table-column>
            <vxe-table-column filed="value" title="数值" width="50%"></vxe-table-column>
        </vxe-table>
        <vxe-table
            round
            border
            :sync-resize="selectTab"
            :data="tableData"
            class="table1">
            <vxe-table-column type="seq" width="60px"></vxe-table-column>
            <vxe-table-column field="name" title="点名" width="50%"></vxe-table-column>
            <vxe-table-column filed="value" title="数值" width="50%"></vxe-table-column>
        </vxe-table>
    </div>

    <!-- tab2 -->
    <div v-show="selectTab === 'tab2'" class="Vtable">
        <vxe-table
            round
            border
            :sync-resize="selectTab"
            :data="tableData">
            <vxe-table-column type="seq" width="60px"></vxe-table-column>
            <vxe-table-column field="name" title="点名" width="10%"></vxe-table-column>
            <vxe-table-column filed="value" title="数值" width="10%"></vxe-table-column>
        </vxe-table>
    </div>

    <!-- tab3 -->
    <div v-show="selectTab === 'tab3'" class="Vtable">
        <vxe-table
            round
            border
            :sync-resize="selectTab"
            :data="tableData">
            <vxe-table-column type="seq" width="60px"></vxe-table-column>
            <vxe-table-column field="name" title="点名" width="10%"></vxe-table-column>
            <vxe-table-column filed="value" title="数值" width="10%"></vxe-table-column>
        </vxe-table>
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
              tableData: [
                  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'vxe-table 从入门到放弃' },
                  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 23, address: 'vxe-table 从入门到放弃' },
                  { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women ', age: 30, address: 'Shanghai' },
                  { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women ', age: 21, address: 'vxe-table 从入门到放弃' },
                  { id: 10007, name: 'Test7', role: 'Test', sex: 'Man ', age: 29, address: 'vxe-table 从入门到放弃' },
                  { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man ', age: 35, address: 'vxe-table 从入门到放弃' },
                  { id: 10009, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'vxe-table 从入门到放弃' },
                  { id: 10010, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                ],
                
          }
          
      }
  }
  </script>
  
  <style scoped lang="stylus">
    .Vtable{
        width: auto;
        height: 540px;
        margin 6px 14px
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
  </style>