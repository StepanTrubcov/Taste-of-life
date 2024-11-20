

const initialState = [
{
    name:'Завтрак',
    img:'https://img.freepik.com/free-vector/breakfast-food-concept-illustration_114360-12324.jpg?t=st=1731612280~exp=1731615880~hmac=49f9b527672ef4003a97738684ebe47a686a3da8b0322f3cae1b4c2707d8e0ee&w=740',
    to:'',
    text:'Завтрак — это важный прием пищи, который помогает зарядить вас энергией на весь день. Попробуйте наши рецепты и начните утро с улыбкой!'
},
{
    name:'Обед',
    img:'https://img.freepik.com/free-vector/different-foods-set-white-background_1308-104236.jpg?t=st=1731612371~exp=1731615971~hmac=e8b5fac215c626727822d275cf8a267b013c97e769c12b43f1831613622c0a8f&w=1060',
    to:'',
    text:'Обед — это важный прием пищи, который помогает поддерживать уровень энергии и концентрации. Попробуйте наши рецепты и насладитесь вкусом! '
},
{
    name:'Ужин',
    img:'https://img.freepik.com/free-vector/set-food-beverage_1308-104712.jpg?t=st=1731612440~exp=1731616040~hmac=d0270d6510a0bbc1873a9fe3bd04afd985a56cf66536e063ad753d928642d2a3&w=826',
    to:'',
    text:'Ужин — это не только время для еды, но и возможность собраться с семьей или друзьями. Наслаждайтесь каждым моментом за столом!',
},
{
    name:'Постные рецепты',
    img:'https://img.freepik.com/premium-vector/healthy-vegetarian-bowl-vegetable-organic-farm-growing-tomato-green-salad-leaf-sweet-paprika_109722-7118.jpg?w=740',
    to:'',
    text:'Постная еда — это отличный способ очистить организм и попробовать новые вкусы. Откройте для себя мир растительных ингредиентов и наслаждайтесь здоровым питанием!'
}
]

const RecipesReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default RecipesReducer;