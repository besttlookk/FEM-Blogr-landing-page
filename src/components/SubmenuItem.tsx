import React from "react";
import styled from "styled-components";
import media from "../styles/media";

const ItemEl = styled.li`
  font-family: var(--font-secondary);
  font-family: 500;
  font-size: 1.6rem;
  cursor: pointer;
  color: var(--col-darkgray);

  &:hover {
    color: var(--col-dark);
  }

  ${media.tablet} {
    padding: 1.6rem 2.4rem;

    &:hover {
      background-color: hsla(240, 2%, 79%, 0.3);
    }
  }
`;
const SubmenuItem = ({ children }: { children: string }) => {
  return <ItemEl>{children}</ItemEl>;
};

export default SubmenuItem;
