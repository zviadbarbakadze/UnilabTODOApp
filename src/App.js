import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import GetStarted from "./components/GetStarted";
import SignIn from "./components/SignIn";
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
