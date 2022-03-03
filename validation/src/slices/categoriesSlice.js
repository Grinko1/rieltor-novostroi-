import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState ={
    balconies:[],
    bathrooms:[],
    builds:[],
    decorations:[],
    facades:[],
    floors:[],
    resales:[],
    rooms:[],
    status:null,
    error:null
}
const BASE_URL = 'http://127.0.0.1:8000/api'

export const fetchBalcony = createAsyncThunk(
    'categories/fetchBalcony',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${BASE_URL}/balconies`)
            return response?.data.data
            
        } catch (error) {
            return rejectWithValue('Failed to load balconies')
        }
    }
)
export const fetchBathroom = createAsyncThunk(
    'categories/fetchBathroom',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${BASE_URL}/bathrooms`)
            return response?.data.data
            
        } catch (error) {
            return rejectWithValue('Failed to load bathrooms')
        }
    }
)
export const fetchBuild = createAsyncThunk(
    'categories/fetchBuild',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${BASE_URL}/builds`)
            return response?.data.data
            
        } catch (error) {
            return rejectWithValue('Failed to load builds')
        }
    }
)

export const fetchDecoration = createAsyncThunk(
    'categories/fetchDecoration',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${BASE_URL}/decorations`)
            return response?.data.data
            
        } catch (error) {
            return rejectWithValue('Failed to load decorations')
        }
    }
)
export const fetchFacade = createAsyncThunk(
    'categories/fetchFacade',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${BASE_URL}/facades`)
            return response?.data.data
            
        } catch (error) {
            return rejectWithValue('Failed to load facades')
        }
    }
)
export const fetchFloor = createAsyncThunk(
    'categories/fetchFloor',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${BASE_URL}/floors`)
            return response?.data.data
            
        } catch (error) {
            return rejectWithValue('Failed to load floors')
        }
    }
)
export const fetchResale = createAsyncThunk(
    'categories/fetchResale',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${BASE_URL}/resales`)
            return response?.data.data
            
        } catch (error) {
            return rejectWithValue('Failed to load resales')
        }
    }
)
export const fetchRoom = createAsyncThunk(
    'categories/fetchRoom',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${BASE_URL}/rooms`)
            return response?.data.data
            
        } catch (error) {
            return rejectWithValue('Failed to load rooms')
        }
    }
)

const categoriesSlice = createSlice({
    name:'categories',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchBalcony.pending]:(state) => {
            state.status = 'loading'
        },
        [fetchBalcony.fulfilled]:(state, action) => {
            state.status = 'fulfielled'
            state.balconies = action.payload
        },
        [fetchBalcony.rejected]:(state, action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [fetchBathroom.pending]:(state) => {
            state.status = 'loading'
        },
        [fetchBathroom.fulfilled]:(state, action) => {
            state.status = 'fulfielled'
            state.bathrooms = action.payload
        },
        [fetchBathroom.rejected]:(state, action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [fetchBuild.pending]:(state) => {
            state.status = 'loading'
        },
        [fetchBuild.fulfilled]:(state, action) => {
            state.status = 'fulfielled'
            state.builds = action.payload
        },
        [fetchBuild.rejected]:(state, action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [fetchDecoration.pending]:(state) => {
            state.status = 'loading'
        },
        [fetchDecoration.fulfilled]:(state, action) => {
            state.status = 'fulfielled'
            state.decorations = action.payload
        },
        [fetchDecoration.rejected]:(state, action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [fetchFacade.pending]:(state) => {
            state.status = 'loading'
        },
        [fetchFacade.fulfilled]:(state, action) => {
            state.status = 'fulfielled'
            state.facades = action.payload
        },
        [fetchFacade.rejected]:(state, action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [fetchFloor.pending]:(state) => {
            state.status = 'loading'
        },
        [fetchFloor.fulfilled]:(state, action) => {
            state.status = 'fulfielled'
            state.floors = action.payload
        },
        [fetchFloor.rejected]:(state, action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [fetchResale.pending]:(state) => {
            state.status = 'loading'
        },
        [fetchResale.fulfilled]:(state, action) => {
            state.status = 'fulfielled'
            state.resales = action.payload
        },
        [fetchResale.rejected]:(state, action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [fetchRoom.pending]:(state) => {
            state.status = 'loading'
        },
        [fetchRoom.fulfilled]:(state, action) => {
            state.status = 'fulfielled'
            state.rooms = action.payload
        },
        [fetchRoom.rejected]:(state, action) => {
            state.status = 'error'
            state.error = action.payload
        },

    }
})

export default categoriesSlice.reducer