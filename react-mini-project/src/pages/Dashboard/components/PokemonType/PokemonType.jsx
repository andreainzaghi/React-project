import "./PokemonType.css";

export const PokemonType = ({ type, direction }) => {
  return (
    <div
      className={`border mb-1 mt-1 rounded-full w-fit p-1 bg-[#fff] opacity-50 font-semibold ${direction}`}
    >
      <p>{type}</p>
    </div>
  );
};
