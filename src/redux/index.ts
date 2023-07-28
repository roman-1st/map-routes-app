import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer'; // Замените './reducers' на путь к вашим редьюсерам

const store = configureStore({
    reducer: rootReducer,
});

export default store;