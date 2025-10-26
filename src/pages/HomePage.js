import React from 'react';
import styled, { useTheme,keyframes } from 'styled-components';
import { productsData } from '../data/products';
import ProductCard from '../components/ProductCard';
import HeroSlider from '../components/HeroSlider';


const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px; /* Reasonable spacing between items */
  margin-top: 20px;

  > div {
    animation: ${fadeInUp} 0.5s ease forwards;
    animation-delay: 0.2s;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    > div {
      padding: 16px;
    }
  }

  @media (max-width: 480px) {
    gap: 25px;

    > div {
      padding: 12px;
    }
  }
`;


const Section = styled.section`
  padding: 40px 0;
  background-color: ${({ bg }) => bg || 'transparent'};
  color: ${({ theme }) => theme.text};

  .container {
    max-width: 1100px;
    margin: auto;
    padding: 0 15px;
  }

  h2 {
    text-align: center;
    margin-bottom: 30px;
    font-size: 2rem;
    color: ${({ theme }) => theme.primary || 'var(--primary-color)'};
  }

  p {
    color: ${({ theme }) => theme.text};
  }

  a.btn-secondary {
    display: inline-block;
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.primary || '#007bff'};
    color: ${({ theme }) => theme.buttonText || '#fff'};
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.primaryDark || '#0056b3'};
      color: #fff;
      outline: none;
    }
  }

  @media (max-width: 768px) {
    padding: 30px 0;

    h2 {
      font-size: 1.6rem;
      margin-bottom: 20px;
    }
  }
`;

const HomePage = () => {
  const theme = useTheme();
  const newProducts = productsData.filter(p => p.isNewLaunch).slice(0, 4);

  return (
    <>
      <HeroSlider />

      <Section>
        <div className="container">
          <h2>Newly Launched Products</h2>
          {newProducts.length > 0 ? (
            <ProductsGrid>
              {newProducts.map(product => (
                <ProductCard key={product._id} product={product} />
              ))}
            </ProductsGrid>
          ) : (
            <p className="text-center">No new products to display right now.</p>
          )}
        </div>
      </Section>

      <Section bg={theme.background === '#ffffff' ? '#f0f0f0' : theme.background}>
        <div className="container text-center">
          <h2>Why Choose Toshvik?</h2>
          <p
            style={{
              fontSize: '1.1rem',
              maxWidth: '800px',
              margin: '0 auto 20px auto',
            }}
          >
            At Toshvik, we believe in purity, quality, and the rich heritage of Indian food. Our atta is made from the finest grains, processed with care to retain its natural goodness.
          </p>

          {/* ✅ Centered Button */}
          <div style={{ textAlign: 'center' }}>
            <a href="/about" className="btn btn-secondary">
              Learn More About Us
            </a>
          </div>
        </div>
      </Section>
    </>
  );
};

export default HomePage;
