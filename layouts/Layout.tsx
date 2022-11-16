import styled from 'styled-components';
import React, { FC, ReactElement } from 'react';

const Container = styled.div`
  position: relative;
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
`;

const NavBtn = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  background-color: rgba(0, 0, 0, 1);
  color: #000000;
  font-size: 2rem;
  border: none;
  transition: font-size 0.3s ease-in-out;

  :hover {
    font-size: 3rem;
    cursor: e-resize;
  }
`;

type Layout = {
  children: ReactElement;
};

export default function Layout({ children }: Layout): JSX.Element {
  const handleNavBtn = () => {};
  return (
    <Container>
      <>
        <NavBtn onClick={handleNavBtn}>🌲</NavBtn>
        {children}
      </>
    </Container>
  );
}
