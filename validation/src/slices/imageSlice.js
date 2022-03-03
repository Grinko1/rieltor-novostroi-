import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    status: '',
    error: '',
}
const BASE_URL = 'http://127.0.0.1:8000/api';

export const deleteImage = createAsyncThunk(
    'images/deleteImage',
    async(id, {rejectWithValue}) => {
        try {
            const response = await axios.delete(`${BASE_URL}/images/${id}`)
        } catch (error) {
            return rejectWithValue('Неудалось удалить');
        }
    }
)

const imageSlice = createSlice({
    name:'images',
    initialState,
    reducers:{},
    extraReducers:{
        [deleteImage.pending]: (state) => {
            state.status = 'loading';
          },
          [deleteImage.fulfilled]: (state) => {
            state.status = 'succes';
          },
          [deleteImage.rejected]: (state, action) => {
            state.status = 'error failed to update';
            state.error = action.payload;
          },
    }
})

export default imageSlice.reducer