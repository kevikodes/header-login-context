import "./App.css";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default App;
const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;
