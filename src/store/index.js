import { configureStore } from "@reduxjs/toolkit";
import themeslice from "./themeSlice";
import filterSlice from "./filterSlice";
import searchSlice from "./searchSlice";


const store = configureStore({
    reducer: {
        theme: themeslice.reducer,
        filter: filterSlice.reducer,
        search: searchSlice.reducer
    }
})

export default store