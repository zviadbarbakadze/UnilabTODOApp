import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import MakeTodoInput from "./MakeTodoInput";

export default function ToDo() {
  return (
    <>
      <Nav />
      <Container>
        <MakeTodoInput />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
