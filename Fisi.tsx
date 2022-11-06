import React from "react";
import styled from "styled-components";

const Fisi = () => {
  return (
    <div>
      <Container>
        <Holder>
          <Text1>
            Come work with a <br /> highly motivated team
          </Text1>
          <Text2>
            The Utiva masterclass is designed to help you learn from leaders and{" "}
            <br />
            experts in the tech space. We are hiring across over 20 countries{" "}
            <br /> . join our mission to democratize Education
          </Text2>
          <Button>Join Now</Button>
        </Holder>
      </Container>
    </div>
  );
};

export default Fisi;

const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
`;

const Holder = styled.div`
  width: 80%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: rebeccapurple; */
`;

const Text1 = styled.div`
  font-size: 35px;
  font-weight: bold;
  font-family: monospace;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 50px;

  color: white;
`;

const Text2 = styled.div`
  color: white;
  text-align: center;
  margin-bottom: 30px;
`;

const Button = styled.div`
  width: 150px;
  height: 50px;
  background-color: orange;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    margin-top: -5px;
    background-color: #ffa6009e;
  }
`;
