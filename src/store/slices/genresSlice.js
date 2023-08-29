import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FilmsAPI } from "../../api/api";

export const fetchGenres = createAsyncThunk(
    'fetchGenres',
    async () => {
        const response = await FilmsAPI.getGenres();

        const data = await response.data.genres

        return data
    }
);

const genresSlice = createSlice({
    name : 'genresSlice',
    initialState : {
        genres : []
    },
    reducers : {

    },
    extraReducers : {
        [fetchGenres.pending] : (state, action) => {

        },
        [fetchGenres.fulfilled] : (state, action) => {
            state.genres = action.payload
        }
    }
})

export default genresSlice.reducer