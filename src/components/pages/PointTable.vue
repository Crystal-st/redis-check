<template>
    <!-- 用于显示数据点的表格 -->
    <div class="Vtable">
        <vxe-table
            round
            border
            :data="tableData">
            <vxe-table-column type="seq" width="60px"></vxe-table-column>
            <vxe-table-column field="name" title="点名" width="10%"></vxe-table-column>
            <vxe-table-column filed="value" title="数值" width="10%"></vxe-table-column>
        </vxe-table>
    </div>
</template>
  
  <script>
  export default {
      name: 'PointTable',
      data(){
          return{
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
                ]
          }
          
      }
  }
  </script>
  
  <style scoped lang="stylus">
      .Vtable{
          width: auto;
          height: 600px;
          margin 10px 10px
      }
  </style>