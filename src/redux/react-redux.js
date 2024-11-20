import { combineReducers, legacy_createStore as createStore} from "redux";
import HomeReducer from "./Home-redux";
import CalculatorReducer from './Calculator-redux'
import NavbarReducer from './Navbar-redux'
import VideoReducer from './Video-redux'
import RecipesReducer from './recipes-redux'

const reducers = combineReducers({
home:HomeReducer,
calculator:CalculatorReducer,
navbar:NavbarReducer,
video:VideoReducer,
recipes:RecipesReducer,
})

const store = createStore(reducers);

window.store = store

export default store;