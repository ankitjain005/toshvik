import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

// For YouTube, use the embed URL format: https://www.youtube.com/embed/VIDEO_ID
const slidesData = [
  {
    type: 'image',
    src: '../assets/images/hero1.png',
    alt: 'Fresh Atta Banner',
    title: 'Toshvik Atta',
    subtitle: 'Freshness in Every Grain. The Taste of Tradition.',
    buttonText: 'Explore Products',
    buttonLink: '/products',
  },
  {
    type: 'image',
    src: '../assets/images/hero-banner1.jpg',
    alt: 'Quality Promise',
    title: 'Uncompromised Quality',
    subtitle: 'From farm to your table, purity guaranteed.',
    buttonText: 'Learn More',
    buttonLink: '/about',
  },
  {
    type: 'image',
    src: 'https://www.chefswarehouse.com/siteassets/king-arthur-flour_1440.png?format=jpg&quality=90&w=1140&mode=crop',
    alt: 'Healthy Recipes',
    title: 'Delicious & Healthy',
    subtitle: 'Discover recipes made with Toshvik Atta.',
    buttonText: 'Find Recipes',
    buttonLink: '/recipes',
  },
  {
    type: 'youtube',
    videoId: 'niuSRcuPcgw',
    title: 'Watch Our Story',
    subtitle: 'See how Toshvik Atta is made with care.',
  },
];

const SliderWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 60vh;
  overflow: hidden;
  background-color: #e0e0e0;

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 0.8s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;

  &.image-slide {
    background-size: cover;
    background-position: center;
    color: white;
  }

  &.video-slide {
    background-color: #000;
  }
`;

const SlideImageBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
  }
`;

const SlideContent = styled.div`
  position: relative;
  z-index: 2;
  color: white;

  h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    color: white;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
    font-family: 'Arial Black', Gadget, sans-serif;
  }

  p {
    font-size: 1.4rem;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
    max-width: 600px;
    font-family: 'Georgia', serif;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
    }
    .btn {
      font-size: 0.9rem;
      padding: 8px 16px;
    }
  }
`;

const YouTubeEmbed = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  z-index: 1;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  z-index: 3;
  font-size: 1.5rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }

  &.prev {
    left: 15px;
  }
  &.next {
    right: 15px;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 8px 12px;
    &.prev { left: 10px; }
    &.next { right: 10px; }
  }
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  z-index: 3;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.active ? 'var(--primary-color)' : 'rgba(255, 255, 255, 0.5)'};
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.active ? 'var(--primary-color)' : 'rgba(255, 255, 255, 0.8)'};
  }
`;

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayInterval = 3000;

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === slidesData.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (slidesData[currentSlide].type === 'image') {
      const timer = setTimeout(nextSlide, autoPlayInterval);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, nextSlide]);

  return (
    <SliderWrapper>
      {slidesData.map((slide, index) => (
        <Slide key={index} active={index === currentSlide} className={`${slide.type}-slide`}>
          {slide.type === 'image' && (
            <>
              <SlideImageBackground src={process.env.PUBLIC_URL + slide.src} />
              <SlideContent>
                {slide.title && <h1>{slide.title}</h1>}
                {slide.subtitle && <p>{slide.subtitle}</p>}
                {slide.buttonText && slide.buttonLink && (
                  <a href={slide.buttonLink} className="btn">{slide.buttonText}</a>
                )}
              </SlideContent>
            </>
          )}
          {slide.type === 'youtube' && (
            <>
              <YouTubeEmbed
                src={`https://www.youtube.com/embed/${slide.videoId}?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&showinfo=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <SlideContent style={{ position: 'absolute', bottom: '5%', color: '#ccc' }}>
                {slide.title && <h2 style={{ fontSize: '1.5rem', color: '#ddd' }}>{slide.title}</h2>}
                {slide.subtitle && <p style={{ fontSize: '1rem', color: '#bbb' }}>{slide.subtitle}</p>}
              </SlideContent>
            </>
          )}
        </Slide>
      ))}
      <NavButton className="prev" onClick={prevSlide}>❮</NavButton>
      <NavButton className="next" onClick={nextSlide}>❯</NavButton>
      <DotsContainer>
        {slidesData.map((_, index) => (
          <Dot key={index} active={index === currentSlide} onClick={() => goToSlide(index)} />
        ))}
      </DotsContainer>
    </SliderWrapper>
  );
};

export default HeroSlider;
