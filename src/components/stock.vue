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
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" v-model:value='purchase.buyAmount' lazy>
            <button class="btn btn-primary btn-sm" @click="buyStock">Buy</button>
          </div>
        </div>

        <div v-else-if="add===false" class="input-group input-group-sm mb-3">
          <h5 class="card-text">Amount: {{amount}}</h5>
          <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-sm">Amount</span>
          </div>
          <div class="input">
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" v-model:value='purchase.sellAmount' lazy>
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
    sellAmount:0,
    purchase:
    {mode:'buy',
    company:this.company,
    sellAmount:this.sellAmount,
    buyAmount:this.buyAmount,
    value:this.value}
    }
  },
  methods:{
    buyStock(){
      this.purchase.mode='buy';
      this.updateFunds();
      if(this.$store.getters.getTransactionState)
      {
      this.addEventToHistory(this.purchase.buyAmount +" "+this.purchase.company+" stocks purchased,"+this.purchase.value+ "$ each. Expense: "+Number(this.purchase.buyAmount)*Number(this.purchase.value)+"$");
      this.buy();
      }}
    ,
      sellStock(){
        console.log(this.purchase);
        this.purchase.mode='sell';
        this.updateFunds();
        if(this.$store.getters.getTransactionState)
        {
        this.addEventToHistory(this.amount +" "+this.purchase.company+" stocks sold,"+this.purchase.value+ "$ each. Income: "+Number(this.amount)*Number(this.purchase.value)+"$");
        this.sell();
      }},
      buy(purchase){
        this.$store.commit('buyStock',purchase=this.purchase);
      },
      sell(purchase){
        this.$store.commit('sellStock',purchase=this.purchase);
      },
      updateFunds(purchase){
        this.$store.commit('fundsUpdate',purchase=this.purchase);
      },
      addHistory(event){
        this.$store.commit('addEventToHistory',event)
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
