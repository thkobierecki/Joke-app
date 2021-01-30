import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { JokesInitialState } from ".";
import qs from "qs";
import axios from "axios";

export const getJokesInfo = createAsyncThunk("jokes/getJokesInfo", async () => {
  const response = await axios(`${process.env.REACT_APP_JOKE_API_URL}info`);
  const { jokes } = await response.data;

  return {
    categories: jokes.categories,
    totalCount: jokes.totalCount,
  } as JokeInfoRes;
});
export const getJokes = createAsyncThunk(
  "jokes/getJokes",
  async ({ category }: { category: CategoryType }, { rejectWithValue }) => {
    try {
      const response = await axios(
        `${process.env.REACT_APP_JOKE_API_URL}joke/${category}`,
        {
          params: { amount: 10 },
          paramsSerializer: (params) => {
            return qs.stringify(params);
          },
        }
      );

      return (await response.data) as GetJokesRes;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const searchJokes = createAsyncThunk(
  "jokes/searchJokes",
  async (
    { category, contains }: { category: CategoryType; contains: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios(
        `${process.env.REACT_APP_JOKE_API_URL}joke/${category}`,
        {
          params: { contains, amount: 10 },
          paramsSerializer: (params) => {
            return qs.stringify(params);
          },
        }
      );
      return await response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

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

export const selectJokes = ({ jokes }: any) => jokes;

export const {
  actions: { setActiveCategory },
} = jokesSlice;
