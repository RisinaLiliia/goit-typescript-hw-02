import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchImages } from '../api/fetchImages';

export interface FetchImagesParams {
  query: string;
  page: number;
}

export const fetchImagesAsync = createAsyncThunk(
  'images/fetchImages',
  async ({ query, page }: FetchImagesParams, thunkAPI) => {
    try {
      const { images, totalImages } = await fetchImages(query, page);
      return { images, totalImages };
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue('An unknown error occurred');
      }
    }
  }
);


