import React from "react";
import styled from "styled-components";

import face from "./Assests/facebook.svg";
import act from "./Assests/act.svg";
import jica from "./Assests/jica.svg";
import hay from "./Assests/haycon.svg";
import ggf from "./Assests/ggf.svg";
import mit from "./Assests/mit.svg";
import uni from "./Assests/uni.svg";
import ama from "./Assests/amazon.svg";
import un from "./Assests/unleash.svg";
import micro from "./Assests/microsoft.svg";

const Icons = () => {
  return (
    <div>
      <Container>
        <Holder>
          <Text>Our Social Growth is Supported by our funders.</Text>
          <Icon src={face} />
          <Icon src={act} />
          <Icon src={jica} />
          <Icon src={hay} />
          <Icon src={ggf} />
          <Icon src={mit} />
          <Icon src={uni} />
          <Icon src={ama} />
          <Icon src={un} />
          <Icon src={micro} />
        </Holder>
      </Container>
    </div>
  );
};

export default Icons;

const Container = styled.div`
  width: 100%;
  height: 300px;
  /* background-color: cadetblue; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Holder = styled.div`
  width: 80%;
  height: 300px;
  /* background-color: red; */
`;

const Text = styled.h1`
  font-family: monospace;
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
`;
const Icon = styled.img`
  width: 200px;
  height: 30px;
  margin-bottom: 50px;
  /* padding: 5px 10px; */
  /* background-color: red; */
`;
