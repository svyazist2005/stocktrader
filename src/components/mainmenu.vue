<template>
  <div class="menu">

    <nav class="navbar navbar-light bg-light">
      <form class="form-inline">
        <div class='menus'>
          <div class='left'>
            <router-link to="/"><button class="btn btn-sm btn-outline-secondary mybutton" type="button">Stock Trader</button></router-link>
            <router-link to="/portfolio"><button class="btn btn-sm btn-outline-secondary mybutton" type="button">Portfolio</button></router-link>
            <router-link to="/stocks"><button class="btn btn btn-sm btn-outline-secondary mybutton" type="button">Stocks</button></router-link>
          </div>
          <div class='right'>
            <button class="btn btn-sm btn-outline-secondary mybutton" type="button" @click='toEndDay' >End day</button>
            <div class="nav-item dropdown">
                <button class="btn btn-sm btn-outline-secondary mybutton nav-link dropdown-toggle mybutton"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" @click="dropdown==true?dropdown=false:dropdown=true">
                Save & load
              </button>
              <transition enter-active-class="animated fadeIn" >
              <div v-if='dropdown==true' class='dropdown-menu' aria-labelledby="navbarDropdown">
                <button class="btn btn-sm btn-outline-secondary dropdown-item"  @click='saveData'>Save state</button>
                <button class="btn btn-sm btn-outline-secondary dropdown-item"  @click='loadData'>Load state</button>
              </div>
              </transition>
            </div>
            <router-link to="/funds"> <button class="btn btn-sm btn-outline-secondary  mybutton" type="button"><b>Funds: </b>{{getFunds}} <b>$</b></button></router-link>
          </div>
        </div>

      </form>
    </nav>

  </div>

</template>

<script>
import {historyMixIn} from 'C:/Users/user/Desktop/VUEJS/APP11/stocktrader/src/historyMixIn';
import {mapGetters} from 'vuex';
export default{
  computed:mapGetters(['getFunds','getGameDay','getPortfolioStocks','getMarketStocks','getHistory']),
  data:function(){
    return{
      dropdown:false
    }
  },
  mixins:[historyMixIn],
    methods:{
    toEndDay(){
      this.$store.commit('endDay');
      this.$store.commit('setPortfolioStockValue');
      this.addEventToHistory("Game day "+this.getGameDay+" end. Balance: "+this.$store.state.funds+"$");
      this.addEventToHistory("Tax of amount :"+Math.ceil(this.getFunds*0.3)+"$ substracted (30% of fund balance)");
      this.$store.commit('taxes');
      this.addEventToHistory("Game day "+this.getGameDay+" start. Balance: "+this.getFunds+"$");
    }
    ,
    saveData(){
      this.$resource('{node}.json').update({node:'data'},[this.getPortfolioStocks,this.getMarketStocks,this.getFunds,this.getGameDay,this.getHistory]);
    }
    ,
    loadData(){
      this.$resource('{node}.json').get({node:'data'}).
      then(response=>{return response.json();}).
      then(data=>{
        this.$store.commit('load',data);
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
