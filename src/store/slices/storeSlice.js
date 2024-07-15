import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: "product",
  initialState: {
    data: null,
  },
  reducers: {
    setData(state, action) {
      state.data = action.payload;
      console.log(state.data);
    },
    getData(state) {
      console.log();
    },
  },
});

export const storeAction = storeSlice.actions;

export default storeSlice.reducer;
