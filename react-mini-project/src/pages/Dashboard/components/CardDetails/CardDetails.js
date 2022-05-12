import { useEffect, useReducer, useState } from "react";
import { CardItem } from "../CardItem";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { CardDrop } from "../CardDrop/CardDrop";

export const CardDetails = () => {
    const pokemon = useSelector((state) => state.pokemon);
    // console.log(pokemon.id)

    const baseUrl = "https://pokeapi.co/api/v2/";


    const [singlePokemon, setPokemon] = useState();

    const api_call = {
        getAllPokemon: baseUrl + "pokemon/" + pokemon.id,
    };
    // const ObjPokemon = [
    //     { name: namepokemon }
    // ]
    const getDetails = async () => {

        let details;

        try {
            // console.log(api_call.getAllPokemon)
            details = await axios.get(api_call.getAllPokemon);
        } catch (error) {
            console.error(error);
        }

        // const namepokemon = details.data.forms[0].name
        // const mossepokemon = details.data.moves[0].move.name
        // const imagepokemon = details.data.sprites.front_default
        // console.log(details);
        return details;

    };

    const setPokemonDetails = async () => {
        const details = await getDetails();
        setPokemon(details);
        // console.log(details)
    }

    useEffect(() => {
        if (pokemon.id) setPokemonDetails();
    }, [pokemon.id])

    let utenteAutenticato = false;
    const [bool, setName] = useState('Drop Pokemons Name HERE');
    // const [card, setCard] = useState('border-2 border-dotted p-5 w-full h-screen flex justify-center items-center');
    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        // console.log(ev.target)

        if (ev.target.id == 'containerdrop') {
            setName('')
            utenteAutenticato = true;
        }
    }
    return (
        <div className="containerDrop p-5 w-full h-screen" id="div2" onDrop={drop}>
            <div className='border-2 border-dotted p-5 w-full h-screen flex justify-center items-center' id="containerdrop">
                {singlePokemon != null ? <CardDrop details={singlePokemon} /> : null}

            </div>
        </div>
    )
}