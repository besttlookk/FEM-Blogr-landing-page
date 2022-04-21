import React, { useState, useEffect } from "react";
import styled from "styled-components";
import media from "../styles/media";

const ItemEl = styled.li`
  padding: 0 2.4rem;

  ${media.tablet} {
    position: relative;
    padding: 0;
  }
`;

const Label = styled.span`
  transition: all 0.5s;
  font-family: var(--font-secondary);
  font-weight: 500;
  font-size: 1.8rem;
  cursor: pointer;
  color: var(--col-darkgray);

  &::after {
    content: url(/icon-arrow-dark.svg);
    display: inline-block;
    transition: all 0.5s;
    margin-left: 1rem;
  }

  &:hover {
    color: var(--col-dark);
  }

  &.active::after {
    transform: rotate(180deg);
  }

  ${media.tablet} {
    color: var(--col-light);
    &::after {
      content: url(/icon-arrow-light.svg);
    }

    &:hover {
      color: var(--col-light);
    }
  }
`;

const SubMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  padding: 2.4rem 0;
  background-color: hsla(240, 2%, 79%, 0.3);
  margin-top: 1.6rem;
  border-radius: 8px;

  ${media.tablet} {
    position: absolute;
    top: calc(100% + 0.6rem);
    gap: 0rem;
    padding: 1rem 0;
    right: 0;
    align-items: initial;
    background-color: var(--col-light);
    min-width: 16rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const NavItem = ({
  children,
  label,
  customRef,
}: {
  children?: React.ReactNode;
  label: string;
  customRef: React.RefObject<HTMLInputElement>;
}) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  useEffect(() => {
    const handleMousedown = (e: MouseEvent) => {
      if (
        customRef.current &&
        !customRef.current.contains(e.target as HTMLElement)
      ) {
        setIsDropdownActive(false);
      }
    };

    document.addEventListener("mousedown", handleMousedown);

    return () => document.removeEventListener("mousedown", handleMousedown);
  }, [customRef]);

  return (
    <ItemEl>
      <Label
        ref={customRef}
        onClick={() => setIsDropdownActive(!isDropdownActive)}
        className={isDropdownActive ? "active" : ""}
      >
        {label}
      </Label>
      {isDropdownActive && <SubMenu>{children}</SubMenu>}
    </ItemEl>
  );
};

export default NavItem;
