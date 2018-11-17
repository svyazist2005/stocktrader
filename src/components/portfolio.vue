<template>
  <div class="menu">
    <div class="menu">
      <h3>Portfolio</h3>
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
import Stock from './stock.vue';
export default{
  components:{
    stock:Stock
  },
  data:function(){
    return{
    portfolioStocks:[]
    }
  }
}
</script>

<style>

</style>
