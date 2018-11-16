<template>
  <div class="menu">
    <h3>Stocks list</h3>
    <div class="stocks">
    <div v-for="stock in marketStocks">
        <stock :company='stock.company' :value='stock.value'></stock>
    </div>
    <br>
    <!-- <p>{{portfolioStocks}}</p> -->
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
  },
  methods:{
    addToPortfolio(event){
      for(var pack in this.portfolioStocks)
      {
      if (this.portfolioStocks[pack].company==event.company)
      {this.portfolioStocks[pack].amount=Number(this.portfolioStocks[pack].amount)+Number(event.amount);
        console.log('company exists among stacks');
        console.log(this.portfolioStocks);
        return;}
      };
      console.log('company added');
      this.portfolioStocks.push({company:event.company,amount:event.amount});
      console.log(this.portfolioStocks);
      console.log(this.portfolioStocks.length);
    }
  },
  created(){
    eventBus.$on("stockBought",(event)=>(this.addToPortfolio(event)));
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
