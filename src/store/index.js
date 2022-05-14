import {catReducer} from './reducers';
import thunk from "redux-thunk";
import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';

export const rootReducer = combineReducers({
    cat: catReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
