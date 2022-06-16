import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";

const PokeCardContainer = styled.div`
    @property --rotate {
        syntax: "<angle>";
        initial-value: 132deg;
        inherits: false;
    }

    background: #191c29;
    width: calc(65vh/1.5);
    height: 65vh;
    padding: 8px;
    position: relative;
    border-radius: 6px;
    // justify-content: center;
    // align-items: center;
    // text-align: center;
    display: flex;
    flex-direction: column;
    font-size: 1.5em;
    color: rgb(88 199 250 / 0%);
    font-family: cursive;

    &::before{
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
        top: calc(65vh/ / 6);
        left: 0;
        right: 0;
        z-index: -1;
        height: 100%;
        width: 100%;
        margin: 0 auto;
        transform: scale(0.8);
        filter: blur(calc(65vh/ / 6));
        background-image: linear-gradient(
          var(--rotate)
          , #5ddcff, #3c67e3 43%, #4e00c2);
          opacity: 1;
        transition: opacity .5s;
        animation: spin 2.5s linear infinite;
    }

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
    height: inherit;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    background: linear-gradient(0deg, rgba(25,28,41,1) 20%, rgba(196, 196, 164) 100%);
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
        :first-child{
            text-transform: capitalize;
        }
    }
`;

const PokemonInfoTypes = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;

function PokeCards(){
    const [pokeName, setPokemonName] = useState('');

    const getPokemon = () => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`)
        .then((res)=>{
            console.log(res.data);
            setPokemonName(res.data.name);
        });
    }

    useEffect(()=>{
        getPokemon();
    },[]);

    return(
    <PokeCardContainer>
        <PokemonCardBody>
            <PokemonImageContainer>
                <img src="https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/132.png" alt={pokeName} width="90%" height="90%" />
            </PokemonImageContainer>
            <PokemonInfoContainer>
                <h3>{pokeName}</h3>
                <h3>#3122</h3>
                <PokemonInfoTypes>
                <svg width="20" height="20" fill="#3EC70B">
                    <image fill="#3EC70B" xlinkHref="https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/bug.svg" src="yourfallback.png" width="20" height="20"/>  
                </svg>
                {/* <img style={{color: 'blue !important'}} src="https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/bug.svg" alt={pokeName} width="20" height="20" /> */}
                </PokemonInfoTypes>
            </PokemonInfoContainer>
        </PokemonCardBody>
        {/* <div style={{display: "flex", border: '1px solid red', height: '65vh', width: '65vh'}}>
            <div>
                <h1 style={{color: 'white'}}>IMAGE</h1>
            </div>
            <div style={{marginTop: 'auto'}}>
                <h1 style={{color: 'white'}}>NAME</h1>
            </div>
        </div> */}

        {/* <img src="https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/132.png" alt={pokeName} width="300" height="300" /> */}
        {/* <h1 style={{color:"white", marginTop: 'auto'}}>{pokeName}</h1> */}

    </PokeCardContainer>
    )
}
export default PokeCards
