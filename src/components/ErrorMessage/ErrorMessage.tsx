import { Typography } from '@mui/material';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <Typography
      variant="body2"
      color="error"
      sx={{
        marginTop: 2,
        padding: 1,
        borderRadius: 1,
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
      }}
    >
      {message}
    </Typography>
  );
};

export default ErrorMessage;



