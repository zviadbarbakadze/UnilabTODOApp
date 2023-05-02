import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import GetStarted from "./components/GetStarted";
import SignIn from "./components/SignIn";
import ToDo from "./components/ToDo";
import { AuthProvider } from "./components/Auth";
import Require from "./components/Require";

function App() {
  return (
    <AuthProvider>
      <Container>
        <Routes>
          <Route index element={<GetStarted />} />
          <Route path="/" element={<GetStarted />} />
          <Route path="signin" element={<SignIn />} />
          <Route
            path="/todo"
            element={
              <Require>
                <ToDo />
              </Require>
            }
          />
        </Routes>
      </Container>
    </AuthProvider>
  );
}

export default App;

const Container = styled.div``;
