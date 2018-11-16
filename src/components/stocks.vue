<template>
  <div class="menu">
    <h3>Stocks list</h3>
    <div class="stocks">
    <div v-for="stock in marketStocks">
        <stock :company='stock.company' :value='stock.value'></stock>
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
      marketStocks:[
        {company:"bmw",
        value:100},
        {company:"tesla",
        value:90},
        {company:"honda",
        value:200},
        {company:'spaceX',
        value:50}],
      portfolioStocks:[]
    }
  }
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
