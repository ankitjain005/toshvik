import React from "react";
import styled, { useTheme } from "styled-components";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const FooterContainer = styled.footer`
  background: ${({ theme }) =>
    theme.mode === "light" ? "#ffffff" : "#000000"}; // 💡 Full black in dark mode
  color: ${({ theme }) => theme.text};
  text-align: center;
  padding: 2rem 0;
  margin-top: auto;
  transition: background 0.3s ease, color 0.3s ease;

  p {
    margin: 0.4rem 0;
    font-size: 0.9rem;
  }

  a {
    color: ${({ theme }) => theme.link};
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    margin: 0 0.4rem;
    font-size: 1.1rem;

    &:hover {
      color: ${({ theme }) => theme.linkHover};
    }
  }

  .icon-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem; /* ⬅️ Slight margin only */
    margin-bottom: 1rem; /* ⬅️ Reduce space before logo */
    
    a {
      font-size: 1.7rem;
    }
  }

  .certification-combined {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;

    img {
      height: 60px;
      width: auto;
      object-fit: contain;
      transition: filter 0.3s ease;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem 0;

    p {
      font-size: 0.8rem;
    }

    .icon-links a {
      font-size: 1.1rem;
    }

    .certification-combined img {
      height: 45px;
    }
  }
`;

const Footer = () => {
  const theme = useTheme();
  const isLight = theme.mode === "light";

  const certificationLogo = isLight
    ? "/assets/images/certifications/combined-light.jpg"
    : "/assets/images/certifications/combined-dark.jpg";

  return (
    <FooterContainer>
      <div className="container">
        <p>Follow us on below social media platforms for regular update</p>

        <div className="icon-links">
          <a
            href="https://www.facebook.com/share/19QtJPP98s/?mibextid=qi2Omg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/toshviks/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/Toshvik_aata?t=hcSzSmqKu8DRxHHcexiVzA&s=09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter/X"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.youtube.com/@Toshvik"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.linkedin.com/in/toshvik-aata-053045371"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="certification-combined">
          <img
            src={certificationLogo}
            alt="FSSAI, ISO 9001:2015, HACCP Certified"
          />
        </div>
      </div>

      <p>© {new Date().getFullYear()} Toshvik Atta. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
