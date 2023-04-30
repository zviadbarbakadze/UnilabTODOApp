import React from "react";
import styled from "styled-components";
import photo from "../assets/photo.svg";
import { useContext } from "react";
import { AuthContext } from "./Auth";

export default function ImageUploader() {
  const { setImagePreview } = useContext(AuthContext);

  const handleImageChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = (e) => {
      setImagePreview(e.target.result);
    };
  };

  return (
    <Container>
      <Label>Add Photo</Label>
      <InputContainer>
        <Input type="file" onChange={handleImageChange} />
        <Icon src={photo} alt="photo" />
      </InputContainer>

      {/* <Image src={imagePreview} alt="Preview" /> */}
    </Container>
  );
}
const Container = styled.div``;
export const Label = styled.label`
  font-weight: light;
  font-size: 22px;
  color: #000000;
`;
const InputContainer = styled.div`
  position: relative;
  background-color: #e6ebff;
  border-radius: 50%;
  width: 122px;
  height: 122px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  height: 100%;
`;
const Icon = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
`;
// const Image = styled.img`
//   width: 30px;
// `;
