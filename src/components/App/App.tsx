
import React, { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImagesAsync } from '../../store/imagesAction';
import { resetImages, setSearchQuery, setPage } from '../../store/imagesSlice';
import { AppDispatch, RootState } from '../../store/store';
import { Box, Container, CircularProgress, Typography, Button } from '@mui/material';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { Toaster, toast } from 'react-hot-toast';
import EmptyState from '../EmptyState/EmptyState';

const STORAGE_KEY = 'lastSearchQuery';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { images, loading, error, page, searchQuery, totalImages } = useSelector(
    (state: RootState) => state.images
  );

  const prevImagesCount = useRef(0);
  const isFirstRender = useRef(true);

  const isInitialLoading = loading && images.length === 0;
  const canLoadMore = images.length > 0 && !loading && images.length < totalImages;

  const loadImages = useCallback(
    (query: string, page: number) => {
      dispatch(setSearchQuery(query));
      dispatch(setPage(page));
      dispatch(fetchImagesAsync({ query, page }));
    },
    [dispatch]
  );

  const handleSearchSubmit = (query: string) => {
    if (!query.trim()) return;

    localStorage.setItem(STORAGE_KEY, query);
    dispatch(resetImages());
    loadImages(query, 1);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    dispatch(setPage(nextPage));
    dispatch(fetchImagesAsync({ query: searchQuery, page: nextPage }));
  };

  useEffect(() => {
    const savedQuery = localStorage.getItem(STORAGE_KEY);
    if (savedQuery) {
      dispatch(resetImages());
      loadImages(savedQuery, 1);
    }
  }, [dispatch, loadImages]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!loading) {
      if (error) {
        toast.error(`Error: ${error}`);
      } else if (page === 1 && totalImages > 0) {
        toast.success(`Found ${totalImages} images.`);
      } else if (page > 1 && images.length > prevImagesCount.current) {
        toast.success(`Loaded ${images.length} of ${totalImages} images`);
      }
    }

    prevImagesCount.current = images.length;
  }, [loading, error, totalImages, images.length, page]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Image Search App
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" gutterBottom>
        Find beautiful and high-quality images with ease
      </Typography>

      <SearchBar onSubmit={handleSearchSubmit} />

      <Box sx={{ mt: 4 }}>
        {images.length === 0 && !loading ? (
          <EmptyState />
        ) : (
          <ImageGallery
            images={images}
            loading={loading}
            error={error}
            totalImages={totalImages}
          />
        )}
      </Box>

      {isInitialLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {canLoadMore && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            variant="contained"
            onClick={handleLoadMore}
            disabled={loading}
            sx={{ px: 4, py: 1, fontSize: '1rem', textTransform: 'none' }}
          >
            Load More
          </Button>
        </Box>
      )}

      {error && (
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        </Box>
      )}

      <Toaster position="top-right" />
    </Container>
  );
};

export default App;
