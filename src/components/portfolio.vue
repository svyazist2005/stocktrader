<template>
  <div class="menu">
    <div class="menu">
      <h2>Portfolio</h2>
      <div class="stocks">
      <div v-for="stock in portfolioStocks">
          <stock :company='stock.company' :value='stock.value'></stock>
      </div>
      <br>
      <p>{{portfolioStocks}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {eventBus} from 'C:/Users/user/Desktop/VUEJS/APP11/stocktrader/src/main.js';
export default{
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
