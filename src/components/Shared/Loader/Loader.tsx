import { FC } from 'react';
import './_Loader.scss';

const Loader:FC = () => {
  return (
    <div className="loader-container">
      <div className="loader-spinner"></div>
    </div>
  );
};

export default Loader;