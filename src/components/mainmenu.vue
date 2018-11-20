<template>
  <div class="menu">

    <nav class="navbar navbar-light bg-light">
      <form class="form-inline">
        <div class='menus'>
          <div class='left'>
            <button class="btn btn-outline-success mybutton" type="button"><router-link to="/">Stock Trader</router-link></button>
            <button class="btn btn-outline-success mybutton" type="button"><router-link to="/portfolio">Portfolio</router-link></button>
            <button class="btn btn-outline-success mybutton" type="button"><router-link to="/stocks">Stocks</router-link></button>
          </div>
          <div class='right'>
            <button class="btn btn-outline-success mybutton" type="button" @click='toEndDay' >End day</button>
            <div class="nav-item dropdown">
              <a class="nav-link dropdown-toggle mybutton" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Save & load
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#" @click='saveData'>Save state</a>
                <a class="dropdown-item" href="#" @click='loadData'>Load state</a>
              </div>
            </div>
            <button class="btn btn-outline-success mybutton" type="button"><router-link to="/funds"> <b>Funds: </b>{{this.$store.state.funds}} <b>$</b></router-link></button>
          </div>
        </div>

      </form>
    </nav>

  </div>

</template>

<script>
import {historyMixIn} from 'C:/Users/user/Desktop/VUEJS/APP11/stocktrader/src/historyMixIn';
export default{
  mixins:[historyMixIn],
  methods:{
    toEndDay(){
      this.$store.commit('endDay');
      this.$store.commit('getPortfolioStockValue');
      this.$store.state.gameDay++;
      this.addEventToHistory("Game day "+this.$store.state.gameDay+" end. Balance: "+this.$store.state.funds+"$");
    }
    ,
    saveData(){
      this.$resource('{node}.json').update({node:'data'},[this.$store.state.portfolioStocks,this.$store.state.marketStocks,this.$store.state.funds,this.$store.state.gameDay,this.$store.state.history]);
    }
    ,
    loadData(){
      this.$resource('{node}.json').get({node:'data'}).
      then(response=>{return response.json();}).
      then(data=>{
        this.$store.state.portfolioStocks=data[0];
        this.$store.state.marketStocks=data[1];
        this.$store.state.funds=data[2];
        this.$store.state.gameDay=data[3];
        this.$store.state.history=data[4];
      });
    }
  }
}
</script>

<style>
h1,h2,h3,h4{
    text-align : center;
}

.menu{

  margin:20px;
}

/* li{
  margin-left:30px;
  margin-right:30px;
}

.righthead{
  margin-left:200px;
} */

.menus{
  display: flex;
}

.right,.left{
  display:inline-flex;
  flex-wrap: wrap;
}

.right{
margin-left:200px;}

.left{
  margin-right: 200px;
}

.mybutton{
  margin-left:30px;
  margin-right:30px;
  font-size: 20px;
}


</style>
