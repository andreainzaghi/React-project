import { useReducer, useState } from "react";
import { CardItem } from "../CardItem";
import { useSelector, useDispatch } from 'react-redux';

export const CardDetails = () => {
    const pokemon = useSelector((state) => state.pokemon);
    console.log(pokemon)
    function allowDrop(ev) {
        ev.preventDefault();
    }

    const [bool, setName] = useState('Drop Pokemons Name HERE');
    // const [card, setCard] = useState('border-2 border-dotted p-5 w-full h-screen flex justify-center items-center');
    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        console.log(ev.target)


        if (ev.target.id == 'containerdrop') {
            setName('')
        }
    }
    return (
        <div className="containerDrop p-5 w-full h-screen" id="div2" onDrop={drop} onDragOver={allowDrop}>
            <div className='border-2 border-dotted p-5 w-full h-screen flex justify-center items-center' id="containerdrop">
                <p>{bool}</p>
            </div>
        </div>
    )
}