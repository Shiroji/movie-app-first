import { configureStore } from "@reduxjs/toolkit";
import genresSlice from "./slices/genresSlice";
import movieSlice from "./slices/movieSlice";
import movieDetailed from "./slices/movieDetailedSlice";
import searchSlice from "./slices/searchSlice";

const store = configureStore({
    reducer : {
        genresData : genresSlice,
        moviesData : movieSlice,
        movieData : movieDetailed,
        searchData : searchSlice
    }
})

export default store;