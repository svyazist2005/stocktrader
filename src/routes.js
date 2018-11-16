import Dashboard from './components/dashboard.vue';
import Portfolio from './components/portfolio.vue';
import Stocks from './components/stocks.vue';
import Stock from './components/stock.vue';
import Founds from './components/founds.vue';

export const routes=[
  {path:'',component:Dashboard},
  {path:'/portfolio',component:Portfolio},
  {path:'/stocks',component:Stocks},
  {path:'/stock',component:Stock},
  {path:'/founds',component:Founds}
]
