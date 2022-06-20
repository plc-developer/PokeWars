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
import Axios from "axios";

function PokeCards({url}){
    const [pokeName, setPokemonName]             = useState('');
    const [types, setPokemonTypes]               = useState([]);
    const [id, setPokemonId]                     = useState('');
    const [mainType, setPokemonMainType]         = useState('normal');

    const legendaries = [
        '144',
        '145',
        '146',
        '150',
        '151',
        '243',
        '244',
        '245',
        '249',
        '250',
        '251',
        '377',
        '378',
        '379',
        '380',
        '381',
        '382',
        '383',
        '384',
        '385',
        '386',
        '480',
        '481',
        '482',
        '483',
        '484',
        '485',
        '486',
        '487',
        '488',
        '489',
        '490',
        '491',
        '492',
        '493',
        '494',
        '638',
        '639',
        '640',
        '641',
        '642',
        '643',
        '644',
        '645',
        '646',
        '647',
        '648',
        '649'
    ];

    const getPokemon = async () => {
        Axios.get(url)
        .then((res)=>{
            setPokemonId(pad(res.data.id));
            setPokemonName(res.data.name);
            setPokemonMainType(res.data.types[0].type.name);
            setPokemonTypes(res.data.types);
        })
    }

    const pad = (number) => {
        let str = '' + number;
        while(str.length < 3){
            str = '0' + str;
        }
        return str;
    };
    
    useEffect(()=>{
        getPokemon();
    },[]);

    return(
        <PokeCardContainer isLegend={legendaries.includes(id)}>
            <PokemonCardBody type={mainType}>
                <PokemonImageContainer>
                    <img src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pad(id)}.png`} alt={pokeName} width="90%" height="90%" />
                </PokemonImageContainer>
                <PokemonInfoContainer>
                    <PokemonInfoTypes>
                        {types.map(type => (
                            <PokemonType type={type.type.name}>{type.type.name}</PokemonType>
                        ))}
                    </PokemonInfoTypes>
                    <h3>{pokeName}</h3>
                    <h3>#{pad(id)}</h3>
                </PokemonInfoContainer>
            </PokemonCardBody>
        </PokeCardContainer>
    )
}
export default PokeCards
