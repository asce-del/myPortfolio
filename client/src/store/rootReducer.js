import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage'
import userReducer from "./user/reducer"
import chatReducer from "./chat/reducer"

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['user']
}

const rootReducer =  combineReducers({
    user: userReducer,
    chat: chatReducer
});

export default persistReducer(persistConfig,rootReducer)