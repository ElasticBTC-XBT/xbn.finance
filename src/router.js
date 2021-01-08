import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Secondary from './views/Secondary.vue';
import Basic from './views/basic.vue';
import BuyXBT from './views/buy.vue';
import Economics from './views/economics.vue';
import Technology from './views/technology.vue';
import Staking from './views/staking.vue';
import Signup from './views/Signup.vue';
import Learn from './views/learn.vue';
import Governance from './views/governance.vue';
import Airdrop from './views/airdrop.vue';
import Roadmap from './views/roadmap.vue';
import XbtInvestmentFund from './views/xbt_investment_fund.vue';
import Cryptounicorns from './views/cryptounicorns.vue';
import App from "./App";

Vue.use(Router);

let routers = [
    {
        path: '/',
        name: 'home',
        components: {
            default: Home,
        },
        viShort: '/vi',
        krShort: '/kr',
    },
    {
        path: '/secondary',
        name: 'secondary',
        components: {
            default: Secondary,
        },
        viShort: '/vi/secondary',
        krShort: '/kr/secondary',
    },
    {
        path: '/airdrop',
        name: 'airdrop',
        components: {
            default: Airdrop,
        },
        viShort: '/vi/airdrop',
        krShort: '/kr/airdrop',
    },
    {
        path: '/buy',
        name: 'buy',
        components: {
            default: BuyXBT,
        },
        viShort: '/vi/buy',
        krShort: '/kr/buy',
    },
    {
        path: '/basics',
        name: 'basics',
        components: {
            default: Basic,
        },
        viShort: '/vi/basics',
        krShort: '/kr/basics',
    },
    {
        path: '/technology',
        name: 'technology',
        components: {
            default: Technology,
        },
        viShort: '/vi/technology',
        krShort: '/kr/technology',
    },
    {
        path: '/economics',
        name: 'economics',
        components: {
            default: Economics,
        },
        viShort: '/vi/economics',
        krShort: '/kr/economics',
    },
    {
        path: '/staking',
        name: 'staking',
        components: {
            default: Staking,
        },
        viShort: '/vi/staking',
        krShort: '/kr/staking',
    },
    {
        path: '/learn',
        name: 'learn',
        components: {
            default: Learn,
        },
        viShort: '/vi/learn',
        krShort: '/kr/learn',
    },
    {
        path: '/roadmap',
        name: 'roadmap',
        components: {
            default: Roadmap,
        },
        viShort: '/vi/roadmap',
        krShort: '/kr/roadmap',
    },

    {
        path: '/governance',
        name: 'Governance',
        components: {
            default: Governance,
        },
        viShort: '/vi/governance',
        krShort: '/kr/governance',
    },
    {
        path: '/cryptounicorns',
        name: 'Cryptounicorns',
        components: {
            default: Cryptounicorns,
        },
        viShort: '/vi/cryptounicorns',
        krShort: '/kr/cryptounicorns',
    },
    {
        path: '/xbt-investment-fund',
        name: 'XbtInvestmentFund',
        components: {
            default: XbtInvestmentFund,
        },
        viShort: '/vi/xbt-investment-fund',
        krShort: '/kr/xbt-investment-fund',
    },
    {
        path: '/signup',
        name: 'signup',
        components: {
            default: Signup,
        },
        viShort: '/vi/signup',
        krShort: '/kr/signup',
    },
]

export default new Router({
    routes: [
        ...routers,
        // All pages are preceded by /vi/
        {

            path: '/:lang',
            components: {
                default: App,
            },
            children: [
                // All the pages are mapped from the routes
                ...routers.map((p) => ({
                    path: p.path.replace(p.path.substring(0, 1), ""),
                    alias: p.viShort,
                    name: p.name,
                    components: p.components,
                })),
                {
                    path: '',
                    redirect: {name: 'home'},
                },
            ],
        },

    ],
    mode: 'history'
});
