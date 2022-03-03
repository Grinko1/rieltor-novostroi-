import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  flats: [],
  flat: null,
  status: '',
  error: '',
};
const BASE_URL = 'http://127.0.0.1:8000/api';



export const fetchFlats = createAsyncThunk('flats/fetchFlats', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/flats?`);
    return response?.data.data;
  } catch (error) {
    return rejectWithValue('Неудалось загрузить данные');
  }
});





export const fetchFlat = createAsyncThunk('flats/fetchFlat', async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/flats/${id}`);
    return response?.data;
  } catch (error) {
    return rejectWithValue('Неудалось загрузить данные');
  }
});

export const createFlat = createAsyncThunk(
  'flats/createFlat',
  async (formData, { rejectWithValue }) => {
    try {
      console.log(formData)
      const response = await axios.post(`${BASE_URL}/flats`, {
        formData
        // area: formData.area,
        // title: formData.title,
        // desc: formData.desc,
        // imageUrl: formData.imageUrl,
        // images: formData.imgs,
        // lift: formData.lift,
        // square: formData.square,
        // kitchenSquare: formData.kitchenSquare,
        // price: formData.price,
        // yearOfBuild: formData.yearOfBuild,
        // build_id: formData.build,
        // resale_id: formData.resale,
        // room_id: formData.room,
        // floor_id: formData.floor,
        // decoration_id: formData.decoration,
        // bathroom_id: formData.bathroom,
        // balcony_id: formData.balcony,
        // facade_id: formData.facade,
        // files: formData.files

      }
      ,{
        config:{
          headers:{
              'Content-Type' : 'multipart/form-data'
          }
        }
    });
      // console.log(newData.imgs);
      console.log(response?.data)
      return response?.data
    } catch (error) {
      return rejectWithValue('Неудалось добавить квартиру в базу данных');
    }
  },
);


export const updateFlat = createAsyncThunk(
  'flats/updateFlat',
  async (dataFromForm, { rejectWithValue }) => {
    // debugger;
    try {
      const response = await axios.put(`${BASE_URL}/flats/${dataFromForm.id}`, {
        area: dataFromForm.area,
        title: dataFromForm.title,
        desc: dataFromForm.desc,
        imageUrl: dataFromForm.imageUrl,
        lift: dataFromForm.lift,
        square: dataFromForm.square,
        kitchenSquare: dataFromForm.kitchenSquare,
        price: dataFromForm.price,
        yearOfBuild: dataFromForm.yearOfBuild,
        build_id: dataFromForm.build,
        resale_id: dataFromForm.resale,
        room_id: dataFromForm.room,
        floor_id: dataFromForm.floor,
        decoration_id: dataFromForm.decoration,
        bathroom_id: dataFromForm.bathroom,
        balcony_id: dataFromForm.balcony,
        facade_id: dataFromForm.facade,
      });
      // return response
   
    } catch (error) {
      return rejectWithValue('Неудалось обновить квартиру в базе данных');
    }
  },
);


export const deleteFlat = createAsyncThunk('flats/deleteFlat', async (id, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`${BASE_URL}/flats/${id}`);
 
  } catch (error) {
    return rejectWithValue('Неудалось удалить');
  }
});

const flatSlice = createSlice({
  name: 'flats',
  initialState,
  reducers: {
    deleteFromFront(state, action) {
      const nextFlats = state.flats.filter((item) => item.id !== action.payload)
      state.flats = nextFlats
    }
  },
  extraReducers: {
    [fetchFlats.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchFlats.fulfilled]: (state, action) => {
      state.status = 'succes';
      state.flats = action.payload;
    },
    [fetchFlats.rejected]: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    },
    [createFlat.pending]: (state,) => {
      state.status = 'loading';
    },
    [createFlat.fulfilled]: (state,) => {
      state.status = 'succes';
    },
    [createFlat.rejected]: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    },
    [fetchFlat.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchFlat.fulfilled]: (state, action) => {
      state.status = 'succes';
      state.flat = action.payload;
    },
    [fetchFlat.rejected]: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    },
    [updateFlat.pending]: (state) => {
      state.status = 'loading';
    },
    [updateFlat.fulfilled]: (state) => {
      state.status = 'succes';
    },
    [updateFlat.rejected]: (state, action) => {
      state.status = 'error failed to update';
      state.error = action.payload;
    },
    [deleteFlat.pending]: (state) => {
      state.status = 'loading';
    },
    [deleteFlat.fulfilled]: (state) => {
      state.status = 'succes';
    },
    [deleteFlat.rejected]: (state, action) => {
      state.status = 'error failed to update';
      state.error = action.payload;
    },
  },
});

export default flatSlice.reducer;
export const {deleteFromFront} = flatSlice.actions
