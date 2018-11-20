import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export const store=new Vuex.Store({

state:{
  portfolioStocks:[],
  marketStocks:[
    {company:"BMW",
    value:100},
    {company:"Tesla",
    value:90},
    {company:"Honda",
    value:200},
    {company:'SpaceX',
    value:50},
    {company:'DTEK',
    value:20}],
    funds:10000,
    gameDay:0,
    history:[],
    amount:0
},
mutations:{
  getPortfolioStockValue:state=>{
    for(var i in state.portfolioStocks)
    for(var i2 in state.marketStocks)
    if(state.marketStocks[i2].company==state.portfolioStocks[i].company)
    state.portfolioStocks[i].value=state.marketStocks[i2].value;
  },
  endDay:state=>{
    for(var i in state.marketStocks)
    state.marketStocks[i].value=Math.floor(Math.random() * (Math.floor(100) - Math.ceil(1) + 1)) + Math.ceil(1);;
  }
}

})
