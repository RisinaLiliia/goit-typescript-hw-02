import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchImagesAsync } from './imagesAction';
import { UnsplashImage } from '../types/unsplash';

interface ImagesState {
  images: UnsplashImage[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  page: number;
  totalImages: number;
}

const initialState: ImagesState = {
  images: [],
  loading: false,
  error: null,
  searchQuery: '',
  page: 1,
  totalImages: 0,
};

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    resetImages(state) {
      state.images = [];
      state.totalImages = 0;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImagesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchImagesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.images =
          state.page === 1
            ? action.payload.images
            : [...state.images, ...action.payload.images];
        state.totalImages = action.payload.totalImages;
      })
      .addCase(fetchImagesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Unknown error';
      });
  },
});

export const { resetImages, setSearchQuery, setPage } = imagesSlice.actions;
export default imagesSlice.reducer;



