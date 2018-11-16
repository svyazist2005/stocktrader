import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export const store=new Vuex.Store({

state:{
  portfolioStocks:[],
  marketStocks:[
    {company:"bmw",
    value:100},
    {company:"tesla",
    value:90},
    {company:"honda",
    value:200},
    {company:'spaceX',
    value:50}],
    funds:10000
}

})
