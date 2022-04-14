import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./reducer/profileReducer";
import chatsReducer from "./reducer/chatsReducer";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";


const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);