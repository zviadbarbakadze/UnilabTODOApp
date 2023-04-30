import React from "react";
import styled from "styled-components";
import element from "../assets/Group 3.svg";
import { useNavigate } from "react-router-dom";

export default function GetStarted() {
  const navigate = useNavigate();
  return (
    <Container>
      <Image src={element} alt="element" />
      <Text>Keep Track Of Daily Tasks In Life</Text>
      <Button onClick={() => navigate("signin")}>Get Started</Button>
    </Container>
  );
}
const Container = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
`;
const Image = styled.img``;
const Text = styled.h1`
  font-size: 54px;
  color: #ffffff;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
const Button = styled.button`
  width: 388px;
  height: 98px;
  background-color: #5efc8d;
  border-radius: 4px;
  border: none;
  font-size: 48px;
  padding: 16px 48px;
  cursor: pointer;
  :hover {
    background-color: #329632;
  }
  @media (max-width: 768px) {
    width: 60%;
    font-size: 40px;
    padding: 6px 20px;
  }
  @media (max-width: 500px) {
    width: 60%;
    font-size: 20px;
    padding: 6px 20px;
  }
`;
