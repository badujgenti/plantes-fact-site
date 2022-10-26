import styled from "styled-components";
import data from "../data.json";
import { Link } from "react-router-dom";

const Menu = ({ isAbsolute, setNavbarOpen, forLargeScreen }) => {
  const LinkClick = () => {
    setNavbarOpen(false);
  };

  return (
    <List isAbsolute={isAbsolute} forLargeScreen={forLargeScreen}>
      {data.map((planet) => (
        <NavDiv onClick={LinkClick}>
          <Linkz to={`planet/${planet.name}`} key={planet.name}>
            <OneLine>
              <Circle color={planet.color} />
              <Name> {planet.name.toUpperCase()} </Name>
              <Svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
                <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
              </Svg>
            </OneLine>
            <Line />
          </Linkz>
        </NavDiv>
      ))}
    </List>
  );
};

export default Menu;

const Circle = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const NavDiv = styled.div`
  height: 25px;
  width: 319px;
`;

const Name = styled.span`
  font-family: "Spartan", sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1.3636363744735718px;
  text-align: center;
  color: white;
  margin-right: auto;
  margin-left: 25px;
`;

const OneLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Line = styled.hr`
  background: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.1;
  margin-bottom: 20px;
`;

const Linkz = styled(Link)`
  text-decoration: none;
`;

const List = styled.ul`
  padding-top: 44px;
  position: ${(props) => (props.isAbsolute ? "absolute" : "static")};
  display: ${(props) => props.forLargeScreen && "none"};

  @media screen and (min-width: 768px) {
    display: flex;
    padding-top: 0px;
  }
`;

const Svg = styled.svg`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
