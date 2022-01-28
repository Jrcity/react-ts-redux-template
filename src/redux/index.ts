import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/es/storage';
import thunk from 'redux-thunk';
import reducers from './reducers';

type configTypes = {
  key: string;
  storage: any;
};

const enhancer = composeWithDevTools(
  applyMiddleware(thunk)
  // other store enhancers if any
);

const config: configTypes = {
  key: 'root',
  storage: localStorage,
};

const persistedReducer = persistReducer(config, reducers);
const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
export * as __ACTIONS__ from './actionCreators';

export default store;
