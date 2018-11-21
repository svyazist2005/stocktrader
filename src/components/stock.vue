<template>
  <div class="menu">
    <div class="card">
      <div class="card-header">{{company}}</div>
      <div class="card-body">
        <h5 class="card-text">Stock value: {{value}}$</h5>

        <div v-if="add===true" class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-sm">Amount</span>
          </div>
          <div class="input">
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" v-model:value='buyAmount' lazy>
            <button class="btn btn-primary btn-sm" @click="buyStock">Buy</button>
          </div>
        </div>

        <div v-else-if="add===false" class="input-group input-group-sm mb-3">
          <h5 class="card-text">Amount: {{amount}}</h5>
          <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-sm">Amount</span>
          </div>
          <div class="input">
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" v-model:value='sellAmount' lazy>
            <button class="btn btn-primary btn-sm" @click="sellStock">Sell</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {historyMixIn} from 'C:/Users/user/Desktop/VUEJS/APP11/stocktrader/src/historyMixIn';

export default{
  mixins:[historyMixIn],
  props:['company','value','add','amount'],
  data:function(){
    return{
    buyAmount:0,
    sellAmount:0
    }
  },
  methods:{
    buyStock(){
      if (this.fundsUpdate('buy'))
      {
      this.addEventToHistory(this.buyAmount +" "+this.company+" stocks purchased,"+this.value+ "$ each. Expense: "+Number(this.buyAmount)*Number(this.value)+"$");

      for(var pack in this.$store.state.portfolioStocks)
      {
      if (this.$store.state.portfolioStocks[pack].company==this.company)
      {this.$store.state.portfolioStocks[pack].amount=Number(this.$store.state.portfolioStocks[pack].amount)+Number(this.buyAmount);
        return;}
      };
      this.$store.state.portfolioStocks.push({company:this.company,amount:this.buyAmount,value:this.value});
      }
  }
    ,
      sellStock(){
        if(this.fundsUpdate('sell'))
        {
        this.addEventToHistory(this.amount +" "+this.company+" stocks sold,"+this.value+ "$ each. Income: "+Number(this.amount)*Number(this.value)+"$");

        for(var pack in this.$store.state.portfolioStocks)
        {if (this.$store.state.portfolioStocks[pack].company==this.company)
        {this.$store.state.portfolioStocks[pack].amount=Number(this.$store.state.portfolioStocks[pack].amount)-Number(this.sellAmount);
          if(this.$store.state.portfolioStocks[pack].amount==0)
          this.$store.state.portfolioStocks.splice(pack,1)
        }};
      }}
      ,

      fundsUpdate(mode){
        if (mode=='sell')
        {for(var pack in this.$store.state.portfolioStocks)
          {if (this.$store.state.portfolioStocks[pack].company==this.company)
            {if(this.$store.state.portfolioStocks[pack].amount>=this.sellAmount&&this.sellAmount>0)
              {this.$store.state.funds=this.$store.state.funds+this.sellAmount*this.value;return true;}
             else{alert('You are trying to sell more stocks then you have OR minus value');return false;}
            }
          }
        }
        else
        if(mode=='buy')
        {if (this.buyAmount*this.value<=this.$store.state.funds&&this.buyAmount>0)
        {this.$store.state.funds=this.$store.state.funds-this.buyAmount*this.value;return true;}
        else{alert('Not enough Funds for purchase OR minus value');return false;}}
      }



}
}
</script>

<style>
.card{
  text-align: right;
  margin-left:50px;
  margin-right:50px;

}
.card-body{
  width:250px;
}
.input{
  display:inline-flex;
}
</style>
