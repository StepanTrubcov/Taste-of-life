

const initialState = [
    {
        name:"Главная",
        img:'https://img.freepik.com/free-photo/fresh-orange_1339-2025.jpg?t=st=1731435359~exp=1731438959~hmac=1dd4a3f6264d865e5237da20d13993cb96bc1737b458e047d10da2a56c846bd9&w=900',
        to:'/Taste-of-life'
    },
    {
        name:'Рецепты',
        img:'https://img.freepik.com/premium-photo/kiwi-fruit-white-surface_404043-1766.jpg?w=1060',
        to:'/recipe'
    },
    {
        name:'Советы',
        img:'https://img.freepik.com/premium-vector/pomegranate-fruit-flat-vector-illustration-white-background_674398-4570.jpg?w=740',
        to:'/adviсe'
    },
    {
        name:'Видеоуроки',
        img:'https://img.freepik.com/premium-vector/red-apple-icon_554888-1543.jpg?w=740',
        to:'/videoTutorials'
    }
]

const NavbarReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default NavbarReducer;