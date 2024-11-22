// src/assets/Carousel.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled, { keyframes } from 'styled-components';
import imagen1 from '../assets/Imagen1.0.jpg';
import imagen2 from '../assets/Imagen2.jpg';
import imagen3 from '../assets/Imagen3.jpg';

const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-top: 60px; // Espacio para el navbar si es necesario
`;

const CarouselContainer = styled.div`
  width: 100%;
  aspect-ratio: 16/9; // Mantiene una proporción específica
  max-height: calc(100vh - 60px);
  position: relative;
  overflow: hidden;

  .slick-slider {
    width: 100%;
    height: 100%;
  }

  .slick-list {
    width: 100%;
    height: 100%;
  }

  .slick-track {
    height: 100%;
    display: flex;
  }

  .slick-slide {
    height: 100%;
    > div {
      height: 100%;
    }
  }

  .slick-dots {
    bottom: 25px;
    z-index: 2;
    li button:before {
      color: white;
      font-size: 12px;
    }
  }
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex !important;
  justify-content: center;
  align-items: center;
`;

const zoomAnimation = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain; // Cambiado a contain para evitar recortes
  display: block;
  animation: ${zoomAnimation} 10s ease infinite alternate;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }

  &.slick-prev {
    left: 20px;
  }

  &.slick-next {
    right: 20px;
  }
`;

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    prevArrow: <ArrowButton className="slick-prev">&#8592;</ArrowButton>,
    nextArrow: <ArrowButton className="slick-next">&#8594;</ArrowButton>,
  };

  return (
    <CarouselWrapper>
      <CarouselContainer>
        <Slider {...settings}>
          <Slide>
            <Image src={imagen1} alt="Imagen 1" />
          </Slide>
          <Slide>
            <Image src={imagen2} alt="Imagen 2" />
          </Slide>
          <Slide>
            <Image src={imagen3} alt="Imagen 2" />
          </Slide>
        </Slider>
      </CarouselContainer>
    </CarouselWrapper>
  );
};

export default Carousel;