import { createSlice } from "@reduxjs/toolkit";

const validationEmail = createSlice({
    name: 'validationEmail',
    initialState: {
        input: '',
        result: false
    },
    reducers: {
        fill: function(state, params){
            return {...state, input: params.payload}
        },

        isValid: function(state){
            if (/^[a-z0-9\-\.]+@[a-z]{1,10}.[a-z]{1,6}/gm.test(state.input)){
                return {...state, result: true}
            } else {
                return {...state, result: false}
            }
        }
    }
})

export const {fill, isValid} = validationEmail.actions;
export default validationEmail.reducer;