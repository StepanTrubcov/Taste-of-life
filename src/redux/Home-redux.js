

const initialState = [
    {
        id:1,
        name: 'Рецепты',
        img:'https://img.freepik.com/free-vector/tiny-female-chef-cooking-vegan-meal-using-recipe-kitchen-cook-making-dish-from-restaurant-menu-flat-vector-illustration-healthy-food-diet-culinary-nutrition-concept-website-design_74855-22063.jpg?t=st=1731137772~exp=1731141372~hmac=942dffd4723d08477c97661baae4f4a5edaa6270132e954116e3f7804cd3bd7a&w=1060',
        text:'Откройте для себя разнообразие вкусных и полезных рецептов, которые подходят для любого повода! Найдите вдохновение для завтраков, обедов, ужинов и десертов.',
        to:'/recipes',
        style:'recipes',
    },
    {
        id:2,
        name: 'Советы по питанию',
        img:'https://img.freepik.com/premium-vector/woman-choosing-healthy-junk-food-illustration_188398-485.jpg?w=1380',
        text:'Узнайте полезные советы и рекомендации по здоровому питанию от экспертов. Изучите важность сбалансированного рациона, порции и выбор полезных продуктов для улучшения вашего здоровья.',
        to:'/advice',
        style:'adviсe',
    }, 
    {
        id:3,
        name: 'Видеоуроки и мастер-классы',
        img:'https://img.freepik.com/free-vector/youtube-tutorial-concept-illustration_114360-2807.jpg?t=st=1731138448~exp=1731142048~hmac=a242d0a61508710afc207ea21d13c07843f35697ba668eda664723da46e10ddf&w=1060',
        text:'Посмотрите наши видеоуроки и мастер-классы по кулинарии! Научитесь готовить вкусные блюда от профессионалов и получите полезные советы по питанию и здоровому образу жизни.',
        to:'/video',
        style:'tutorials',
    }, 
    {
        id:4,
        name: 'Калькулятор суточной нормы калорий',
        img:'https://img.freepik.com/premium-vector/calorie-control-vector-concept-cartoon-style-3d-calculator-fruits-vegetables_1129760-217.jpg?w=1380',
        text:'Используйте этот калькулятор как часть вашего здорового образа жизни!',
        to:'/calculator',
        style:'calculatorr'
    },
]

const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default HomeReducer;
