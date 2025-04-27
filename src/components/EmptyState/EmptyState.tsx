import { Box, Typography } from '@mui/material';

const EmptyState: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="200px"
      textAlign="center"
    >
      <Typography variant="h6" color="text.secondary">
        No results found. Please try searching again.
      </Typography>
    </Box>
  );
};

export default EmptyState;

