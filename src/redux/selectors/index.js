import { createSelector } from "reselect";

const nrCardsPerPage = 10;

const getPokemons = state => state.pokemonList;
const getListStartingId = state => state.list?.start;
const getListEndingId = state => state.list?.end;
export const getListType = state => state.list?.type;
export const getPage = state => state.list?.page;
export const isFetching = state => state.list?.fetching;

export const getCurrentPage = state => state.url.current;
export const getPokemonID = createSelector(
  getCurrentPage,
  url => {
    if (!url) return null;
    const urlSplitted = url.split("/");
    return urlSplitted[3] === "pokemon" ? urlSplitted[4] : null;
  }
);

export const getPokemonBySelectedId = createSelector(
  getPokemons,
  getPokemonID,
  (pokemons, id) => {
    const pokemonName = Object.keys(pokemons).find(
      pokemon => pokemons[pokemon].id == id || pokemons[pokemon].name == id
    );
    return pokemonName ? pokemons[pokemonName] : {};
  }
);

export const getAllPokemonsOfSpecificyType = createSelector(
  getPokemons,
  getListType,
  (pokemons, selectedType) => {
    if (!selectedType || selectedType === "All") return null;
    let aux = {};
    const pokemonName = Object.keys(pokemons).forEach(pokemon => {
      if (
        pokemons[pokemon].types.find(
          type => type.type.name.toUpperCase() == selectedType.toUpperCase()
        )
      )
        aux = { ...aux, [pokemon]: pokemons[pokemon] };
    });
    return aux;
  }
);

export const getNumberOfPages = createSelector(
  getPokemons,
  getAllPokemonsOfSpecificyType,
  (allPokemons, pokemonByType) => {
    const pokemons = pokemonByType || allPokemons;
    return Math.ceil(Object.keys(pokemons)?.length / nrCardsPerPage);
  }
);

export const getPokemonsByPage = createSelector(
  getPokemons,
  getAllPokemonsOfSpecificyType,
  getPage,
  (allPokemons, pokemonByType, page) => {
    const pokemons = pokemonByType || allPokemons;
    if (!Object.keys(pokemons).length) return null;
    let count = 0;
    let aux = {};
    Object.keys(pokemons).forEach(pokemon => {
      if ((page - 1) * nrCardsPerPage <= count && count < page * nrCardsPerPage)
        aux = { ...aux, [pokemon]: pokemons[pokemon] };
      count++;
    });
    return aux;
  }
);

export const getPokemonsOnList = createSelector(
  getPokemons,
  getAllPokemonsOfSpecificyType,
  getListStartingId,
  getListEndingId,
  (pokemonsWithoutType, pokemonsWithType, start, end) => {
    if (!start || !end) return null;
    let pokemons = pokemonsWithType || pokemonsWithoutType;
    let aux = {};
    const pokemonName = Object.keys(pokemons).forEach(pokemon => {
      if (pokemons[pokemon].id >= start && pokemons[pokemon].id <= end)
        aux = { ...aux, [pokemon]: pokemons[pokemon] };
    });
    return aux;
  }
);
