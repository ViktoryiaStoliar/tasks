import { createSlice } from "@reduxjs/toolkit";

const palindrom = createSlice({
    name: 'inputValuePalindrom',
    initialState:
    {
        input: '',
        res: false
    },
    reducers: {
        check: function (state) {
            const newStr = state.input.split('').reverse().join('');
            return { res: state.input === newStr ? true : false }
        },
        fill: function (state, params) {
            return { ...state, input: params.payload }
        }
    }
})

export const { check, fill } = palindrom.actions;
export default palindrom.reducer;