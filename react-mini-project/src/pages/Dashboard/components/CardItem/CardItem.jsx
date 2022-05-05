import { PokemonType } from "../PokemonType";
import "./CardItem.css";

export const CardItem = ({ pokemon }) => {
  const generateId = (id) => {
    return id < 10 ? `#00${id}` : id < 100 ? `#0${id}` : `#${id}`;
  };

  const classes = `${pokemon.backGroundColorType}`;

  return (
    <section className={`card ${classes} mt-1 mb-1`}>
      <div className="pt-1 text-4xl text-right opacity-25">
        <span>{generateId(pokemon.id)}</span>
      </div>
      <div className="text-2xl text-[#fff] font-semibold uppercase">
        <p>{pokemon.name}</p>
      </div>
      <div className="flex-col pt-1">
        {pokemon.types.map((type, idx) => (
          <PokemonType type={type.type.name} direction="col" key={idx} />
        ))}
      </div>
      <img
        src={pokemon.img}
        className="absolute w-40 h-40 bg-no-repeat bg-cover right-10 bottom-3"
        alt=""
      />
    </section>
  );
};
