import {
  ADD_POKEMON,
  USER_NAVIGATION,
  ADD_POKEMON_LIST,
  USER_TYPE,
  FETCH_POKEMON_START,
  FETCH_POKEMON_SUCCESS,
  SET_PAGE,
} from "../constants";

import { bindActionCreators } from "redux";

const initialState = { pokemonList: {}, url: {}, list: {} };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POKEMON:
      return {
        ...state,
        pokemonList: { ...state.pokemonList, [action.name]: action.value },
      };
    case ADD_POKEMON_LIST:
      return {
        ...state,
        pokemonList: { ...state.pokemonList, ...action.list },
        list: { start: action.start, end: action.end },
      };
    case FETCH_POKEMON_START:
      return {
        ...state,
        list: { ...state.list, fetching: "fetching" },
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        pokemonList: { ...state.pokemonList, ...action.list },
        list: {
          page: action.page,
          type: action.pokemonType,
          fetching: "completed",
        },
      };
    case USER_TYPE:
      return {
        ...state,
        pokemonList: { ...state.pokemonList, ...action.list },
        list: { ...state.list, type: action.pokemonType },
      };
    case USER_NAVIGATION: {
      return {
        ...state,
        url: {
          current: action.current,
          previous: state.url.current,
        },
      };
    }
    case SET_PAGE: {
      return {
        ...state,
        list: {
          ...state.list,
          page: action.page,
        },
      };
    }
    default:
      return state;
  }
  return state;
}

export default rootReducer;
