<template>
  <div class="menu">
    <h1>Stocks market</h1>
    <hr>
    <div class="stocks">
    <div v-for="stock in $store.state.marketStocks">
        <stock :company='stock.company' :value='stock.value' :add='true'></stock>
    </div>
    <br>
    <!-- <p>{{portfolioStocks}}</p> -->
    </div>
  </div>
</template>

<script>
import Stock from './stock.vue';
export default{
  components:{
    stock:Stock
  },
  created()
  {this.$store.commit('endDay');}
}
</script>

<style>
.stocks{
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  align-content:space-around;
}
</style>
