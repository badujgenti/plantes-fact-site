import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../data.json";

export default function Planet({ navbarOpen }) {
  const { planet } = useParams();

  const [type, setType] = useState("overview"); //ვინახავ თაიფს სთეითად, თავიდან უნდა იყოს ოვერვიუ

  const dataPlanet = data.find((item) => item.name === planet);
  console.log(dataPlanet.images.geology);
  // return stops rendering div
  if (navbarOpen) {
    return;
  }

  return (
    <MainDiv>
      <Header>
        <HeaderText
          onClick={() => setType("overview")}
          color={dataPlanet.color}
        >
          {" "}
          OVERVIEW
        </HeaderText>
        <HeaderText
          onClick={() => setType("structure")}
          color={dataPlanet.color}
        >
          {/* სეთთაიფი ცვლის პირველ თაიფს კლიკისას */}
          STRUCTURE
        </HeaderText>
        <HeaderText onClick={() => setType("geology")} color={dataPlanet.color}>
          SURFACE
        </HeaderText>
      </Header>
      <Line />
      <ImgAndInfo>
        <PlanetImg
          src={process.env.PUBLIC_URL + dataPlanet.images.internal}
          alt="planet pic "
        />
        <FlexDiv>
          <LeftInfo>
            <Name>{planet.toUpperCase()}</Name>
            <Text>{dataPlanet[type].content}</Text>{" "}
            {/* თაიფს იცვლება სეთთაიფის მიხედვით  */}
            <Wiki>
              Source:{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href={dataPlanet[type].source}
              >
                Wikipedia
              </a>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                <path
                  fill="#FFF"
                  d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
                  opacity=".5"
                />
              </svg>
            </Wiki>
          </LeftInfo>
          <Options>
            <HeaderText
              onClick={() => setType("overview")}
              color={dataPlanet.color}
            >
              {" "}
              OVERVIEW
            </HeaderText>
            <HeaderText
              onClick={() => setType("structure")}
              color={dataPlanet.color}
            >
              {/* სეთთაიფი ცვლის პირველ თაიფს კლიკისას */}
              STRUCTURE
            </HeaderText>
            <HeaderText
              onClick={() => setType("geology")}
              color={dataPlanet.color}
            >
              SURFACE
            </HeaderText>
          </Options>
        </FlexDiv>
      </ImgAndInfo>
      <LastBoxes>
        <TimeInfo>
          <p>ROTATION TIME</p>
          <Days>{dataPlanet.rotation.toUpperCase()}</Days>
        </TimeInfo>
        <TimeInfo>
          <p>REVOLUTION TIME</p>
          <Days>{dataPlanet.revolution.toUpperCase()}</Days>
        </TimeInfo>
        <TimeInfo>
          <p>RADIUS</p>
          <Days>{dataPlanet.radius.toUpperCase()}</Days>
        </TimeInfo>
        <TimeInfo>
          <p>AVERAGE TEMP.</p>
          <Days>{dataPlanet.temperature.toUpperCase()}</Days>
        </TimeInfo>
      </LastBoxes>
    </MainDiv>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const HeaderText = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  mix-blend-mode: normal;
  opacity: 0.5;
  font-family: "Spartan", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 9px;
  line-height: 10px;
  border-bottom: 4px solid transparent;
  cursor: pointer;

  &&:hover {
    border-bottom: 4px solid ${(props) => props.color};
    color: white;
    opacity: 1;
  }
  @media screen and (min-width: 768px) {
    height: 40px;
    width: 281px;
    left: 0px;
    top: 0px;
    border-radius: 0px;
    mix-blend-mode: normal;
    opacity: 0.2;
    border: 1px solid #ffffff;
    cursor: pointer;
    &&:hover {
      background-color: ${(props) => props.color};
    }
  }
  @media screen and (min-width: 768px) {
    height: 48px;
    width: 350px;
    font-size: 12px;
  }
  @media screen and (min-width: 768px) {
    &&:hover {
      background-color: ${(props) => props.color};
    }
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

const Name = styled.h1`
  font-family: "Antonio", sans-serif;
  font-size: 40px;
  font-weight: 400;
  line-height: 52px;
  letter-spacing: 0px;
  text-align: center;
  color: white;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 80px;
    margin-bottom: 23px;
  }
`;

const Text = styled.p`
  font-family: "Spartan", sans-serif;
  font-size: 11px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  color: #ffffff;
  opacity: 0.5;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
  @media screen and (min-width: 1000px) {
    font-size: 14px;
    margin-bottom: 24px;
    margin-top: 24px;
  }
`;

const Wiki = styled.p`
  font-family: "Spartan", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
  text-align: center;
  margin-bottom: 28px;

  a {
    font-family: "Spartan", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: left;
    color: #ffffff;

    mix-blend-mode: normal;
    opacity: 0.5;
  }
`;

const TimeInfo = styled.div`
  height: 48px;
  width: 327px;
  left: 24px;
  top: 687px;
  border-radius: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);

  margin-bottom: 8px;

  p {
    font-family: "Spartan", sans-serif;
    font-size: 8px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.7272727489471436px;
    text-align: left;
    color: white;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
  @media screen and (min-width: 768px) {
    height: 88px;
    width: 164px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    align-items: flex-start;
  }
  @media screen and (min-width: 1000px) {
    height: 128px;
    width: 255px;
    padding: 23px;
  }
`;
const Days = styled.h1`
  font-family: "Antonio", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.75px;
  text-align: right;
  color: white;
  @media screen and (min-width: 1000px) {
    font-size: 40px;
  }
`;

const PlanetImg = styled.img`
  height: 150px;
  width: 150px;
  margin: 75px auto;
  display: block;
  @media screen and (min-width: 768px) {
    height: 369px;
    width: 369px;
  }
  @media screen and (min-width: 1000px) {
  }
`;

const LeftInfo = styled.div`
  @media screen and (min-width: 768px) {
    height: 253px;
    width: 339px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LastBoxes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: row;

    gap: 11px;
  }
  @media screen and (min-width: 1000px) {
    margin-top: 50px;
    flex-direction: row;
  }
`;

const MainDiv = styled.div`
  @media screen and (min-width: 1000px) {
    padding-top: 126px;
    padding-left: 165px;
    padding-right: 165px;
    padding-bottom: 56px;
  }
`;

const ImgAndInfo = styled.div`
  @media screen and (min-width: 1000px) {
    display: flex;
    gap: 100px;
  }
`;

const Options = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 1000px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`;

const FlexDiv = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  @media screen and (min-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;
