import React, { useState } from 'react';
import { Box } from '@mui/material';
import ImageCard from '../ImageCard/ImageCard';
import ImageModal from '../ImageModal/ImageModal';
import { UnsplashImage } from '../../api/fetchImages';
import { ImageGalleryProps } from '../ImageGallery/ImageGallery.types';
import Loading from '../Loader/Loader'; 
import Error from '../ErrorMessage/ErrorMessage'; 

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, loading, error }) => {
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (image: UnsplashImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Показываем компонент Loading, если идет загрузка и нет изображений
  if (loading && images.length === 0) {
    return <Loading />;
  }

  // Показываем компонент Error, если есть ошибка
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
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          image={selectedImage}
        />
      )}
    </Box>
  );
};

export default ImageGallery;

