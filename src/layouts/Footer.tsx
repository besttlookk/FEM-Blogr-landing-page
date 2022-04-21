import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import media from "../styles/media";
import { Wrapper } from "../styles/shared";

const FooterEl = styled.footer`
  position: relative;

  background-color: var(--col-footer-bg);
  border-top-right-radius: 12rem;
`;

const FooterWraper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
  padding: 8rem 6rem;

  ${media.tablet} {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

const FlexItem = styled.div`
  h4 {
    color: var(--col-light);
    font-size: 1.8em;
    font-weight: 700;
    margin-bottom: 2rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    ${media.tablet} {
      align-items: flex-start;
    }
  }

  li {
    font-size: 1.6rem;
    color: var(--col-gray);
    font-weight: 700;
    cursor: pointer;

    &:hover {
      color: var(--col-light);
    }
  }
`;

const Credit = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  display: none;
  text-align: center;

  transform: translateX(-50%);
  font-size: 1.6rem;
  color: var(--col-primary);
  font-weight: 700;

  a {
    color: var(--col-light);
    font-size: 1.6rem;
  }

  ${media.tablet} {
    display: block;
  }
`;

const Footer = () => {
  return (
    <FooterEl>
      <FooterWraper>
        <Logo />
        <FlexItem>
          <h4>Product</h4>
          <ul>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </FlexItem>

        <FlexItem>
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </FlexItem>

        <FlexItem>
          <h4>Connect</h4>
          <ul>
            <li>Contact</li>
            <li>Newsletter</li>
            <li>LinkedIn</li>
          </ul>
        </FlexItem>

        <Credit>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.frontendmentor.io/profile/besttlookk"
            target="_blank"
            rel="noreferrer"
          >
            Prabhash Ranjan
          </a>
          .
        </Credit>
      </FooterWraper>
    </FooterEl>
  );
};

export default Footer;
