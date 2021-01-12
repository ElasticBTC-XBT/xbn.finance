<template>
  <div class="has-shadow bg-white p-32 sale-order-book">
    <div class="flex-row">
      <h4>Order Book</h4>
      <div class="ml-32 flex-row">
        <el-switch v-model="showOwnerAddress"/>
        <span class="ml-8" style="font-size: 12px">Show only for my address</span>
      </div>
    </div>
    <el-table
        :data="tableData"
        height="560"
        style="width: 100%">
      <el-table-column
          prop="address"
          label="Timestamp">
      </el-table-column>
      <el-table-column
          prop="address"
          label="Address">
      </el-table-column>
      <el-table-column
          prop="date"
          label="Date"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="Purchase Amount"
          width="180">
      </el-table-column>
      <el-table-column
          prop="address"
          label="ETH Value">
      </el-table-column>
      <el-table-column
          prop="address"
          label="Bonus">
      </el-table-column>
      <el-table-column
          prop="address"
          label="Price">
      </el-table-column>
    </el-table>
    <div class="mt-32">
      <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "SaleOrderBook",
  data() {
    return {
      showOwnerAddress: false,
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-08',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-06',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-07',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }],
    }
  }
}
</script>

<style lang="scss">
.sale-order-book {
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #F3AA43 !important;
  }

  .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #F3AA43 !important;
  }

  .el-switch.is-checked .el-switch__core {
    border-color: #F3AA43 !important;
    background-color: #F3AA43 !important;
  }
}
</style>
