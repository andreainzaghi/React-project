import { useEffect, useState } from "react";
import { getAllPokemon } from "../../config";
import { CardList, Loader } from "./components";
import { CustomInput } from "../../components";
import { useDebounce } from "../../hooks/useDebounce";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();

  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [userInput, setUserInput] = useState("");

  const debouncedValue = useDebounce(userInput, 1500);

  const [loader, showLoader] = useState(true);

  const isLogged = Boolean(window.sessionStorage.getItem("isLogged"))
    ? Boolean(window.sessionStorage.getItem("isLogged"))
    : false;

  const searchInput = {
    className: "box-search",
    inputField: {
      className: "input-search",
      value: userInput,
      type: "text",
      placeholder: "Search pokemon",
      id: "search",
    },
  };

  const getFilteredPokemon = async () => {
    try {
      const data = await getAllPokemon();

      const filter = data.response.filter((_pokemons) => {
        return _pokemons.name.includes(userInput);
      });

      setFilteredPokemon(filter);
      showLoader(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
    getFilteredPokemon();
  }, [debouncedValue]);

  const handleSearchValue = (_, inputValue) => {
    setUserInput(inputValue);
    showLoader(true);
  };

  return (
    <section>
      <CustomInput
        customInput={searchInput}
        onHandleInput={handleSearchValue}
      />
      {loader ? (
        <Loader />
      ) : (
        <div className="flex w-full h-4/5">
          <div className="grid w-6/12 grid-flow-row grid-cols-2 gap-4 p-5 overflow-x-hidden">
            <CardList pokemonList={filteredPokemon} />
          </div>
          <div></div>
        </div>
      )}
    </section>
  );
};
