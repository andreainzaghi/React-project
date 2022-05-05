import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/";
let error;
let response;

const api_call = {
  getAllPokemon: baseUrl + "pokemon?offset=0&limit=20",
};

export const getAllPokemon = async () => {
  try {
    response = await axios.get(api_call.getAllPokemon);
  } catch (e) {
    console.error(e);
  }
  return { response: response.data.results, error };
};
