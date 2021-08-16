import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Secondary from './views/Secondary.vue';
import Basic from './views/basic.vue';
import BuyXBN from './views/buy.vue';
import Economics from './views/economics.vue';
import Technology from './views/technology.vue';
import Staking from './views/auto_staking.vue';
import convertingDust from './views/converting_dust.vue';
import Signup from './views/Signup.vue';
import Learn from './views/learn.vue';
import Governance from './views/governance.vue';
import XBC from './views/xbc.vue';
// import Airdrop from './views/airdrop.vue';

import Roadmap from './views/roadmap.vue';
import XbtInvestmentFund from './views/xbt_investment_fund.vue';
import Cryptounicorns from './views/cryptounicorns.vue';
// import App from "./App";
import Sales from './views/sales.vue';
import XBNSales from './views/xbn/xbn_sales';
import XBNAirdrop from './views/xbn/xbn_airdrop';
import XBNAirdropV2 from './views/xbn/xbn_airdrop_v2';
import XBNLottery from './views/xbn/xbn_lottery';
import XBNSwap from './views/xbn/xbn_swap';
import XBNQuestAirdrop from './views/xbn/xbn_quest_airdrop';
import XBNAdminQuestAirdrop from './views/xbn/xbn_admin_quest_airdrop';
import Gratitude from "./views/xbn/Gratitude";
import LastSurvior from "./views/xbn/LastSurvior";
import AIStaking from "./views/ai_staking.vue";

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
        path: '/buy',
        name: 'buy',
        components: {
            default: BuyXBN,
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
        path: '/converting_dust',
        name: 'converting_dust',
        components: {
            default: convertingDust,
        }
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
        path: '/xbc',
        name: 'XBC',
        components: {
            default: XBC,
        }
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
        path: '/signup',
        name: 'signup',
        components: {
            default: Signup,
        },
        viShort: '/vi/signup',
        krShort: '/kr/signup',
    },

    // For XBN
    {
        path: '/xbt/sales',
        name: 'xbt_sales',
        components: {
            default: Sales,
        },
        viShort: '/vi/xbt/sales',
        krShort: '/kr/xbt/sales',
    },
   
    {
        path: '/xbt/investment-fund',
        name: 'XbtInvestmentFund',
        components: {
            default: XbtInvestmentFund,
        },
        viShort: '/vi/xbt/investment-fund',
        krShort: '/kr/xbt/investment-fund',
    },

    // For XBN
    {
        path: '/xbn/sales',
        name: 'xbn_sales',
        components: {
            default: XBNSales,
        },
        viShort: '/vi/xbn/sales',
        krShort: '/kr/xbn/sales',
    },
    {
        path: '/xbn/airdrop/old',
        name: 'xbn_airdrop',
        components: {
            default: XBNAirdrop,
        },
        viShort: '/vi/xbn/airdrop',
        krShort: '/kr/xbn/airdrop',
    },
    {
        path: '/xbn/airdrop',
        name: 'xbn_airdrop',
        components: {
            default: XBNAirdropV2,
        },
        viShort: '/vi/xbn/airdrop',
        krShort: '/kr/xbn/airdrop',
    },
    {
        path: '/xbn/quest-airdrop',
        name: 'xbn_quest_airdrop',
        components: {
            default: XBNQuestAirdrop,
        },
        viShort: '/vi/xbn/quest-airdrop',
        krShort: '/kr/xbn/quest-airdrop',
    },
    {
        path: '/xbn/admin/quest-airdrop',
        name: 'xbn_admin_quest_airdrop',
        components: {
            default: XBNAdminQuestAirdrop,
        },
        viShort: '/vi/xbn/admin/quest-airdrop',
        krShort: '/kr/xbn/admin/quest-airdrop',
    },
    {
        path: '/xbn/lottery',
        name: 'Xbn_lottery',
        components: {
            default: XBNLottery,
        },
        viShort: '/vi/xbn/lottery',
        krShort: '/kr/xbn/lottery',
    },
    {
        path: '/xbn/gratitude',
        name: 'xbn_gratitude',
        components: {
            default: Gratitude,
        },
        viShort: '/vi',
        krShort: '/kr',
    }, {
        path: '/xbn/last-survior',
        name: 'xbn_last_survior',
        components: {
            default: LastSurvior,
        },
        viShort: '/vi',
        krShort: '/kr',
    },
    {
        path: '/xbn/swap',
        name: 'XbnSwap',
        components: {
            default: XBNSwap,
        },
        viShort: '/vi/xbn/swap',
        krShort: '/kr/xbn/swap',
    },
    {
        path: '/ai-staking',
        name: 'AiStaking',
        components: {
            default: AIStaking,
        },
        viShort: '/vi/ai-staking',
        krShort: '/kr/ai-staking',
    }
]

export default new Router({
    routes: [
        ...routers,
        // All pages are preceded by /vi/
        // {
        //
        //     path: '/:lang',
        //     components: {
        //         default: App,
        //     },
        //     children: [
        //         // All the pages are mapped from the routes
        //         ...routers.map((p) => ({
        //             path: p.path.replace(p.path.substring(0, 1), ""),
        //             alias: p.viShort,
        //             name: p.name + '_lang',
        //             components: p.components,
        //         })),
        //         {
        //             path: '',
        //             redirect: {name: 'home'},
        //         },
        //     ],
        // },

    ],
    mode: 'history'
});
