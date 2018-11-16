<template>
  <div class="menu">
    <div class="card">
      <div class="card-header">{{company}}</div>
      <div class="card-body">
        <h5 class="card-text">Stock value: {{value}}$</h5>
        <div class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-sm">Amount</span>
          </div>
          <div class="input">
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" v-model:value='amount' lazy>
            <button class="btn btn-primary btn-sm" @click="buyStock">Buy</button>
          </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import {eventBus} from 'C:/Users/user/Desktop/VUEJS/APP11/stocktrader/src/main.js';
export default{
  props:['company','value'],
  data:function(){
    return{
    amount:0
    }
  },
  methods:{
    buyStock(){
      eventBus.$emit('stockBought',{company:this.company,amount:this.amount});
      console.log('bought');
      //implement Fund substraction
    }}
}
</script>

<style>
.card{
  text-align: right;
  margin-left:70px;
  margin-right:70px;

}
.card-body{
  width:250px;
}
.input{
  display:inline-flex;
}
</style>
