
import { combineReducers } from '@reduxjs/toolkit';
import imagesReducer from './imagesSlice';

const rootReducer = combineReducers({
  images: imagesReducer,
});

export default rootReducer;

