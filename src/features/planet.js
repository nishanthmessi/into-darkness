import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  description: "",
  namesake: "",
  potentialforLife: "",
  sizenDistance: "",
  orbitnRotation: "",
  moons: ""
}

export const planetSlice = createSlice({
  name: "planet",
  initialState: {value: initialState},
  reducers: {
    planetDetails: (state, action) => {
      state.value = action.payload
    }
  }
})

export const {planetDetails} = planetSlice.actions

export default planetSlice.reducer