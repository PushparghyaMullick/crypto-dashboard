import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './styles.css';

export default function Loader() {
  return (
    <div className='loader-container'>
      <CircularProgress />
    </div>
  );
}
