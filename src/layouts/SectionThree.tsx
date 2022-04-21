import Image from "next/image";
import React from "react";
import styled from "styled-components";
import {
  Content,
  ContentWrapperShared,
  DeesktopImageWrapperShared,
  ImageWrapperShared,
  SectionShared,
  SubHeading,
  Wrapper,
} from "../styles/shared";
import media from "../styles/media";

const Section = styled(SectionShared)``;
const DeesktopImageWrapper = styled(DeesktopImageWrapperShared)`
  ${media.tablet} {
    right: 50%;
  }

  ${media.laptop} {
    right: 40%;
  }
`;
const SectionWrapper = styled(Wrapper)``;

const ImageWrapper = styled(ImageWrapperShared)`
  ${media.mobile} {
    margin-block: 0 5rem;
  }
`;

const ContentWrapper = styled(ContentWrapperShared)`
  ${media.tablet} {
    margin-left: auto;
    padding-top: 10rem;
  }
`;
const SectionThree = () => {
  return (
    <Section>
      <DeesktopImageWrapper>
        <Image
          alt="editor illustration"
          src="/illustration-laptop-desktop.svg"
          layout="fill"
          objectFit="contain"
        />
      </DeesktopImageWrapper>
      <SectionWrapper>
        <ImageWrapper>
          <Image
            alt="editor illustration"
            src="/illustration-laptop-mobile.svg"
            layout="fill"
            objectFit="contain"
          />
        </ImageWrapper>
        <ContentWrapper>
          <Content>
            <SubHeading>Free, open, simple</SubHeading>
            <p>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </Content>

          <Content>
            <SubHeading>Powerful tooling</SubHeading>
            <p>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </Content>
        </ContentWrapper>
      </SectionWrapper>
    </Section>
  );
};

export default SectionThree;
