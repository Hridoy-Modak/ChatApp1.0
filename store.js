import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./src/slices/userSlice";

export const store = configureStore({
  reducer: {
    userinfo: userSlice,
  },
});
