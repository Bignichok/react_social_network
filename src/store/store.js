import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk);

const reducer = (state = {}, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const rootReducer = combineReducers({ reducerR: reducer });
const store = createStore(rootReducer, composeWithDevTools(middleware));
export default store;
