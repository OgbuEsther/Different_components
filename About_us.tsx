import React from "react";
import styled from "styled-components";
import Pic1 from "./Assests/beauty.webp";
import Pic2 from "./Assests/coffee.webp";

const About_us = () => {
  return (
    <div>
      <Container>
        <Text>Our Numbers</Text>
        <Holder>
          <Div1>
            <h1>30k+</h1>
            <p>
              Students <br /> Trained
            </p>
          </Div1>
          <Div2>
            <Img1 src={Pic1} />
          </Div2>
          <Div3>
            <h1>85%</h1>
            <p>
              Hiring rate of <br /> Utiva Learners
            </p>
          </Div3>
          <Div4>
            <Img1 src={Pic2} />
          </Div4>
          <Div5>
            <Img1 src={Pic1} />
          </Div5>
          <Div6>
            <h1>10</h1>
            <p>
              Learning <br /> Programs
            </p>
          </Div6>
          <Div7>
            <Img1 src={Pic2} />
          </Div7>
          <Div8>
            <h1>30</h1>
            <p>Countries</p>
          </Div8>
        </Holder>
      </Container>
    </div>
  );
};

export default About_us;

const Container = styled.div`
  width: 100%;
  height: 300px;
  /* background-color: brown; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  flex-direction: column;
`;

const Holder = styled.div`
  width: 80%;
  /* height: 300px; */
  /* background-color: chartreuse; */

  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Text = styled.h1`
  color: blue;
  text-align: center;
`;

const Div1 = styled.div`
  background-color: gray;

  h1 {
    font-weight: bold;
    font-size: 70px;
    margin-left: 20px;
  }

  p {
    margin-left: 20px;
    font-size: 20px;
  }
`;

const Div2 = styled.div`
  background-color: yellow;
`;

const Div3 = styled.div`
  background-color: green;

  h1 {
    font-weight: bold;
    font-size: 70px;
    margin-left: 20px;
  }

  p {
    margin-left: 20px;
    font-size: 20px;
  }
`;

const Div4 = styled.div`
  background-color: violet;
`;

const Div5 = styled.div`
  background-color: thistle;
`;

const Div6 = styled.div`
  background-color: orchid;

  h1 {
    font-weight: bold;
    font-size: 70px;
    margin-left: 20px;
  }

  p {
    margin-left: 20px;
    font-size: 20px;
  }
`;

const Div7 = styled.div`
  background-color: teal;
`;

const Div8 = styled.div`
  background-color: orange;

  h1 {
    font-weight: bold;
    font-size: 70px;
    margin-left: 20px;
  }

  p {
    margin-left: 20px;
    font-size: 20px;
  }
`;

const Img1 = styled.img`
  width: 100%;
  height: 100%;
`;
