import {configureStore} from '@reduxjs/toolkit'
import {flatApi} from '../slices/flatApi'
import categoriesReducer from '../slices/categoriesSlice'
import flatSlice from '../slices/flatSlice'
import favoriteReducer from '../slices/favoriteSlice'
import applicationReducer from '../slices/applicationsSlice'
import compareReducer from '../slices/compareSlice'
import userReducer from '../slices/userSlice'
import imageReducer from '../slices/imageSlice'

export const store = configureStore({
    reducer:{
        categories: categoriesReducer,
        flats: flatSlice,
        favorites: favoriteReducer,
        compare: compareReducer,
        applications:applicationReducer,
        user: userReducer,
        image: imageReducer,
        [flatApi.reducerPath] : flatApi.reducer
    },
    middleware:(getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(flatApi.middleware)
    }
})