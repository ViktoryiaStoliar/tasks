import { createSlice } from "@reduxjs/toolkit";

const showHide = createSlice({
    name: 'showHide',
    initialState: {
        flag: false,
        data: ''
    },
    reducers: {
        show: function () {
            return { flag: true, data:  'Hi!' }
        },

        hide: function (){
            return {flag:false, data: ''}
        }
    }
})

export const { show, hide } = showHide.actions;
export default showHide.reducer;