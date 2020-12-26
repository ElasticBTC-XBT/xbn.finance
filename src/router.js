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
    },

    {
        path: '/secondary',
        name: 'secondary',
        components: {
            default: Secondary,
        },
        viShort: '/vi/secondary',

    },

    {
        path: '/buy',
        name: 'buy',
        components: {
            default: BuyXBT,
        },
        viShort: '/vi/buy',
    },
    {
        path: '/basics',
        name: 'basics',
        components: {
            default: Basic,
        },
        viShort: '/vi/basics',
    },
    {
        path: '/technology',
        name: 'technology',
        components: {
            default: Technology,
        },
        viShort: '/vi/technology',
    },
    {
        path: '/economics',
        name: 'economics',
        components: {
            default: Economics,
        },
        viShort: '/vi/economics',
    },
    {
        path: '/staking',
        name: 'staking',
        components: {
            default: Staking,
        },
        viShort: '/vi/staking',
    },
    {
        path: '/learn',
        name: 'learn',
        components: {
            default: Learn,
        },
        viShort: '/vi/learn',
    },
    {
        path: '/roadmap',
        name: 'roadmap',
        components: {
            default: Roadmap,
        },
        viShort: '/vi/roadmap',
    },

    {
        path: '/governance',
        name: 'Governance',
        components: {
            default: Governance,
        },
        viShort: '/vi/governance',
    },
    {
        path: '/cryptounicorns',
        name: 'Cryptounicorns',
        components: {
            default: Cryptounicorns,
        },
        viShort: '/vi/cryptounicorns',
    },
    {
        path: '/xbt-investment-fund',
        name: 'XbtInvestmentFund',
        components: {
            default: XbtInvestmentFund,
        },
        viShort: '/vi/xbt-investment-fund',
    },
    {
        path: '/signup',
        name: 'signup',
        components: {
            default: Signup,
        },
        viShort: '/vi/signup',
    },
]

export default new Router({
    routes: [
        // All pages are preceded by /vi/
        ...routers,
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
