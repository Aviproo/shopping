import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: "product",
  initialState: {
    printHello: "hello reducer",
  },
  reducers: {
    print(state) {
      console.log(state.printHello);
    },
  },
});

export const storeAction = storeSlice.actions;

export default storeSlice.reducer;
