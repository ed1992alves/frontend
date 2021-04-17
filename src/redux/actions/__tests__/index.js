import * as actions from "../index";

const mockDispatch = jest.fn();

function mockFetchPromise() {
  return Promise.resolve({
    json: () => ({
      name: "pikachu"
    })
  });
}

window.fetch = jest.fn(() => mockFetchPromise());

describe("fetchAllPokemons", () => {
  it("calls fetchPokemonsStart and fetchPokemonSuccess", async () => {
    await actions.fetchAllPokemons()(mockDispatch);

    expect(window.fetch).toHaveBeenCalledTimes(250);
    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch).toBeCalledWith(actions.fetchPokemonsStart());
    expect(mockDispatch).toHaveBeenLastCalledWith({
      list: { pikachu: { name: "pikachu" } },
      page: "1",
      pokemonType: "Normal",
      type: "FETCH_POKEMON_SUCCESS"
    });
  });

  it("gets pokemon page and type", async () => {
    await actions.fetchAllPokemons("?page=2&type=normal")(mockDispatch);
    expect(mockDispatch).toHaveBeenLastCalledWith({
      list: { pikachu: { name: "pikachu" } },
      page: "2",
      pokemonType: "normal",
      type: "FETCH_POKEMON_SUCCESS"
    });
  });
});
