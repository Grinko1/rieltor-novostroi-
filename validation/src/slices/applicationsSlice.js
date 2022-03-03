import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    applications:[],
    status:'',
    error:''
}
const BASE_URL = 'http://127.0.0.1:8000/api';
export const fetchApplications = createAsyncThunk(
    'applications/fetchApplications',
    async (_, {rejectWithValue}) =>{
        try {
            const response = await axios.get(`${BASE_URL}/applications`)
            return response?.data.data
            
        } catch (error) {
            return rejectWithValue('Не удалось загрузить заявки')
            
        }
    }
)

export const createApplication = createAsyncThunk(
    'applications/createApplication',
    async (data, {rejectWithValue}) =>{
        try {
            const response = await axios.post(`${BASE_URL}/applications`, 
            {
                
                name: data.name,
                tel:data.tel,
                time_since: data.time_since,
                time_till: data.time_till

            })
            
        } catch (error) {
            return rejectWithValue('Не удалось отправить заявку')
            
        }
    }
)

export const deleteApplication = createAsyncThunk(
    'applications/deleteApplication',
    async (id, {rejectWithValue}) =>{
        try {
            const response = await axios.delete(`${BASE_URL}/applications/${id}`)
            
        } catch (error) {
            return rejectWithValue('Не удалось удалить заявку')
            
        }
    }
)


const applicationsSlice = createSlice({
    name:'applications',
    initialState,
    reducers:{
        deleteApplicationFront (state,action) {
          const applForDelete =   state.applications.filter((item) => item.id !== action.payload)
          state.applications = applForDelete
        }
    },
    extraReducers:{
            [createApplication.pending] : (state) =>{
                state.status = 'loading'
            },
            [createApplication.fulfilled] : (state) =>{
                state.status = 'success'
            },
            [createApplication.rejected] : (state,action) =>{
                state.status = 'error'
                state.error = action.payload
            },
            [fetchApplications.pending] : (state) =>{
                state.status = 'loading'
            },
            [fetchApplications.fulfilled] : (state,action) =>{
                state.status = 'success'
                state.applications = action.payload

            },
            [fetchApplications.rejected] : (state,action) =>{
                state.status = 'error'
                state.error = action.payload
            },
            [deleteApplication.pending] : (state) =>{
                state.status = 'loading'
            },
            [deleteApplication.fulfilled] : (state,action) =>{
                state.status = 'success'
                

            },
            [deleteApplication.rejected] : (state,action) =>{
                state.status = 'error'
                state.error = action.payload
            },
    }
})

export default applicationsSlice.reducer
export const {deleteApplicationFront} = applicationsSlice.actions