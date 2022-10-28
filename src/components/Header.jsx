import Hamburger from "../assets/icon-hamburger.svg";
import styled from "styled-components";
import { useRef, useState } from "react";
import Menu from "./Menu";

const Header = ({ setNavbarOpen, navbarOpen }) => {
  const openMenu = () => {
    setNavbarOpen(true);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <ForLargeScreen>
        <HeaderDiv>
          <H1>THE PLANETS</H1>
          <Burger onClick={openMenu} src={Hamburger} alt="" />
        </HeaderDiv>
        <Menu forLargeScreen />
      </ForLargeScreen>
      <Line />
      {navbarOpen && <Menu isAbsolute setNavbarOpen={setNavbarOpen} />}
    </>
  );
};

export default Header;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 17px;
  @media screen and (min-width: 1000px) {
    padding-top: 10px;
  }
`;

const H1 = styled.h1`
  font-family: "Antonio", sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -1px;

  color: white;
  @media screen and (min-width: 768px) {
    margin: auto;
  }
`;

const Line = styled.hr`
  background: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.2;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Burger = styled.img`
  height: 17px;
  width: 24px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const ForLargeScreen = styled.div`
  @media screen and (min-width: 1000px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
