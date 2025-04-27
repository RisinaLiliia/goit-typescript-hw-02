import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchImages } from '../api/fetchImages';
import { UnsplashImage } from '../types/unsplash';

export interface FetchImagesParams {
  query: string;
  page: number;
}

export const fetchImagesAsync = createAsyncThunk<
  { images: UnsplashImage[]; totalImages: number },
  FetchImagesParams,
  { rejectValue: string }
>(
  'images/fetchImages',
  async ({ query, page }, thunkAPI) => {
    try {
      const { images, totalImages } = await fetchImages(query, page);
      return { images, totalImages };
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue('An unknown error occurred');
    }
  }
);






