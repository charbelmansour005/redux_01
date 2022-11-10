import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //objects
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count += 1;
    },
  },
});
