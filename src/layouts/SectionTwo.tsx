import Image from "next/image";
import React from "react";
import styled from "styled-components";
import media from "../styles/media";
import { Wrapper } from "../styles/shared";

const Section = styled.section`
  background-image: url(/bg-pattern-circles.svg),
    linear-gradient(45deg, #2c2d3f 30%, #3f4164);
  /* background-position: 34% 32%, center; */
  background-repeat: no-repeat;
  border-bottom-left-radius: 8rem;
  border-top-right-radius: 8rem;

  text-align: center;
  color: var(--col-light);

  ${media.tablet} {
  }

  ${media.laptop} {
    /* background-size: 150%, auto; */
    background-position: center;
  }
`;

const SectionWrapper = styled(Wrapper)`
  position: relative;
  text-align: center;
  padding-block: 20rem 10rem;
  padding-inline: 2.4rem;

  ${media.tablet} {
    text-align: start;
    padding-block: 6rem;
  }
`;

const MobileIllustration = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 400px;

  ${media.tablet} {
    transform: translateY(0);
    width: 50%;
    top: -40px;
  }
`;

const Content = styled.div`
  h2 {
    font-size: 3.2rem;
    color: var(--col-light);
    line-height: 1.4;
    margin-bottom: 2.4rem;

    span {
      display: block;
    }

    ${media.mobile} {
      font-size: 3.6rem;
    }
  }

  p {
    color: var(--col-light);
  }

  ${media.tablet} {
    width: 50%;
    margin-left: auto;

    h2 {
      font-size: 2.4rem;
      margin-bottom: 2rem;

      span {
        display: inline;
      }
    }

    p {
      font-size: 1.5rem;
    }
  }
`;

const SectionTwo = () => {
  return (
    <Section>
      <SectionWrapper>
        <MobileIllustration>
          <Image
            alt="mobile illustration"
            src="/illustration-phones.svg"
            layout="fill"
            objectFit="contain"
          />
        </MobileIllustration>

        <Content>
          <h2>
            {" "}
            State of the Art <span>Infrastructure</span>
          </h2>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </Content>
      </SectionWrapper>
    </Section>
  );
};

export default SectionTwo;
