<template>
  <div class="has-shadow bg-white p-32 sale-order-book">
    <div class="flex-row">
      <h4>{{$t('sale.order_book')}}</h4>
      <div class="ml-32 flex-row">
        <el-switch v-model="showCurrentAddress"/>
        <span class="ml-8" style="font-size: 12px">{{$t('sale.show_only_my_address')}}</span>
      </div>
    </div>
    <el-table
        :empty-text="$t('sale.no_available_data')"
        :data="displayedData"
        max-height="560"
        :show-summary="displayedData.length > 0"
        :row-class-name="tableRowClassName"
        :summary-method="getSummaries"
        style="width: 100%">
      <el-table-column
          prop="timestamp"
          :label="$t('sale.timestamp')"
          width="150">
        <template slot-scope="scope">
          {{ scope.row.timestamp | date }}
        </template>
      </el-table-column>
      <el-table-column
          prop="buyerAddress"
          :label="$t('sale.address')"
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
          :label="$t('sale.purchase_amount')"
          width="180">
        <template slot-scope="scope">
          <strong
              v-if="scope.row.bonusWon"
              class="bonus-won">
            {{ scope.row.purchasedTokenAmount | numeral }} XBN
          </strong>
          <span v-else>{{ scope.row.purchasedTokenAmount | numeral }} XBN</span>
        </template>
      </el-table-column>
      <el-table-column
          prop="totalBNBValue"
          :label="$t('sale.eth_value')">
      </el-table-column>
      <el-table-column
          prop="bonusWon"
          :label="$t('sale.bonus_won')"
          width="140">
        <template slot-scope="scope">
          <strong
              v-if="scope.row.bonusWon"
              class="bonus-won">
            {{ scope.row.bonusWon | numeral }} XBN
          </strong>
          <span v-else>{{ scope.row.bonusWon | numeral }} XBN</span>
        </template>
      </el-table-column>
      <el-table-column
          prop="price"
          :label="$t('sale.price')">
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
      const lang = localStorage.getItem('lang') || 'en';

      return moment(val).locale(lang).fromNow();
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
      );
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
          sums[index] = this.$t('sale.summaries');
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

            sums[index] = numeral(sum).format('0,0.00') + ` ${index === 2 ? 'XBN' : 'BNB'}`;
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
  .el-table {
    min-height: 560px;
  }
}
</style>
