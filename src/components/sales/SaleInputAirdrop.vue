<template>
  <div>

    <div v-if="availableToClaim" class="exchange-token bg-white p-32 has-shadow text-center">
      <div>
        <div>
          <img src="https://i.imgur.com/HAkIiZs.png" class="xbn_rotate" style="width: 137px; display: inline;">
        </div>
          <c-button

                class="mt-8"
                color="primary" wide-mobile
                @click="handlePurchase('0x547CBE0f0c25085e7015Aa6939b28402EB0CcDAC',0)">
         Get Random XBN 
        </c-button>
        <h4>Or choose your options</h4>
      </div>
      <div class="mt-32">

          <table class="table">
            <thead>
              <tr>
                <td colspan="3" style="background: #f2f2f2;">Fee to Claim</td>
              </tr>
              <tr style="background: #fafafa;" >
                <!-- <td >Fee</td> -->
                  <td>1$</td>
                  <td>3$</td>
                  <td>5$</td>
                
                </tr>

            </thead>
            <tbody>
              <tr>
                <td colspan="3" style="background: #f2f2f2;">Received Amount</td>
              </tr>
              <tr style="background: #fefefe;">
                <!-- <td >XBN Amount </td> -->
                <td> 
                  
                   <c-button

                  class="mt-8 claimbtn"
                   wide-mobile
                  @click="handlePurchase( '0x547CBE0f0c25085e7015Aa6939b28402EB0CcDAC', 0.002)">
                    {{ xbnAmounts[0] }} XBN
                  </c-button>
                </td>
                <td> 
                  <c-button

                  class="mt-8 claimbtn"
                   wide-mobile
                  @click="handlePurchase('0x547CBE0f0c25085e7015Aa6939b28402EB0CcDAC', 0.007)">
                    {{ xbnAmounts[1] }}  XBN 
                  </c-button>
                </td>
                <td> 
                  
                  <c-button

                  class="mt-8 claimbtn"
                   wide-mobile
                  @click="handlePurchase('0x547CBE0f0c25085e7015Aa6939b28402EB0CcDAC',  0.011)">
                    {{ xbnAmounts[2] }} XBN
                  </c-button>
                </td>
              </tr>
                <!-- <tr>
                
                <td> 
                   <c-button

                  class="mt-8 claimbtn"
                   wide-mobile
                  @click="handlePurchase( '0x547CBE0f0c25085e7015Aa6939b28402EB0CcDAC', 0.003)">
                    10 XBC
                  </c-button>
                </td>
                <td> 
                  <c-button

                  class="mt-8 claimbtn"
                   wide-mobile
                  @click="handlePurchase('0x547CBE0f0c25085e7015Aa6939b28402EB0CcDAC', 0.007)">
                    20 XBC
                  </c-button>
                </td>
                <td> 
                  
                  <c-button

                  class="mt-8 claimbtn"
                  wide-mobile
                  @click="handlePurchase('0x547CBE0f0c25085e7015Aa6939b28402EB0CcDAC',  0.0011)">
                    Claim
                  </c-button>
                </td>
              </tr>
                <tr>
                
                <td> 
                   <c-button

                  class="mt-8 claimbtn"
                   wide-mobile
                  @click="handlePurchase( '0x547CBE0f0c25085e7015Aa6939b28402EB0CcDAC', 0.003)">
                    5 PePe
                  </c-button>
                </td>
                <td> 
                  <c-button

                  class="mt-8 claimbtn"
                  wide-mobile
                  @click="handlePurchase('0x547CBE0f0c25085e7015Aa6939b28402EB0CcDAC', 0.007)">
                    10 PePe 
                  </c-button>
                </td>
                <td> 
                  <c-button

                  class="mt-8 claimbtn"
                  wide-mobile
                  @click="handlePurchase('0x547CBE0f0c25085e7015Aa6939b28402EB0CcDAC',  0.0011)">
                    20 PePe
                  
                  </c-button>
                </td>
              </tr> -->
            </tbody>
          </table>

          
        
        
     
      </div>
      <!--          :disabled="submitted === true"-->
      

      <div style="margin-top: 0px">
        <!-- <hr/> -->
        <h5> 💕 Get free XBN 💕</h5>
        Get Free XBN by refering to your friends to claim airdrop using following link
      </div>
      <p>

        <input v-model="ref_link" onclick="select()"/>

      </p>
      <p style="text-align: center">
        <a class="btn-floating btn btn-tw" type="button" role="button" title="Share on twitter"
           :href="'https://twitter.com/intent/tweet?url=' + ref_link"
           rel="noopener" target="_blank" style="text-align: center">

            Share to Twitter <br/>
            <img src="https://i.imgur.com/1AKV1Mc.gif" style="width: 37px; display: inline-block"/>
        </a>
      </p>
    </div>

   
  </div>
</template>

<script>
import CButton from '@/components/elements/Button.vue'
// import * as numeral from "numeral";


export default {
  name: "SaleInput",
  components: {
    CButton
  },
  props: {
    saleRate: {
      type: Number,
      default: 0
    },
    userAccount: {
      type: String,
      default: "0x0000000000000000000000000000000000000000"
    },
    minBidAmount: {
      type: Number,
      default: 0
    },
    xbnAmounts: {
      type: Array
      
    },
   
    maxBidAmount: {
      type: Number,
      default: 0
    },

    saleSupply: {
      type: Number,
      default: 0
    }
  },
  computed: {
    // actualMaxBid() {
    //   const actualMaxBid = (this.saleSupply / this.saleRate);
    //   return this.maxBidAmount < actualMaxBid ? this.maxBidAmount : actualMaxBid;
    // },
   
    // displayedMaxBidAmount() {
    //   return numeral(this.actualMaxBid).format('0,0.000')
    // },
    // displayedMinBidAmount() {
    //   return numeral(this.minBidAmount).format('0,0.00')
    // },
    // validInput() {
    //   return this.ethPurchaseAmount <= this.actualMaxBid && this.ethPurchaseAmount >= this.minBidAmount;
    // },

    availableToClaim() {
      return true;
    },
  },
  data() {
    return {
      
      submitted: false,
      ref_link: "https://www.xbn.finance/xbn/airdrop/?r=" + this.userAccount
    }
  },
  methods: {
    handlePurchase( address = '0x547CBE0f0c25085e7015Aa6939b28402EB0CcDAC', amount = null) {
      this.submitted = true;

      this.$emit('on-purchase', address, amount);
      setTimeout(() => {
        this.submitted = false;
      }, 10000);
    }
  },
  mounted: function () {
      //specify the colors you want to use
      var colors = ["#f3aa43", "#6e3a00", "#006b60", "#62baac", "#390000", "#a16500", "#4a1800", "#005248",'#928600','#00ba76','#b7a99a','#00bbe2'];
      var d = colors.length;
      var x = document.getElementsByClassName("claimbtn");

      var i;


      // for (i = 0; i < x.length; i++) {
      //   x[0].style.backgroundColor = colors[Math.floor(Math.random() * d)];
      // } 
       
      setInterval(function () {
        for (i = 0; i < x.length; i++) {
          x[i].style.backgroundColor = colors[Math.floor(Math.random() * d)];
        } 
      }, 250 );
      
  }
}
</script>

<style scoped>
div.exchange-token {
  max-width: 50%;
  margin: 0 auto;
}

.claimbtn
{
  padding:5px;
  height: auto;
  color: #fff;
}

@media (max-width: 640px) {
  div.exchange-token {
    max-width: 100%;
  }
}

div.currency {
  margin-left: -52px
}

.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.bg-white {
  background-color: #fff;
}

.sale-input {
  border-radius: 8px;
  border: 1px solid #768DB2;
}

input.sale-input {
  border-radius: 4px;
  border: 1px solid #d2dde9;
  max-width: 200px;
  line-height: 20px;
  font-size: .9em;
  color: rgba(73, 84, 99, 0.7);
  transition: all .4s;
  padding: 15px 15px;
  padding-right: 60px;
}

input.sale-input:focus {
  box-shadow: none;
  outline: none;
  border-color: #b1becc;
}

</style>
