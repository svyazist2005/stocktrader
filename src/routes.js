import Dashboard from './components/dashboard.vue';
import Portfolio from './components/portfolio.vue';
import Stocks from './components/stocks.vue';
import Funds from './components/funds.vue';

export const routes=[
  {path:'',component:Dashboard},
  {path:'/portfolio',component:Portfolio},
  {path:'/stocks',component:Stocks},
  {path:'/funds',component:Funds}
]
