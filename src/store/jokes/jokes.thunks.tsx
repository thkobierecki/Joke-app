import { createAsyncThunk } from "@reduxjs/toolkit";
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
