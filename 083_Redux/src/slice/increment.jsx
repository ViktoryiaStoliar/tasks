import { createSlice } from "@reduxjs/toolkit";

const increment = createSlice({
    name: 'increment',
    initialState: 0,
    reducers: {
        plus: function (state) { return state + 1 },
    }
})

export const { plus } = increment.actions;
export default increment.reducer;