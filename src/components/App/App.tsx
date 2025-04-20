import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImagesAsync } from '../../store/imagesAction';
import { resetImages, setSearchQuery, setPage } from '../../store/imagesSlice';
import { AppDispatch, RootState } from '../../store/store';
import { Box, Container, CircularProgress, Typography, Button } from '@mui/material';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { Toaster, toast } from 'react-hot-toast';

const STORAGE_KEY = 'lastSearchQuery';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { images, loading, error, page, searchQuery, totalImages } = useSelector(
    (state: RootState) => state.images
  );

  const prevImagesCount = useRef(0);
  const isFirstRender = useRef(true);

  const handleSearchSubmit = (query: string) => {
    if (!query.trim()) return;

    localStorage.setItem(STORAGE_KEY, query);

    dispatch(resetImages());
    dispatch(setSearchQuery(query));
    dispatch(setPage(1));
    dispatch(fetchImagesAsync({ query, page: 1 }));
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    dispatch(setPage(nextPage));
    dispatch(fetchImagesAsync({ query: searchQuery, page: nextPage }));
  };

  useEffect(() => {
    const savedQuery = localStorage.getItem(STORAGE_KEY);
    if (savedQuery) {
      dispatch(setSearchQuery(savedQuery));
      dispatch(setPage(1));
      dispatch(fetchImagesAsync({ query: savedQuery, page: 1 }));
    }
  }, [dispatch]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!loading && error) {
      toast.error(`Error: ${error}`);
    }

    if (!loading && page === 1) {
      if (totalImages > 0) {
        toast.success(`Found ${totalImages} images.`);
      } else {
        // Убрали вывод при первой загрузке
      }
    }

    if (!loading && page > 1 && images.length > prevImagesCount.current) {
      toast.success(`Loaded ${images.length} of ${totalImages} images`);
    }

    prevImagesCount.current = images.length;
  }, [loading, error, totalImages, images.length, page]);

  return (
    <Container maxWidth="lg" sx={{ padding: '2rem' }}>
      <Typography variant="h3" align="center" gutterBottom>
        Image Search App
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" gutterBottom>
        Find beautiful and high-quality images with ease
      </Typography>

      <SearchBar onSubmit={handleSearchSubmit} />

      <Box sx={{ marginTop: '2rem' }}>
        <ImageGallery
          images={images}
          loading={loading}
          error={error}
          totalImages={totalImages}
        />
      </Box>

      {loading && images.length === 0 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <CircularProgress />
        </Box>
      )}

      {images.length > 0 && !loading && images.length < totalImages && (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <Button
            variant="contained"
            onClick={handleLoadMore}
            disabled={loading}
            sx={{
              padding: '0.5rem 2rem',
              fontSize: '1rem',
              textTransform: 'none',
            }}
          >
            Load More
          </Button>
        </Box>
      )}

      {error && (
        <Box sx={{ marginTop: '2rem', textAlign: 'center' }}>
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






















