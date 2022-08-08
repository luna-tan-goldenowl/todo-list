import {legacy_createStore as createStore} from 'redux';
import rootReducer from '../Todo/reducer/reducer'

const store = createStore(rootReducer)
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store