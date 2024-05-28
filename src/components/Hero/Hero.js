import React from "react";
import styled from "styled-components/macro";

const HERO_IMG = "/images/hero-img";

const Hero = () => {
  return (
    <Wrapper>
      <picture>
        <source
          type="image/avif"
          srcset={`
                  ${HERO_IMG}.avif 1x,
                  ${HERO_IMG}@2x.avif 2x,
                  ${HERO_IMG}@3x.avif 3x
                `}
        />
        <source
          type="image/jpg"
          srcset={`
                  ${HERO_IMG}.jpg 1x,
                  ${HERO_IMG}@2x.jpg 2x,
                  ${HERO_IMG}@3x.jpg 3x
                `}
        />
        <HeroImage src="/images/hero-img.jpg" alt="Big Hero Image" />
      </picture>

      <Swoop src="/swoop.svg" alt="Swoop effect" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`;

const HeroImage = styled.img`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;
