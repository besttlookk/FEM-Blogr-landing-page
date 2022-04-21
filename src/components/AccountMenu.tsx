import React from "react";
import styled from "styled-components";
import media from "../styles/media";

const LoginEl = styled.a`
  color: var(--col-darkgray);

  &:hover {
    color: var(--col-dark);
  }

  ${media.tablet} {
    color: var(--col-light);
  }
`;

const SignUpEl = styled.a`
  padding: 1rem 3rem;
  border-radius: 100px;
  border: none;
  background-image: var(--grad-red);
  color: white;
  transition: all 0.5s;

  &:hover {
    opacity: 0.8;
  }

  ${media.tablet} {
    background-image: none;
    background-color: var(--col-light);
    color: var(--col-primary);

    &:hover {
      opacity: 1;
      background-color: var(--col-primary-light);
      color: var(--col-light);
    }
  }
`;

const AccountMenu = () => {
  return (
    <>
      <LoginEl href="#">Login</LoginEl>
      <SignUpEl href="#">Sign Up</SignUpEl>
    </>
  );
};

export default AccountMenu;
