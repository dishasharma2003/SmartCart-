import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    seletectStation: ""
};
const trainSlice = createSlice({
    name: "station",
    initialState,
    reducers: {
        updateSelectedStation: (state, actions) => {
            state.seletectStation = actions.payload
        }
    }
})

export const { updateSelectedStation } = trainSlice.actions;
export default trainSlice.reducer