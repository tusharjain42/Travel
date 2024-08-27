import React from 'react';
import ReactLoading from 'react-loading';

interface reactLoader {
  type: string;  
  color: string; 
}


const Loader: React.FC<reactLoader> = () => (
    <ReactLoading type="spin" color="#219ebc" height={40} width={40} />
);

export default Loader;
