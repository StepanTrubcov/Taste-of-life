const initialState = [
    {
        id:1,
        name: 'Творог с яйцом завтрак ПП за 5 минут',
        img:'https://static.1000.menu/res/640/img/content-v2/7d/f0/66724/tvorog-s-yaicom-zavtrak-pp-za-5-minut_1659036301_11_max.jpg',
        text:'Полезное и вкусное начало дня!',
        time:'50 мин',
        to:'',
    },
    {
        id:2,
        name: 'ПП вафли для вафельницы',
        img:'https://static.1000.menu/res/640/img/content-v2/b2/ff/71771/pp-vafli-dlya-vafelnicy_1675711115_4_max.jpg',
        text:'Очень мягкие и нежные, с насыщенным фруктовым вкусом.',
        time:'50 мин',
        to:'',
    }, 
    {
        id:3,
        name: 'Венские вафли ПП',
        img:'https://static.1000.menu/res/640/img/content-v2/1f/e1/72219/venskie-vafli-pp_1676967253_0_max.jpg',
        text:'Полезный, быстрый и очень вкусный завтрак для всей семьи!',
        time:'50 мин',
        to:'',
    }, 
    {
        id:4,
        name: 'ПП брауни с бананом и какао в духовке',
        img:'https://static.1000.menu/res/640/img/content-v2/09/b0/62245/pp-brauni-s-bananom-i-kakao-v-duxovke_1643292253_8_max.jpg',
        text:'Невероятно вкусное шоколадное лакомство!',
        time:'50 мин',
        to:'',
    },
    {
        id:5,
        name: 'Котлеты ПП из куриного фарша в духовке',
        img:'https://static.1000.menu/res/640/img/content-v2/5f/49/70840/kotlety-pp-iz-kurinogo-farsha-v-duxovke_1673124688_8_max.jpg',
        text:'Очень полезные, диетические!',
        time:'50 мин',
        to:'',
    },
    {
        id:6,
        name: 'Кабачки запеченные с сыром в духовке ПП',
        img:'https://static.1000.menu/res/640/img/content-v2/a2/c2/40648/kabachki-zapechennye-s-syrom-v-duxovke_1573560941_6_max.jpg',
        text:'Ароматные и сочные.',
        time:'50 мин',
        to:'',
    },
    {
        id:7,
        name: 'Омлет с помидорами на сковороде',
        img:'https://static.1000.menu/res/640/img/content-v2/82/05/50028/omlet-s-pomidorami-na-skovorode_1598910826_9_max.jpg',
        text:'Нежное, тающее во рту, базовое блюдо!',
        time:'50 мин',
        to:'',
    },
    {
        id:8,
        name: 'Сырники в духовке из творога с мукой цельнозерновой ПП',
        img:'https://static.1000.menu/res/640/img/content-v2/a5/eb/14319/nejnye-syrniki-v-duxovke-s-mukoi-i-izumom_1597304809_15_max.jpg',
        text:'Классический рецепт нежнейшей выпечки!',
        time:'50 мин',
        to:'',
    },
    {
        id:9,
        name: 'Творожные вафли ПП',
        img:'https://static.1000.menu/res/640/img/content-v2/f2/73/71996/tvorojnye-vafli-pp_1676051797_4_max.jpg',
        text:'Самый полезный и вкусный завтрак для детей и взрослых!',
        time:'50 мин',
        to:'',
    },
    {
        id:10,
        name: 'ПП сырники из творога с мукой',
        img:'https://static.1000.menu/res/640/img/content-v2/92/0c/68914/pp-syrniki-iz-tvoroga-s-mukoi_1666551922_7_max.jpg',
        text:'Легкие, сытные, простые, бюджетные! ',
        time:'50 мин',
        to:'',
    },
    {
        id:11,
        name: 'Куриные котлеты ПП на пару в мультиварке',
        img:'https://static.1000.menu/res/640/img/content-v2/46/12/26400/kurinye-kotlety-na-paru-v-multivarke_1618515213_13_max.jpg',
        text:'Полезные, диетические, вкусные, для всей семьи!',
        time:'40 мин',
        to:'',
    },
    {
        id:12,
        name: 'Простой ПП салат с йогуртом',
        img:'https://static.1000.menu/res/640/img/content-v2/0b/de/66193/tureckii-sous-iz-portulaka-i-iogurta_1657297714_7_max.jpg',
        text:'Вкусный, освежающий, к картофелю или мясу!',
        time:'10 мин',
        to:'',
    },
    {
        id:13,
        name: 'ПП десерт из творога',
        img:'https://static.1000.menu/res/640/img/content-v2/b8/b7/69714/pp-desert-iz-tvoroga_1669225439_11_max.jpg',
        text:'Легкий, полезный, диетический, без сахара и лишних калорий!',
        time:'10 мин',
        to:'',
    },
    {
        id:14,
        name: 'Оладьи из бананов и яиц без муки ПП',
        img:'https://static.1000.menu/res/640/img/content-v2/2f/77/31021/oladi-iz-bananov-i-yaic_1673776960_15_max.jpg',
        text:'Полезный завтрак из двух продуктов!',
        time:'30 мин',
        to:'',
    },
]

const BreakfastReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default BreakfastReducer;