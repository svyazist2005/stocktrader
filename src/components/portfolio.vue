<template>
  <div class="menu">
      <h1>Portfolio</h1>
      <hr>

      <div class="stocks">
      <transition-group leave-active-class="animated fadeOut" mode="out-in">
      <div class="stocks" v-for="(stock,index) in $store.state.portfolioStocks" :key='index'>
          <stock :company='stock.company' :value='stock.value' :amount='stock.amount' :add='false'></stock>
      </div>
     </transition-group>
      <br>
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
