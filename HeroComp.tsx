import React from "react";
import styled from "styled-components";
import Hero from "./Assests/programming-school.webp";
import { AiOutlineDown } from "react-icons/ai";
const HeroComp = () => {
  return (
    <div>
      <Container>
        <Holder>
          <Text_hold>
            <h1>Welcome to Utiva</h1>
            <Div>
              Programming <br /> school Africa
            </Div>
            <p>
              Go from zero knowledge to being able to build your own <br />{" "}
              complete website! Starting with the foundations of software <br />{" "}
              engineering. By the end of this program you would have <br />{" "}
              mastered a specialization and learn the art of effective <br />{" "}
              collaboration to solve real world problems.
            </p>
            <ButtonHold>
              <Icon />
              <Button>
                Africa
                <Icon>
                  <AiOutlineDown />
                </Icon>
              </Button>
            </ButtonHold>
          </Text_hold>

          <Img>
            <Hold src={Hero} />
          </Img>
        </Holder>
      </Container>
    </div>
  );
};

export default HeroComp;

const Container = styled.div`
  width: 100%;
  height: 550px;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Holder = styled.div`
  width: 85%;
  height: 550px;
  /* background-color: aliceblue; */
  margin-top: 50px;
  display: flex;
`;

const Text_hold = styled.div`
  width: 60%;
  height: 450px;
  /* background-color: red; */

  h1 {
    color: gold;
  }

  p {
    font-size: 18px;
    line-height: 30px;
  }
`;

const Img = styled.div`
  width: 40%;
  height: 450px;
  /* background-color: blue; */
`;

const Hold = styled.img`
  width: 100%;
  height: 470px;
  object-fit: contain;
`;

const Div = styled.div`
  color: blue;
  font-size: 70px;
  font-weight: bold;
  font-family: monospace;
`;

const ButtonHold = styled.div``;

const Button = styled.div`
  width: 150px;
  height: 50px;
  /* background-color: rebeccapurple; */
  border-radius: 10px;
  border: 2px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  width: 10px;
  margin-top: 5px;
  font-size: 12px;
  margin-left: 50px;
`;
