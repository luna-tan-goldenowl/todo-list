import { combineReducers, legacy_createStore as createStore } from 'redux';
// import rootReducer from '../Todo/reducer/reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import todo from "./reducer/todo";
import setFilter from "./reducer/set-filter";
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    todo,
    setFilter
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer,composeWithDevTools())
let persistor = persistStore(store)

export { store, persistor }
