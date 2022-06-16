import styled from "styled-components";
import PokeCards from "./PokeCards/PokeCards";

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%; 
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  max-width: 1140px;
  width: 100%;
`;

function App() {
  return (
    <BodyContainer>
      <AppContainer>
        <h1>POKEWARS</h1>
        <PokeCards />
      </AppContainer>
    </BodyContainer>
  );
}

export default App;
