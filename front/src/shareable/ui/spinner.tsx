import React from 'react';
import loader from './loader.gif';

export const Spinner = () => {
  return (
    <div className="spinner">
      <img src={loader} alt="loader" />
    </div>
  );
};