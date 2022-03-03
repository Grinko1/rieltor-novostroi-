import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'



const initialState = {
   
    email:localStorage.getItem('email') ? localStorage.getItem('email') : null,
    role:localStorage.getItem('role') ? localStorage.getItem('role') : null,
    status:null,
    error:null,
    access_token: localStorage.getItem('access_token') ? localStorage.getItem('access_token') : null
}
const BASE_URL = 'http://127.0.0.1:8000/api';

export const login = createAsyncThunk(
    'user/login',
    async (values, {rejectWithValue}) => {
        try {

            const response = await axios.post(`${BASE_URL}/auth/login`, {
                email: values.email,
                password: values.password
            })
              console.log(response)
          
              return response?.data.access_token
              
            
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const me = createAsyncThunk(
    'user/me',
    async(_, {rejectWithValue}) => {
        try {
            let config = {
                headers: {
                  'authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
              }

            const response = await axios.post(`${BASE_URL}/auth/me`,{},{
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('access_token')}`
                  }
            })

            // console.log(response?.data)
            return response?.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        logout (state, action) {
            state.email = null
            state.role = null
            state.access_token = null

            localStorage.setItem('access_token',  state.access_token)
            localStorage.setItem('email',  state.email)
            localStorage.setItem('role',  state.role)
        }
    },
    extraReducers:{
        [login.pending] : (state) => {
            state.status = 'loading'
            state.error = null

        },
        [login.fulfilled] : (state, action) => {
            state.status = 'success'
            state.access_token = action.payload
            localStorage.setItem('access_token',state.access_token )
            state.error = null
        },
        [login.rejected] : (state,action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [me.pending] : (state) => {
            state.status = 'loading'
            state.error = null
        },
        [me.fulfilled] : (state, action) => {
            state.status = 'success'
            state.email = action.payload.email
            state.role = action.payload.role
            localStorage.setItem('email',state.email )
            localStorage.setItem('role',state.role )
            state.error = null
          
        },
        [me.rejected] : (state,action) => {
            state.status = 'error'
            state.user = action.payload
           
        },
    }
})

export default userSlice.reducer
export const {logout} = userSlice.actions