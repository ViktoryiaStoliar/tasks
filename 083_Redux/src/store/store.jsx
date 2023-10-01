import { configureStore } from '@reduxjs/toolkit';
import increment from '../slice/increment';
import inputValue from '../slice/inputValue';

const store = configureStore({
    reducer: {
        increment: increment,
        inputValue: inputValue
    }
})

export default store;