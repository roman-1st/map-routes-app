import { combineReducers } from 'redux';
import routesSlice from './routesSlice';

const rootReducer = combineReducers({
    routes: routesSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;