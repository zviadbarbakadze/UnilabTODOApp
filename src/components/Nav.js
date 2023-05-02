import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "./Auth";

export default function Nav() {
  const { setImagePreview, setUser, setTodo } = useContext(AuthContext);
  const navigate = useNavigate();
  const data = localStorage.getItem("profile");

  const profile = JSON.parse(data);

  const LogOutHandler = () => {
    localStorage.removeItem("profile");
    localStorage.removeItem("task");
    setImagePreview("");
    setUser(null);
    setTodo([]);
    navigate("/");
  };

  return (
    <Container>
      <Logo>TO DO</Logo>
      <ProfileContainer>
        <UserName>{profile.user}</UserName>
        <Image src={profile.imagePreview} alt="" />
        <Logout onClick={LogOutHandler}>Log Out</Logout>
      </ProfileContainer>
    </Container>
  );
}
const Container = styled.div`
  background-color: #000000;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;
const Logo = styled.h2`
  color: white;
  font-size: 36px;
  font-weight: Black;
  @media (max-width: 400px) {
    font-size: 20px;
  }
`;
const Image = styled.img`
  border-radius: 50%;
  width: 68px;
  height: 68px;
  background-color: #e6ebff;
`;
const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;
const UserName = styled.h5`
  font-size: 22px;
  font-weight: Light;
  color: #ffffff;
  @media (max-width: 400px) {
    font-size: 16px;
  }
`;
const Logout = styled.button`
  background-color: black;
  color: white;
  width: 50px;
  height: 20px;
  font-size: 12px;
  border-radius: 2px;
  border: none;
  cursor: pointer;
`;
