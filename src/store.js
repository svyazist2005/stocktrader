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
    value:20},
    {company:'IBM',
    value:20},
    {company:'Skynet',
    value:20},
    {company:'Suzuki',
    value:20},
    {company:"Tatra",
    value:90},
    {company:'FaceBook',
    value:50},
    {company:'ukr.net',
    value:20},
    {company:'Microsoft',
    value:20}],
    funds:10000,
    gameDay:0,
    history:[],
    amount:0,
    transaction:false
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
  },
  fundsUpdate:(state,payload)=>{
    if (payload.mode=='sell')
    {for(var pack in state.portfolioStocks)
      {if (state.portfolioStocks[pack].company==payload.company)
        {if(state.portfolioStocks[pack].amount>=payload.sellAmount&&payload.sellAmount>0)
          {state.funds=this.$store.state.funds+payload.sellAmount*payload.value;state.transaction=true;}
         else{alert('You are trying to sell more stocks then you have OR minus value');state.transaction=false;}
        }
      }
    }
    else
    if(payload.mode=='buy')
    {if (payload.buyAmount*payload.value<=state.funds&&payload.buyAmount>0)
    {state.funds=state.funds-payload.buyAmount*payload.value;state.transaction=true;}
    else{alert('Not enough Funds for purchase OR minus value');state.transaction=false;}}
  }
},
getters:{
  getTransactionState:state=>{
    return state.transaction;
  },
  getFunds:state=>{
    return state.funds;
  },
  getGameDay:state=>{
    return state.gameDay;
  },
  getHistory:state=>{
    return state.history;
  }
}

})
