import styled from "styled-components";
import media from "./media";

export const SectionShared = styled.section`
  text-align: center;
  padding-block: 10rem 24rem;

  ${media.tablet} {
    position: relative;
    overflow: hidden;
  }
`;

export const DeesktopImageWrapperShared = styled.div`
  display: none;

  ${media.tablet} {
    position: absolute;
    display: block;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 100%;
  }
`;

export const ImageWrapperShared = styled.div`
  position: relative;
  margin-inline: auto;
  width: 100%;
  height: 400px;
  overflow: hidden;

  ${media.mobile} {
    margin-block: 5rem;
  }

  ${media.tablet} {
    display: none;
  }
`;

export const ContentWrapperShared = styled.div`
  ${media.tablet} {
    margin-top: 8rem;
    width: 50%;
  }
`;

export const Button = styled.button`
  transition: all 0.5s;

  border: 2px solid var(--col-light);
  border-radius: 100px;
  font-size: 1.6rem;
  font-family: var(--font-secondary);
  font-weight: 700;
  padding: 1.3rem 2rem;
  cursor: pointer;

  ${media.laptop} {
    font-size: 1.8rem;
    padding: 1.5rem 2.4rem;
  }
`;

export const Wrapper = styled.div`
  width: 95vw;
  max-width: 128rem;
  margin: 0 auto;
  padding-inline: 2.4rem;
`;

export const Content = styled.div`
  padding: 0 1.6rem;
  margin-bottom: 4rem;

  ${media.tablet} {
    text-align: left;
    margin-bottom: 5rem;
  }
`;

export const SubHeading = styled.h3`
  margin-bottom: 2rem;

  span {
    display: block;
  }

  ${media.tablet} {
    margin-bottom: 2.4rem;

    span {
      display: inline;
    }
  }
`;
