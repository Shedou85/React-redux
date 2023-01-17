import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { usersReducer } from "./usersReducer";


const rootReducer = combineReducers({
      users: usersReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());

