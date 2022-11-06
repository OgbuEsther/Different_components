import React from "react";
import styled from "styled-components";
import CardProps from "./CardProps";
import pic from "./Assests/uiux.png";
import pic1 from "./Assests/web.png";
import pic2 from "./Assests/app.png";

const Props_Kids = () => {
  return (
    <div>
      <Container>
        <Holder>
          <Text>The Training Programmes</Text>
          <PropsHold>
            <CardProps
              title="UI/UX Design"
              subTitle="Our Instructor-led and hands-on training model helps you learn a combination of the art and science of tech product design with emphasis on solving business cases."
              img={pic}
            />
            <CardProps
              title="Web Development"
              subTitle="Build the capacity to build projects with an interesting portfolio as a web developer with a coaching program that focuses on fundamentals of HTML, CSS, JavaScript."
              img={pic1}
            />
            <CardProps
              title="App Development"
              subTitle="Our Instructor-led and hands-on training model helps you learn how to build mobile applications from scratch using tools such as Android Studio to build android apps."
              img={pic2}
            />
          </PropsHold>
        </Holder>
      </Container>
    </div>
  );
};

export default Props_Kids;

const PropsHold = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  /* background-color: black; */
  justify-content: space-between;
`;

const Container = styled.div`
  height: 500px;
  /* background-color: aqua; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
`;

const Holder = styled.div`
  width: 90%;
  height: 500px;
  background-color: white;
`;

const Text = styled.h1`
  color: blue;
  text-align: center;
  font-weight: bold;
`;
