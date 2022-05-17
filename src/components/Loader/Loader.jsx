import React from 'react';
import './Loader.css';

// Components
import BounceLoader from 'react-spinners/BounceLoader';

const Loader = () => {
  return (
    <div className='loader-container'>
      <p>Espere un momento, estamos analizando su código...</p>
      <BounceLoader color={'#8884FF'} size={150} />
    </div>
  );
};

export default Loader;
