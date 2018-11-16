<template>
  <div class="menu">
    <div class="menu">
      <h2>Portfolio</h2>
      <div class="stocks">
      <div v-for="stock in $store.state.portfolioStocks">
          <stock :company='stock.company' :value='stock.value' :amount='stock.amount' :add='false'></stock>
      </div>
      <br>
      </div>
    </div>
  </div>
</template>

<script>
import {eventBus} from 'C:/Users/user/Desktop/VUEJS/APP11/stocktrader/src/main.js';
import Stock from './stock.vue';
export default{
  components:{
    stock:Stock
  },
  data:function(){
    return{
    portfolioStocks:[]
    }
  },
  created(){
    console.log("stock store")
    eventBus.$on('stockToPortfolio',(event)=>(this.portfolioStocks=event));
  }
}
</script>

<style>

</style>
