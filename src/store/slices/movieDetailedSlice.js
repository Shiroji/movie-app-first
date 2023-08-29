import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FilmsAPI } from "../../api/api";


export const fetchMovie = createAsyncThunk(
  'fetchMovie',
  async (id) => {
    const response = await FilmsAPI.getMovie(id)

    const data = await response.data

    return data
  }
)

const movieDetailedSlice = createSlice({
  name: 'movieDetailed',
  initialState: {
    filmPage: {}
  },
  reducers: {

  },
  extraReducers: {
    [fetchMovie.fulfilled]: (state, action) => {
      state.filmPage = action.payload
    }
  }
})

export default movieDetailedSlice.reducer;