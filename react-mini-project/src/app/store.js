import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    pokemon: {
        id: null,
        name: null,
        img: null,
        abilities: null,
        types: null
    }
}

const pokemonSlice = createSlice({
    name: 'pokemonStore',
    initialState: initialState,
    reducers: {
        getPokemon(state, action) {
            // console.log(action)
            state.pokemon.id = action.payload;

        }
    }
});

export const store = configureStore({
    reducer: pokemonSlice.reducer
});

export const pokemonAction = pokemonSlice.actions;


