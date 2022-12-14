import React, { useState, useRef, useEffect, useReducer } from "react";
import { Dropdown } from "./dropdown";
import { Card } from "./card";
import {
  addPokemonList,
  navigation,
  setType,
  fetchAllPokemons,
  setPage
} from "../redux/actions";
import { connect } from "react-redux";
import {
  getPokemonsOnList,
  getCurrentPage,
  getNumberOfPages,
  getPokemonsByPage,
  getPage,
  isFetching,
  getListType
} from "../redux/selectors";
import { useSelector, useDispatch } from "react-redux";

export const ListaPokemonWithPagination = () => {
  const dispatch = useDispatch();
  const fetching = useSelector(isFetching);
  const pokemonsList = useSelector(getPokemonsByPage);
  const numberOfPages = useSelector(getNumberOfPages);
  const page = useSelector(getPage);
  const listType = useSelector(getListType);

  const typeList = [
    "All",
    "Normal",
    "Poison",
    "Electric",
    "Fire",
    "Water",
    "Rock",
    "Grass",
    "Fighting",
    "Psychic",
    "Ground",
    "Fairy"
  ];

  function getType(type, pokemonName) {
    switch (type) {
      case "speed":
        return pokemonsList[pokemonName]?.stats[0]?.base_stat;
      case "specialDefense":
        return pokemonsList[pokemonName]?.stats[1]?.base_stat;
      case "specialAttack":
        return pokemonsList[pokemonName]?.stats[2]?.base_stat;
      case "defense":
        return pokemonsList[pokemonName]?.stats[3]?.base_stat;
      case "attack":
        return pokemonsList[pokemonName]?.stats[4]?.base_stat;
      case "hp":
        return pokemonsList[pokemonName]?.stats[5]?.base_stat;
      case "weight":
        return pokemonsList[pokemonName]?.weight;
      case "height":
        return pokemonsList[pokemonName]?.height;
      case "type":
        return pokemonsList[pokemonName]?.types[
          pokemonsList[pokemonName]?.types.length - 1
        ]?.type?.name;
      default:
        return;
    }
  }

  function getAvailabity(type, pokemonName) {
    const ability = pokemonsList[pokemonName]?.abilities?.find(
      ability =>
        (type == "Normal" && !ability.is_hidden) ||
        (type == "Hidden" && ability.is_hidden)
    );

    return ability?.ability?.name;
  }

  const imageSrcSelector = pokemonName =>
    pokemonsList[pokemonName]?.sprites?.front_default || pokeball;

  useEffect(() => {
    if (!fetching) dispatch(fetchAllPokemons());
  });

  return (
    <div className="listContainer pokemonPageWrapper">
      <Dropdown
        title="pokemon list"
        name="pokemon"
        items={typeList}
        selected={typeList[0]}
        callback={item => {
          dispatch(setType(item));
          dispatch(setPage(1));
        }}
      ></Dropdown>
      {pokemonsList && (
        <div className="flexContainer">
          {Object.keys(pokemonsList).map((pokemonName, key) => (
            <Card
              key={key}
              name={pokemonName}
              imageSrc={imageSrcSelector(pokemonName)}
              info={{
                speed: getType("speed", pokemonName),
                specialDefense: getType("specialDefense", pokemonName),
                specialAttack: getType("specialAttack", pokemonName),
                defense: getType("defense", pokemonName),
                weight: getType("weight", pokemonName),
                height: getType("height", pokemonName),
                type: getType("type", pokemonName),
                attack: getType("attack", pokemonName),
                hp: getType("hp", pokemonName)
              }}
              ability={{
                normal: getAvailabity("Normal", pokemonName),
                hidden: getAvailabity("Hidden", pokemonName)
              }}
            ></Card>
          ))}
        </div>
      )}
      <div className="pagination">
        <div>
          <button
            disabled={page == 1}
            onClick={() => {
              dispatch(setPage(parseInt(page) - 1));
            }}
          >
            Previous
          </button>
        </div>
        <div>{`${page} of ${numberOfPages}`}</div>
        <div>
          <button
            disabled={page >= numberOfPages}
            onClick={() => dispatch(setPage(parseInt(page) + 1))}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
