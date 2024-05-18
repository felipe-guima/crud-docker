import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';

import img1 from './img/image1.jpg';
import img2 from './img/image2.jpg';
import img3 from './img/image3.jpg';
import img4 from './img/image4.jpg';
import img5 from './img/image5.jpg';

const CarosselContainer = styled.div`
  .carousel-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: auto;
  }

  .carousel-image {
    width: 100%;
    object-fit: cover; 
    height: 480px;
  }
`;

// const SetasContainer = styled.div`
//   width: 100px; 
//   display: flex;
//   align-items: center;
//   margin-left: auto;
//   margin-right: auto;
//   font-size: 25px;
// `;

function Carousel(){
  const [currentImage, setCurrentImage] = useState(0);

  const images = useMemo(() => [img1, img2, img3, img4, img5], []); // useMemo para memoizar o array de imagens

  useEffect(() => {
    const nextImage = () => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    const intervalId = setInterval(nextImage, 7000);

    return () => clearInterval(intervalId);
  }, [images]); // Dependência atualizada para incluir o array de imagens

  return (
    <CarosselContainer>
      <img src={images[currentImage]} alt={`Images ${currentImage + 1}`} className="carousel-image" />

      {/* <SetasContainer>
        <div onClick={prevImage}>&#9665;</div>
        <div onClick={nextImage}>&#9655;</div>
      </SetasContainer> */}
    </CarosselContainer>
  );
};

export default Carousel;
