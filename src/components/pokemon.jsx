import React, { useState, useRef, useEffect, useReducer } from "react";
import { Dropdown } from "./dropdown";
import { Card } from "./card";
import pikachu from "../styles/images/pokemon/pikachu.png";
import blastoise from "../styles/images/pokemon/blastoise.png";
import charizard from "../styles/images/pokemon/charizard.png";
import flareon from "../styles/images/pokemon/flareon.png";
import vileplume from "../styles/images/pokemon/vileplume.png";
import bulbasaur from "../styles/images/pokemon/bulbasaur.png";
import gengar from "../styles/images/pokemon/gengar.png";
import alakazam from "../styles/images/pokemon/alakazam.png";
import "../styles/fetch.less";

const imageSrcSelector = selectedPokemon => {
  switch (selectedPokemon) {
    case "pikachu":
      return pikachu;
    case "blastoise":
      return blastoise;
    case "charizard":
      return charizard;
    case "flareon":
      return flareon;
    case "bulbasaur":
      return bulbasaur;
    case "gengar":
      return gengar;
    case "alakazam":
      return alakazam;
    default:
      return;
  }
};

export const PokemonCard = () => {
  const pokemonList = [
    "pikachu",
    "charizard",
    "blastoise",
    "flareon",
    "bulbasaur",
    "gengar",
    "alakazam"
  ];
  const [selectedPokemon, setSelectedPokemon] = useState(pokemonList[0]);
  const [pokemonState, setPokemonState] = useState({});

  function getAvailabity(type) {
    const ability = pokemonState[selectedPokemon]?.abilities.find(
      ability =>
        (type == "Normal" && !ability.is_hidden) ||
        (type == "Hidden" && ability.is_hidden)
    );

    return ability?.ability?.name;
  }

  function getType(type) {
    switch (type) {
      case "speed":
        return pokemonState[selectedPokemon]?.stats[0]?.base_stat;
      case "specialDefense":
        return pokemonState[selectedPokemon]?.stats[1]?.base_stat;
      case "specialAttack":
        return pokemonState[selectedPokemon]?.stats[2]?.base_stat;
      case "defense":
        return pokemonState[selectedPokemon]?.stats[3]?.base_stat;
      case "attack":
        return pokemonState[selectedPokemon]?.stats[4]?.base_stat;
      case "hp":
        return pokemonState[selectedPokemon]?.stats[5]?.base_stat;
      case "weight":
        return pokemonState[selectedPokemon]?.weight;
      case "height":
        return pokemonState[selectedPokemon]?.height;
      case "type":
        return pokemonState[selectedPokemon]?.types[
          pokemonState[selectedPokemon]?.types.length - 1
        ]?.type?.name;
      default:
        return;
    }
  }

  async function fetchPokemon() {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
      .then(async res => res.json())
      .then(async res => {
        setPokemonState({ ...pokemonState, [selectedPokemon]: res });
        fetchAbility(res.abilities);
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    if (!pokemonState[selectedPokemon]) {
      fetchPokemon();
    }
  }, [selectedPokemon]);

  return (
    <>
      <Dropdown
        title="pokemon list"
        name="pokemon"
        items={pokemonList}
        selected={pokemonList[0]}
        callback={item => {
          setSelectedPokemon(item);
          setAbility({ ...abilityState, type: "Normal" });
        }}
      ></Dropdown>
      <Card
        name={pokemonState[selectedPokemon]?.name}
        imageSrc={imageSrcSelector(selectedPokemon)}
        callbackAbility={item => setAbility({ ...abilityState, type: item })}
        info={{
          speed: getType("speed"),
          specialDefense: getType("specialDefense"),
          specialAttack: getType("specialAttack"),
          defense: getType("defense"),
          weight: getType("weight"),
          height: getType("height"),
          type: getType("type"),
          attack: getType("attack"),
          hp: getType("hp")
        }}
        ability={{
          normal: getAvailabity("Normal"),
          hidden: getAvailabity("Hidden")
        }}
      ></Card>
    </>
  );
};
