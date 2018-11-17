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
      this.fundsUpdate('buy');
      for(var pack in this.$store.state.portfolioStocks)
      {
      if (this.$store.state.portfolioStocks[pack].company==this.company)
      {this.$store.state.portfolioStocks[pack].amount=Number(this.$store.state.portfolioStocks[pack].amount)+Number(this.amount);
        console.log('company exists among bought stocks');
        console.log(this.$store.state.portfolioStocks);
        return;}
      };
      console.log('company added');
      this.$store.state.portfolioStocks.push({company:this.company,amount:this.amount,value:this.value});
      console.log(this.$store.state.portfolioStocks);
    },
      sellStock(){
        this.fundsUpdate('sell');

        for(var pack in this.$store.state.portfolioStocks)
        {if (this.$store.state.portfolioStocks[pack].company==this.company)
        {this.$store.state.portfolioStocks[pack].amount=Number(this.$store.state.portfolioStocks[pack].amount)-Number(this.sellAmount);
          console.log('sold');
          console.log(this.$store.state.portfolioStocks);
          if(this.$store.state.portfolioStocks[pack].amount==0)
          this.$store.state.portfolioStocks.splice(pack,1)
        }};
      },
      fundsUpdate(mode){
        if (mode=='sell')
        {this.$store.state.funds=this.$store.state.funds+this.sellAmount*this.value}
        else if(mode=='buy')
        {this.$store.state.funds=this.$store.state.funds-this.amount*this.value}

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
