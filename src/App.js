import { useEffect, useState } from "react";
import styled from "styled-components";
import PokeCards from "./PokeCards/PokeCards";
import { fetchPokemons } from "./Helpers/InitialFunctions";

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
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
      setPokemons(await fetchPokemons(100));
  }

  useEffect(()=>{
    getPokemons();
  },[]);

  return (
    <BodyContainer>
      <AppContainer>
        {pokemons && pokemons.map(pokemon => (
          <PokeCards url={pokemon.url}/>
        ))}
      </AppContainer>
    </BodyContainer>
  );
}

export default App;
