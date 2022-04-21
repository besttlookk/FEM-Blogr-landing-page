import React from "react";
import styled from "styled-components";
import media from "../styles/media";
import { Button } from "../styles/shared";

const Section = styled.section`
  background-image: url(/bg-pattern-intro-mobile.svg), var(--grad-red-sm);
  background-position: 34% 32%, center;
  background-repeat: no-repeat;
  min-height: 70vh;
  border-bottom-left-radius: 12rem;
  padding-inline: 2.4rem;
  text-align: center;
  color: var(--col-light);
  padding-top: 18rem;

  ${media.tablet} {
    background-image: url(/bg-pattern-intro-desktop.svg), var(--grad-red);

    padding-top: 16rem;
  }

  ${media.laptop} {
    min-height: 60vh;
    /* background-size: 150%, auto; */
    background-position: center;
  }
`;

const Heading = styled.h1`
  font-size: 3.2rem;
  line-height: 1.4;
  color: var(--col-light);

  span {
    display: block;
  }

  ${media.tablet} {
    font-size: 5.6rem;
  }

  ${media.laptop} {
    span {
      display: inline;
    }
  }
`;

const Paragraph = styled.p`
  margin-top: 2rem;
  font-size: 1.6rem;
  color: var(--col-light);

  ${media.tablet} {
    font-size: 2rem;
  }

  ${media.laptop} {
    font-size: 2.4rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  margin-top: 5rem;

  ${media.tablet} {
    gap: 2rem;
  }

  ${media.tablet} {
    gap: 2.4rem;
  }
`;

const PrimaryCTA = styled(Button)`
  background-color: var(--col-light);
  color: var(--col-primary);

  &:hover {
    background-color: var(--col-primary-light);
    color: var(--col-light);
    border-color: var(--col-primary-light);
  }
`;

const SecondaryCTA = styled(Button)`
  color: var(--col-light);
  background-color: transparent;

  &:hover {
    background-color: var(--col-light);
    color: var(--col-primary);
  }
`;
const HeroSection = () => {
  return (
    <Section>
      <Heading>
        A modern <span>publishing platform</span>
      </Heading>
      <Paragraph>Grow your audience and build your online brand</Paragraph>
      <Buttons>
        <PrimaryCTA>Start for Free</PrimaryCTA>
        <SecondaryCTA>Learn More</SecondaryCTA>
      </Buttons>
    </Section>
  );
};

export default HeroSection;
