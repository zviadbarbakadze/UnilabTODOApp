import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import GetStarted from "./GetStarted";
import SignIn from "./SignIn";
function App() {
  return (
    <Container>
      <Routes>
        <Route index element={<GetStarted />} />
        <Route path="/" element={<GetStarted />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div``;
