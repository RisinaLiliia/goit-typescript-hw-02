import React, { useState } from 'react';
import { Box } from '@mui/material';
import ImageCard from '../ImageCard/ImageCard';
import ImageModal from '../ImageModal/ImageModal';
import { UnsplashImage } from '../../api/fetchImages';
import { ImageGalleryProps } from './ImageGallery.types';
import Loading from '../Loader/Loader'; 
import Error from '../ErrorMessage/ErrorMessage'; 

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, loading, error }) => {
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(null);

  const handleImageClick = (image: UnsplashImage) => {
    setSelectedImage(image); 
  };

  const handleCloseModal = () => {
    setSelectedImage(null); 
  };

  if (loading && images.length === 0) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <Box display="flex" flexWrap="wrap" gap={2} mt={4}>
      {images.map((image) => (
        <Box
          key={image.id}
          onClick={() => handleImageClick(image)}
          flexBasis="calc(33.33% - 16px)"
          minWidth="250px"
          mb={2}
          sx={{ cursor: 'pointer' }}
        >
          <ImageCard image={image} />
        </Box>
      ))}

      {selectedImage && (
        <ImageModal
          isOpen={Boolean(selectedImage)}  
          onClose={handleCloseModal}
          image={selectedImage}
        />
      )}
    </Box>
  );
};

export default ImageGallery;


