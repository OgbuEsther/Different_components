import React from "react";
import styled from "styled-components";

interface Idata {
  title: string;
  subTitle: string;
  img: any;
}
const CardProps: React.FC<Idata> = ({ title, subTitle, img }) => {
  return (
    <div>
      <Container>
        <Holder>
          <One>
            <Img src={img} />
          </One>
          <Two>
            <Write>{title}</Write>
            <Write2>
              <HoldText>{subTitle}</HoldText>
            </Write2>
          </Two>
        </Holder>
      </Container>
    </div>
  );
};

export default CardProps;

const Container = styled.div``;

const Holder = styled.div`
  width: 380px;
  height: 450px;
  border-radius: 10px;

  /* background-color: rebeccapurple; */
`;

const One = styled.div`
  width: 100%;
  height: 60%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Two = styled.div`
  width: 100%;
  height: 40%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  background-color: white;
`;

const Img = styled.img``;

const Write = styled.div`
  font-size: 25px;
  margin-bottom: 20px;
  font-weight: bold;
  color: blue;
  text-align: center;
`;

const Write2 = styled.div`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HoldText = styled.div`
  width: 80%;
  height: 100%;
  /* background-color: indigo; */
`;
