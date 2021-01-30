import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { reducer } from "./root-reducer";

const middleware = [...getDefaultMiddleware()];

export default configureStore({
  reducer,
  middleware,
});
