import * as selectores from "../index";

const state = {
  pokemonList: {
    pikachu: {
      id: 15,
      types: [{ type: { name: "electric" } }]
    },
    charizard: {
      id: 60,
      types: [{ type: { name: "electric" } }]
    }
  },
  list: {
    start: 10,
    end: 40,
    type: "All"
  }
};

describe("selectores", () => {
  // describe(name, fn) creates a block that groups together several related tests.

  it("getPokemonsOnList", async () => {
    const pokemonsList = await selectores.getPokemonsOnList(state);
    expect(Object.keys(pokemonsList).length).toBe(1);
  });
});
