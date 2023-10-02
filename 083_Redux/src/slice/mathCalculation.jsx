import { createSlice } from "@reduxjs/toolkit";

const mathCalculation = createSlice({
    name: 'mathCalculation',
    initialState: {first: '', second: '', result: 0},
    reducers: {
        fill1: function(state,params){
            return {...state, first: params.payload}
        },
        fill2: function(state,params){
            return {...state, second: params.payload}
        },
        sum: function(state){
            return {...state, result: +state.first + +state.second}
        }
    }
})

export const {fill1, fill2, sum} = mathCalculation.actions;
export default mathCalculation.reducer;