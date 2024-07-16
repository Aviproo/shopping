import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: "product",
  initialState: {
    data: null,
  },
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    getData(state) {},
  },
});

export const storeAction = storeSlice.actions;

export default storeSlice.reducer;
