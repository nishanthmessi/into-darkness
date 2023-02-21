import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = ""

export const planetSlice = createSlice({
  name: "planet",
  initialState: {value: initialStateValue},
  reducers: {
    planetDetails: (state, action) => {
      state.value = action.payload
    },
  }
})

export const {planetDetails} = planetSlice.actions

export default planetSlice.reducer