import React from 'react';
import { CardMedia, Card, CardContent, Typography, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { UnsplashImage } from '../../api/fetchImages';

interface ImageCardProps {
  image: UnsplashImage;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  const { urls, user, likes } = image;
  const { name, username } = user || {}; 

  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={urls.regular || ''} 
        alt="Image from Unsplash" 
      />
      <CardContent>
        {user && (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="body2" color="textSecondary">
              Photo by{' '}
              <a
                href={`https://unsplash.com/@${username}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {name || 'Unknown Author'}
              </a>
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <FavoriteIcon sx={{ color: 'red', fontSize: '16px', marginRight: '4px' }} />
              <Typography variant="body2" color="textSecondary">
                {likes}
              </Typography>
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default ImageCard;









