import { RootState } from '../store/store';

export const selectImages = (state: RootState) => state.images.images;
export const selectLoading = (state: RootState) => state.images.loading;
export const selectError = (state: RootState) => state.images.error;
export const selectSearchQuery = (state: RootState) => state.images.searchQuery;
export const selectPage = (state: RootState) => state.images.page;
