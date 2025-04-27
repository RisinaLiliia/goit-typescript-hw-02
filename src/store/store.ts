import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './imagesSlice';

const store = configureStore({
  reducer: {
    images: imagesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;

