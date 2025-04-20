import { Button } from "@mui/material";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types"; 


const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick, disabled }) => {
  return (
    <Button variant="contained" onClick={onClick} disabled={disabled}>
      Load More
    </Button>
  );
};


export default LoadMoreBtn;

