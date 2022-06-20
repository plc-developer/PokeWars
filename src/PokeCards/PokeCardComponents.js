import styled from "styled-components";

const PokeCardContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
    @property --rotate {
        syntax: "<angle>";
        initial-value: 132deg;
        inherits: false;
    }

    background: #191c29;
    width: calc(35vh/1.5);
    height: 35vh;
    padding: 8px;
    position: relative;
    margin: 30px;
    border-radius: 6px;
    // justify-content: center;
    // align-items: center;
    // text-align: center;
    display: flex;
    flex-direction: column;
    font-size: 1.5em;
    color: rgb(88 199 250 / 0%);
    font-family: 'Roboto', sans-serif;

    ${props => props.isLegend ? 
    `&::before{
        content: "";
        width: 104%;
        height: 102%;
        border-radius: 8px;
        background-image: linear-gradient(
        var(--rotate)
        , #5ddcff, #3c67e3 43%, #4e00c2);
        position: absolute;
        z-index: -1;
        top: -1%;
        left: -2%;
        animation: spin 3.5s linear infinite;
    }
    
    &::after{
        position: absolute;
        content: "";
        top: calc(35vh/ / 6);
        left: 0;
        right: 0;
        z-index: -1;
        height: 100%;
        width: 100%;
        margin: 0 auto;
        transform: scale(0.8);
        filter: blur(calc(35vh/ / 6));
        background-image: linear-gradient(
          var(--rotate)
          , #5ddcff, #3c67e3 43%, #4e00c2);
          opacity: 1;
        transition: opacity .5s;
        animation: spin 2.5s linear infinite;
    }`
    : 
    ""}
    

    @keyframes spin {
        0% {
            --rotate: 0deg;
        }
        100% {
            --rotate: 360deg;
        }
    }

`;

const PokemonCardBody = styled.div`
    --bug: #A8B820;
    --dark: #705848;
    --normal: #705848;
    --fire: #F08030;
    --water: #6890F0;
    --grass: #78C850;
    --electric: #78C850;
    --ice: #98D8D8;
    --fighting: #C03028;
    --poison: #A040A0;
    --ground: #E0C068;
    --flying: #A890F0;
    --psychic: #F85888;
    --rock: #B8A038;
    --ghost: #705898;
    --dark: #705848;
    --dragon: #7038F8;
    --steel: #B8B8D0;
    --fairy: #F0B6BC;
    height: inherit;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    background: linear-gradient(0deg, rgba(25,28,41,1) 20%, var(--${props => props.type}) 100%);
`;

const PokemonImageContainer = styled.div`
    display:flex;
    justify-content: center;
    height: inherit;
    padding: 20px;
`;

const PokemonInfoContainer = styled.div`
    color: white;
    margin-top: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h3 {
        margin: 0;
        text-transform: capitalize;
    }
`;

const PokemonInfoTypes = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const PokemonType = styled.h6`
    --bug: #A8B820;
    --dark: #705848;
    --normal: #705848;
    --fire: #F08030;
    --water: #6890F0;
    --grass: #78C850;
    --electric: #78C850;
    --ice: #98D8D8;
    --fighting: #C03028;
    --poison: #A040A0;
    --ground: #E0C068;
    --flying: #A890F0;
    --psychic: #F85888;
    --rock: #B8A038;
    --ghost: #705898;
    --dark: #705848;
    --dragon: #7038F8;
    --steel: #B8B8D0;
    --fairy: #F0B6BC;
    background: var(--${props => props.type});
    padding: 3px 15px 3px 15px;
    margin: 5px;
    border-radius: 6px;
    text-transform: uppercase;
`;

export {
    PokeCardContainer, 
    PokemonCardBody, 
    PokemonImageContainer, 
    PokemonInfoContainer, 
    PokemonInfoTypes, 
    PokemonType
};