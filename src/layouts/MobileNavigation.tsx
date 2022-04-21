import React from "react";
import styled from "styled-components";
import AccountMenu from "../components/AccountMenu";
import NavList from "../components/NavList";
import media from "../styles/media";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transform: translateY(-100%);
  transition: all 0.3s;
  border: 1px solid white;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
  background-color: var(--col-light);
  border-radius: 8px;

  &.active {
    top: 100%;
    transform: translateY(0);
  }

  ${media.tablet} {
    display: none;
  }
`;

const NavEl = styled.nav`
  padding: 3.2rem 0;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
`;

const AccountOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3.2rem 0;
`;

const MobileNavigation = ({ isMenuActive }: { isMenuActive: boolean }) => {
  return (
    <Wrapper className={isMenuActive ? "active" : ""}>
      <NavEl>
        <NavList />
      </NavEl>
      <AccountOptions>
        <AccountMenu />
      </AccountOptions>
    </Wrapper>
  );
};

export default MobileNavigation;
