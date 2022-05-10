import axios from "axios";
import { useEffect, useState } from "react";
import { CardItem } from "../CardItem";
import { DragDropContext } from 'react-beautiful-dnd';
export const CardList = ({ pokemonList }) => {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    let pokemonItemList = [];

    const getDetailsPokemon = async () => {
      const array = pokemonList.map(async (item) => {
        const response = await getDetails(item.url);
        return {
          id: response.data.id,
          name: response.data.name,
          types: response.data.types,
          img: response.data.sprites.other["official-artwork"].front_default,
          abilities: response.data.abilities,
          backGroundColorType: response.data.types[0].type.name,
        };
      });

      pokemonItemList = await Promise.all(array);
      setCardList(pokemonItemList);
    };

    const getDetails = async (url) => {
      let details;
      try {
        details = await axios.get(url);
      } catch (error) {
        console.error(error);
      }
      return details;
    };

    getDetailsPokemon();
  }, [pokemonList]);

  return (
    <>
      {cardList.length > 0 ? (
        cardList.map((pokemon) => {

          return <CardItem key={pokemon.id} pokemon={pokemon} />;
        })
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
