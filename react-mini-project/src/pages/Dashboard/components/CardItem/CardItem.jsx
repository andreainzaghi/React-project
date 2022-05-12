import { PokemonType } from "../PokemonType";
import "./CardItem.css";
import { useDispatch } from "react-redux";
import { pokemonAction } from "../../../../app/store";


export const CardItem = ({ pokemon }) => {

  const dispatch = useDispatch();

  // console.log(pokemon)
  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    dispatch(pokemonAction.getPokemon(ev.target.id))

  }

  // function deleteelement(ev) {
  //   let cardelement = document.querySelector(ev.target.id)
  //   console.log(cardelement)
  //   // console.log(cardelement)
  //   // cardelement.remove()
  // }

  function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    console.log(data)
  }

  const generateId = (id) => {
    return id < 10 ? `#00${id}` : id < 100 ? `#0${id}` : `#${id}`;
  };

  const classes = `${pokemon.backGroundColorType}`;

  return (
    <section id="div1" onDrop={drop} onDragOver={allowDrop}>

      <div draggable="true" className={`card ${classes} items-start justify-between border-2`} onDragStart={drag} id={pokemon.id}>

        <div className="block ">
          <div className="flex justify-around ">
            <div className="text-2xl text-[#fff] font-semibold uppercase">
              <p>{pokemon.name}</p>
            </div>
          </div>
          {/* <div onClick={deleteelement}>x</div> */}
          <div>
            {pokemon.types.map((type, idx) => (
              <PokemonType type={type.type.name} direction="col" key={idx} />
            ))}
          </div>
        </div>
        <div>
          <div className=" text-4xl opacity-25 text-center">
            <span>{generateId(pokemon.id)}</span>
          </div>

          <img
            src={pokemon.img}
            className=" w-40 h-40 bg-no-repeat bg-cover   "
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
