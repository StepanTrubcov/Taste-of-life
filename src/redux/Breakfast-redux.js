const initialState = [
    {
        id: 0,
        name: 'Творог с яйцом завтрак ПП за 5 минут',
        img: 'https://static.1000.menu/res/640/img/content-v2/7d/f0/66724/tvorog-s-yaicom-zavtrak-pp-za-5-minut_1659036301_11_max.jpg',
        text: 'Полезное и вкусное начало дня!',
        time: '5 мин',
        inf: [
            {
                name:'Шаг 1:',
                img:'https://static.1000.menu/res/380/img/content-v2/7d/f0/66724/tvorog-s-yaicom-zavtrak-pp-za-5-minut_1659035897_0_max.jpg',
                text:'Как сделать творог с яйцом на завтрак ПП за 5 минут? Подготовьте необходимые продукты. Творог можно взять жирностью 5-9%. Чем выше жирность творога, тем вкуснее и более питательным получится блюдо. Главное, чтобы творог был свежим, некислым и нежестким. Яйца используйте категории не менее С1.',
            },
            {
                name:'Шаг 2:',
                img:'https://static.1000.menu/res/380/img/content-v2/7d/f0/66724/tvorog-s-yaicom-zavtrak-pp-za-5-minut_1659035902_1_max.jpg',
                text:'Изюм тщательно помойте и распарьте. Как правильно распарить изюм? Залейте хорошо промытый изюм горячей водой и оставьте на 10-15 минут. За это время он станет мягким. Слейте воду и обсушите его бумажными полотенцами. Можно взять любые сухофрукты (курагу, чернослив) или вяленые ягоды (клюкву, вишню).',
            },
            {
                name:'Шаг 3:',
                img:'https://static.1000.menu/res/380/img/content-v2/7d/f0/66724/tvorog-s-yaicom-zavtrak-pp-za-5-minut_1659035907_2_max.jpg',
                text:'В миске соедините творог, яйца, сахар и муку. Обязательно мойте яйца перед использованием, так как даже на кажущейся чистой скорлупе могут находиться вредные бактерии. Сахар добавляйте по вкусу, учитывая сладкий вкус сухофруктов. Вместо сахара можно использовать также сахарозаменитель, который не боится термической обработки.',
            },
            {
                name:'Шаг 4:',
                img:'https://static.1000.menu/res/380/img/content-v2/7d/f0/66724/tvorog-s-yaicom-zavtrak-pp-za-5-minut_1659035913_3_max.jpg',
                text:'Перемешайте творожную массу до однородности.',
            },
            {
                name:'Шаг 5:',
                img:'https://static.1000.menu/res/380/img/content-v2/7d/f0/66724/tvorog-s-yaicom-zavtrak-pp-za-5-minut_1659035916_4_max.jpg',
                text:'Чистый, просушенный изюм добавьте в полученную массу. Если используете крупные сухофрукты, то предварительно их мелко нарежьте ножом.',
            },
            {
                name:'Шаг 6:',
                img:'https://static.1000.menu/res/380/img/content-v2/7d/f0/66724/tvorog-s-yaicom-zavtrak-pp-za-5-minut_1659036008_5_max.jpg',
                text:'В миску, подходящую для приготовления в микроволновой печи, добавьте воду, чтобы запеканка во время приготовления не присохла.',
            },
            {
                name:'Шаг 7:',
                img:'https://static.1000.menu/res/380/img/content-v2/7d/f0/66724/tvorog-s-yaicom-zavtrak-pp-za-5-minut_1659036014_6_max.jpg',
                text:'Выложите творожную массу в миску и разровняйте.',
            },
            {
                name:'Шаг 8:',
                img:'https://static.1000.menu/res/380/img/content-v2/7d/f0/66724/tvorog-s-yaicom-zavtrak-pp-za-5-minut_1659036019_7_max.jpg',
                text:'Поставьте творог с яйцом в микроволновую печь. Я запекала завтрак при мощности печи 750 W. По времени приготовления будет достаточно 3 минут. Имейте в виду, что микроволновки работают не одинаково. Время приготовления и рекомендуемая мощность могут отличаться от заявленных в рецепте. Читайте инструкцию к вашему прибору и учитывайте особенности именно вашей техники.',
            },
            {
                name:'Шаг 9:',
                img:'https://static.1000.menu/res/380/img/content-v2/7d/f0/66724/tvorog-s-yaicom-zavtrak-pp-za-5-minut_1659036030_8_max.jpg',
                text:'Готовая запеканка уплотнится. Достаньте миску из микроволновки, используя кухонные варежки, чтобы не обжечься.',
            },
            {
                name:'Шаг 10:',
                img:'https://static.1000.menu/res/380/img/content-v2/7d/f0/66724/tvorog-s-yaicom-zavtrak-pp-za-5-minut_1659036125_9_max.jpg',
                text:'Миску с запеканкой переверните на тарелку. Можно подавать как в остывшем, так и в теплом виде. Приятного аппетита!',
            },
        ],
    },
    {
        id: 1,
        name: 'ПП вафли для вафельницы',
        img: 'https://static.1000.menu/res/640/img/content-v2/b2/ff/71771/pp-vafli-dlya-vafelnicy_1675711115_4_max.jpg',
        text: 'Очень мягкие и нежные, с насыщенным фруктовым вкусом.',
        time: '30 мин',
        inf: [
            {
                name:'Шаг 1:',
                img:'https://static.1000.menu/res/380/img/content-v2/b2/ff/71771/pp-vafli-dlya-vafelnicy_1675708030_0_max.jpg',
                text:'Как сделать ПП вафли для вафельницы? Подготовьте продукты по списку. Вместо рисовой муки можно взять ржаную. Сметану можете заменить на кефир. По вкусу можете дополнительно добавить в тесто любимые пряности, например имбирь или кардамон. Можете использовать сахар или сахарозаменитель, который не боится термической обработки.',
            },
            {
                name:'Шаг 2:',
                img:'https://static.1000.menu/res/380/img/content-v2/b2/ff/71771/pp-vafli-dlya-vafelnicy_1675708042_1_max.jpg',
                text:'Яблоко хорошенько вымойте, очистите от кожуры и удалите сердцевину.',
            },
            {
                name:'Шаг 3:',
                img:'https://static.1000.menu/res/380/img/content-v2/b2/ff/71771/pp-vafli-dlya-vafelnicy_1675708262_3_max.jpg',
                text:'Натрите очищенное яблоко на мелкой терке.',
            },
            {
                name:'Шаг 4:',
                img:'https://static.1000.menu/res/380/img/content-v2/b2/ff/71771/pp-vafli-dlya-vafelnicy_1675708320_4_max.jpg',
                text:'Разбейте в чашу с яблоком яйца и добавьте любой подходящий сахарозаменитель или 1 ст.л. сахара.',
            },
            {
                name:'Шаг 5:',
                img:'https://static.1000.menu/res/380/img/content-v2/b2/ff/71771/pp-vafli-dlya-vafelnicy_1675708327_5_max.jpg',
                text:'Перемешайте до однородной консистенции.',
            },
            {
                name:'Шаг 6:',
                img:'https://static.1000.menu/res/380/img/content-v2/b2/ff/71771/pp-vafli-dlya-vafelnicy_1675708346_6_max.jpg',
                text:'Следом добавьте сметану и молотую корицу.',
            },
            {
                name:'Шаг 7:',
                img:'https://static.1000.menu/res/380/img/content-v2/b2/ff/71771/pp-vafli-dlya-vafelnicy_1675708357_7_max.jpg',
                text:'Хорошенько перемешайте все ложкой.',
            },
            {
                name:'Шаг 8:',
                img:'https://static.1000.menu/res/380/img/content-v2/b2/ff/71771/pp-vafli-dlya-vafelnicy_1675708371_8_max.jpg',
                text:'В последнюю очередь просейте в чашу муку с разрыхлителем.',
            },
            {
                name:'Шаг 9:',
                img:'https://static.1000.menu/res/380/img/content-v2/b2/ff/71771/pp-vafli-dlya-vafelnicy_1675708396_9_max.jpg',
                text:'Размешайте тесто до однородного состояния и оставьте отдохнуть минут на 10.',
            },
            {
                name:'Шаг 10:',
                img:'https://static.1000.menu/res/380/img/content-v2/b2/ff/71771/pp-vafli-dlya-vafelnicy_1675708409_10_max.jpg',
                text:'Смажьте вафельницу растительным маслом и разогрейте.',
            },
            {
                name:'Шаг 11:',
                img:'https://static.1000.menu/res/380/img/content-v2/b2/ff/71771/pp-vafli-dlya-vafelnicy_1675708421_11_max.jpg',
                text:'Выкладывайте тесто ложкой в формы для вафель и запекайте 6-8 минут. Готовые пп вафли подавайте с медом, ягодами, сиропом или вареньем. Приятного аппетита!',
            },
        ],
    },
    {
        id: 2,
        name: 'Венские вафли ПП',
        img: 'https://static.1000.menu/res/640/img/content-v2/1f/e1/72219/venskie-vafli-pp_1676967253_0_max.jpg',
        text: 'Полезный, быстрый и очень вкусный завтрак для всей семьи!',
        time: '40 мин',
        inf: '',
    },
    {
        id: 3,
        name: 'ПП брауни с бананом и какао в духовке',
        img: 'https://static.1000.menu/res/640/img/content-v2/09/b0/62245/pp-brauni-s-bananom-i-kakao-v-duxovke_1643292253_8_max.jpg',
        text: 'Невероятно вкусное шоколадное лакомство!',
        time: '60 мин',
        inf: '',
    },
    {
        id: 4,
        name: 'Котлеты ПП из куриного фарша в духовке',
        img: 'https://static.1000.menu/res/640/img/content-v2/5f/49/70840/kotlety-pp-iz-kurinogo-farsha-v-duxovke_1673124688_8_max.jpg',
        text: 'Очень полезные, диетические!',
        time: '60 мин',
        inf: '',
    },
    {
        id: 5,
        name: 'Кабачки запеченные с сыром в духовке ПП',
        img: 'https://static.1000.menu/res/640/img/content-v2/a2/c2/40648/kabachki-zapechennye-s-syrom-v-duxovke_1573560941_6_max.jpg',
        text: 'Ароматные и сочные.',
        time: '30 мин',
        inf: '',
    },
    {
        id: 6,
        name: 'Омлет с помидорами на сковороде',
        img: 'https://static.1000.menu/res/640/img/content-v2/82/05/50028/omlet-s-pomidorami-na-skovorode_1598910826_9_max.jpg',
        text: 'Нежное, тающее во рту, базовое блюдо!',
        time: '12 мин',
        inf: '',
    },
    {
        id: 7,
        name: 'Сырники в духовке из творога с мукой цельнозерновой ПП',
        img: 'https://static.1000.menu/res/640/img/content-v2/a5/eb/14319/nejnye-syrniki-v-duxovke-s-mukoi-i-izumom_1597304809_15_max.jpg',
        text: 'Классический рецепт нежнейшей выпечки!',
        time: '40 мин',
        inf: '',
    },
    {
        id: 8,
        name: 'Творожные вафли ПП',
        img: 'https://static.1000.menu/res/640/img/content-v2/f2/73/71996/tvorojnye-vafli-pp_1676051797_4_max.jpg',
        text: 'Самый полезный и вкусный завтрак для детей и взрослых!',
        time: '50 мин',
        inf: '',
    },
    {
        id: 9,
        name: 'ПП сырники из творога с мукой',
        img: 'https://static.1000.menu/res/640/img/content-v2/92/0c/68914/pp-syrniki-iz-tvoroga-s-mukoi_1666551922_7_max.jpg',
        text: 'Легкие, сытные, простые, бюджетные! ',
        time: '50 мин',
        inf: '',
    },
    {
        id: 10,
        name: 'Куриные котлеты ПП на пару в мультиварке',
        img: 'https://static.1000.menu/res/640/img/content-v2/46/12/26400/kurinye-kotlety-na-paru-v-multivarke_1618515213_13_max.jpg',
        text: 'Полезные, диетические, вкусные, для всей семьи!',
        time: '40 мин',
        inf: '',
    },
    {
        id: 11,
        name: 'Простой ПП салат с йогуртом',
        img: 'https://static.1000.menu/res/640/img/content-v2/0b/de/66193/tureckii-sous-iz-portulaka-i-iogurta_1657297714_7_max.jpg',
        text: 'Вкусный, освежающий, к картофелю или мясу!',
        time: '10 мин',
        inf: '',
    },
    {
        id: 12,
        name: 'ПП десерт из творога',
        img: 'https://static.1000.menu/res/640/img/content-v2/b8/b7/69714/pp-desert-iz-tvoroga_1669225439_11_max.jpg',
        text: 'Легкий, полезный, диетический, без сахара и лишних калорий!',
        time: '10 мин',
        inf: '',
    },
    {
        id: 13,
        name: 'Оладьи из бананов и яиц без муки ПП',
        img: 'https://static.1000.menu/res/640/img/content-v2/2f/77/31021/oladi-iz-bananov-i-yaic_1673776960_15_max.jpg',
        text: 'Полезный завтрак из двух продуктов!',
        time: '30 мин',
        inf: '',
    },
]

const BreakfastReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default BreakfastReducer;