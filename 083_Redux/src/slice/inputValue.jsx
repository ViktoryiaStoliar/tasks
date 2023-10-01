import { createSlice } from "@reduxjs/toolkit";

const inputValue = createSlice({
    name: "inputValue",
    initialState: '',
    reducers: {
        data: function (state, params) {
            return params.payload
        }
    }
})

export const { data } = inputValue.actions;
export default inputValue.reducer;