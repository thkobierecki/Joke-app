import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddJokeInitialState } from "./";

import axios from "axios";

export const addJokeSlice = createSlice({
  name: "addJoke",
  initialState: AddJokeInitialState,
  reducers: {
    setModalOpen: (state) => {
      state.modalOpen = true;
    },
    setModalClose: (state) => {
      state.modalOpen = false;
    },
  },
  extraReducers: {},
});

export const selectAddJoke = ({ newJoke }: any) => newJoke;

export const {
  actions: { setModalOpen },
} = addJokeSlice;
