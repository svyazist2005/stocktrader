<template>
  <div class="menu">
      <h1>Portfolio</h1>
      <hr>

      <div class="stocks">
      <transition-group name='stocksBought' mode="out-in">
      <li class="stocks" v-for="(stock,index) in $store.state.portfolioStocks" :key='stock' >
          <stock :company='stock.company' :value='stock.value' :amount='stock.amount' :add='false' ></stock>
      </li>
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

<style scoped>
/*
.stocksBought-enter{
transform:rotate(0deg);
} */

.stocksBought-leave-active{
transform:scale(0.1);
position:absolute;
}

.stocksBought-move{
transition: all 1s ;
}

</style>
