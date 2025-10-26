import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  padding: 3rem 1rem;
  display: flex;
  justify-content: center;
  transition: background-color 0.3s ease, color 0.3s ease;

  .container {
    max-width: 900px;
    background-color: ${({ theme }) => theme.cardBackground};
    padding: 2rem;
    border-radius: 12px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    animation: ${fadeUp} 0.8s ease;
  }

  h1 {
    color: ${({ theme }) => theme.primary};
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    font-weight: 700;
  }

  p {
    line-height: 1.8;
    color: ${({ theme }) => theme.textLight};
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }

  strong {
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
  }

  .mission-vision {
    display: flex;
    gap: 2rem;
    margin: 2rem 0;
    flex-wrap: wrap;
    justify-content: space-between;
    animation: ${fadeUp} 1s ease;
  }

  .mission-vision > div {
    flex: 1;
    min-width: 280px;
    padding: 1.5rem;
    border-left: 6px solid ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.cardSecondaryBackground};
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.cardBoxShadow};

    &:hover {
      transform: translateY(-5px);
      box-shadow: ${({ theme }) => theme.cardBoxShadowHover};
    }
  }

  .mission-vision h3 {
    color: ${({ theme }) => theme.primary};
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    .container {
      padding: 1.5rem;
    }
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 0.95rem;
    }
    .mission-vision {
      flex-direction: column;
      gap: 1.5rem;
    }
  }
`;
const StyledProcessSection = styled.section`
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 5rem 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 15px;
  }

  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-family: 'Merriweather', serif;
    font-weight: 700;
    color: ${({ theme }) => theme.primary};
  }

  p.subtitle {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 2rem auto;
    color: ${({ theme }) => theme.subtitleText};
  }

  .line {
    display: none;
    @media (min-width: 768px) {
      display: block;
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 2px;
      background-color: rgba(244, 143, 177, 0.2);
      transform: translateX(-50%);
      z-index: 0;
    }
  }

  .timeline {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      gap: 2rem;

      &.reverse {
        flex-direction: row-reverse;
      }
    }
  }

  .icon-mobile {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 9999px;
    background-color: ${({ theme }) => theme.stepBackground};
    color: ${({ theme }) => theme.stepText};
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      display: none;
    }
  }

  .icon-desktop {
    display: none;
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 64px;
      height: 64px;
      font-size: 1.5rem;
      font-weight: bold;
      background-color: ${({ theme }) => theme.stepBackground};
      color: ${({ theme }) => theme.stepText};
      border-radius: 9999px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
      z-index: 10;
      margin: 0 auto;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  .text-box {
    flex: 1;
    max-width: 450px;

    h3 {
      font-size: 1.5rem;
      font-family: 'Merriweather', serif;
      font-weight: 700;
      color: ${({ theme }) => theme.primary};
      margin-bottom: 0.5rem;
    }

    p {
      color: ${({ theme }) => theme.subtitleText};
      line-height: 1.6;
    }

    @media (min-width: 768px) {
      text-align: left;
    }
  }
`;

/*

const StyledProcessSection = styled.section`
  background-color: #fff9ed;
  padding: 5rem 1rem;

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 15px;
  }

  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-family: 'Merriweather', serif;
    font-weight: 700;
    color: #6d4c41;
  }

  p.subtitle {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 2rem auto;
    color: #4e342e;
  }

  .line {
    display: none;
    @media (min-width: 768px) {
      display: block;
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 2px;
      background-color: rgba(244, 143, 177, 0.2);
      transform: translateX(-50%);
      z-index: 0;
    }
  }

  .timeline {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      gap: 2rem;

      &.reverse {
        flex-direction: row-reverse;
      }
    }
  }

  .icon-mobile {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 9999px;
    background-color: #fdd835;
    color: #6d4c41;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      display: none;
    }
  }

  .icon-desktop {
    display: none;
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 64px;
      height: 64px;
      font-size: 1.5rem;
      font-weight: bold;
      background-color:rgb(255, 255, 255);
      color: #6d4c41;
      border-radius: 9999px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
      z-index: 10;
      margin: 0 auto;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  .text-box {
    flex: 1;
    max-width: 450px;

    h3 {
      font-size: 1.5rem;
      font-family: 'Merriweather', serif;
      font-weight: 700;
      color: #6d4c41;
      margin-bottom: 0.5rem;
    }

    p {
      color: #4e342e;
      line-height: 1.6;
    }

    @media (min-width: 768px) {
      text-align: left;
    }
  }
`;
*/
const processSteps = [
  {
    step: 1,
    title: 'Grain Selection',
    description: 'We carefully select the finest wheat grains from trusted farmers who follow sustainable farming practices.',
    icon: '🌾',
  },
  {
    step: 2,
    title: 'Cleaning & Sorting',
    description: 'The grains undergo multiple cleaning stages to remove impurities, ensuring only the best quality wheat is processed.',
    icon: '✨',
  },
  {
    step: 3,
    title: 'Traditional Milling',
    description: 'Using a combination of traditional chakki stones and modern technology, we grind the wheat to the perfect texture.',
    icon: '⚙️',
  },
  {
    step: 4,
    title: 'Quality Check',
    description: 'Each batch undergoes rigorous quality testing to ensure it meets our high standards before packaging.',
    icon: '✓',
  },
];

const AboutPage = () => {
  return (
    <>
      <AboutContainer>
        <div className="container">
          <h1>About Toshvik Atta</h1>

          <p>Welcome to  Toshvik Atta , where the legacy of traditional stone chakki meets the precision of modern milling. Every grain of our flour is milled with care—preserving natural nutrients, texture, and taste—ensuring that every meal is both nourishing and delicious.</p>
          <p>At Toshvik,  quality is non-negotiable . Each batch undergoes a rigorous  purity check  before packaging, guaranteeing the highest safety and hygiene standards. We are proudly  ISO certified  and follow globally recognized  HACCP food safety practices .</p>
          <p>Our packaging is designed with your health in mind. We use only  food-grade, hygienic materials  that ensure the flour remains fresh and free from contamination. At Toshvik,  profit is not our sole focus —we are driven by a commitment to safety, nutrition, and the well-being of every family we serve.</p>
          <p> No preservatives. Rich in fiber. Freshly milled.  That’s our promise. We follow a strict practice of delivering only  fresh stock  to ensure that you always receive flour with maximum nutrition, aroma, and softness.</p>
          <p>We are deeply rooted in the fields. With over  35 years of agricultural experience , we work directly with  local farmers  to source our wheat. We provide them with opportunities, training, and support to grow  high-quality wheat using fewer fertilizers . This not only boosts local farming communities but also ensures a healthier product for you.</p>
          <p>Although we entered the market later, we came with one powerful edge— unmatched quality . We’re committed to becoming  India’s No.1 Atta brand , delivering superior flour to every household—regardless of class or location.</p>
          <p>We're also future-focused: our teams are constantly exploring and developing  new product innovations  to meet the evolving needs of modern families. With us, tradition isn't just preserved—it's evolved.</p>

          <div className="mission-vision">
            <div>
              <h3>Our Mission</h3>
              <p>To consistently deliver safe, pure, and high-quality atta through ethical practices, modern technology, and a commitment to excellence—empowering every Indian home to eat better, every day.</p>
            </div>
            <div>
              <h3>Our Vision</h3>
              <p>To become the most loved and trusted atta brand in India, known for blending traditional values with modern innovation and delivering quality without compromise to every class of society.</p>
            </div>
          </div>

          <p> Toshvik Atta  is not just food—it’s our promise of purity, health, and heritage.  The Secret to Wholesome Meals  begins here. Join our journey in redefining quality—grain by grain.</p>
        </div>
      </AboutContainer>

      <StyledProcessSection>
        <div className="container">
          <h2>Our Authentic Process</h2>
          <p className="subtitle">From farm to table, we maintain the highest standards at every step to bring you atta that's not just food, but a tradition of quality and care.</p>

          {/* <div className="line"></div> */}
          <div className="timeline">
            {processSteps.map((step, index) => (
              <div key={step.step} className={`step ${index % 2 !== 0 ? 'reverse' : ''}`}>
                <div className="icon-mobile">{step.step}</div>
                <div className="text-box">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <div className="icon-desktop">{step.icon}</div>
                <div style={{ flex: 1 }}></div>
              </div>
            ))}
          </div>
        </div>
      </StyledProcessSection>
    </>
  );
};

export default AboutPage;