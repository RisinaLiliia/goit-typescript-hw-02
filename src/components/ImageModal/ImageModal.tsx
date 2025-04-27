import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Box,
  Avatar,
  Link,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { UnsplashImage } from '../../types/unsplash';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  image: UnsplashImage | null;
}

const ImageModal = ({ isOpen, onClose, image }: Props) => {
  if (!isOpen || !image) return null;

  const { urls, alt_description, user, likes } = image;

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md" scroll="body">
      <DialogTitle
        sx={{
          m: 0,
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{ color: (theme) => theme.palette.grey[500] }}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Box
          component="img"
          src={urls.regular}
          alt={alt_description || 'Unsplash Image'}
          sx={{
            width: '100%',
            borderRadius: 2,
            mb: 2,
            boxShadow: 2,
            objectFit: 'cover',
          }}
        />

        {alt_description && (
          <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 2 }}>
            {alt_description.charAt(0).toUpperCase() + alt_description.slice(1)}
          </Typography>
        )}

        <Stack direction="row" alignItems="center" spacing={1} mb={1}>
          {user.profile_image?.small && (
            <Avatar
              src={user.profile_image.small}
              alt={user.name}
              sx={{ width: 32, height: 32 }}
            />
          )}
          <Typography variant="body1">
            <Link
              href={user.links.html}
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
            >
              {user.name}
            </Link>
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1} mt={1}>
          <FavoriteIcon color="error" fontSize="small" />
          <Typography variant="body1">{likes || 0}</Typography>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;






