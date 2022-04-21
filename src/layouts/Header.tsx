import React, { useState } from "react";
import styled from "styled-components";
import media from "../styles/media";
import HamburgerIcon from "../images/icon-hamburger.svg";
import CancelIcon from "../images/icon-close.svg";
import MobileNavigation from "./MobileNavigation";
import NavList from "../components/NavList";
import AccountMenu from "../components/AccountMenu";
import { Wrapper } from "../styles/shared";
import Logo from "../components/Logo";

const HeaderEl = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 500;
  transition: 0.7s;

  &.active {
    background-color: var(--col-footer-bg);
  }
`;

const HeaderWrapper = styled(Wrapper)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--height-header);
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  ${media.laptop} {
    gap: 6rem;
  }
`;

const RightSide = styled.div``;

const DesktopNavigation = styled.nav`
  display: none;
  ${media.tablet} {
    display: block;
  }
`;

const HamburgerWrapper = styled.div`
  cursor: pointer;
  ${media.tablet} {
    display: none;
  }
`;

const AccountOptions = styled.div`
  display: none;
  align-items: center;
  gap: 4rem;

  ${media.tablet} {
    display: flex;
  }

  ${media.laptop} {
    gap: 5rem;
  }
`;

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [background, setBackground] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      const scrollY = window.pageYOffset;
      if (scrollY > 200) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    });
  }

  return (
    <HeaderEl className={background ? "active" : ""}>
      <HeaderWrapper>
        <MobileNavigation isMenuActive={isMenuActive} />
        <LeftSide>
          <Logo />

          <DesktopNavigation>
            <NavList />
          </DesktopNavigation>
        </LeftSide>

        <RightSide>
          <AccountOptions>
            <AccountMenu />
          </AccountOptions>
          <HamburgerWrapper>
            {isMenuActive ? (
              <CancelIcon onClick={() => setIsMenuActive(false)} />
            ) : (
              <HamburgerIcon onClick={() => setIsMenuActive(true)} />
            )}
          </HamburgerWrapper>
        </RightSide>
      </HeaderWrapper>
    </HeaderEl>
  );
};

export default Header;
