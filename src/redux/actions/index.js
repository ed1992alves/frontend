import {
  ADD_POKEMON,
  USER_NAVIGATION,
  ADD_POKEMON_LIST,
  USER_TYPE,
  FETCH_POKEMON_START,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE,
  SET_PAGE
} from "../constants";

export function addPokemon(value, name) {
  return { type: ADD_POKEMON, name, value };
}

export function addPokemonList(list, start, end) {
  return { type: ADD_POKEMON_LIST, list, start, end };
}

export function navigation(url) {
  return { type: USER_NAVIGATION, current: url || window.location.href };
}

export function setType(pokemonType) {
  return { type: USER_TYPE, pokemonType };
}

export function fetchPokemonsStart() {
  return { type: FETCH_POKEMON_START };
}

export function fetchPokemonsSuccess(list, page, pokemonType) {
  return { type: FETCH_POKEMON_SUCCESS, list, page, pokemonType };
}

export function fetchPokemonsFailure(error) {
  return { type: FETCH_POKEMON_FAILURE, error };
}

export function setPage(page) {
  return { type: SET_PAGE, page };
}

export function fetchAllPokemons(searchParams = location.search) {
  return async dispatch => {
    let params = new URLSearchParams(searchParams);
    let page = params.get("page") ? params.get("page") : "1";
    let type = params.get("type") ? params.get("type") : "All";
    dispatch(fetchPokemonsStart());
    let arrayPokemon = [];
    for (let aux = 1; aux <= 250; aux++) {
      await fetch(`https://pokeapi.co/api/v2/pokemon/${aux}`)
        .then(async res => {
          return res.json();
        })
        .then(async res => {
          arrayPokemon = { ...arrayPokemon, [res.name]: res };
        })
        .catch(error => dispatch(fetchPokemonsFailure(error)));
    }
    dispatch(fetchPokemonsSuccess(arrayPokemon, page, type));
  };
}
