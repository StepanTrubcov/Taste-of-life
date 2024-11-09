import { combineReducers, legacy_createStore as createStore} from "redux";
import HomeReducer from "./Home-redux";

const reducers = combineReducers({
home:HomeReducer,
})

const store = createStore(reducers);

window.store = store

export default store;