import {createStore} from 'redux';
import rootReducer from './reducers/rootReducers';

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;