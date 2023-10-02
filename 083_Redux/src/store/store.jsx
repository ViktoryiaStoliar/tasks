import { configureStore } from '@reduxjs/toolkit';
import increment from '../slice/increment';
import inputValue from '../slice/inputValue';
import palindrom from '../slice/palindrom';
import showHide from '../slice/show_hide';
import validationEmail from '../slice/validationEmail';
import mathCalculation from '../slice/mathCalculation';

const store = configureStore({
    reducer: {
        increment,
        inputValue,
        palindrom,
        showHide,
        validationEmail,
        mathCalculation
    }
})

export default store;