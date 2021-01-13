<template>
  <div class="has-shadow bg-white p-32 sale-order-book">
    <div class="flex-row">
      <h4>Order Book</h4>
      <div class="ml-32 flex-row">
        <el-switch v-model="showCurrentAddress"/>
        <span class="ml-8" style="font-size: 12px">Show only for my address</span>
      </div>
    </div>
    <el-table
        empty-text="No data available"
        :data="displayedData"
        max-height="560"
        show-summary
        :row-class-name="tableRowClassName"
        :summary-method="getSummaries"
        style="width: 100%">
      <el-table-column
          prop="timestamp"
          label="Timestamp"
          width="150">
        <template slot-scope="scope">
          {{ scope.row.timestamp | date }}
        </template>
      </el-table-column>
      <el-table-column
          prop="buyerAddress"
          label="Address"
          width="280"
      >
        <template slot-scope="scope">
          <a target="_blank"
             :href="`https://etherscan.io/address/${scope.row.buyerAddress}`">{{
              scope.row.buyerAddress | truncatedAddress
            }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="purchasedTokenAmount"
          label="Purchase Amount"
          width="180">
        <template slot-scope="scope">
          <strong
              v-if="scope.row.bonusWon"
              class="bonus-won">
            {{ scope.row.purchasedTokenAmount | numeral }} XBT
          </strong>
          <span v-else>{{ scope.row.purchasedTokenAmount | numeral }} XBT</span>
        </template>
      </el-table-column>
      <el-table-column
          prop="totalETHValue"
          label="ETH Value">
      </el-table-column>
      <el-table-column
          prop="bonusWon"
          label="Bonus"
          width="140">
        <template slot-scope="scope">
          <strong
              v-if="scope.row.bonusWon"
              class="bonus-won">
            {{ scope.row.bonusWon | numeral }} XBT
          </strong>
          <span v-else>{{ scope.row.bonusWon | numeral }} XBT</span>
        </template>
      </el-table-column>
      <el-table-column
          prop="price"
          label="Price">
        <template slot-scope="scope">
          {{ scope.row.price | numeral }}
        </template>
      </el-table-column>
    </el-table>
    <!--    <div class="mt-32">-->
    <!--      <el-pagination-->
    <!--          background-->
    <!--          layout="prev, pager, next"-->
    <!--          :total="displayedData.length">-->
    <!--      </el-pagination>-->
    <!--    </div>-->
  </div>
</template>

<script>
import moment from 'moment';
import _ from "lodash";
import * as numeral from 'numeral';

export default {
  name: "SaleOrderBook",
  props: {
    orderBook: {
      type: Array,
      default: () => []
    },
    currentAddress: {
      type: String,
      default: () => ''
    }
  },
  filters: {
    numeral(val) {
      return numeral(val).format('0,0.0');
    },
    date(val) {
      return moment(val).fromNow();
    },
    truncatedAddress(val) {
      return _.truncate(val || '', {
        length: 26
      })
    }
  },
  data() {
    return {
      showCurrentAddress: false,
      tableData: [],
    }
  },
  computed: {
    displayedData() {
      return this.orderBook.filter(
          order => this.showCurrentAddress === false ||
              order.buyerAddress === this.currentAddress
      )
    }
  },
  methods: {
    tableRowClassName({row}) {
      if (row.bonusWon) {
        return 'success-row';
      }
      return '';
    },
    getSummaries(param) {
      const {columns, data} = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = 'Summaries';
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          if (index === 2 || index === 3) {
            const sum = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);

            sums[index] = numeral(sum).format('0,0.00') + ` ${index === 2 ? 'XBT' : 'ETH'}`;
          }
        } else {
          sums[index] = 'N/A';
        }
      });
      return sums;
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

  .el-table .success-row {
    background: #f9f4eb;
  }

  .bonus-won {
    color: #F3AA43 !important;
  }
}
</style>
