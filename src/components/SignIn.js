import React from "react";
import styled from "styled-components";
import ImageUploader, { Label } from "./ImageUpLoader";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "./Auth";
import { useContext } from "react";
import { useState } from "react";

export default function SignIn() {
  const [error, setError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { imagePreview, user, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = () => {
    if (user && imagePreview) {
      navigate("/todo");
      localStorage.setItem("profile", JSON.stringify({ user, imagePreview }));
      setError(false);
      setImageError(false);
    } else if (user && !imagePreview) {
      setImageError(true);
    } else if (!user && imagePreview) {
      setError(true);
    } else {
      setImageError(true);
      setError(true);
    }
  };
  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <H1>Get Started</H1>
        <ImageUploader />
        {imageError && (
          <ErrorMessage>Please Upload Your Profile Picture</ErrorMessage>
        )}
        <InputContainer>
          <Label>fill in your name</Label>
          <Input
            type="text"
            placeholder="your name"
            onChange={(e) => setUser(e.target.value)}
          />
          {error && <ErrorMessage>Please Sign In</ErrorMessage>}
        </InputContainer>

        <Button>Sign In</Button>
      </Form>
    </Container>
  );
}
const Container = styled.div`
  background-color: #000000;
  display: flex;
  justify-content: center;
  height: 100vh;
  padding-top: 10px;
  padding-bottom: 50px;
`;
const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  border-radius: 4px;
  @media (max-width: 400px) {
    width: 90%;
  }
`;
const H1 = styled.h1`
  font-weight: SemiBold;
  font-size: 48px;
  color: #000000;
  @media (max-width: 400px) {
    font-size: 28px;
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  width: 487px;
  height: 76px;
  background-color: #e6ebff;
  border-radius: 4px;
  border: none;
  outline: none;
  padding: 24px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 22px;
  @media (max-width: 600px) {
    width: 300px;
  }
  @media (max-width: 400px) {
    width: 200px;
    height: 50px;
  }
`;
const Button = styled.button`
  background-color: #5efc8d;
  width: 258px;
  height: 66px;
  font-size: 32px;
  color: #000000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  @media (max-width: 400px) {
    width: 200px;
    font-size: 20px;
  }
`;
const ErrorMessage = styled.p`
  color: red;
`;
