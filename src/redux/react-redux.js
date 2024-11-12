import { combineReducers, legacy_createStore as createStore} from "redux";
import HomeReducer from "./Home-redux";
import CalculatorReducer from './Calculator-redux'
import NavbarReducer from './Navbar-redux'

const reducers = combineReducers({
home:HomeReducer,
calculator:CalculatorReducer,
navbar:NavbarReducer,
})

const store = createStore(reducers);

window.store = store

export default store;