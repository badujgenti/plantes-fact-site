import Hamburger from "../assets/icon-hamburger.svg";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderDiv>
      <H1>THE PLANETS</H1>
      <img style={{ height: "17px", width: "24px" }} src={Hamburger} alt="" />
    </HeaderDiv>
  );
};

export default Header;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const H1 = styled.h1`
  font-family: "Antonio", sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -1px;

  color: white;
`;
