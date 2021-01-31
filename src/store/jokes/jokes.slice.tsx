import { createSlice } from "@reduxjs/toolkit";
import { JokesInitialState } from ".";
import { getJokesInfo, getJokes, searchJokes } from "./jokes.thunks";

export const jokesSlice = createSlice({
  name: "jokes",
  initialState: JokesInitialState,
  reducers: {
    setActiveCategory: (state, { payload }) => {
      state.jokeCategory = payload;
    },
  },
  extraReducers: {
    [getJokesInfo.fulfilled.toString()]: (state, { payload }) => {
      state.categories = payload.categories;
      state.totalNumOfJokes = payload.totalCount;
    },
    [getJokes.fulfilled.toString()]: (state, { payload }) => {
      state.allJokes = payload.jokes ? payload.jokes : [];
      state.error = payload.error;
      state.errorMessage = payload.message && payload.message;
    },

    [searchJokes.fulfilled.toString()]: (state, { payload }) => {
      state.allJokes = payload.jokes ? payload.jokes : [];
      state.error = payload.error;
      state.errorMessage = payload.message && payload.message;
    },
  },
});

export const selectJokes = ({ jokes }: { jokes: IJokeState }) => jokes;

export const {
  actions: { setActiveCategory },
} = jokesSlice;
