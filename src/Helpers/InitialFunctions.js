import Axios from "axios";
import { useState } from "react";

export async function fetchPokemons(count) {
  let response = null;
  await Axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${count}&offset=0`)
  .then((res)=>{
    response = res.data.results;
  });
  return response;
}