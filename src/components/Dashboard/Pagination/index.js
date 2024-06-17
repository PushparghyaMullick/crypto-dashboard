import React,{useState} from 'react';
import Pagination from '@mui/material/Pagination';
import './styles.css';

export default function PaginationComponent({ onPageChange }) {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    onPageChange(value);
  };

  return (
    <div>
      <Pagination count={10} page={page} onChange={handleChange}
        sx={{
            color: "var(--white)",
            "& .Mui-selected": {
                backgroundColor: "var(--blue) !important",
                color: "var(--white) !important",
                borderColor: "var(--blue) !important",
            },
            "& .MuiPaginationItem-ellipsis": {
                border: "0px solid var(--grey) !important",
            },
            "& .MuiPaginationItem-text": {
                color: "var(--white)",
                border: "1px solid var(--grey)",
            },
        }} className='pagination-component'/>
    </div>
  );
}
