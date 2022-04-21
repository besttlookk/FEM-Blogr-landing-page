import React, { useRef } from "react";
import styled from "styled-components";
import media from "../styles/media";
import CompanyList from "./CompanyList";
import ConnectList from "./ConnectList";
import NavItem from "./NavItem";
import ProductList from "./ProductList";

const ListEl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  ${media.tablet} {
    flex-direction: row;
    gap: 1.6rem;
  }
`;

const NavList = () => {
  const productRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const connectRef = useRef<HTMLInputElement>(null);
  return (
    <ListEl>
      <NavItem label="Product" customRef={productRef}>
        <ProductList />
      </NavItem>
      <NavItem label="Company" customRef={companyRef}>
        <CompanyList />
      </NavItem>
      <NavItem label="Connect" customRef={connectRef}>
        <ConnectList />
      </NavItem>
    </ListEl>
  );
};

export default NavList;
