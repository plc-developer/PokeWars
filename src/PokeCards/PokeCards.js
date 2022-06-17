import React, { useEffect, useState } from "react";
import { 
    PokeCardContainer, 
    PokemonCardBody, 
    PokemonImageContainer, 
    PokemonInfoContainer, 
    PokemonInfoTypes, 
    PokemonType,  
    } 
from "./PokeCardComponents";
import { getPokemon } from "./PokeCardBLL";

function PokeCards({url}){
    console.count("RENDERED");
    const [pokemon, setPokemon]                     = useState([]);
    // const [pokeName, setPokemonName]             = useState('');
    // const [types, setPokemonTypes]               = useState([]);
    // const [id, setPokemonId]                     = useState('');
    // const [mainType, setPokemonMainType]         = useState('normal');

    // const getPokemon = async () => {
    
    // }

    // const pad = (number) => {
    //     let str = '' + number;
    //     while(str.length < 3){
    //         str = '0' + str;
    //     }
    //     return str;
    // };

    // useEffect(()=>{
    //     async function fetchPokemon(){
    //         console.log(getPokemon(url));
    //         // const response = await getPokemon(url);
    //         // response.then(res=>{console.log(res)});
    //         return null;
    //     }
    //     setPokemon(fetchPokemon());
    // },[]);
    
    // useEffect(()=>{
    //     getPokemon();
    // },[]);

    return(
        <>
         {/* <PokeCardContainer isLegend={1}>
        <PokemonCardBody type={mainType}>
            <PokemonImageContainer>
                <img src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${id}.png`} alt={pokeName} width="90%" height="90%" />
            </PokemonImageContainer>
            <PokemonInfoContainer>
                <PokemonInfoTypes>
                    {types.map(type => (
                        <PokemonType type={type.type.name}>{type.type.name}</PokemonType>
                    ))}
                </PokemonInfoTypes>
                <h3>{pokeName}</h3>
                <h3>#{id}</h3>
            </PokemonInfoContainer>
        </PokemonCardBody>
    </PokeCardContainer>
    <PokeCardContainer isLegend={1}>
        <PokemonCardBody type={mainType}>
            <PokemonImageContainer>
                <img src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${id}.png`} alt={pokeName} width="90%" height="90%" />
            </PokemonImageContainer>
            <PokemonInfoContainer>
                <PokemonInfoTypes>
                    {types.map(type => (
                        <PokemonType type={type.type.name}>{type.type.name}</PokemonType>
                    ))}
                </PokemonInfoTypes>
                <h3>{pokeName}</h3>
                <h3>#{id}</h3>
            </PokemonInfoContainer>
        </PokemonCardBody>
    </PokeCardContainer> */}
        </>
   
    
    )
}
export default PokeCards
