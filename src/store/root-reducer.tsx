import { jokesSlice } from "./jokes/jokes.slice";
import { addJokeSlice } from "./addJoke/addJoke.slice";
export const reducer = {
  jokes: jokesSlice.reducer,
  // addJoke: addJokeSlice.reducer,
};
