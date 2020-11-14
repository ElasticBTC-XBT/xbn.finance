import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Secondary from './views/Secondary.vue';
import Login from './views/Login.vue';
import Staking from './views/staking.vue';
import Signup from './views/Signup.vue';
import Learn from './views/learn.vue';
import Governance from './views/governance.vue';
import Roadmap from './views/roadmap.vue';
import XbtInvestmentFund from './views/xbt_investment_fund.vue';
import Cryptounicorns from './views/cryptounicorns.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/secondary',
      name: 'secondary',
      component: Secondary
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/staking',
      name: 'staking',
      component: Staking
    },
    {
      path: '/learn',
      name: 'learn',
      component: Learn
    },
    {
      path: '/roadmap',
      name: 'roadmap',
      component: Roadmap
    },

    {
      path: '/governance',
      name: 'Governance',
      component: Governance
    },
    {
      path: '/cryptounicorns',
      name: 'Cryptounicorns',
      component: Cryptounicorns
    },
    {
      path: '/xbt-investment-fund',
      name: 'XbtInvestmentFund',
      component: XbtInvestmentFund
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    }
  ],
  mode: 'history'
});
