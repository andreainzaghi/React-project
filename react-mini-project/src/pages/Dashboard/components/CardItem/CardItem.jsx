import { PokemonType } from "../PokemonType";
import "./CardItem.css";

export const CardItem = ({ pokemon }) => {
  const generateId = (id) => {
    return id < 10 ? `#00${id}` : id < 100 ? `#0${id}` : `#${id}`;
  };

  const classes = `${pokemon.backGroundColorType}`;

  return (
    <section className={`card ${classes} items-start justify-between`}>
      <div className="block ">
        <div className="flex justify-around ">
          <div className="text-2xl text-[#fff] font-semibold uppercase">
            <p>{pokemon.name}</p>
          </div>

        </div>


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

    </section>
  );
};
