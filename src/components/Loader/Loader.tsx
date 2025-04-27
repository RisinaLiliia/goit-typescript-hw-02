import { ClipLoader } from 'react-spinners';
import { Box } from '@mui/material';
import { LoaderProps } from './Loader.types';

const Loader: React.FC<LoaderProps> = ({ color = '#ff6600' }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="150px"
    >
      <ClipLoader size={50} color={color} />
    </Box>
  );
};

export default Loader;


