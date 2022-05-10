import { useEffect, useState } from "react";
import { getAllPokemon } from "../../config";
import { CardList } from "./components";
import { CardDetails } from "./components/CardDetails/CardDetails";
export const Dashboard = () => {
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const getAll = async () => {
      try {
        const data = await getAllPokemon();

        const filter = data.response.filter((_pokemons) => {
          return _pokemons.name.includes(userInput);
        });

        setFilteredPokemon(filter);
      } catch (error) {
        console.error(error);
      }
    };

    getAll();
  }, [userInput]);

  return (
    <section>
      <div className="flex w-full h-4/5">
        <div className="grid w-6/12 grid-flow-row grid-cols-2 gap-4 p-5 overflow-x-hidden overflow-auto h-screen">
          <CardList pokemonList={filteredPokemon} />
        </div>
        <div className="  w-6/12 h-screen">
          <CardDetails />
        </div>
      </div>
    </section>
  );
};
