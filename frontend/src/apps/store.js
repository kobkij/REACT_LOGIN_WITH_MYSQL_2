import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/checkLogin/checkLoginSlice';

export default configureStore({
  reducer: {
    login: loginReducer,
  },
});