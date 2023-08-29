import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FilmsAPI } from "../../api/api";

export const fetchMovies = createAsyncThunk(
    'fetchMovies',
    async (pageNumber) => {
        const response = await FilmsAPI.getMovieByPage(pageNumber);

        const data = await response.data.results

        return data
    }
)

const movieSlice = createSlice({
    name : 'movieSlice',
    initialState : {
        movies : [],
        pageNumber : 1,
        isLoading : false
    },
    reducers : {
        changePage : (state, action) => {
            state.pageNumber = state.pageNumber + 1
        }
    },
    extraReducers : {
        [fetchMovies.pending] : (state, action) => {
            state.isLoading = true
        },
        [fetchMovies.fulfilled] : (state, action) => {
            state.movies = action.payload
            state.isLoading = false
        }
    }
})

export const { changePage } = movieSlice.actions
export default movieSlice.reducer