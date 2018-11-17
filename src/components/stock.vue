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
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" v-model:value='amount' lazy>
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
export default{
  props:['company','value','add','amount'],
  data:function(){
    return{
    amount:0,
    sellAmount:0
    }
  },
  methods:{
    buyStock(){
      if (this.fundsUpdate('buy'))
      {
      for(var pack in this.$store.state.portfolioStocks)
      {
      if (this.$store.state.portfolioStocks[pack].company==this.company)
      {this.$store.state.portfolioStocks[pack].amount=Number(this.$store.state.portfolioStocks[pack].amount)+Number(this.amount);
        return;}
      };
      this.$store.state.portfolioStocks.push({company:this.company,amount:this.amount,value:this.value});

    }}
    ,
      sellStock(){
        if(this.fundsUpdate('sell'))
        {
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
            {if(this.$store.state.portfolioStocks[pack].amount>=this.sellAmount)
              {this.$store.state.funds=this.$store.state.funds+this.sellAmount*this.value;return true;}
             else{alert('You are trying to sell more stocks then you have');return false;}
            }
          }
        }
        else
        if(mode=='buy')
        {if (this.amount*this.value<=this.$store.state.funds)
        {this.$store.state.funds=this.$store.state.funds-this.amount*this.value;return true;}
        else{alert('Not enough Funds for purchase');return false;}}
      }



}
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
