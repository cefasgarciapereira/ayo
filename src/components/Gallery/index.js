import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import cozinha from '../../images/cozinha.png';
import sala from '../../images/sala.png';
import quarto from '../../images/quarto.png';

const Gallery = () => (
  <Carousel plugins={['arrows']}>
    <img src={'../../images/cozinha.png'} />
    <img src={'../../images/sala.png'} />
    <img src={quarto} />
  </Carousel>
);

export default Gallery;