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
4;

const DeesktopImageWrapper = styled(DeesktopImageWrapperShared)`
  ${media.tablet} {
    left: 50%;
  }

  ${media.laptop} {
    left: 40%;
  }
`;
const SectionWrapper = styled(Wrapper)``;

const ImageWrapper = styled(ImageWrapperShared)``;

const ContentWrapper = styled(ContentWrapperShared)`
  ${media.tablet} {
    margin-right: auto;
    padding-top: 10rem;
  }
`;
const SectionOne = () => {
  return (
    <Section>
      <DeesktopImageWrapper>
        <Image
          alt="editor illustration"
          src="/illustration-editor-desktop.svg"
          layout="fill"
          objectFit="contain"
        />
      </DeesktopImageWrapper>
      <SectionWrapper>
        <h2>Designed for the future</h2>

        <ImageWrapper>
          <Image
            alt="editor illustration"
            src="/illustration-editor-mobile.svg"
            layout="fill"
            objectFit="contain"
          />
        </ImageWrapper>
        <ContentWrapper>
          <Content>
            <SubHeading>
              Introducing an <span>extensible editor</span>{" "}
            </SubHeading>
            <p>
              {" "}
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </Content>

          <Content>
            <SubHeading>
              Robust content <span>management</span>
            </SubHeading>
            <p>
              {" "}
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </Content>
        </ContentWrapper>
      </SectionWrapper>
    </Section>
  );
};

export default SectionOne;
